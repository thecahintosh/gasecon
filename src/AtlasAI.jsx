
import React,{useEffect,useRef,useState} from "react";
import {
  BrainCircuit, X, Send, BookOpen,
  ExternalLink, Trash2, Loader2
} from "lucide-react";
import "./atlas-ai.css";

const suggestions=[
  "Why are India and Pakistan disputing basmati?",
  "How did seafood trade restrictions affect Japan?",
  "Explain the economics of onion export bans.",
  "Who captures the value of chocolate?"
];

export default function AtlasAI() {
  const [open,setOpen]=useState(false);
  const [question,setQuestion]=useState("");
  const [messages,setMessages]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const bottom=useRef(null);
  const pending=useRef(false);

  useEffect(()=>{
    bottom.current?.scrollIntoView({behavior:"smooth"});
  },[messages,loading]);

  const ask=async(text)=>{
    const q=String(text||question).trim();
    if(!q || pending.current) return;

    pending.current=true;
    const history=messages
      .filter(m=>["user","assistant"].includes(m.role))
      .map(m=>({role:m.role,content:m.content}))
      .slice(-6);

    setQuestion("");
    setError("");
    setLoading(true);

    setMessages(previous=>[
      ...previous,
      {role:"user",content:q}
    ]);

    try {
      const response=await fetch("/api/chat",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          question:q,
          history
        })
      });

      const data=await response.json();

      if(!response.ok) {
        throw new Error(
          data.error || "AI request failed."
        );
      }

      setMessages(previous=>[
        ...previous,
        {
          role:"assistant",
          content:data.answer,
          sources:data.sources || []
        }
      ]);
    } catch(err) {
      setError(err.message || "Unable to reach AI service.");
    } finally {
      setLoading(false);
      pending.current=false;
    }
  };

  return (
    <div className="atlas-ai-root">
      {!open ? (
        <button className="atlas-ai-launch"
          onClick={()=>setOpen(true)}>
          <BrainCircuit size={19}/>
          ASK THE ATLAS
        </button>
      ) : (
        <section className="atlas-ai-panel"
          aria-label="Gastronomics AI assistant">
          <header className="atlas-ai-header">
            <div>
              <span className="atlas-ai-logo">
                <BrainCircuit size={19}/>
              </span>
              <div>
                <strong>Ask the Atlas</strong>
                <small>GROQ · RESEARCH-GROUNDED RAG</small>
              </div>
            </div>
            <div className="atlas-ai-header-actions">
              <button title="Clear conversation"
                onClick={()=>{
                  if(!loading) {
                    setMessages([]);
                    setError("");
                  }
                }}>
                <Trash2 size={16}/>
              </button>
              <button title="Close assistant"
                onClick={()=>setOpen(false)}>
                <X size={18}/>
              </button>
            </div>
          </header>

          <div className="atlas-ai-messages">
            {messages.length===0 && (
              <div className="atlas-ai-welcome">
                <BrainCircuit size={33}/>
                <h3>Explore the economics behind every meal.</h3>
                <p>
                  Ask about food conflicts, global trade,
                  prices, heritage, or economic theories.
                </p>
                <div className="atlas-ai-suggestions">
                  {suggestions.map(s=>(
                    <button key={s}
                      disabled={loading}
                      onClick={()=>ask(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m,i)=>(
              <div key={i}
                className={"atlas-ai-message "+m.role}>
                <span className="atlas-ai-role">
                  {m.role==="user"?"YOU":"ASK THE ATLAS"}
                </span>
                <div className="atlas-ai-bubble">
                  {m.content}
                </div>

                {m.sources?.length>0 && (
                  <div className="atlas-ai-sources">
                    <span>
                      <BookOpen size={13}/>
                      RETRIEVED REFERENCES
                    </span>
                    {m.sources.map(s=>(
                      s.url ? (
                        <a key={s.id}
                           href={s.url}
                           target="_blank"
                           rel="noreferrer">
                          [{s.number}] {s.title}
                          <ExternalLink size={12}/>
                        </a>
                      ) : (
                        <div key={s.id}>
                          [{s.number}] {s.title}
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="atlas-ai-loading">
                <Loader2 size={17} className="atlas-spin"/>
                Searching the atlas and consulting Groq...
              </div>
            )}

            {error && (
              <div className="atlas-ai-error">
                {error}
              </div>
            )}
            <div ref={bottom}/>
          </div>

          <form className="atlas-ai-form"
            onSubmit={e=>{
              e.preventDefault();
              ask();
            }}>
            <textarea
              value={question}
              disabled={loading}
              maxLength={1200}
              rows={2}
              placeholder="Ask about gastro-economics..."
              onChange={e=>setQuestion(e.target.value)}
              onKeyDown={e=>{
                if(e.key==="Enter" && !e.shiftKey) {
                  e.preventDefault();
                  ask();
                }
              }}
            />
            <button type="submit"
              disabled={!question.trim() || loading}
              aria-label="Send question">
              <Send size={17}/>
            </button>
          </form>

          <p className="atlas-ai-disclaimer">
            Answers use retrieved atlas research. Check original
            sources for high-stakes or current claims.
          </p>
        </section>
      )}
    </div>
  );
}
