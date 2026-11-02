
import React, { useEffect, useState } from "react";
import {
  Route, X, ArrowLeft, ArrowRight, ExternalLink,
  BookOpen, ChartNoAxesCombined, MapPin,
  Users, Compass, Globe2, CheckCircle2
} from "lucide-react";
import { foodJourneys } from "./journeyData.js";
import "./journey.css";

function StageGraphic({journey,stage,index}) {
  const current=stage.coordinates;
  return (
    <div className="js-graphic">
      <div className="js-graphic-top">
        <span>FOOD ECONOMIC NETWORK</span>
        <strong>{journey.ingredient}</strong>
      </div>
      <div className="js-path">
        {journey.stages.map((s,i)=>(
          <React.Fragment key={s.title}>
            {i>0 && <div className="js-path-line"/>}
            <div className={"js-path-node "+
              (i===index?"current":i<index?"complete":"")}>
              {i<index?"✓":String(i+1).padStart(2,"0")}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="js-location-display">
        <div className="js-coordinate">
          <Globe2 size={24}/>
          <span>
            {Math.abs(current[0]).toFixed(2)}°
            {current[0]>=0?"N":"S"}
            {" · "}
            {Math.abs(current[1]).toFixed(2)}°
            {current[1]>=0?"E":"W"}
          </span>
        </div>
        <h3>{stage.place}</h3>
        <p>{stage.city}</p>
      </div>
      <div className="js-stage-summary">
        {journey.stages.map((s,i)=>(
          <div key={s.title} className={i===index?"active":""}>
            <span>{i+1}</span>
            <strong>{s.chapter}</strong>
          </div>
        ))}
      </div>
      <p className="js-visual-note">
        Conceptual journey network. Coordinates identify geographic
        anchors; no individual shipment routes are claimed.
      </p>
    </div>
  );
}

function EconomicsPanel({stage}) {
  return (
    <div className="js-economics">
      <p className="js-overline">ECONOMIC MECHANISM</p>
      <h3>{stage.principle}</h3>
      <p>{stage.economics}</p>
      <div className="js-actors">
        <span className="js-overline">
          <Users size={14}/> ECONOMIC ACTORS
        </span>
        <div>
          {stage.actors.map(actor=>(
            <span key={actor}>{actor}</span>
          ))}
        </div>
      </div>
      {stage.metric && (
        <div className="js-metric">
          <strong>{stage.metric.value}</strong>
          <span>{stage.metric.unit}</span>
          <p>{stage.metric.label}</p>
        </div>
      )}
      {stage.events && (
        <div className="js-events">
          <p className="js-overline">DOCUMENTED POLICY TIMELINE</p>
          {stage.events.map(event=>(
            <div key={event}>{event}</div>
          ))}
        </div>
      )}
      <div className="js-economic-question">
        <span>THINK LIKE AN ECONOMIST</span>
        <strong>{stage.question}</strong>
      </div>
    </div>
  );
}

function JourneyViewer({journey,onClose,onOpenAtlas}) {
  const [index,setIndex]=useState(0);
  const [mode,setMode]=useState("story");
  const stage=journey.stages[index];

  useEffect(()=>{
    const prior=document.body.style.overflow;
    document.body.style.overflow="hidden";
    const keyHandler=e=>{
      if(["INPUT","TEXTAREA"].includes(e.target?.tagName)) return;
      if(e.key==="Escape") onClose();
      if(e.key==="ArrowRight") {
        e.preventDefault();
        setIndex(i=>Math.min(i+1,journey.stages.length-1));
      }
      if(e.key==="ArrowLeft") {
        e.preventDefault();
        setIndex(i=>Math.max(i-1,0));
      }
    };
    window.addEventListener("keydown",keyHandler);
    return ()=>{
      document.body.style.overflow=prior;
      window.removeEventListener("keydown",keyHandler);
    };
  },[journey,onClose]);

  return (
    <section className="js-fullscreen"
      style={{"--journey-accent":journey.theme}}
      role="dialog" aria-modal="true"
      aria-label={journey.name}>
      <header className="js-header">
        <div className="js-brand">
          <Route size={19}/>
          <span>GASTRONOMICS / FOLLOW THE FOOD</span>
        </div>
        <button onClick={onClose} aria-label="Close journey">
          <X size={21}/>
        </button>
      </header>

      <div className="js-layout">
        <aside className="js-sidebar">
          <p className="js-overline">THE INGREDIENT</p>
          <div className="js-large-icon">{journey.icon}</div>
          <h2>{journey.name}</h2>
          <p>{journey.intro}</p>
          <div className="js-stop-menu">
            {journey.stages.map((s,i)=>(
              <button key={s.title}
                className={i===index?"active":""}
                onClick={()=>setIndex(i)}>
                <span>
                  {i<index?<CheckCircle2 size={17}/>:
                    String(i+1).padStart(2,"0")}
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <small>{s.chapter}</small>
                </div>
              </button>
            ))}
          </div>
          <button className="js-atlas-button"
            onClick={()=>onOpenAtlas(journey.related)}>
            <Compass size={16}/> RETURN TO RELATED ATLAS STORY
          </button>
        </aside>

        <main className="js-main">
          <div className="js-topline">
            <span>{stage.chapter} · STOP {index+1} OF 4</span>
            <div className="js-mode">
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

          <div className="js-scroll" key={journey.id+"-"+index}>
            <div className="js-title-number">0{index+1}</div>
            <h1>{stage.title}</h1>
            <div className="js-place">
              <MapPin size={15}/> {stage.city}
            </div>

            <StageGraphic journey={journey}
              stage={stage} index={index}/>

            {mode==="story" ? (
              <>
                <p className="js-narrative">{stage.story}</p>
                <div className="js-quote">
                  <span>THE QUESTION</span>
                  <strong>{stage.question}</strong>
                </div>
                <div className="js-story-preview">
                  <strong>ECONOMICS CONNECTION</strong>
                  <p>{stage.principle}</p>
                  <button onClick={()=>setMode("economics")}>
                    Explore economic mechanism <ArrowRight size={15}/>
                  </button>
                </div>
              </>
            ) : (
              <EconomicsPanel stage={stage}/>
            )}

            <a className="js-source"
              href={stage.source}
              target="_blank" rel="noreferrer">
              RESEARCH REFERENCE <ExternalLink size={14}/>
            </a>
          </div>
        </main>
      </div>

      <footer className="js-footer">
        <div className="js-progress">
          {journey.stages.map((s,i)=>(
            <button key={s.title}
              className={i<=index?"active":""}
              onClick={()=>setIndex(i)}
              aria-label={`Go to ${s.title}`}/>
          ))}
        </div>
        <div className="js-controls">
          <span>{index+1} / {journey.stages.length}</span>
          <button disabled={index===0}
            onClick={()=>setIndex(i=>i-1)}>
            <ArrowLeft size={16}/> PREVIOUS
          </button>
          {index===journey.stages.length-1 ? (
            <button className="js-next"
              onClick={()=>onOpenAtlas(journey.related)}>
              EXPLORE THE ATLAS <ArrowRight size={16}/>
            </button>
          ) : (
            <button className="js-next"
              onClick={()=>setIndex(i=>i+1)}>
              NEXT STOP <ArrowRight size={16}/>
            </button>
          )}
        </div>
      </footer>
    </section>
  );
}

export default function JourneyStudio() {
  const [activeId,setActiveId]=useState(null);
  const [open,setOpen]=useState(false);
  const journey=foodJourneys.find(j=>j.id===activeId);

  const returnToAtlas=storyId=>{
    setActiveId(null);
    setOpen(false);

    // The existing atlas remains mounted underneath.
    // Its Story Library is available through normal navigation.
    window.dispatchEvent(new CustomEvent("gastronomics:story",{
      detail:{storyId}
    }));
  };

  return (
    <>
      {!journey && (
        <div className="js-launch">
          {open && (
            <div className="js-picker">
              <div className="js-picker-header">
                <strong>FOLLOW THE FOOD</strong>
                <button onClick={()=>setOpen(false)}
                  aria-label="Close journey picker">
                  <X size={17}/>
                </button>
              </div>
              {foodJourneys.map(j=>(
                <button key={j.id} onClick={()=>{
                  setActiveId(j.id);
                  setOpen(false);
                }}>
                  <span>{j.icon}</span>
                  <div>
                    <strong>{j.name}</strong>
                    <small>{j.question}</small>
                  </div>
                  <ArrowRight size={16}/>
                </button>
              ))}
            </div>
          )}
          <button className="js-launch-button"
            onClick={()=>setOpen(v=>!v)}>
            <Route size={17}/> INGREDIENT JOURNEYS
          </button>
        </div>
      )}
      {journey && (
        <JourneyViewer key={journey.id}
          journey={journey}
          onClose={()=>setActiveId(null)}
          onOpenAtlas={returnToAtlas}/>
      )}
    </>
  );
}
