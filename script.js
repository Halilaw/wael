"use strict";
/* ====== Content ====== */
const A={id:"img/id.webp",cv:{data:"cv/Wael_Halila_CV_Data_Engineer.pdf",soft:"cv/Wael_Halila_CV_Software_Engineer.pdf",dev:"cv/Wael_Halila_CV_DevOps_Engineer.pdf"}};
const CFG={email:"wael.halila@gmail.com",phone:"+216 28 55 16 04",linkedin:"https://www.linkedin.com/in/wael-halila-9b75ba97/"};
const SAY_T="Hi, I'm Wael Halila. I'm an engineer with 4+ years in financial services, working across data, .NET, DevOps and AI on Ivanti HEAT. Pick a lens above to read my profile the way you need it. 👋";
const SAY_S="Hi, I'm Wael Halila. I'm an engineer with more than four years in financial services, working across data, dot net, DevOps and AI on Ivanti HEAT. Pick a lens above to read my profile the way you need it.";
const LENS={
data:{ic:"📊",tab:"Data",role:"Data Engineer · BI Consultant",pitch:"Data solutions in financial services: ETL/ELT with SSIS and Talend, Control-M orchestration and production monitoring, on a solid SQL Server, C# and .NET 8 base.",exp:"Data Engineer & Data Analyst (BI & data integration)",pts:["📥 ETL/ELT with SSIS & Talend","🗄️ SQL Server & T-SQL tuning","⏱️ Control-M orchestration","📊 Power BI & Jaspersoft","🤖 AI search & querying on HEAT"],file:"Wael_Halila_CV_Data_Engineer.pdf"},
soft:{ic:"🧩",tab:".NET",role:".NET Software Engineer · Microservices",pitch:"Design, delivery and support of .NET applications, microservices and backend solutions: C#, .NET 8, REST APIs, SQL Server, Clean Architecture, DDD and CQRS.",exp:".NET Software Engineer & DevOps",pts:["🧱 C# / .NET 8 backends","🔌 Secure REST APIs","🏛️ Clean Architecture & DDD","🧪 Unit tests & Playwright","🤖 LLM assistant on HEAT"],file:"Wael_Halila_CV_Software_Engineer.pdf"},
dev:{ic:"🚀",tab:"DevOps",role:"DevOps Engineer · CI/CD & Automation",pitch:"CI/CD automation and production reliability: Azure DevOps pipelines for 20+ microservices, Docker on OpenShift, SonarQube quality gates, ELK and Dynatrace observability.",exp:"DevOps Engineer (CI/CD & automation)",pts:["🔁 Azure DevOps YAML pipelines","🐳 Docker on OpenShift","🛡️ Quality gates (SonarQube)","📡 ELK & Dynatrace","🎭 Playwright AI testing"],file:"Wael_Halila_CV_DevOps_Engineer.pdf"}};
const EXP=[
{team:"Cross-functional & DevOps team",when:"Dec 2024 – Present",b:{
data:["Built Talend ETL flows between internal applications and external systems for consistent, synchronised data.","Designed data-warehouse models and led the migration of SSIS/SSAS flows to Talend and of Cognos dashboards to Power BI.","Cut page-load time by 50% through SQL query and index tuning, Redis and MemoryCache.","Automated asset reconciliation by connecting the Ivanti Heat CMDB to Retool.","Deployed and scheduled jobs, procedures and batches (Talend, Control-M); centralised logs with ELK and Dynatrace to trace slow SQL queries."],
soft:["Built C#/.NET 8 features with Clean Architecture, SOLID and DDD, plus reusable workflow-automation components.","Exposed secure REST APIs (JWT, OAuth 2.0) documented with Swagger/OpenAPI, and contributed reusable SDKs.","Built responsive web interfaces (Angular, Razor Pages, Bootstrap) with UX/UI teams.","Raised quality with unit tests, SonarQube and CodeScene; documented architectures with C4/Structurizr.","Centralised logs and monitoring with ELK Stack and Dynatrace."],
dev:["Maintain Azure DevOps (YAML) pipelines for 20+ microservices alongside Jenkins jobs: build, test and release across environments.","Package services as Docker images and deploy them to OpenShift (Kubernetes) through YAML for repeatable releases.","Diagnose pipeline, build and deployment failures; run tool and platform upgrades.","Automated quality gates: unit tests, SonarQube, CodeScene and coverage.","Centralised logs and monitoring (ELK, Dynatrace); automated deployment of Control-M and Talend jobs."]}},
{team:"Asset Management & ESG applications",when:"Sep 2022 – Dec 2024",b:{
data:["Built SSIS flows and tuned T-SQL stored procedures for large volumes of banking data.","Set up integration environments and databases; orchestrated batch processing with Control-M.","Maintained transactional backend services for Private Equity valuation, subscription and redemption.","Secured financial data flows (RBAC, JWT, OAuth 2.0) and gave level-3 support for iKiosk reporting in Private Banking."],
soft:["Developed .NET, C# and JavaScript apps for ESG indicators and sustainability reporting.","Contributed to the platform migration from .NET Framework 4.8 to .NET 8.","Refactored critical workflows of the PowerBuilder app ELIOT (batch files, SMTP notifications).","Maintained transactional Private Equity backends; reduced technical debt through legacy refactoring and POCs."],
dev:["Set up integration environments and databases; ran production batch processing with Control-M.","Prepared deployable deliverables and YAML deployment procedures from integration to production.","Managed Git repositories, branches and workflows; supported the .NET 4.8 to .NET 8 upgrade.","Stabilised ELIOT batch workflows and handled level-3 incidents for iKiosk reporting."]}},
{role:"Software Engineering Intern (final-year project)",when:"Feb 2022 – Aug 2022",b:{all:["Contributed to migrating the GCA back-office middleware from a monolith to scalable microservices.","Analysed the existing system, modelled flows and components in UML, and identified modules to decouple.","Built C#/.NET components with Oracle integration and documented the target architecture."]}}];
const AI=[
{ic:"💬",tab:"Chatbot",h:"An LLM assistant, built from scratch",p:"A conversational assistant for Ivanti HEAT, built from scratch around a large language model. People ask in plain language instead of navigating screens and forms.",li:["Natural conversation over ITSM questions","Prompt engineering for reliable, on-topic answers","Designed and built end to end"],on:[0,1,3]},
{ic:"🔎",tab:"Search & querying",h:"Natural-language search and querying",p:"The assistant turns a question into a precise lookup over HEAT data and answers from what it finds, so replies stay grounded in real records instead of guesses.",li:["Intent understanding, then a targeted query","Answers tied to the underlying records","Faster than browsing forms and filters"],on:[1,2,3]},
{ic:"🎭",tab:"Testing",h:"Playwright AI testing",p:"Automated end-to-end tests with Playwright, using AI assistance to write and maintain them, protect the HEAT project and the assistant across changes.",li:["Browser-level end-to-end scenarios","AI-assisted test authoring and upkeep","Regression safety net for releases"],on:[4,5]}];
const FLOW=[["👤","Ask","A natural-language question"],["🧠","LLM","Understands the intent"],["🔎","Search & query layer","Looks up Ivanti HEAT data"],["✅","Answer","Grounded in real records"],["🎭","Playwright","AI-assisted end-to-end tests"],["🚦","Release checks","Regression safety net"]];
const AITAGS=["LLM","Generative AI engineering","Prompt engineering","Natural-language search","Query generation","Playwright","AI-assisted testing","Ivanti HEAT"];
const CATS={data:["Data","#2b2f6b"],bi:["BI","#7a4e9e"],web:["Web","#2f7d6d"],arch:["Arch.","#9a6a10"],ops:["DevOps","#a23b4b"],sec:["Ops & Sec","#37708f"],ai:["AI","#6a3fb5"],pm:["ITSM & Agile","#4d6b2f"]};
const SKILLS=[["Sq","SQL Server","data","dsv"],["Ts","T-SQL","data","ds"],["Pg","PostgreSQL","data","d"],["Or","Oracle","data","ds"],["Ss","SSIS","data","d"],["Tl","Talend","data","dv"],["El","ETL/ELT","data","d"],["Sp","Stored procs","data","ds"],["Rd","Redis","data","ds"],
["Dw","Data Warehouse","bi","d"],["Pb","Power BI","bi","d"],["Jr","Jaspersoft","bi","d"],["Te","TopEase","bi","d"],["An","Data analysis","bi","d"],
["Cs","C#","web","sd"],["N8",".NET 8","web","s"],["Nc",".NET Core","web","s"],["Fw",".NET 4.8","web","s"],["Rs","REST APIs","web","sv"],["Sw","Swagger","web","sv"],["Js","JavaScript","web","s"],["Tp","TypeScript","web","s"],["Ag","Angular","web","s"],["Pw","PowerBuilder","web","s"],
["Ms","Microservices","arch","sv"],["Ca","Clean Arch.","arch","s"],["So","SOLID","arch","s"],["Dd","DDD","arch","s"],["Cq","CQRS","arch","s"],["C4","C4 model","arch","sv"],
["Az","Azure DevOps","ops","sv"],["Ci","CI/CD","ops","sv"],["Yl","YAML","ops","v"],["Jk","Jenkins","ops","v"],["Gt","Git","ops","sv"],["Os","OpenShift","ops","v"],["Dk","Docker","ops","v"],["K8","Kubernetes","ops","v"],["Sn","SonarQube","ops","sv"],["Ut","Unit tests","ops","sv"],["Pl","Playwright","ops","dsv"],["Sh","Bash / PowerShell","ops","v"],
["Jw","JWT / OAuth 2.0","sec","sv"],["Rb","RBAC","sec","sv"],["Kc","Keycloak","sec","v"],["Lk","ELK Stack","sec","dv"],["Dy","Dynatrace","sec","dv"],["Cm","Control-M","sec","dv"],["Rt","Retool","sec","dv"],
["Ll","LLM apps","ai","dsv"],["Gn","GenAI eng.","ai","dsv"],["Nq","NL search & query","ai","dsv"],["Pe","Prompt eng.","ai","dsv"],["Cl","Claude","ai","dsv"],
["It","ITIL 5","pm","dsv"],["Iv","Ivanti Heat","pm","dsv"],["Sc","Scrum","pm","dsv"],["Ji","Jira","pm","dsv"]];
const PROJECTS=[
["🤖","AI assistant on Ivanti HEAT","A conversational assistant built from scratch around an LLM. Users ask in plain language; a search and query layer looks up Ivanti HEAT data and the answer comes back grounded in real records.",["LLM apps","NL search & query","Prompt eng.","GenAI eng.","Ivanti Heat"],"dsv",true],
["🎭","Playwright AI testing on HEAT","End-to-end tests with Playwright, with AI assistance to write and maintain them, covering the Ivanti HEAT project and its assistant.",["Playwright","Ivanti Heat","Unit tests"],"dsv"],
["🚀","CI/CD for 20+ microservices","Azure DevOps (YAML) pipelines alongside Jenkins jobs; Docker images deployed to OpenShift (Kubernetes) for consistent, repeatable releases. Quality gates catch regressions, vulnerabilities and technical debt before delivery.",["Azure DevOps","YAML","Docker","OpenShift","SonarQube","Jenkins","Kubernetes"],"vs"],
["🔄","ETL & data-warehouse migration","Modelled data warehouses and led the move of SSIS/SSAS flows to Talend and of Cognos dashboards to Power BI. Talend ETL keeps internal and external systems synchronised.",["Talend","SSIS","Data Warehouse","Power BI","ETL/ELT"],"d"],
["🗃️","Ivanti Heat ↔ Retool reconciliation","Automated asset reconciliation by connecting the Ivanti Heat CMDB to Retool, so infrastructure data can be trusted.",["Ivanti Heat","Retool"],"dv"],
["⚡","50% faster page loads","Halved page-load time by optimising SQL queries and indexes and adding Redis and MemoryCache.",["SQL Server","T-SQL","Redis"],"ds"],
["🧱","Private Equity transactional backend","Backend services for valuation, subscription and redemption, with SSIS flows and tuned T-SQL procedures for large volumes of banking data, orchestrated by Control-M.",["C#","SSIS","T-SQL","Control-M","Stored procs"],"ds"],
["🌱","ESG & Private Banking apps","ESG indicator and sustainability reporting in .NET; .NET 4.8 to .NET 8 migration; ELIOT (PowerBuilder) workflow refactoring; level-3 support for iKiosk, with JWT/OAuth 2.0 security.",[".NET 8",".NET 4.8","JavaScript","PowerBuilder","JWT / OAuth 2.0","RBAC"],"sv"],
["📡","Observability","Centralised logs and monitoring with ELK Stack and Dynatrace to analyse incidents and slow SQL queries.",["ELK Stack","Dynatrace"],"dv"],
["🧩","Monolith → microservices","Final-year project: moved the GCA back-office middleware to scalable microservices; UML analysis, C#/.NET components with Oracle integration.",["Microservices","C#","Oracle"],"s"]];
const LANGS=[["Arabic 🇹🇳","Native",100],["English 🇬🇧","B2",70],["French 🇫🇷","B2",70],["German 🇩🇪","B2",70]];
const CERTS=["🏅 ITIL® 5 Foundation · Certificate","🤖 Generative AI engineering · Training","Scrum Master · Scrum.org","C# Advanced Topics · Udemy","Advanced SQL · Clevory Training",".NET Expert · Advancia Training","Talend Basics · Keyrus Academy"];
const EDU=[["🎓","Engineering degree, software engineering","ESPRIT, Tunis · 2019 – 2022"],["⚙️","Bachelor's in mechanical engineering","ISET Bizerte · 2016 – 2019"],["🤝","Community","Vice-president, Mechanical Engineering Club (CAD projects, technical training) · Treasurer, Enactus ISET Bizerte (social-impact budgets) · Member, Securinets INSAT (cybersecurity, ethical hacking)"]];
const STATS=[[4,"+","years in finance 🏦"],[20,"+","microservice pipelines 🚀"],[50,"%","faster page loads ⚡"],[1,"","LLM assistant on Ivanti HEAT 🤖"],[7,"","certifications & trainings 📜"]];
const SUG=["Are you ITIL certified?","What AI work did you do on Ivanti HEAT?","How do you test with Playwright?","Which DevOps tools do you use?","How can I contact you?"];
/* ====== helpers ====== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],root=document.documentElement;
const LC={data:"d",soft:"s",dev:"v"},LK={d:"data",s:"soft",v:"dev"};let lens="data",shown=false;
root.classList.add("js");
$$("[data-id]").forEach(i=>i.src=A.id);
const io=(fn,o)=>"IntersectionObserver" in window?new IntersectionObserver(fn,o):{observe(){}};
$$(".rv").forEach(e=>e.classList.add("in"));
if("IntersectionObserver" in window){const r=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");r.unobserve(e.target)}}),{threshold:.12});$$(".rv").forEach(e=>{e.classList.remove("in");r.observe(e)})}
$("#mq").innerHTML=[...Array(2)].map(()=>["SQL Server","T-SQL","SSIS","Talend","Control-M","C#","NET 8","REST APIs","Clean Architecture","Azure DevOps","Docker","OpenShift","SonarQube","ELK","Dynatrace","Ivanti HEAT","LLM","Playwright","ITIL 5"].map(t=>`<span>✦ ${t}</span>`).join("")).join("");
/* stats */
$("#stats").innerHTML=STATS.map(s=>`<div><b data-n="${s[0]}" data-s="${s[1]}">0${s[1]}</b>${s[2]}</div>`).join("");
io(([e])=>{if(!e.isIntersecting)return;$$("[data-n]").forEach(b=>{const n=+b.dataset.n,t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/1200);b.textContent=Math.round(n*p)+b.dataset.s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)})},{threshold:.6}).observe($("#stats"));
/* lens tabs */
$("#lens").innerHTML=Object.entries(LENS).map(([k,v])=>`<button class="chip2" data-l="${k}" aria-pressed="false">${v.ic} ${v.tab}</button>`).join("");
$("#lens").onclick=e=>{const b=e.target.closest("button");b&&setLens(b.dataset.l)};
/* talking portrait */
const av=$("#avatar"),say=$("#say");let timer;
function type(t){clearInterval(timer);say.textContent="";let i=0;av.classList.add("talk");timer=setInterval(()=>{say.textContent=t.slice(0,++i);if(i>=t.length){clearInterval(timer);av.classList.remove("talk")}},34)}
type(SAY_T);
$("#hear").onclick=()=>{if(!("speechSynthesis" in window)){type(SAY_T);return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(SAY_S);u.lang="en-US";u.rate=.97;
u.onstart=()=>{clearInterval(timer);say.textContent=SAY_T;av.classList.add("talk")};u.onend=u.onerror=()=>av.classList.remove("talk");speechSynthesis.speak(u)};
/* ID card */
const idc=$("#idcard");idc.onclick=()=>idc.classList.toggle("flip");
idc.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;const r=idc.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;idc.classList.add("tilt");idc.style.setProperty("--ry",x*14+"deg");idc.style.setProperty("--rx",-y*14+"deg")});
idc.addEventListener("pointerleave",()=>{idc.classList.remove("tilt");idc.style.setProperty("--ry","0deg");idc.style.setProperty("--rx","0deg")});
/* AI section */
$("#aitabs").innerHTML=AI.map((a,i)=>`<button class="chip2" role="tab" data-i="${i}" aria-selected="false">${a.ic} ${a.tab}</button>`).join("");
$("#flow").innerHTML=FLOW.map((f,i)=>`${i===4?'<div class="fa">· · ·</div>':i?'<div class="fa">↓</div>':""}<div class="fs" data-i="${i}"><span>${f[0]}</span><div><b>${f[1]}</b><small>${f[2]}</small></div></div>`).join("");
$("#aitags").innerHTML=AITAGS.map(t=>`<span>${t}</span>`).join("");
function aiTab(i){const a=AI[i];$$("#aitabs button").forEach((b,j)=>{b.classList.toggle("on",j===i);b.setAttribute("aria-selected",j===i)});
$("#aipanel").innerHTML=`<h3>${a.ic} ${a.h}</h3><p>${a.p}</p><ul>${a.li.map(l=>`<li>${l}</li>`).join("")}</ul>`;$$(".fs").forEach(f=>f.classList.toggle("on",a.on.includes(+f.dataset.i)))}
$("#aitabs").onclick=e=>{const b=e.target.closest("button");b&&aiTab(+b.dataset.i)};aiTab(0);
/* skills table */
const pt=$("#ptable"),det=$("#detail"),fl=$("#filters");let cur="all";
pt.innerHTML=SKILLS.map((s,i)=>`<button class="tile" data-i="${i}" data-c="${s[2]}" style="background:${CATS[s[2]][1]}" aria-label="${s[1]}"><i>${i+1}</i><b>${s[0]}</b><span>${s[1]}</span></button>`).join("");
const show=i=>{const s=SKILLS[i],u=PROJECTS.filter(p=>p[3].includes(s[1])).map(p=>p[1]);
det.innerHTML=`<b>${s[0]} · ${s[1]}</b><p>${CATS[s[2]][0]} · relevant for ${[...s[3]].map(c=>LENS[LK[c]].ic+" "+LENS[LK[c]].tab).join(", ")}</p><p>${u.length?"Used in: "+u.join("; "):"Part of my day-to-day toolbox."}</p>`;
$$(".tile").forEach(t=>t.classList.toggle("sel",+t.dataset.i===i))};
pt.onclick=e=>{const t=e.target.closest(".tile");t&&show(+t.dataset.i)};pt.onmouseover=e=>{const t=e.target.closest(".tile");t&&show(+t.dataset.i)};
fl.innerHTML=[["all","All ✨"],...Object.entries(CATS).map(([k,v])=>[k,v[0]])].map(f=>`<button class="chip2${f[0]==="all"?" on":""}" data-f="${f[0]}">${f[1]}</button>`).join("");
const paintTiles=()=>$$(".tile").forEach(t=>{const s=SKILLS[t.dataset.i];t.classList.toggle("dim",cur!=="all"&&s[2]!==cur);t.style.opacity=s[3].includes(LC[lens])?"":".45"});
fl.onclick=e=>{const b=e.target.closest("button");if(!b)return;cur=b.dataset.f;$$("#filters button").forEach(x=>x.classList.toggle("on",x===b));paintTiles()};
/* radar */
const cnt=k=>SKILLS.filter(s=>s[2]===k).length,mx=Math.max(...Object.keys(CATS).map(cnt));
function radar(p){const c=$("#radar"),d=devicePixelRatio||1,W=c.clientWidth,H=320;c.width=W*d;c.height=H*d;const x=c.getContext("2d");x.scale(d,d);
const cs=getComputedStyle(root),g=n=>cs.getPropertyValue(n).trim(),keys=Object.keys(CATS),n=keys.length,cx=W/2,cy=H/2+4,R=Math.min(W,H)/2-56,q=(i,r)=>[cx+Math.cos(i/n*6.2832-1.5708)*r,cy+Math.sin(i/n*6.2832-1.5708)*r];
x.strokeStyle=g("--line");[.25,.5,.75,1].forEach(v=>{x.beginPath();keys.forEach((k,i)=>{const[a,b]=q(i,R*v);i?x.lineTo(a,b):x.moveTo(a,b)});x.closePath();x.stroke()});
x.fillStyle=g("--ink");x.font="600 13px Inter Tight,system-ui,sans-serif";x.textAlign="center";keys.forEach((k,i)=>{const[a,b]=q(i,R+26);x.fillText(CATS[k][0],a,b+4)});
x.beginPath();keys.forEach((k,i)=>{const[a,b]=q(i,R*cnt(k)/mx*p);i?x.lineTo(a,b):x.moveTo(a,b)});x.closePath();x.fillStyle="rgba(110,120,230,.28)";x.fill();x.strokeStyle=g("--acc");x.lineWidth=2.5;x.stroke();
keys.forEach((k,i)=>{const[a,b]=q(i,R*cnt(k)/mx*p);x.beginPath();x.arc(a,b,4,0,6.3);x.fillStyle=CATS[k][1];x.fill()})}
$("#langs").innerHTML=LANGS.map(l=>`<div class="bar"><div><span>${l[0]}</span><span>${l[1]}</span></div><div class="meter"><i data-w="${l[2]}"></i></div></div>`).join("");
io(([e])=>{if(e.isIntersecting&&!shown){shown=true;$$(".meter i[data-w]").forEach(m=>m.style.width=m.dataset.w+"%");const t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/1100);radar(1-Math.pow(1-p,3));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}},{threshold:.25}).observe($(".charts"));
addEventListener("resize",()=>shown&&radar(1));
/* timeline + projects + lens switch */
function render(){const L=LENS[lens];
$("#timeline").innerHTML=EXP.map(x=>`<li data-e="💼"><h3>${x.role||L.exp}</h3><span class="when">${x.team?x.team+" · ":"ODDO BHF · "}${x.when}</span><ul class="bul">${(x.b[lens]||x.b.all).map(t=>`<li>${t}</li>`).join("")}</ul></li>`).join("");
const rel=[...PROJECTS].sort((a,b)=>(!!b[5]-!!a[5])||(b[4].includes(LC[lens])-a[4].includes(LC[lens])));
$("#projgrid").innerHTML=rel.map(p=>`<article class="card pc${p[5]?" feat":""}"><span class="em">${p[0]}</span>${p[4].includes(LC[lens])?`<span class="star">⭐ Top for ${L.tab}</span>`:""}<h3>${p[1]}</h3><p>${p[2]}</p><div class="tags">${p[3].map(t=>`<span>${t}</span>`).join("")}</div></article>`).join("")}
function setLens(k){lens=k;const L=LENS[k];$$("#lens button").forEach(b=>{const on=b.dataset.l===k;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});
$("#role").textContent=L.ic+" "+L.role;$("#pitch").textContent=L.pitch;$("#idrole").textContent=L.role;$("#idlist").innerHTML=L.pts.map(t=>`<li>${t}</li>`).join("");
$("#cvdl").href=A.cv[k];$("#cvdl").setAttribute("download",L.file);render();paintTiles()}
$("#certs").innerHTML=CERTS.map((c,i)=>`<li${i<2?' class="hl"':""}>${c}</li>`).join("");
$("#edu").innerHTML=EDU.map(x=>`<figure class="card"><h3>${x[0]} ${x[1]}</h3><p>${x[2]}</p></figure>`).join("");
/* contact */
$("#links").innerHTML=[["✉️ "+CFG.email,"mailto:"+CFG.email],["📞 "+CFG.phone,"tel:"+CFG.phone.replace(/\s/g,"")],["🔗 LinkedIn",CFG.linkedin]].map(l=>`<a class="btn ghost" href="${l[1]}" target="_blank" rel="noopener noreferrer">${l[0]}</a>`).join("");
$("#cvs").innerHTML=Object.entries(LENS).map(([k,v])=>`<a class="btn" href="${A.cv[k]}" download="${v.file}">📄 CV · ${v.tab}</a>`).join("");
$("#form").onsubmit=e=>{e.preventDefault();location.href=`mailto:${CFG.email}?subject=${encodeURIComponent("Opportunity for Wael Halila: "+$("#fn").value.slice(0,120))}&body=${encodeURIComponent($("#fm").value.slice(0,2000))}`};
$("#yr").textContent=new Date().getFullYear();
/* ====== Ask AI ====== */
const STOP=new Set("a an the and or of to in on for with is are was were be been do does did you your i me my we what which who how where when why can could would should about tell give show any have has had at as by from it its this that these those not no yes also".split(" "));
const tok=t=>t.toLowerCase().replace(/[^a-z0-9+#.\u00c0-\u017f ]/g," ").split(/\s+/).filter(w=>w&&!STOP.has(w)).map(w=>w.replace(/^certif\w*/,"certif").replace(/(ing|es|s)$/,""));
const KB=[{t:"About Wael",x:"Engineer with 4+ years in financial services across data, .NET, DevOps and AI. Based in Tunis, Tunisia, open to opportunities. Works at ODDO BHF since September 2022.",s:"about"},
{t:"Contact",x:`Email ${CFG.email}, phone ${CFG.phone}, LinkedIn. CV downloads (Data, .NET, DevOps) are in the contact section. Reach out to hire or recruit.`,s:"contact"},
{t:"Languages",x:"Arabic is native; English, French and German are at B2 level.",s:"credentials"}];
Object.values(LENS).forEach(L=>KB.push({t:"Profile: "+L.role,x:L.pitch,s:"home"}));
EXP.forEach(e=>{const seen=new Set();Object.values(e.b).flat().forEach(b=>{if(!seen.has(b)){seen.add(b);KB.push({t:e.team||"Internship",x:b,s:"experience"})}})});
PROJECTS.forEach(p=>KB.push({t:p[1],x:p[2]+" Tools: "+p[3].join(", "),s:p[5]?"ai":"projects"}));
AI.forEach(a=>KB.push({t:"AI on Ivanti HEAT: "+a.tab,x:a.p+" "+a.li.join(". "),s:"ai"}));
KB.push({t:"ITIL certification",x:"Yes, I hold the ITIL® 5 Foundation certificate, which supports my ITSM work on Ivanti HEAT.",s:"credentials"},{t:"Generative AI engineering training",x:"I am trained in generative AI engineering: LLM applications, prompt engineering and natural-language search and querying.",s:"credentials"});
CERTS.forEach(c=>KB.push({t:"Certifications and training",x:c,s:"credentials"}));EDU.forEach(e=>KB.push({t:e[1],x:e[2],s:"credentials"}));
Object.entries(CATS).forEach(([k,v])=>KB.push({t:"Skills: "+v[0],x:SKILLS.filter(s=>s[2]===k).map(s=>s[1]).join(", "),s:"skills"}));
const docs=KB.map(d=>({d,w:tok(d.t+" "+d.x),tt:tok(d.t)})),df={};docs.forEach(o=>new Set(o.w).forEach(w=>df[w]=(df[w]||0)+1));
const idf=w=>Math.log(1+docs.length/(df[w]||.5));
function search(q){const qt=[...new Set(tok(q))];if(!qt.length)return[];return docs.map(o=>{let s=0;qt.forEach(w=>{const tf=o.w.filter(x=>x===w).length;if(tf)s+=idf(w)*(1+Math.log(tf));if(o.tt.includes(w))s+=idf(w)});return[o.d,s]}).filter(r=>r[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,3)}
const ask=$("#ask"),msgs=$("#msgs");
const el=(c,t)=>{const n=document.createElement("div");n.className="m "+c;if(t)n.textContent=t;return n};
function reply(q){const r=search(q),n=el("a");
if(!r.length){n.textContent="I couldn't find that in this portfolio. Try skills, certifications, Ivanti HEAT AI, DevOps or contact, or email Wael directly.";return n}
const p=document.createElement("p");p.textContent=r[0][0].x;n.append(p);
const rest=r.slice(1).filter(x=>x[1]>r[0][1]*.45);if(rest.length){const ul=document.createElement("ul");rest.forEach(x=>{const li=document.createElement("li");li.textContent=x[0].t+": "+x[0].x.slice(0,100)+(x[0].x.length>100?"…":"");ul.append(li)});n.append(ul)}
const a=document.createElement("a");a.href="#"+r[0][0].s;a.textContent="Open section ↗";a.onclick=()=>ask.close();n.append(a);return n}
function send(q){q=q.trim().slice(0,200);if(!q)return;msgs.append(el("u",q));const w=el("a","…");msgs.append(w);msgs.scrollTop=msgs.scrollHeight;
setTimeout(()=>{w.replaceWith(reply(q));msgs.scrollTop=msgs.scrollHeight},350)}
$("#sug").innerHTML=SUG.map(s=>`<button type="button">${s}</button>`).join("");$("#sug").onclick=e=>{const b=e.target.closest("button");b&&send(b.textContent)};
$("#askf").onsubmit=e=>{e.preventDefault();send($("#q").value);$("#q").value=""};
const openAsk=()=>{if(!msgs.children.length)msgs.append(el("a","Hi! I search this portfolio for you. Ask about Wael's skills, projects, certifications or the AI assistant he built on Ivanti HEAT."));ask.showModal();$("#q").focus()};
$("#askbtn").onclick=openAsk;$("#askx").onclick=()=>ask.close();ask.onclick=e=>{if(e.target===ask)ask.close()};
addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openAsk()}});
/* ====== nav, theme, progress, share ====== */
const menu=$("#menu"),bg=$("#burger");bg.onclick=()=>{const o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o)};menu.onclick=e=>{if(e.target.closest("a")){menu.classList.remove("open");bg.setAttribute("aria-expanded","false")}};
const links=$$("#menu a"),secs=["about","experience","ai","skills","projects","credentials","contact"].map(id=>document.getElementById(id));
if("IntersectionObserver" in window){const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.setAttribute("aria-current",l.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});secs.forEach(s=>s&&so.observe(s))}
const tb=$("#theme"),dark=()=>root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
try{const s=localStorage.getItem("theme");if(s==="dark"||s==="light")root.dataset.theme=s}catch(e){}
const paint=()=>{tb.textContent=dark()?"☀️":"🌙";shown&&radar(1)};paint();
tb.onclick=()=>{root.dataset.theme=dark()?"light":"dark";try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}paint()};
matchMedia("(prefers-color-scheme:dark)").onchange=paint;
const bar=$("#bar");addEventListener("scroll",()=>{bar.style.width=scrollY/Math.max(1,root.scrollHeight-innerHeight)*100+"%"},{passive:true});
$("#share").onclick=async()=>{const d={title:document.title,url:location.href};try{if(navigator.share)await navigator.share(d);else{await navigator.clipboard.writeText(d.url);$("#share").textContent="✅ Link copied"}}catch(e){}};
setLens("data");

/* avatar: pointer-follow, blink, ID card avatar/photo switch */
(()=>{const hero=$(".avatar-svg"),idp=$(".idp");if(!hero||!idp)return;
const c=hero.cloneNode(true);c.classList.remove("cut");c.classList.add("avatar-clone");c.setAttribute("viewBox","40 60 320 300");c.setAttribute("preserveAspectRatio","xMidYMid slice");c.removeAttribute("role");c.setAttribute("aria-hidden","true");idp.prepend(c);
const mode=$("#idmode");mode.onclick=e=>{e.stopPropagation();const p=idp.classList.toggle("photo");mode.textContent=p?"🎭 Switch to avatar":"📷 Switch to photo"};
const av=$("#avatar");new MutationObserver(()=>idp.classList.toggle("talk",av.classList.contains("talk"))).observe(av,{attributes:true,attributeFilter:["class"]});
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
const svgs=[hero,c];let tx=0,ty=0,cx=0,cy=0;addEventListener("pointermove",e=>{tx=e.clientX/innerWidth*2-1;ty=e.clientY/innerHeight*2-1},{passive:true});
(function loop(){if(!document.hidden&&(Math.abs(tx-cx)>.001||Math.abs(ty-cy)>.001)){cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;svgs.forEach(s=>{s.style.setProperty("--hr",cx*4+"deg");s.style.setProperty("--hxp",cx*5+"px");s.style.setProperty("--ex",cx*4+"px");s.style.setProperty("--ey",cy*3+"px")})}requestAnimationFrame(loop)})();
(function blink(){setTimeout(()=>{svgs.forEach(s=>s.style.setProperty("--bl",1));setTimeout(()=>{svgs.forEach(s=>s.style.setProperty("--bl",0));blink()},120)},2200+Math.random()*3200)})()})();