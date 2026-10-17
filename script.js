"use strict";

/* ====== Content ====== */
const A={cv:{data:"cv/Wael_Halila_CV_Data_Engineer.pdf",soft:"cv/Wael_Halila_CV_Software_Engineer.pdf",dev:"cv/Wael_Halila_CV_DevOps_Engineer.pdf"}};
const CFG={email:"wael.halila@gmail.com",phone:"+216 28 55 16 04",linkedin:"https://www.linkedin.com/in/wael-halila-9b75ba97/"};
const SAY_T="Hi, I'm Wael Halila. I'm an engineer at ODDO BHF with 4+ years in financial services — I led the migration of 2000+ SSIS packages on OBAM, built ELIOT and FxTrades reporting, shipped the ESG platform, and today I work on TopEase CMDB and ISM security monitoring while mentoring 2 alternance students. Pick a lens above. 👋";
const SAY_S="Hi, I'm Wael Halila. I'm an engineer at ODDO BHF with more than four years in financial services. I led the migration of two thousand SSIS packages on OBAM, built ELIOT and FxTrades reporting, and shipped the ESG platform. Today I work on TopEase CMDB and ISM security monitoring, and I mentor two alternance students.";

const LENS={
  data:{ic:"📊",tab:"Data",role:"Data Engineer · BI Consultant",
    pitch:"Data solutions in financial services: ETL/ELT with SSIS and Talend, 2000+ package migration on OBAM, ELIOT reporting, FxTrades, ESG platform, Control-M orchestration, SQL Server and .NET 8.",
    exp:"Data Engineer & Data Analyst (BI & data integration)",
    pts:["📦 2000+ SSIS migration (OBAM)","📈 ELIOT reporting + FxTrades","🌱 ESG key-indicator platform","⏱️ Control-M scheduling","📊 Power BI & Jaspersoft","🗄️ SQL Server & T-SQL tuning"],
    file:"Wael_Halila_CV_Data_Engineer.pdf"},
  soft:{ic:"🧩",tab:".NET",role:".NET Software Engineer · Microservices",
    pitch:"Design, delivery and support of .NET applications, microservices and backend solutions: C#, .NET 8, REST APIs, SQL Server, Clean Architecture, DDD and CQRS — plus Angular front-ends for ESG and reporting pages.",
    exp:".NET Software Engineer & DevOps",
    pts:["🧱 C# / .NET 8 backends","🅰️ Angular front-ends","🔌 Secure REST APIs","🏛️ Clean Architecture & DDD","🧪 Unit tests & Playwright","🤖 LLM assistant on HEAT"],
    file:"Wael_Halila_CV_Software_Engineer.pdf"},
  dev:{ic:"🚀",tab:"DevOps & ITSM",role:"DevOps Engineer · CI/CD & ITSM",
    pitch:"CI/CD automation, IT service management and security: Azure DevOps pipelines for 20+ microservices, Docker on OpenShift, TopEase CMDB, ISM security program, SSL/TLS, firewall & DNS monitoring, C4 architecture.",
    exp:"DevOps Engineer (CI/CD & ITSM)",
    pts:["🔁 Azure DevOps YAML pipelines","🐳 Docker on OpenShift","🗂️ TopEase CMDB","🛡️ ISM security program","🔒 SSL/TLS, firewall & DNS","🏛️ C4 model (Structurizr)"],
    file:"Wael_Halila_CV_DevOps_Engineer.pdf"}
};

const EXP=[
  {team:"Cross-functional & DevOps team · OBAM",when:"Dec 2024 – Present",b:{
    data:["Led the migration of <strong>2000+ SSIS packages</strong> across OBAM: analysed, tested, and deployed to Integration, UAT and Production environments through release and Control-M scheduling.","Delivered ELIOT financial reporting and <strong>FxTrades</strong> scheduling, plus a full portfolio-management reporting suite driven by Control-M.","Shipped the <strong>ESG platform</strong>: database and stored procedures mapped to Angular pages, delivering key indicators and sustainability views to the business.","Built Talend ETL flows between internal and external systems; designed data-warehouse models and moved SSIS/SSAS to Talend and Cognos to Power BI.","Cut page-load time by 50% through SQL query and index tuning, Redis and MemoryCache.","Automated asset reconciliation between the Ivanti Heat CMDB and Retool."],
    soft:["Built C#/.NET 8 features with Clean Architecture, SOLID and DDD, plus reusable workflow-automation components.","Delivered <strong>Angular front-ends</strong> for the ESG platform and reporting pages, wired to stored procedures and APIs.","Exposed secure REST APIs (JWT, OAuth 2.0) documented with Swagger/OpenAPI, and contributed reusable SDKs.","Contributed to daily sprint programming stories with business analysts and the team to deliver incoming features.","Raised quality with unit tests, SonarQube and CodeScene; documented architectures with <strong>C4 / Structurizr</strong>."],
    dev:["Maintain Azure DevOps (YAML) pipelines for 20+ microservices alongside Jenkins: build, test and release across environments.","Package services as Docker images and deploy them to OpenShift (Kubernetes) through YAML for repeatable releases.","On the <strong>TopEase CMDB project</strong>: model infrastructure and services, and integrate with the Ivanti HEAT ITSM stack.","On the <strong>ISM security program</strong>: monitor prod environments, firewalls and DNS; handle SSL/TLS configuration and certification; deliver Control-M–driven security reporting to business via API integration.","Automated quality gates: unit tests, SonarQube, CodeScene and coverage; centralised logs and monitoring (ELK, Dynatrace)."]}},
  {team:"Asset Management & ESG applications · OBAM",when:"Sep 2022 – Dec 2024",b:{
    data:["Built SSIS flows and tuned T-SQL stored procedures for large volumes of banking data; orchestrated batch processing with Control-M.","Delivered <strong>ELIOT</strong> reporting and financial scheduling; contributed to <strong>FxTrades</strong> reporting.","Shipped <strong>ESG platform</strong> views: database + stored procedures mapped to Angular pages for key indicators.","Secured financial data flows (RBAC, JWT, OAuth 2.0) and gave level-3 support for iKiosk reporting in Private Banking."],
    soft:["Developed .NET, C# and JavaScript apps for ESG indicators and sustainability reporting.","Contributed to the platform migration from .NET Framework 4.8 to .NET 8.","Refactored critical workflows of the PowerBuilder app ELIOT (batch files, SMTP notifications).","Participated in daily sprint programming stories and delivered incoming business features."],
    dev:["Set up integration environments and databases; ran production batch processing with Control-M.","Prepared deployable deliverables and YAML deployment procedures from integration to production.","Managed Git repositories, branches and workflows; supported the .NET 4.8 to .NET 8 upgrade.","Stabilised ELIOT batch workflows and handled level-3 incidents for iKiosk reporting."]}},
  {team:"Software Engineering Intern (final-year project)",when:"Feb 2022 – Aug 2022",b:{all:["Contributed to migrating the GCA back-office middleware from a monolith to scalable microservices.","Analysed the existing system, modelled flows and components in UML, and identified modules to decouple.","Built C#/.NET components with Oracle integration and documented the target architecture."]}}
];

const AI=[
  {ic:"💬",tab:"Chatbot",h:"An LLM assistant, built from scratch",p:"A conversational assistant for Ivanti HEAT, built from scratch around a large language model. People ask in plain language instead of navigating screens and forms.",li:["Natural conversation over ITSM questions","Prompt engineering for reliable, on-topic answers","Designed and built end to end"],on:[0,1,3]},
  {ic:"🔎",tab:"Search & querying",h:"Natural-language search and querying",p:"The assistant turns a question into a precise lookup over HEAT data and answers from what it finds, so replies stay grounded in real records instead of guesses.",li:["Intent understanding, then a targeted query","Answers tied to the underlying records","Faster than browsing forms and filters"],on:[1,2,3]},
  {ic:"🎭",tab:"Testing",h:"Playwright AI testing",p:"Automated end-to-end tests with Playwright, using AI assistance to write and maintain them, protect the HEAT project and the assistant across changes.",li:["Browser-level end-to-end scenarios","AI-assisted test authoring and upkeep","Regression safety net for releases"],on:[4,5]}
];

const FLOW=[["👤","Ask","A natural-language question"],["🧠","LLM","Understands the intent"],["🔎","Search & query layer","Looks up Ivanti HEAT data"],["✅","Answer","Grounded in real records"],["🎭","Playwright","AI-assisted end-to-end tests"],["🚦","Release checks","Regression safety net"]];
const AITAGS=["LLM","Generative AI engineering","Prompt engineering","Natural-language search","Query generation","Playwright","AI-assisted testing","Ivanti HEAT"];

const CATS={data:["Data","#2b2f6b"],bi:["BI","#7a4e9e"],web:["Web","#2f7d6d"],arch:["Arch.","#9a6a10"],ops:["DevOps","#a23b4b"],sec:["Security","#37708f"],itsm:["ITSM","#5a67e0"],ai:["AI","#6a3fb5"],pm:["Agile","#4d6b2f"]};

const SKILLS=[
  ["Sq","SQL Server","data","dsv"],["Ts","T-SQL","data","ds"],["Pg","PostgreSQL","data","d"],["Or","Oracle","data","ds"],["Ss","SSIS","data","dv"],["Tl","Talend","data","dv"],["El","ETL/ELT","data","d"],["Sp","Stored procs","data","ds"],["Rd","Redis","data","ds"],
  ["Dw","Data Warehouse","bi","d"],["Pb","Power BI","bi","d"],["Jr","Jaspersoft","bi","d"],["Te","TopEase","itsm","dv"],["An","Data analysis","bi","d"],["El","ELIOT","bi","d"],["Fx","FxTrades","bi","d"],["Esg","ESG platform","bi","d"],
  ["Cs","C#","web","sd"],["N8",".NET 8","web","s"],["Nc",".NET Core","web","s"],["Fw",".NET 4.8","web","s"],["Rs","REST APIs","web","sv"],["Sw","Swagger","web","sv"],["Js","JavaScript","web","s"],["Tp","TypeScript","web","s"],["Ag","Angular","web","s"],["Pw","PowerBuilder","web","s"],
  ["Ms","Microservices","arch","sv"],["Ca","Clean Arch.","arch","s"],["So","SOLID","arch","s"],["Dd","DDD","arch","s"],["Cq","CQRS","arch","s"],["C4","C4 model","arch","sv"],
  ["Az","Azure DevOps","ops","sv"],["Ci","CI/CD","ops","sv"],["Yl","YAML","ops","v"],["Jk","Jenkins","ops","v"],["Gt","Git","ops","sv"],["Os","OpenShift","ops","v"],["Dk","Docker","ops","v"],["K8","Kubernetes","ops","v"],["Sn","SonarQube","ops","sv"],["Ut","Unit tests","ops","sv"],["Pl","Playwright","ops","dsv"],["Sh","Bash / PowerShell","ops","v"],
  ["Jw","JWT / OAuth 2.0","sec","sv"],["Rb","RBAC","sec","sv"],["Kc","Keycloak","sec","v"],["SsL","SSL / TLS","sec","sv"],["Fw","Firewall","sec","v"],["Dns","DNS","sec","v"],["Ism","ISM program","sec","dv"],
  ["Lk","ELK Stack","ops","dv"],["Dy","Dynatrace","ops","dv"],["Cm","Control-M","ops","dv"],["Rt","Retool","itsm","dv"],["Top","TopEase CMDB","itsm","dv"],["He","Ivanti HEAT","itsm","dsv"],
  ["Ll","LLM apps","ai","dsv"],["Gn","GenAI eng.","ai","dsv"],["Nq","NL search & query","ai","dsv"],["Pe","Prompt eng.","ai","dsv"],["Cl","Claude","ai","dsv"],
  ["It","ITIL 5","pm","dsv"],["Sc","Scrum","pm","dsv"],["Ji","Jira","pm","dsv"],["Me","Mentoring","pm","dsv"]
];

const PROJECTS=[
  ["📦","2000+ SSIS migration on OBAM","Led the end-to-end migration of more than 2000 SSIS packages for OBAM: analysis, functional testing on Integration, then deployment to UAT and Production through release and Control-M scheduling.",["SSIS","Control-M","UAT","Production","T-SQL"],"dv",true],
  ["🌱","ESG platform","A web platform that surfaces key indicators and sustainability reporting to the business. Database and stored procedures mapped to Angular pages, delivered with the team in sprints.",["Angular","SQL Server","Stored procs","ESG",".NET"],"dsv",true],
  ["🗂️","TopEase CMDB project","Modelling infrastructure and services in TopEase as the single source of truth for the CMDB, integrated with the Ivanti HEAT ITSM stack.",["TopEase","Ivanti Heat","CMDB","ITSM"],"dv",true],
  ["🛡️","ISM security program","Security monitoring and reporting: prod environment monitoring, firewall and DNS monitoring, SSL/TLS configuration, Control-M–driven security reports to business, API integration for the same subject, and security training tracking (including decommissioned people and desktops).",["ISM","SSL/TLS","Firewall","DNS","API","Control-M"],"dv",true],
  ["🤖","AI assistant on Ivanti HEAT","A conversational assistant built from scratch around an LLM. Users ask in plain language; a search and query layer looks up Ivanti HEAT data and the answer comes back grounded in real records.",["LLM apps","NL search & query","Prompt eng.","GenAI eng.","Ivanti Heat"],"dsv",true],
  ["📈","ELIOT reporting + FxTrades","Financial reporting and scheduling for ELIOT plus FxTrades pipelines, driven by Control-M, with portfolio-management reporting to the business.",["ELIOT","FxTrades","Control-M","Reporting"],"d"],
  ["🚀","CI/CD for 20+ microservices","Azure DevOps (YAML) pipelines alongside Jenkins jobs; Docker images deployed to OpenShift (Kubernetes) for consistent, repeatable releases. Quality gates catch regressions, vulnerabilities and technical debt before delivery.",["Azure DevOps","YAML","Docker","OpenShift","SonarQube","Kubernetes"],"vs"],
  ["🔄","ETL & data-warehouse migration","Modelled data warehouses and led the move of SSIS/SSAS flows to Talend and of Cognos dashboards to Power BI. Talend ETL keeps internal and external systems synchronised.",["Talend","SSIS","Data Warehouse","Power BI","ETL/ELT"],"d"],
  ["🗃️","Ivanti Heat ↔ Retool reconciliation","Automated asset reconciliation by connecting the Ivanti Heat CMDB to Retool, so infrastructure data can be trusted.",["Ivanti Heat","Retool"],"dv"],
  ["⚡","50% faster page loads","Halved page-load time by optimising SQL queries and indexes and adding Redis and MemoryCache.",["SQL Server","T-SQL","Redis"],"ds"],
  ["🧱","Private Equity transactional backend","Backend services for valuation, subscription and redemption, with SSIS flows and tuned T-SQL procedures for large volumes of banking data, orchestrated by Control-M.",["C#","SSIS","T-SQL","Control-M"],"ds"],
  ["🌱","ESG & Private Banking apps","ESG indicator and sustainability reporting in .NET; .NET 4.8 to .NET 8 migration; ELIOT (PowerBuilder) workflow refactoring; level-3 support for iKiosk with JWT/OAuth 2.0.",[".NET 8","JavaScript","PowerBuilder","JWT / OAuth 2.0","RBAC"],"sv"],
  ["📡","Observability","Centralised logs and monitoring with ELK Stack and Dynatrace to analyse incidents and slow SQL queries.",["ELK Stack","Dynatrace"],"dv"],
  ["🎭","Playwright AI testing on HEAT","End-to-end tests with Playwright, with AI assistance to write and maintain them, covering the Ivanti HEAT project and its assistant.",["Playwright","Ivanti Heat","Unit tests"],"dsv"],
  ["🧩","Monolith → microservices","Final-year project: moved the GCA back-office middleware to scalable microservices; UML analysis, C#/.NET components with Oracle integration.",["Microservices","C#","Oracle"],"s"],
  ["🎓","Mentoring 2 alternance students","Onboarded and trained two alternance students into the team. Taught ETL and ISM practices hands-on; today they contribute to the same projects alongside me.",["Mentoring","ETL","ISM","Team building"],"dsv",true]
];

const LANGS=[["Arabic 🇹🇳","Native",100],["English 🇬🇧","B2",75],["French 🇫🇷","B2",75],["German 🇩🇪","B2",70]];
const CERTS=["🏅 ITIL® 5 Foundation · Certificate","🤖 Generative AI engineering · Training","Scrum Master · Scrum.org","C# Advanced Topics · Udemy","Advanced SQL · Clevory Training",".NET Expert · Advancia Training","Talend Basics · Keyrus Academy"];
const EDU=[["🎓","Engineering degree, software engineering","ESPRIT, Tunis · 2019 – 2022"],["⚙️","Bachelor's in mechanical engineering","ISET Bizerte · 2016 – 2019"],["🤝","Community","Vice-president, Mechanical Engineering Club · Treasurer, Enactus ISET Bizerte · Member, Securinets INSAT"]];
const STATS=[[4,"+","years in finance 🏦"],[2000,"+","SSIS packages migrated 📦"],[20,"+","microservice pipelines 🚀"],[2,"","alternance students mentored 🎓"],[1,"","LLM assistant on Ivanti HEAT 🤖"]];
const SUG=["Are you ITIL certified?","Tell me about the 2000+ SSIS migration","What is the ISM security program about?","What do you do on the TopEase CMDB?","How did you mentor the students?","How can I contact you?"];

/* ====== Helpers ====== */
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const root=document.documentElement;
const LC={data:"d",soft:"s",dev:"v"},LK={d:"data",s:"soft",v:"dev"};
let lens="data",shown=false;

const io=(fn,o)=>"IntersectionObserver" in window?new IntersectionObserver(fn,o):{observe(){}};

/* ====== GAME: sounds, toasts, errors, emoji ====== */
const AUDIO={
  ctx:null,
  init(){ if(!this.ctx){ try{this.ctx=new (window.AudioContext||window.webkitAudioContext)()}catch(e){} } return this.ctx },
  blip(freq=600,dur=.08,type="sine",vol=.06){
    const c=this.init(); if(!c)return;
    const o=c.createOscillator(),g=c.createGain();
    o.type=type; o.frequency.value=freq;
    g.gain.setValueAtTime(vol,c.currentTime);
    g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+dur);
    o.connect(g).connect(c.destination);
    o.start(); o.stop(c.currentTime+dur);
  },
  error(){ this.blip(220,.15,"sawtooth",.05); setTimeout(()=>this.blip(180,.2,"sawtooth",.05),120) },
  success(){ this.blip(660,.08,"sine",.05); setTimeout(()=>this.blip(880,.12,"sine",.05),90) },
  levelup(){ [523,659,784,1046].forEach((f,i)=>setTimeout(()=>this.blip(f,.15,"triangle",.06),i*90)) }
};

const GAME={score:0};
function addScore(n=1){
  GAME.score+=n;
  const el=$("#score"); if(el){el.textContent="⭐ "+GAME.score; el.classList.add("bump"); setTimeout(()=>el.classList.remove("bump"),220)}
}

function toast(msg){
  const t=$("#toasts"); if(!t)return;
  const d=document.createElement("div"); d.className="toast"; d.textContent=msg;
  t.append(d);
  requestAnimationFrame(()=>d.classList.add("show"));
  setTimeout(()=>{d.classList.remove("show"); setTimeout(()=>d.remove(),350)},3200);
}

const ERRORS=[
  ["Uncaught TypeError","Cannot read property 'coffee' of undefined"],
  ["NullPointerException","Employee not found at line 404"],
  ["StackOverflow","Recursion depth exceeded: 9001"],
  ["SyntaxError","Unexpected token: '<' in JSON"],
  ["404 Not Found","Dependency 'motivation' is missing"],
  ["TimeoutError","Operation exceeded 30000ms"],
  ["Deprecated API","Please update legacy code since 2018"],
  ["MemoryLeak","Heap out of bounds at /dev/null"],
  ["Git Merge Conflict","<<<<<<< HEAD : same line, two devs"],
  ["ESLint","Unexpected console.log() in production"],
  ["CORS","Access-Control-Allow-Origin blocked"],
  ["Deploy Failed","Missing env var PROD_SECRET"],
  ["SQL Injection Detected","WAF blocked the request 🛡️"],
  ["Unit Test Failed","Expected true, received false"],
  ["SSIS Package Error","2000th package failed in UAT 😅"],
  ["CMDB Sync","TopEase vs HEAT: reconciliation mismatch"],
  ["SSL Expired","TLS certificate for *.oddo expired"],
  ["DNS Timeout","Resolver returned SERVFAIL at 03:00"]
];
const EMOJIS=["💥","🚀","🐛","🔥","⚡","🎯","🎉","🧠","🤖","💾","🚨","⚠️","💡","🛠️","🎮","🎲","🕹️","👾","📦","🛡️"];

function errPopup(x,y){
  const e=ERRORS[Math.floor(Math.random()*ERRORS.length)];
  const n=document.createElement("div"); n.className="err-popup";
  n.innerHTML=`<span class="err-title">⚠️ ${e[0]}</span><span class="err-msg">${e[1]}</span>`;
  n.style.left=Math.min(x,innerWidth-300)+"px"; n.style.top=Math.min(y,innerHeight-120)+"px";
  document.body.append(n);
  AUDIO.error();
  setTimeout(()=>{n.style.transition="opacity .4s, transform .4s";n.style.opacity="0";n.style.transform="scale(.8)";setTimeout(()=>n.remove(),400)},1400);
}

function emojiBurst(x,y){
  const e=EMOJIS[Math.floor(Math.random()*EMOJIS.length)];
  const n=document.createElement("div"); n.className="emoji-burst"; n.textContent=e;
  n.style.left=x+"px"; n.style.top=y+"px";
  const a=Math.random()*Math.PI*2, d=60+Math.random()*80;
  n.style.setProperty("--tx",Math.cos(a)*d+"px");
  n.style.setProperty("--ty",Math.sin(a)*d+"px");
  document.body.append(n);
  setTimeout(()=>n.remove(),950);
}

document.addEventListener("click",e=>{
  AUDIO.blip(520,.05,"sine",.04);
  const card=e.target.closest(".card");
  if(card){
    errPopup(e.clientX-140,e.clientY-60);
    emojiBurst(e.clientX,e.clientY);
    addScore(1);
    toast("🎉 +1 ⭐ for poking the code!");
  }
  if(window.gsap){
    for(let i=0;i<10;i++){
      const s=document.createElement("i");s.className="spark";
      s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";document.body.append(s);
      const a=i/10*6.28;
      gsap.to(s,{x:Math.cos(a)*(40+Math.random()*30),y:Math.sin(a)*(40+Math.random()*30),opacity:0,scale:.2,duration:.7,ease:"power2.out",onComplete:()=>s.remove()});
    }
  }
});

/* ====== Render: stats ====== */
$("#stats").innerHTML=STATS.map(s=>`<div><b data-n="${s[0]}" data-s="${s[1]}">0${s[1]}</b>${s[2]}</div>`).join("");
io(([e])=>{if(!e.isIntersecting)return;$$("[data-n]").forEach(b=>{const n=+b.dataset.n,t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/1400);b.textContent=Math.round(n*p)+b.dataset.s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)})},{threshold:.6}).observe($("#stats"));

/* ====== Lens tabs ====== */
$("#lens").innerHTML=Object.entries(LENS).map(([k,v])=>`<button class="chip2" data-l="${k}" aria-pressed="false">${v.ic} ${v.tab}</button>`).join("");
$("#lens").onclick=e=>{const b=e.target.closest("button");if(b){AUDIO.blip(700,.06,"triangle",.05);setLens(b.dataset.l)}};

/* ====== Talking portrait ====== */
const av=$("#avatar"),say=$("#say");let timer;
function type(t){clearInterval(timer);say.textContent="";let i=0;av.classList.add("talk");timer=setInterval(()=>{say.textContent=t.slice(0,++i);if(i>=t.length){clearInterval(timer);av.classList.remove("talk")}},34)}
type(SAY_T);
$("#hear").onclick=()=>{
  if(!("speechSynthesis" in window)){type(SAY_T);return}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(SAY_S);u.lang="en-US";u.rate=.97;
  u.onstart=()=>{clearInterval(timer);say.textContent=SAY_T;av.classList.add("talk")};
  u.onend=u.onerror=()=>av.classList.remove("talk");speechSynthesis.speak(u);
};

/* ====== ID card ====== */
(function initIdCard(){
  const hero=$("#avatar"), idp=$("#idp"), idc=$("#idcard");
  if(!hero||!idp)return;
  const c=hero.cloneNode(true);
  c.classList.add("avatar-clone");
  c.removeAttribute("role");c.setAttribute("aria-hidden","true");
  c.setAttribute("viewBox","40 60 320 340");
  c.setAttribute("preserveAspectRatio","xMidYMid slice");
  idp.prepend(c);
  if(idc){
    idc.addEventListener("click",()=>{
      AUDIO.blip(880,.08,"triangle",.05);
      idc.style.transform="rotateZ(2deg)";
      setTimeout(()=>idc.style.transform="",250);
      addScore(1);
      toast("🪪 ID card inspected! +1 ⭐");
      emojiBurst(idc.getBoundingClientRect().left+80,idc.getBoundingClientRect().top+80);
    });
  }
})();

/* ====== AI section ====== */
$("#aitabs").innerHTML=AI.map((a,i)=>`<button class="chip2" role="tab" data-i="${i}" aria-selected="false">${a.ic} ${a.tab}</button>`).join("");
$("#flow").innerHTML=FLOW.map((f,i)=>`${i===4?'<div class="fa">· · ·</div>':i?'<div class="fa">↓</div>':""}<div class="fs" data-i="${i}"><span>${f[0]}</span><div><b>${f[1]}</b><small>${f[2]}</small></div></div>`).join("");
$("#aitags").innerHTML=AITAGS.map(t=>`<span>${t}</span>`).join("");
function aiTab(i){const a=AI[i];$$("#aitabs button").forEach((b,j)=>{b.classList.toggle("on",j===i);b.setAttribute("aria-selected",j===i)});
  $("#aipanel").innerHTML=`<h3>${a.ic} ${a.h}</h3><p>${a.p}</p><ul>${a.li.map(l=>`<li>${l}</li>`).join("")}</ul>`;
  $$(".fs").forEach(f=>f.classList.toggle("on",a.on.includes(+f.dataset.i)))}
$("#aitabs").onclick=e=>{const b=e.target.closest("button");if(b){AUDIO.blip(760,.06,"triangle",.05);aiTab(+b.dataset.i)}};
aiTab(0);

/* ====== Skills ====== */
const pt=$("#ptable"),det=$("#detail"),fl=$("#filters");let cur="all";
pt.innerHTML=SKILLS.map((s,i)=>`<button class="tile" data-i="${i}" data-c="${s[2]}" style="background:${CATS[s[2]][1]}" aria-label="${s[1]}"><i>${i+1}</i><b>${s[0]}</b><span>${s[1]}</span></button>`).join("");
const show=i=>{const s=SKILLS[i],u=PROJECTS.filter(p=>p[3].includes(s[1])).map(p=>p[1]);
  det.innerHTML=`<b>${s[0]} · ${s[1]}</b><p>${CATS[s[2]][0]} · relevant for ${[...s[3]].map(c=>LENS[LK[c]].ic+" "+LENS[LK[c]].tab).join(", ")}</p><p>${u.length?"Used in: "+u.join("; "):"Part of my day-to-day toolbox."}</p>`;
  $$(".tile").forEach(t=>t.classList.toggle("sel",+t.dataset.i===i))};
pt.onclick=e=>{const t=e.target.closest(".tile");if(t){AUDIO.blip(500+Math.random()*400,.05,"square",.04);show(+t.dataset.i)}};
pt.onmouseover=e=>{const t=e.target.closest(".tile");if(t)show(+t.dataset.i)};
fl.innerHTML=[["all","All ✨"],...Object.entries(CATS).map(([k,v])=>[k,v[0]])].map(f=>`<button class="chip2${f[0]==="all"?" on":""}" data-f="${f[0]}">${f[1]}</button>`).join("");
const paintTiles=()=>$$(".tile").forEach(t=>{const s=SKILLS[t.dataset.i];t.classList.toggle("dim",cur!=="all"&&s[2]!==cur);t.style.opacity=s[3].includes(LC[lens])?"":".45"});
fl.onclick=e=>{const b=e.target.closest("button");if(!b)return;cur=b.dataset.f;$$("#filters button").forEach(x=>x.classList.toggle("on",x===b));paintTiles()};

/* ====== Radar ====== */
const cnt=k=>SKILLS.filter(s=>s[2]===k).length,mx=Math.max(...Object.keys(CATS).map(cnt));
function radar(p){
  const c=$("#radar"),d=devicePixelRatio||1,W=c.clientWidth,H=320;
  c.width=W*d;c.height=H*d;
  const x=c.getContext("2d");x.scale(d,d);
  const cs=getComputedStyle(root),g=n=>cs.getPropertyValue(n).trim();
  const keys=Object.keys(CATS),n=keys.length,cx=W/2,cy=H/2+4,R=Math.min(W,H)/2-56;
  const q=(i,r)=>[cx+Math.cos(i/n*6.2832-1.5708)*r,cy+Math.sin(i/n*6.2832-1.5708)*r];
  x.strokeStyle=g("--line");
  [.25,.5,.75,1].forEach(v=>{x.beginPath();keys.forEach((k,i)=>{const[a,b]=q(i,R*v);i?x.lineTo(a,b):x.moveTo(a,b)});x.closePath();x.stroke()});
  x.fillStyle=g("--ink");x.font="600 13px Inter Tight,system-ui,sans-serif";x.textAlign="center";
  keys.forEach((k,i)=>{const[a,b]=q(i,R+26);x.fillText(CATS[k][0],a,b+4)});
  x.beginPath();keys.forEach((k,i)=>{const[a,b]=q(i,R*cnt(k)/mx*p);i?x.lineTo(a,b):x.moveTo(a,b)});x.closePath();
  x.fillStyle="rgba(110,120,230,.28)";x.fill();x.strokeStyle=g("--acc");x.lineWidth=2.5;x.stroke();
  keys.forEach((k,i)=>{const[a,b]=q(i,R*cnt(k)/mx*p);x.beginPath();x.arc(a,b,4,0,6.3);x.fillStyle=CATS[k][1];x.fill()})
}
$("#langs").innerHTML=LANGS.map(l=>`<div class="bar"><div><span>${l[0]}</span><span>${l[1]}</span></div><div class="meter"><i data-w="${l[2]}"></i></div></div>`).join("");
io(([e])=>{if(e.isIntersecting&&!shown){shown=true;$$(".meter i[data-w]").forEach(m=>m.style.width=m.dataset.w+"%");
  const t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/1100);radar(1-Math.pow(1-p,3));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}},{threshold:.25}).observe($(".charts"));
addEventListener("resize",()=>shown&&radar(1));

/* ====== Timeline + projects + lens switch ====== */
function render(){
  const L=LENS[lens];
  $("#timeline").innerHTML=EXP.map(x=>`<li data-e="💼"><h3>${x.role||L.exp}</h3><span class="when">${x.team?x.team+" · ":"ODDO BHF · "}${x.when}</span><ul class="bul">${(x.b[lens]||x.b.all).map(t=>`<li>${t}</li>`).join("")}</ul></li>`).join("");
  const rel=[...PROJECTS].sort((a,b)=>(!!b[5]-!!a[5])||(b[4].includes(LC[lens])-a[4].includes(LC[lens])));
  $("#projgrid").innerHTML=rel.map(p=>`<article class="card pc${p[5]?" feat":""}"><span class="em">${p[0]}</span>${p[4].includes(LC[lens])?`<span class="star">⭐ Top for ${L.tab}</span>`:""}<h3>${p[1]}</h3><p>${p[2]}</p><div class="tags">${p[3].map(t=>`<span>${t}</span>`).join("")}</div></article>`).join("");
}

function setLens(k){
  lens=k;const L=LENS[k];
  $$("#lens button").forEach(b=>{const on=b.dataset.l===k;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});
  $("#role").textContent=L.ic+" "+L.role;
  $("#pitch").textContent=L.pitch;
  $("#idrole").textContent=L.role;
  $("#idlist").innerHTML=L.pts.map(t=>`<li>${t}</li>`).join("");
  $("#cvdl").href=A.cv[k];
  $("#cvdl").setAttribute("download",L.file);
  render();paintTiles();
}

/* ====== Credentials + contact ====== */
$("#certs").innerHTML=CERTS.map((c,i)=>`<li${i<2?' class="hl"':""}>${c}</li>`).join("");
$("#edu").innerHTML=EDU.map(x=>`<figure class="card"><h3>${x[0]} ${x[1]}</h3><p>${x[2]}</p></figure>`).join("");

$("#links").innerHTML=[
  ["✉️ "+CFG.email,"mailto:"+CFG.email],
  ["📞 "+CFG.phone,"tel:"+CFG.phone.replace(/\s/g,"")],
  ["🔗 LinkedIn",CFG.linkedin]
].map(l=>`<a class="btn ghost" href="${l[1]}" target="_blank" rel="noopener noreferrer">${l[0]}</a>`).join("");

$("#cvs").innerHTML=Object.entries(LENS).map(([k,v])=>`<a class="btn" href="${A.cv[k]}" download="${v.file}">📄 CV · ${v.tab}</a>`).join("");
$("#form").onsubmit=e=>{
  e.preventDefault();
  AUDIO.success();
  toast("✉️ Email client opened — hit send!");
  emojiBurst(e.clientX||innerWidth/2,e.clientY||innerHeight/2);
  addScore(2);
  location.href=`mailto:${CFG.email}?subject=${encodeURIComponent("Opportunity for Wael Halila: "+$("#fn").value.slice(0,120))}&body=${encodeURIComponent($("#fm").value.slice(0,2000))}`;
};
$("#yr").textContent=new Date().getFullYear();

/* ====== Ask AI ====== */
const STOP=new Set("a an the and or of to in on for with is are was were be been do does did you your i me my we what which who how where when why can could would should about tell give show any have has had at as by from it its this that these those not no yes also".split(" "));
const tok=t=>t.toLowerCase().replace(/[^a-z0-9+#.\u00c0-\u017f ]/g," ").split(/\s+/).filter(w=>w&&!STOP.has(w)).map(w=>w.replace(/^certif\w*/,"certif").replace(/(ing|es|s)$/,""));
const KB=[
  {t:"About Wael",x:"Engineer at ODDO BHF with 4+ years in financial services across data, .NET, DevOps, AI and ITSM. Based in Tunis. Works at ODDO BHF since September 2022.",s:"about"},
  {t:"Contact",x:`Email ${CFG.email}, phone ${CFG.phone}, LinkedIn. CV downloads (Data, .NET, DevOps) are in the contact section.`,s:"contact"},
  {t:"Languages",x:"Arabic is native; English, French and German are at B2 level.",s:"credentials"}
];
Object.values(LENS).forEach(L=>KB.push({t:"Profile: "+L.role,x:L.pitch,s:"home"}));
EXP.forEach(e=>{const seen=new Set();Object.values(e.b).flat().forEach(b=>{if(!seen.has(b)){seen.add(b);KB.push({t:e.team||"Internship",x:b.replace(/<[^>]+>/g,""),s:"experience"})}})});
PROJECTS.forEach(p=>KB.push({t:p[1],x:p[2]+" Tools: "+p[3].join(", "),s:p[5]?"ai":"projects"}));
AI.forEach(a=>KB.push({t:"AI on Ivanti HEAT: "+a.tab,x:a.p+" "+a.li.join(". "),s:"ai"}));
KB.push({t:"2000+ SSIS migration",x:"On OBAM I led the migration of more than 2000 SSIS packages: analysed, tested on Integration, deployed to UAT and Production through release and Control-M scheduling.",s:"projects"});
KB.push({t:"ESG platform",x:"Delivered the ESG key-indicator web platform: database and stored procedures mapped to Angular pages, with the team, delivering new features from the business in sprints.",s:"projects"});
KB.push({t:"TopEase CMDB",x:"On the TopEase CMDB project: modelling infrastructure and services as the single source of truth, integrated with the Ivanti HEAT ITSM stack.",s:"projects"});
KB.push({t:"ISM security program",x:"On the ISM program: monitoring prod environments, firewalls and DNS, SSL/TLS configuration, Control-M–driven security reports to business, API integration for the same subject, and tracking security training for decommissioned people and desktops.",s:"projects"});
KB.push({t:"Mentoring",x:"I onboarded and trained two alternance students into the team, teaching ETL and ISM hands-on. They now contribute to the same projects alongside me.",s:"experience"});
KB.push({t:"ITIL certification",x:"Yes, I hold the ITIL® 5 Foundation certificate, which supports my ITSM work on Ivanti HEAT and TopEase.",s:"credentials"});
KB.push({t:"Generative AI engineering training",x:"I am trained in generative AI engineering: LLM applications, prompt engineering and natural-language search and querying.",s:"credentials"});
CERTS.forEach(c=>KB.push({t:"Certifications and training",x:c,s:"credentials"}));
EDU.forEach(e=>KB.push({t:e[1],x:e[2],s:"credentials"}));
Object.entries(CATS).forEach(([k,v])=>KB.push({t:"Skills: "+v[0],x:SKILLS.filter(s=>s[2]===k).map(s=>s[1]).join(", "),s:"skills"}));

const docs=KB.map(d=>({d,w:tok(d.t+" "+d.x),tt:tok(d.t)})),df={};
docs.forEach(o=>new Set(o.w).forEach(w=>df[w]=(df[w]||0)+1));
const idf=w=>Math.log(1+docs.length/(df[w]||.5));
function search(q){
  const qt=[...new Set(tok(q))];if(!qt.length)return[];
  return docs.map(o=>{let s=0;qt.forEach(w=>{const tf=o.w.filter(x=>x===w).length;if(tf)s+=idf(w)*(1+Math.log(tf));if(o.tt.includes(w))s+=idf(w)});return[o.d,s]})
    .filter(r=>r[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,3)
}
const ask=$("#ask"),msgs=$("#msgs");
const el=(c,t)=>{const n=document.createElement("div");n.className="m "+c;if(t)n.textContent=t;return n};
function reply(q){
  const r=search(q),n=el("a");
  if(!r.length){n.textContent="I couldn't find that in this portfolio. Try skills, certifications, Ivanti HEAT AI, the SSIS migration, the ISM program, the CMDB project or contact.";return n}
  const p=document.createElement("p");p.textContent=r[0][0].x;n.append(p);
  const rest=r.slice(1).filter(x=>x[1]>r[0][1]*.45);
  if(rest.length){const ul=document.createElement("ul");rest.forEach(x=>{const li=document.createElement("li");li.textContent=x[0].t+": "+x[0].x.slice(0,120)+(x[0].x.length>120?"…":"");ul.append(li)});n.append(ul)}
  const a=document.createElement("a");a.href="#"+r[0][0].s;a.textContent="Open section ↗";a.onclick=()=>ask.close();n.append(a);return n
}
function send(q){q=q.trim().slice(0,200);if(!q)return;msgs.append(el("u",q));const w=el("a","…");msgs.append(w);msgs.scrollTop=msgs.scrollHeight;
  AUDIO.blip(900,.05,"sine",.04);
  setTimeout(()=>{w.replaceWith(reply(q));msgs.scrollTop=msgs.scrollHeight;AUDIO.success()},350)}
$("#sug").innerHTML=SUG.map(s=>`<button type="button">${s}</button>`).join("");
$("#sug").onclick=e=>{const b=e.target.closest("button");b&&send(b.textContent)};
$("#askf").onsubmit=e=>{e.preventDefault();send($("#q").value);$("#q").value=""};

/* ====== ORB morph → dialog ====== */
const orb=$("#orb"),askEl=$("#ask");
function openAsk(){
  if(!msgs.children.length)msgs.append(el("a","Hi! I search this portfolio for you. Ask about Wael's skills, projects, the 2000+ SSIS migration, the ESG platform, the TopEase CMDB, the ISM program, or the AI assistant he built on Ivanti HEAT."));
  orb.classList.add("morph");
  AUDIO.levelup();
  setTimeout(()=>{
    if(askEl.showModal)askEl.showModal();else askEl.setAttribute("open","");
    orb.classList.remove("morph");
    const q=$("#q");q&&q.focus();
  },400);
}
function closeAsk(){
  if(askEl.close)askEl.close();else askEl.removeAttribute("open");
  orb.classList.remove("morph");
}
orb.addEventListener("click",openAsk);
$("#askbtn")&&$("#askbtn").addEventListener("click",openAsk);
$("#askx").addEventListener("click",closeAsk);
askEl.addEventListener("click",e=>{if(e.target===askEl)closeAsk()});
addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openAsk()}});

/* ====== Nav, theme, progress, share ====== */
const menu=$("#menu"),bg=$("#burger");
bg.onclick=()=>{const o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
menu.onclick=e=>{if(e.target.closest("a")){menu.classList.remove("open");bg.setAttribute("aria-expanded","false")}};

const links=$$("#menu a"),secs=["about","experience","ai","skills","projects","credentials","contact"].map(id=>document.getElementById(id));
if("IntersectionObserver" in window){const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.setAttribute("aria-current",l.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});secs.forEach(s=>s&&so.observe(s))}

const tb=$("#theme"),dark=()=>root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
try{const s=localStorage.getItem("theme");if(s==="dark"||s==="light")root.dataset.theme=s}catch(e){}
const paint=()=>{tb.textContent=dark()?"☀️":"🌙";if(shown)radar(1)};paint();
tb.onclick=()=>{root.dataset.theme=dark()?"light":"dark";try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}paint();AUDIO.blip(600,.08,"triangle",.05)};
matchMedia("(prefers-color-scheme:dark)").onchange=paint;

const bar=$("#bar");
addEventListener("scroll",()=>{bar.style.width=scrollY/Math.max(1,root.scrollHeight-innerHeight)*100+"%"},{passive:true});

$("#share").onclick=async()=>{
  const d={title:document.title,url:location.href};
  try{if(navigator.share)await navigator.share(d);else{await navigator.clipboard.writeText(d.url);$("#share").textContent="✅ Link copied";AUDIO.success();toast("🔗 URL copied to clipboard")}}catch(e){}
};

/* ====== Avatar pointer-follow + blink ====== */
(function(){
  const all=[av,...document.querySelectorAll(".avatar-clone")].filter(Boolean);
  if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  let tx=0,ty=0,cx=0,cy=0;
  addEventListener("pointermove",e=>{tx=e.clientX/innerWidth*2-1;ty=e.clientY/innerHeight*2-1},{passive:true});
  (function loop(){
    if(!document.hidden&&(Math.abs(tx-cx)>.001||Math.abs(ty-cy)>.001)){
      cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;
      all.forEach(s=>{
        s.style.setProperty("--hr",cx*4+"deg");
        s.style.setProperty("--hxp",cx*5+"px");
        s.style.setProperty("--ex",cx*4+"px");
        s.style.setProperty("--ey",cy*3+"px");
      });
    }
    requestAnimationFrame(loop);
  })();
  (function blink(){
    setTimeout(()=>{
      all.forEach(s=>s.style.setProperty("--bl",1));
      setTimeout(()=>{all.forEach(s=>s.style.setProperty("--bl",0));blink()},120);
    },2200+Math.random()*3200);
  })();
})();

/* avatar click = fun */
av.addEventListener("click",e=>{
  AUDIO.levelup();
  emojiBurst(e.clientX,e.clientY);
  errPopup(e.clientX-140,e.clientY-60);
  addScore(2);
  toast("😄 Avatar poked! +2 ⭐");
  av.classList.add("talk");
  setTimeout(()=>av.classList.remove("talk"),600);
});

/* ====== Boot ====== */
setLens("data");
setTimeout(()=>toast("🎮 Welcome! Click things for fun + ⭐ points"),1200);