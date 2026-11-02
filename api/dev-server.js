
import http from "node:http";
import handler from "./chat.js";

const PORT=3001;

const server=http.createServer(async(req,res)=>{
  if(req.url==="/api/health") {
    res.setHeader("Content-Type","application/json");
    return res.end(JSON.stringify({
      status:"ok",
      product:"Gastronomics",
      service:"RAG API",
      groqConfigured:Boolean(process.env.GROQ_API_KEY)
    }));
  }

  if(req.url!=="/api/chat") {
    res.statusCode=404;
    return res.end("Not found");
  }

  try {
    await handler(req,res);
  } catch(error) {
    console.error(error);
    if(!res.headersSent) {
      res.statusCode=500;
      res.setHeader("Content-Type","application/json");
    }
    res.end(JSON.stringify({
      error:"Internal API error"
    }));
  }
});

server.listen(PORT,"0.0.0.0",()=>{
  console.log(`GASTRONOMICS_RAG_READY port=${PORT}`);
});
