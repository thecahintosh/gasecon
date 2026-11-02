
import React, { useEffect, useState } from "react";
import {
  X, ArrowLeft, ArrowRight, ExternalLink,
  BookOpen, ChartNoAxesCombined, Film, Globe2,
  Scale, Landmark, TrendingDown, Route, ShieldCheck
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, CartesianGrid,
  XAxis, YAxis, Tooltip, Cell
} from "recharts";
import {
  cinemaStories, seafoodExports, seafoodDestinations
} from "./cinemaData.js";
import "./cinema.css";

const colors = {
  gold: "#E7B66D",
  teal: "#72C6C8",
  red: "#E57C78"
};

function Diagram({ kind, story }) {
  if (kind === "exports") {
    return (
      <div className="cinema-chart">
        <div className="cinema-chart-top">
          <span>JAPANESE SEAFOOD EXPORT VALUE TO CHINA</span>
          <strong>2022 = 100</strong>
        </div>
        <ResponsiveContainer width="100%" height={235}>
          <BarChart data={seafoodExports}
            margin={{top:14,right:12,left:-18,bottom:4}}>
            <CartesianGrid vertical={false}
              stroke="#42505C" strokeDasharray="3 6"/>
            <XAxis dataKey="year" axisLine={false}
              tickLine={false}
              tick={{fill:"#CED4D5",fontSize:12}}/>
            <YAxis domain={[0,100]} axisLine={false}
              tickLine={false}
              tick={{fill:"#A9BEC3",fontSize:11}}/>
            <Tooltip
              cursor={{fill:"#ffffff10"}}
              contentStyle={{
                background:"#101E2A",color:"#F4EADB",
                border:"1px solid #677B82",borderRadius:8
              }}
              formatter={value=>[`${value} index points`,"Export value"]}
            />
            <Bar dataKey="index" radius={[6,6,0,0]}>
              {seafoodExports.map((d,i)=>(
                <Cell key={d.year}
                  fill={i===0?"#72C6C8":i===1?"#D8B173":"#E57C78"}/>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p>Indexed export values, based on the Japanese Fisheries Agency's reported declines versus 2022. Not export volume.</p>
      </div>
    );
  }

  if (kind === "redirect") {
    return (
      <div className="cinema-chart">
        <div className="cinema-chart-top">
          <span>LEADING EXPORT DESTINATIONS</span>
          <strong>JAN–SEP 2024</strong>
        </div>
        {seafoodDestinations.map(d=>(
          <div className="cinema-horizontal" key={d.name}>
            <div><span>{d.name}</span><strong>{d.share}%</strong></div>
            <div className="cinema-bar-track">
              <div style={{
                width:`${d.share/30*100}%`,
                background:"#72C6C8"
              }}/>
            </div>
          </div>
        ))}
        <p>Share of Japan's fishery and aquaculture export value for the stated period, from FAO GLOBEFISH. The three percentages do not sum to 100%.</p>
      </div>
    );
  }

  if (kind === "gi" || kind === "eu") {
    return (
      <div className="cinema-diagram">
        <span className="cinema-diagram-title">
          {kind==="gi"?"GEOGRAPHICAL INDICATION":"EU APPLICATION PROCESS"}
        </span>
        <div className="cinema-diagram-nodes">
          <div><Landmark size={22}/><strong>Origin</strong><small>Specified geography</small></div>
          <ArrowRight/>
          <div><ShieldCheck size={22}/><strong>Certification</strong><small>Rules and recognition</small></div>
          <ArrowRight/>
          <div><Scale size={22}/><strong>Market</strong><small>Trust and differentiation</small></div>
        </div>
        <p>Conceptual economic/legal mechanism. It does not indicate that any pending EU application has been finally registered.</p>
      </div>
    );
  }

  if (kind === "heritage" || kind === "partition") {
    return (
      <div className="cinema-shared-map">
        <div><span>INDIA</span><strong>Punjab · Delhi</strong></div>
        <div className="cinema-shared-line">
          <span>SHARED CULINARY HERITAGE</span>
          <div/>
        </div>
        <div><span>PAKISTAN</span><strong>Punjab · Lahore</strong></div>
        <small>Conceptual geographic comparison, not a reconstruction of historical migration paths.</small>
      </div>
    );
  }

  if (kind === "ramen" || kind === "value" ||
      kind === "ban" || kind === "verdict" ||
      kind === "conclusion") {
    const stages = {
      ramen:["Chinese noodle traditions","Japanese adaptation","Global ramen market"],
      value:["Geographical reputation","Certification and marketing","Possible economic premium"],
      ban:["Regulatory restriction","Import market contracts","Exporter adjustment"],
      verdict:["Political decision","Trade disruption","Economic adaptation"],
      conclusion:["Shared heritage","Commercial claims","Producer welfare"]
    };
    const items=stages[kind] || stages.value;
    return (
      <div className="cinema-diagram">
        <span className="cinema-diagram-title">
          {kind==="ramen"?"CULTURAL DIFFUSION":"ECONOMIC MECHANISM"}
        </span>
        <div className="cinema-stack">
          {items.map((s,i)=>(
            <React.Fragment key={s}>
              <div className="cinema-stage">
                <span>0{i+1}</span><strong>{s}</strong>
              </div>
              {i<items.length-1 && <span className="cinema-down">↓</span>}
            </React.Fragment>
          ))}
        </div>
        <p>Conceptual illustration, not a quantitative trade-flow measurement.</p>
      </div>
    );
  }

  return (
    <div className="cinema-diagram">
      <span className="cinema-diagram-title">ECONOMIC CONNECTION</span>
      <div className="cinema-stage">
        <strong>{story.title}</strong>
      </div>
      <p>Interpretation is based on the documented case, not a simulated dataset.</p>
    </div>
  );
}

function CinemaViewer({story,onClose,onSwitch}) {
  const [index,setIndex] = useState(0);
  const [mode,setMode] = useState("story");
  const [sourcesOpen,setSourcesOpen] = useState(false);

  const scene = story.scenes[index];
  const atStart=index===0;
  const atEnd=index===story.scenes.length-1;

  useEffect(()=>{
    const previous=document.body.style.overflow;
    document.body.style.overflow="hidden";
    const keyboard=e=>{
      if (e.key==="Escape") {
        if (sourcesOpen) setSourcesOpen(false);
        else onClose();
      }
      if (e.key==="ArrowRight" && !sourcesOpen)
        setIndex(i=>Math.min(i+1,story.scenes.length-1));
      if (e.key==="ArrowLeft" && !sourcesOpen)
        setIndex(i=>Math.max(i-1,0));
    };
    window.addEventListener("keydown",keyboard);
    return ()=>{
      document.body.style.overflow=previous;
      window.removeEventListener("keydown",keyboard);
    };
  },[story,onClose,sourcesOpen]);

  return (
    <section className="cinema-screen"
      style={{"--cinema-accent":story.accent}}
      role="dialog" aria-modal="true"
      aria-label={story.title}>
      <div className="cinema-ambient"/>
      <header className="cinema-header">
        <div className="cinema-logo">
          <Film size={19}/>
          <span>GASTRONOMICS <b>/ CONFLICT CINEMA</b></span>
        </div>
        <div className="cinema-header-right">
          <button onClick={()=>setSourcesOpen(s=>!s)}>
            <ExternalLink size={15}/> SOURCES
          </button>
          <button className="cinema-close"
            onClick={onClose} aria-label="Close Conflict Cinema">
            <X size={21}/>
          </button>
        </div>
      </header>

      <div className="cinema-layout">
        <aside className="cinema-rail">
          <span className="cinema-small">FEATURED STORY</span>
          <h2>{story.title}</h2>
          <p>{story.kicker}</p>
          <div className="cinema-scene-list">
            {story.scenes.map((s,i)=>(
              <button key={s.id}
                className={i===index?"active":""}
                onClick={()=>setIndex(i)}>
                <span>{String(i+1).padStart(2,"0")}</span>
                {s.heading}
              </button>
            ))}
          </div>
          <button className="cinema-switch"
            onClick={onSwitch}>
            Explore the other conflict <ArrowRight size={15}/>
          </button>
        </aside>

        <main className="cinema-scene" key={story.id}>
          <div className="cinema-scene-header">
            <span>{scene.eyebrow}</span>
            <div className="cinema-mode">
              <button className={mode==="story"?"active":""}
                onClick={()=>setMode("story")}>
                <BookOpen size={14}/> STORY
              </button>
              <button className={mode==="economics"?"active":""}
                onClick={()=>setMode("economics")}>
                <ChartNoAxesCombined size={14}/> ECONOMICS
              </button>
            </div>
          </div>

          <div className="cinema-scene-scroll">
            <div className="cinema-big-symbol" aria-hidden="true">
              {story.symbol}
            </div>
            <h1>{scene.heading}</h1>
            <p className="cinema-lead">{scene.lead}</p>

            {mode==="story" ? (
              <>
                <p className="cinema-body">{scene.body}</p>
                <div className="cinema-visual">
                  <Diagram kind={scene.visual} story={story}/>
                </div>
                <div className="cinema-question">
                  <span>THE QUESTION</span>
                  <strong>{scene.question}</strong>
                </div>
              </>
            ) : (
              <>
                <div className="cinema-visual">
                  <Diagram kind={scene.visual} story={story}/>
                </div>
                <h3>The economics behind this scene</h3>
                <div className="cinema-concepts">
                  {scene.economics.map((c,i)=>(
                    <div key={c}><span>0{i+1}</span>{c}</div>
                  ))}
                </div>
                <p className="cinema-body">{scene.body}</p>
              </>
            )}

            <div className="cinema-insight">
              <span>KEY TAKEAWAY</span>
              <p>{scene.insight}</p>
            </div>
          </div>
        </main>
      </div>

      <footer className="cinema-footer">
        <div className="cinema-progress">
          {story.scenes.map((s,i)=>(
            <button key={s.id}
              onClick={()=>setIndex(i)}
              aria-label={`Go to scene ${i+1}`}
              className={i<=index?"done":""}/>
          ))}
        </div>
        <div className="cinema-footer-controls">
          <span>{String(index+1).padStart(2,"0")} / {String(story.scenes.length).padStart(2,"0")}</span>
          <button disabled={atStart}
            onClick={()=>setIndex(i=>i-1)}>
            <ArrowLeft size={17}/> PREVIOUS
          </button>
          <button disabled={atEnd}
            className="cinema-next"
            onClick={()=>setIndex(i=>i+1)}>
            NEXT SCENE <ArrowRight size={17}/>
          </button>
        </div>
      </footer>

      {sourcesOpen && (
        <div className="cinema-source-overlay">
          <div className="cinema-sources">
            <header>
              <h3>Research and evidence</h3>
              <button onClick={()=>setSourcesOpen(false)}
                aria-label="Close sources"><X size={20}/></button>
            </header>
            <p>
              These records support selected facts in the sequence.
              The diagrams marked conceptual are teaching illustrations.
            </p>
            {story.sources.map((source,i)=>(
              <a key={source.url} href={source.url}
                target="_blank" rel="noreferrer">
                <span>0{i+1} · {source.label}</span>
                <ExternalLink size={16}/>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function ConflictCinema() {
  const [active,setActive] = useState(null);
  const [menu,setMenu] = useState(false);
  const story=cinemaStories.find(s=>s.id===active);

  return (
    <>
      {!story && (
        <div className="cinema-launch">
          {menu && (
            <div className="cinema-launch-menu">
              <div className="cinema-launch-heading">
                <strong>FEATURED CONFLICTS</strong>
                <button onClick={()=>setMenu(false)}
                  aria-label="Close menu"><X size={17}/></button>
              </div>
              {cinemaStories.map(s=>(
                <button key={s.id} onClick={()=>{
                  setActive(s.id);
                  setMenu(false);
                }}>
                  <span style={{color:s.accent}}>{s.symbol}</span>
                  <span><strong>{s.title}</strong><small>{s.kicker}</small></span>
                  <ArrowRight size={17}/>
                </button>
              ))}
            </div>
          )}
          <button className="cinema-launch-button"
            onClick={()=>setMenu(m=>!m)}>
            <Film size={18}/> FEATURED CONFLICTS
          </button>
        </div>
      )}
      {story && (
        <CinemaViewer
          key={story.id}
          story={story}
          onClose={()=>setActive(null)}
          onSwitch={()=>setActive(
            story.id==="basmati"?"seafood":"basmati"
          )}
        />
      )}
    </>
  );
}
