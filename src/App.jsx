
import React, {
  useEffect, useMemo, useRef, useState
} from "react";
import Globe from "globe.gl";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe2, BookOpen, ChartNoAxesCombined, Route, Swords,
  Presentation, ChevronLeft, ChevronRight, X, RotateCcw,
  ArrowUpRight, Search, Layers3, Compass, MapPin,
  ExternalLink, Play, Pause, AlertTriangle, List,
  RefreshCw
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, CartesianGrid,
  XAxis, YAxis, Tooltip
} from "recharts";
import {
  cities, stories as routeStories, journeys, COLORS, getCity
} from "./data.js";
import {
  allStories, storyById, chapters,
  presentationSequence, presentLocation
} from "./content.js";
import "./build02.css";
import "./build03a.css";

const EARTH =
  "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";

const byCity = id =>
  allStories.filter(s => s.from === id || s.to === id);

function midpoint(a, b) {
  const rad = Math.PI / 180;
  const xyz = p => ({
    x: Math.cos(p.lat*rad)*Math.cos(p.lng*rad),
    y: Math.cos(p.lat*rad)*Math.sin(p.lng*rad),
    z: Math.sin(p.lat*rad)
  });
  const p = xyz(a), q = xyz(b);
  const x = p.x+q.x, y = p.y+q.y, z = p.z+q.z;
  const length = Math.hypot(x,y,z);
  if (length < 0.00001) return {lat:a.lat,lng:a.lng};
  return {
    lat:Math.atan2(z,Math.hypot(x,y))/rad,
    lng:Math.atan2(y,x)/rad
  };
}

class GlobeBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error:null};
  }
  static getDerivedStateFromError(error) {
    return {error};
  }
  componentDidCatch(error, info) {
    console.error("Gastronomics globe error:",error,info);
  }
  render() {
    if (this.state.error) {
      return <GlobeFallback
        message="The interactive globe encountered a rendering error."
        retry={() => this.setState({error:null})}
      />;
    }
    return this.props.children;
  }
}

function GlobeFallback({message,retry}) {
  return (
    <div className="globe-fallback" role="alert">
      <Globe2 size={45}/>
      <h2>Atlas view unavailable</h2>
      <p>{message}</p>
      <button onClick={retry}>
        <RefreshCw size={16}/> Retry globe
      </button>
      <small>
        Story Library and Presentation navigation remain available.
      </small>
    </div>
  );
}

function GlobeView({selected,journey,conflictOnly,onStory,onCity}) {
  const host = useRef(null);
  const instance = useRef(null);
  const callbacks = useRef({onStory,onCity});
  const [failure,setFailure] = useState(null);
  const [attempt,setAttempt] = useState(0);

  useEffect(() => {
    callbacks.current = {onStory,onCity};
  },[onStory,onCity]);

  useEffect(() => {
    let active = true;
    const el = host.current;
    if (!el) return;

    const probe = document.createElement("canvas");
    let context = null;
    try {
      context = probe.getContext("webgl2") ||
                probe.getContext("webgl");
    } catch {}
    if (!context) {
      setFailure("WebGL is unavailable in this browser.");
      return;
    }

    let globe;
    let observer;
    let controls;
    let canvas;

    try {
      globe = new Globe(el,{
        animateIn:false,
        rendererConfig:{antialias:true,alpha:true}
      });
      instance.current = globe;

      globe
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl(EARTH)
        .showAtmosphere(true)
        .atmosphereColor("#65afbd")
        .atmosphereAltitude(.17)
        .pointsData(cities)
        .pointLat("lat")
        .pointLng("lng")
        .pointColor(() => "#e2b978")
        .pointAltitude(.019)
        .pointRadius(.28)
        .pointLabel(d => `${d.name}, ${d.country}`)
        .onPointClick(d => callbacks.current.onCity(d.id))
        .arcStartLat(d => getCity(d.from).lat)
        .arcStartLng(d => getCity(d.from).lng)
        .arcEndLat(d => getCity(d.to).lat)
        .arcEndLng(d => getCity(d.to).lng)
        .arcColor(d => COLORS[d.category])
        .arcAltitudeAutoScale(.28)
        .arcStroke(.55)
        .arcDashLength(.48)
        .arcDashGap(.75)
        .arcDashAnimateTime(3900)
        .arcLabel(d => d.title)
        .onArcClick(d => callbacks.current.onStory(d.id));

      const material = globe.globeMaterial();
      if (material?.color?.set)
        material.color.set("#12303b");

      controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = .3;
      controls.enableDamping = true;
      controls.minDistance = 125;
      controls.maxDistance = 500;

      canvas = globe.renderer().domElement;
      const onContextLost = e => {
        e.preventDefault();
        if (active) {
          globe.pauseAnimation();
          setFailure("The browser lost its WebGL graphics context.");
        }
      };
      canvas.addEventListener(
        "webglcontextlost",onContextLost,false
      );

      globe.pointOfView({
        lat:22,lng:58,altitude:2.3
      },0);

      const resize = () => {
        if (!el.isConnected || !instance.current) return;
        globe.width(el.clientWidth).height(el.clientHeight);
      };
      observer = new ResizeObserver(resize);
      observer.observe(el);
      resize();

      return () => {
        active = false;
        observer.disconnect();
        canvas.removeEventListener(
          "webglcontextlost",onContextLost
        );
        globe.pauseAnimation();
        controls.autoRotate = false;
        controls.dispose();
        globe.renderer().dispose();
        if (instance.current === globe)
          instance.current = null;
        el.replaceChildren();
      };
    } catch(error) {
      console.error("Globe initialization:",error);
      if (active) setFailure(error.message);
      observer?.disconnect();
      try { globe?.pauseAnimation(); } catch {}
      try { controls?.dispose(); } catch {}
      try { globe?.renderer()?.dispose(); } catch {}
      if (instance.current === globe)
        instance.current = null;
      el.replaceChildren();
    }
    return () => { active = false; };
  },[attempt]);

  useEffect(() => {
    const globe = instance.current;
    if (!globe || failure) return;
    try {
      const allowed = journey
        ? new Set(journey.storyIds) : null;
      const arcs = routeStories.filter(s =>
        (!conflictOnly || s.category === "conflict") &&
        (!allowed || allowed.has(s.id))
      );

      globe
        .arcsData(arcs)
        .arcColor(d =>
          selected?.id === d.id ? "#ffffff" : COLORS[d.category])
        .arcStroke(d =>
          selected?.id === d.id ? 1.5 : .55)
        .pointColor(d =>
          journey?.cities.includes(d.id)
            ? "#ffffff" : "#e2b978"
        );

      if (selected) {
        const a = getCity(selected.from);
        const b = getCity(selected.to);
        if (a && b) {
          const center = midpoint(a,b);
          globe.controls().autoRotate = false;
          globe.pointOfView({
            ...center,
            altitude: a.id===b.id ? 1.65 : 1.9
          },950);
        }
      } else if (journey) {
        const c = getCity(journey.cities[0]);
        if (c) {
          globe.controls().autoRotate = false;
          globe.pointOfView({
            lat:c.lat,lng:c.lng,altitude:2
          },950);
        }
      } else {
        globe.controls().autoRotate = true;
      }
    } catch(error) {
      console.error("Globe update:",error);
      setFailure(error.message);
    }
  },[selected,journey,conflictOnly,attempt,failure]);

  return (
    <>
      <div ref={host} className="globe-host"/>
      {failure && (
        <div className="globe-fallback-overlay">
          <GlobeFallback
            message={failure}
            retry={() => {
              setFailure(null);
              setAttempt(n=>n+1);
            }}
          />
        </div>
      )}
    </>
  );
}

function EvidenceChart({story}) {
  const c = story.chart;
  if (!c) return (
    <div className="evidence-card">
      <p className="eyebrow">CONCEPTUAL ECONOMIC MECHANISM</p>
      <div className="concept-chain">
        <div>Production and supply</div><span>↓</span>
        <div>Markets and institutions</div><span>↓</span>
        <div>Demand and economic outcomes</div>
      </div>
      <p className="evidence-note">
        This is a theoretical illustration, not measured market data.
      </p>
    </div>
  );

  return (
    <div className="evidence-card">
      <p className="eyebrow">ECONOMIC EVIDENCE</p>
      <h4>{c.title}</h4>
      <p className="chart-subtitle">{c.subtitle}</p>
      {c.type==="bar" && (
        <div className="chart-area">
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={c.data}
              margin={{top:10,right:10,bottom:5,left:-20}}>
              <CartesianGrid stroke="#314652"
                strokeDasharray="3 5" vertical={false}/>
              <XAxis dataKey="label" axisLine={false}
                tickLine={false}
                tick={{fill:"#9db5bd",fontSize:11}}/>
              <YAxis domain={[0,100]} axisLine={false}
                tickLine={false}
                tick={{fill:"#9db5bd",fontSize:11}}/>
              <Tooltip
                contentStyle={{
                  background:"#142632",
                  border:"1px solid #546779",
                  color:"#eee9df"
                }}
              />
              <Bar dataKey="value"
                fill="#d8ae71" radius={[5,5,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      {c.type==="metric" && (
        <div className="large-metric">
          <strong>{c.value}</strong><span>{c.unit}</span>
        </div>
      )}
      {c.type==="events" && (
        <div className="policy-events">
          {c.data.map((d,i) => (
            <div key={i}>
              <small>{d.label}</small><strong>{d.value}</strong>
            </div>
          ))}
        </div>
      )}
      {c.note && <p className="evidence-note">{c.note}</p>}
      {c.source && (
        <a className="evidence-source"
          href={c.source.url} target="_blank" rel="noreferrer">
          {c.source.label} <ExternalLink size={13}/>
        </a>
      )}
    </div>
  );
}

function Timeline({events}) {
  if (!events?.length) return null;
  return (
    <div className="editorial-timeline">
      <p className="eyebrow">HISTORICAL TIMELINE</p>
      {events.map((event,i) => (
        <div className="timeline-event" key={i}>
          <span className="timeline-dot"/>
          <small>{event.date}</small>
          <strong>{event.title}</strong>
          <p>{event.text}</p>
        </div>
      ))}
    </div>
  );
}

function StoryDrawer({story,mode,onClose}) {
  return (
    <AnimatePresence mode="wait">
      {story && (
        <motion.aside
          key={story.id}
          className="editorial-drawer"
          initial={{opacity:0,x:35}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:35}}
          transition={{duration:.25}}
        >
          <div className="drawer-header">
            <span className="eyebrow">{story.chapter}</span>
            <button onClick={onClose} aria-label="Close story">
              <X size={19}/>
            </button>
          </div>
          <div className="drawer-body">
            <div className="story-category"
              style={{color:COLORS[story.category]}}>
              <span style={{
                background:COLORS[story.category]
              }}/>
              {story.category.toUpperCase()} · {story.year}
            </div>

            <h2>{story.title}</h2>
            <p className="editorial-subtitle">{story.subtitle}</p>
            <div className="story-location">
              <MapPin size={15}/> {presentLocation(story)}
            </div>

            {mode==="story" ? (
              <>
                <div className="lead-question">
                  {story.question || story.hook}
                </div>
                <p className="story-prose">{story.hook}</p>
                <p className="story-prose">{story.narrative}</p>
                <Timeline events={story.timeline}/>
              </>
            ) : (
              <>
                <p className="eyebrow">ECONOMIC ANALYSIS</p>
                <h3 className="economic-heading">{story.focus}</h3>
                <EvidenceChart story={story}/>
                <h4 className="subsection-heading">
                  Key economic mechanisms
                </h4>
                <ul className="mechanism-list">
                  {story.mechanisms.map(m=><li key={m}>{m}</li>)}
                </ul>
                <Timeline events={story.timeline}/>
              </>
            )}

            <div className="takeaway">
              <span className="eyebrow">THE KEY TAKEAWAY</span>
              <p>{story.takeaway}</p>
            </div>

            {story.readingNote && (
              <div className="editorial-note">
                <strong>Important distinction</strong>
                <p>{story.readingNote}</p>
              </div>
            )}

            {story.source && (
              <a className="drawer-source"
                href={story.source.url}
                target="_blank" rel="noreferrer">
                View research reference <ArrowUpRight size={16}/>
              </a>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

const navItems = [
  ["explore","Explore the World",Globe2],
  ["stories","Stories",BookOpen],
  ["economics","Economics",ChartNoAxesCombined],
  ["journeys","Follow the Food",Route],
  ["conflicts","Gastro Conflicts",Swords],
  ["present","Presentation",Presentation]
];

function Sidebar({section,onNavigate,onReset}) {
  return (
    <aside className="sidebar">
      <button className="brand" onClick={onReset}>
        <span className="brand-mark"><Globe2 size={22}/></span>
        <span className="brand-copy">
          <strong>GASTRONOMICS</strong>
          <small>THE WORLD ON A PLATE</small>
        </span>
      </button>
      <div className="side-label">EXPLORE THE ATLAS</div>
      <nav className="sidebar-nav">
        {navItems.map(([id,label,Icon])=>(
          <button key={id}
            className={"nav-item "+(section===id?"active":"")}
            onClick={()=>onNavigate(id)}>
            <Icon size={18}/><span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-note">
          <Layers3 size={18}/>
          <div>
            <strong>THE FOOD NETWORK</strong>
            <p>22 places · 20 stories · 6 chapters</p>
          </div>
        </div>
        <p className="version">BUILD 03A · STABILITY</p>
      </div>
    </aside>
  );
}

function StoryList({
  title,items,onSelect,onClose,
  searchable=false,chaptersEnabled=false
}) {
  const [query,setQuery] = useState("");
  const [chapter,setChapter] = useState("all");

  const filtered = items.filter(s => {
    const matchesQuery =
      [s.title,s.subtitle,s.focus,s.chapter,
       getCity(s.from)?.name,getCity(s.to)?.name]
      .join(" ").toLowerCase()
      .includes(query.toLowerCase());

    return matchesQuery &&
      (chapter==="all" || s.chapterId===chapter);
  });

  return (
    <aside className="chapter-explorer">
      <div className="explorer-heading">
        <strong>{title}</strong>
        <button onClick={onClose} aria-label="Close list">
          <X size={17}/>
        </button>
      </div>
      {searchable && (
        <div className="searchbox">
          <Search size={16}/>
          <input value={query}
            onChange={e=>setQuery(e.target.value)}
            placeholder="Search the atlas"/>
        </div>
      )}
      {chaptersEnabled && (
        <div className="chapter-filter">
          <button className={chapter==="all"?"active":""}
            onClick={()=>setChapter("all")}>
            All chapters
          </button>
          {chapters.map((c,i)=>(
            <button key={c.id}
              className={chapter===c.id?"active":""}
              onClick={()=>setChapter(c.id)}>
              {String(i+1).padStart(2,"0")}. {c.title}
            </button>
          ))}
        </div>
      )}
      <div className="chapter-results">
        {filtered.map(s=>(
          <button key={s.id}
            onClick={()=>onSelect(s.id)}>
            <span className="result-dot"
              style={{background:COLORS[s.category]}}/>
            <div>
              <strong>{s.title}</strong>
              <small>{presentLocation(s)}</small>
              <small>{s.focus}</small>
            </div>
            <ChevronRight size={17}/>
          </button>
        ))}
        {!filtered.length && (
          <p className="empty-result">No matching stories.</p>
        )}
      </div>
    </aside>
  );
}

function JourneyPanel({activeJourney,onJourney,onStory}) {
  const [step,setStep] = useState(0);
  useEffect(()=>setStep(0),[activeJourney?.id]);

  return (
    <div className="journey-selector">
      <p className="eyebrow">FOLLOW THE FOOD</p>
      <h2>Trace an ingredient.</h2>
      <p>Follow food across connected economies.</p>
      <div className="journey-items">
        {journeys.map(j=>(
          <button key={j.id}
            className={activeJourney?.id===j.id?"selected":""}
            onClick={()=>onJourney(j.id)}>
            <span>{j.emoji}</span>
            <div>
              <strong>{j.name}</strong>
              <small>{j.description}</small>
            </div>
            <ArrowUpRight size={16}/>
          </button>
        ))}
      </div>
      {activeJourney && (
        <div className="journey-detail">
          <p className="eyebrow">JOURNEY STOPS</p>
          {activeJourney.cities.map((id,i)=>(
            <div className="journey-stop" key={i}>
              <span>{i+1}</span>
              <strong>{getCity(id)?.name}</strong>
            </div>
          ))}
          <p className="evidence-note">
            Narrative anchors, not verified individual shipments.
          </p>
          <button className="journey-next"
            onClick={()=>{
              const ids=activeJourney.storyIds;
              onStory(ids[step%ids.length]);
              setStep(s=>s+1);
            }}>
            OPEN {activeJourney.storyIds.length>1
              ? "NEXT STORY":"STORY"}
            <ChevronRight size={16}/>
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [section,setSection] = useState("explore");
  const [mode,setMode] = useState("story");
  const [selectedId,setSelectedId] = useState(null);
  const [journeyId,setJourneyId] = useState(null);
  const [list,setList] = useState(null);
  const [presentIndex,setPresentIndex] = useState(0);
  const [presentationPaused,setPresentationPaused] = useState(false);
  const [globeKey,setGlobeKey] = useState(0);

  const selected = storyById[selectedId] || null;
  const activeJourney = journeys.find(j=>j.id===journeyId);

  const selectStory = id => {
    setSelectedId(id);
    setList(null);
    if (section==="present") {
      const index=presentationSequence.indexOf(id);
      if (index>=0) {
        setPresentIndex(index);
        setPresentationPaused(false);
      } else {
        setPresentationPaused(true);
      }
    }
  };

  const selectCity = id => {
    const matching=byCity(id);
    if (matching.length===1) {
      selectStory(matching[0].id);
    } else {
      setList({type:"city",cityId:id});
    }
  };

  const reset = () => {
    setSection("explore");
    setMode("story");
    setSelectedId(null);
    setJourneyId(null);
    setList(null);
    setPresentIndex(0);
    setPresentationPaused(false);
  };

  const navigate = destination => {
    setSection(destination);
    setJourneyId(null);
    setList(
      ["stories","economics","conflicts"].includes(destination)
        ? {type:"library"} : null
    );

    if (destination==="stories") setMode("story");
    if (destination==="economics") setMode("economics");
    if (destination==="explore" || destination==="journeys")
      setSelectedId(null);

    if (destination==="present") {
      setPresentIndex(0);
      setPresentationPaused(false);
      setSelectedId(presentationSequence[0]);
    }
  };

  const goPresentation = direction => {
    const next=Math.max(0,Math.min(
      presentationSequence.length-1,presentIndex+direction
    ));
    setPresentIndex(next);
    setSelectedId(presentationSequence[next]);
    setPresentationPaused(false);
    setList(null);
  };

  const resumePresentation = () => {
    setSelectedId(presentationSequence[presentIndex]);
    setPresentationPaused(false);
    setList(null);
  };

  useEffect(()=>{
    const handler=e=>{
      if (section!=="present") return;
      if (["INPUT","TEXTAREA"].includes(e.target?.tagName))
        return;
      if (e.key==="ArrowRight") {
        e.preventDefault();
        goPresentation(1);
      }
      if (e.key==="ArrowLeft") {
        e.preventDefault();
        goPresentation(-1);
      }
      if (e.key==="Escape") reset();
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[section,presentIndex]);

  const listItems = list?.type==="city"
    ? byCity(list.cityId)
    : section==="conflicts"
      ? allStories.filter(s=>s.category==="conflict")
      : allStories;

  const listTitle=list?.type==="city"
    ? `${getCity(list.cityId)?.name} — Stories`
    : section==="conflicts" ? "Gastro Conflicts"
    : "The Story Library";

  return (
    <div className="app-shell">
      <Sidebar section={section}
        onNavigate={navigate} onReset={reset}/>

      <main className="main-stage">
        <div className="globe-layer">
          <GlobeBoundary key={globeKey}>
            <GlobeView
              selected={selected}
              journey={activeJourney}
              conflictOnly={section==="conflicts"}
              onStory={selectStory}
              onCity={selectCity}
            />
          </GlobeBoundary>
        </div>

        <header className="topbar">
          <div className="breadcrumb">
            <Compass size={15}/> WORLD ATLAS
            <span>/</span>
            <strong>{section.toUpperCase()}</strong>
          </div>
          <div className="mode-toggle">
            <button className={mode==="story"?"chosen":""}
              onClick={()=>setMode("story")}>
              <BookOpen size={15}/> STORYTELLING
            </button>
            <button className={mode==="economics"?"chosen":""}
              onClick={()=>setMode("economics")}>
              <ChartNoAxesCombined size={15}/> ECONOMICS
            </button>
          </div>
        </header>

        <div className={"intro "+(selected?"intro-minimized":"")}>
          <span className="eyebrow">
            AN INTERACTIVE ATLAS OF FOOD, POWER & MONEY
          </span>
          <h1>The world<br/><em>on a plate.</em></h1>
          <p>Every ingredient has a journey.<br/>
             Every journey has an economic story.</p>
          <div className="intro-actions">
            <button className="primary-button"
              onClick={()=>navigate("present")}>
              <Presentation size={17}/> PRESENT THE ATLAS
            </button>
            <button className="secondary-button"
              onClick={()=>navigate("stories")}>
              EXPLORE STORIES <ArrowUpRight size={16}/>
            </button>
          </div>
        </div>

        <div className="atlas-stats">
          <div><strong>22</strong><span>LOCATIONS</span></div>
          <div><strong>20</strong><span>STORIES</span></div>
          <div><strong>06</strong><span>CHAPTERS</span></div>
        </div>

        <div className="legend">
          {Object.entries(COLORS).map(([key,color])=>(
            <span key={key}>
              <i style={{background:color}}/>{key}
            </span>
          ))}
        </div>

        {list && (
          <StoryList
            key={`${list.type}-${list.cityId||section}`}
            title={listTitle}
            items={listItems}
            searchable={list.type==="library"}
            chaptersEnabled={list.type==="library"}
            onSelect={selectStory}
            onClose={()=>setList(null)}
          />
        )}

        {section==="journeys" && (
          <JourneyPanel
            activeJourney={activeJourney}
            onJourney={id=>{
              setJourneyId(id);
              setSelectedId(null);
            }}
            onStory={selectStory}
          />
        )}

        {section==="present" && (
          <div className="presenter-controls">
            <span className="presenter-label">
              {presentationPaused
                ? "EXPLORATION DETOUR"
                : "GUIDED PRESENTATION"}
              <small>
                {presentIndex+1} / {presentationSequence.length}
              </small>
            </span>
            <button disabled={presentIndex===0}
              onClick={()=>goPresentation(-1)}
              aria-label="Previous story">
              <ChevronLeft/>
            </button>
            <span className="presenter-title">
              {selected?.title || "Choose a story"}
            </span>
            {presentationPaused && (
              <button className="resume-button"
                onClick={resumePresentation}
                title="Return to the guided sequence">
                <Play size={16}/>
                <span>RESUME</span>
              </button>
            )}
            <button
              disabled={
                presentIndex===presentationSequence.length-1
              }
              onClick={()=>goPresentation(1)}
              aria-label="Next story">
              <ChevronRight/>
            </button>
            <button onClick={reset}
              aria-label="Exit presentation">
              <X/>
            </button>
          </div>
        )}

        <StoryDrawer
          story={selected}
          mode={mode}
          onClose={()=>setSelectedId(null)}
        />

        <footer className="stage-footer">
          <span><span className="live-dot"/>
            GASTRONOMICS · BUILD 03A</span>
          <button onClick={()=>{
            reset();
            setGlobeKey(n=>n+1);
          }}>
            <RotateCcw size={15}/> RESET ATLAS
          </button>
          <span className="footer-hint">
            DRAG TO ROTATE · CLICK A CITY OR ROUTE
          </span>
        </footer>
      </main>
    </div>
  );
}
