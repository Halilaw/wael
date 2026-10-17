"use strict";
/* Wael Halila portfolio 2026. No dependencies, no network calls, no inline code (strict CSP).
   Content lives in data.js. This file is behaviour only. */
(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement,clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches,FINE=matchMedia("(pointer: fine)").matches;
const KEYS=["data","soft","dev"],SECS=["about","experience","ai","skills","projects","credentials","contact"];
const ic=n=>`<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const MAIL=CFG.mail.join("@"),TEL=CFG.tel.join(" "),TELRAW=CFG.tel.join("");
const PRESET=root.dataset.preset==="1",PINNED=!PRESET&&!RM;
let lens=root.dataset.lens||"data",ready=false,shareK=lens,shown=false;
const scene=$("#scene"),rail=$("#rail"),hint=$("#hint"),holo=$("#holo"),avatar=$("#avatar"),bar=$("#bar"),toTop=$("#toTop");
if(!PINNED)scene.setAttribute("data-static","");

const toast=t=>{const n=document.createElement("div");n.className="toast";n.setAttribute("role","status");n.textContent=t;document.body.append(n);setTimeout(()=>n.remove(),2500)};
const io=(fn,o)=>"IntersectionObserver" in window?new IntersectionObserver(fn,o):{observe(){},unobserve(){}};

/* ---------- rolling text ---------- */
function roll(el,html,instant){
  if(instant||RM){el.innerHTML=`<span class="r">${html}</span>`;return}
  const old=el.querySelector(".r:not(.out)");
  const n=document.createElement("span");n.className="r"+(old?" in":"");n.innerHTML=html;el.append(n);
  if(old){old.classList.remove("in");old.classList.add("out");setTimeout(()=>old.remove(),620)}
}

/* ---------- static blocks ---------- */
$("#mq").innerHTML=[0,1].map(()=>["SQL Server","T-SQL","SSIS","Talend","Control-M","C#",".NET 8","REST APIs","Clean Architecture","Azure DevOps","Docker","OpenShift","SonarQube","ELK","Dynatrace","Ivanti HEAT","LLM","Playwright","ITIL 5"].map(t=>`<span>${t}</span>`).join("")).join("");
$("#stats").innerHTML=STATS.map(s=>`<div><b data-n="${s[0]}" data-s="${s[1]}">0${s[1]}</b>${esc(s[2])}</div>`).join("");
io(([e])=>{if(!e.isIntersecting)return;$$("[data-n]").forEach(b=>{const n=+b.dataset.n,t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/1300),k=1-Math.pow(1-p,3);b.textContent=Math.round(n*(RM?1:k))+b.dataset.s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)})},{threshold:.6}).observe($("#stats"));
$("#certs").innerHTML=CERTS.map((c,i)=>`<li${i<2?' class="hl"':""}>${ic("award")}<span>${esc(c)}</span></li>`).join("");
$("#edu").innerHTML=EDU.map(x=>`<figure class="panel"><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p></figure>`).join("");
$("#yr").textContent=new Date().getFullYear();

/* ---------- ID card ---------- */
const idc=$("#idcard");idc.onclick=()=>idc.classList.toggle("flip");
idc.addEventListener("pointermove",e=>{if(e.pointerType==="touch"||RM)return;const r=idc.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;idc.classList.add("tilt");idc.style.setProperty("--ry",x*16+"deg");idc.style.setProperty("--rx",-y*16+"deg")});
idc.addEventListener("pointerleave",()=>{idc.classList.remove("tilt");idc.style.setProperty("--ry","0deg");idc.style.setProperty("--rx","0deg")});

/* ---------- AI section ---------- */
$("#aitabs").innerHTML=AI.map((a,i)=>`<button class="chip" type="button" role="tab" data-i="${i}" aria-selected="false">${ic(a.ic)}${esc(a.tab)}</button>`).join("");
$("#flow").innerHTML=FLOW.map((f,i)=>`<div class="fs" data-i="${i}"><span class="n">${i+1}</span><div><b>${esc(f[1])}</b><small>${esc(f[2])}</small></div></div>`).join("");
$("#aitags").innerHTML=AITAGS.map(t=>`<span>${esc(t)}</span>`).join("");
function aiTab(i){const a=AI[i];$$("#aitabs button").forEach((b,j)=>b.setAttribute("aria-selected",j===i));
  $("#aipanel").innerHTML=`<h3>${esc(a.h)}</h3><p>${esc(a.p)}</p><ul>${a.li.map(l=>`<li>${esc(l)}</li>`).join("")}</ul>`;
  $$(".fs").forEach(f=>f.classList.toggle("on",a.on.includes(+f.dataset.i)))}
$("#aitabs").onclick=e=>{const b=e.target.closest("button");b&&aiTab(+b.dataset.i)};aiTab(0);

/* ---------- skills ---------- */
const pt=$("#ptable"),det=$("#detail"),fl=$("#filters");let cur="all";
pt.innerHTML=SKILLS.map((s,i)=>`<button class="tile" type="button" data-i="${i}" aria-label="${esc(s[1])}"><b>${esc(s[0])}</b><span>${esc(s[1])}</span></button>`).join("");
$$(".tile",pt).forEach(t=>t.style.setProperty("--c",CATS[SKILLS[t.dataset.i][2]][1]));
const LC={data:"d",soft:"s",dev:"v"},LK={d:"data",s:"soft",v:"dev"};
function showSkill(i){const s=SKILLS[i],u=PROJECTS.filter(p=>p[3].includes(s[1])).map(p=>p[1]);
  det.innerHTML=`<b>${esc(s[1])}</b><p>${esc(CATS[s[2]][0])} · relevant for ${[...s[3]].map(c=>LENS[LK[c]].tab).join(", ")}</p><p>${u.length?"Used in: "+esc(u.join("; ")):"Part of my day-to-day toolbox."}</p>`;
  $$(".tile",pt).forEach(t=>t.classList.toggle("sel",+t.dataset.i===i))}
pt.onclick=e=>{const t=e.target.closest(".tile");t&&showSkill(+t.dataset.i)};
pt.onmouseover=e=>{const t=e.target.closest(".tile");t&&showSkill(+t.dataset.i)};
fl.innerHTML=[["all","All"],...Object.entries(CATS).map(([k,v])=>[k,v[0]])].map(f=>`<button class="chip" type="button" data-f="${f[0]}" aria-pressed="${f[0]==="all"}">${esc(f[1])}</button>`).join("");
const paintTiles=()=>$$(".tile",pt).forEach(t=>{const s=SKILLS[t.dataset.i];t.classList.toggle("dim",cur!=="all"&&s[2]!==cur);t.style.opacity=s[3].includes(LC[lens])?"":".42"});
fl.onclick=e=>{const b=e.target.closest("button");if(!b)return;cur=b.dataset.f;$$("button",fl).forEach(x=>x.setAttribute("aria-pressed",x===b));paintTiles()};

/* ---------- charts ---------- */
const cnt=k=>SKILLS.filter(s=>s[2]===k).length,mx=Math.max(...Object.keys(CATS).map(cnt));
function radar(p){const c=$("#radar"),d=devicePixelRatio||1,W=c.clientWidth,H=320;if(!W)return;c.width=W*d;c.height=H*d;const x=c.getContext("2d");x.scale(d,d);
  const cs=getComputedStyle(root),g=n=>cs.getPropertyValue(n).trim(),keys=Object.keys(CATS),n=keys.length,cx=W/2,cy=H/2+4,R=Math.min(W,H)/2-58,q=(i,r)=>[cx+Math.cos(i/n*6.2832-1.5708)*r,cy+Math.sin(i/n*6.2832-1.5708)*r];
  x.strokeStyle=g("--line2");x.lineWidth=1;[.25,.5,.75,1].forEach(v=>{x.beginPath();keys.forEach((k,i)=>{const[a,b]=q(i,R*v);i?x.lineTo(a,b):x.moveTo(a,b)});x.closePath();x.stroke()});
  x.fillStyle=g("--mut");x.font="600 13px Inter,system-ui,sans-serif";x.textAlign="center";keys.forEach((k,i)=>{const[a,b]=q(i,R+28);x.fillText(CATS[k][0],a,b+4)});
  const acc=g("--acc")||"#35d8ff";x.beginPath();keys.forEach((k,i)=>{const[a,b]=q(i,R*cnt(k)/mx*p);i?x.lineTo(a,b):x.moveTo(a,b)});x.closePath();x.globalAlpha=.2;x.fillStyle=acc;x.fill();x.globalAlpha=1;x.strokeStyle=acc;x.lineWidth=2.2;x.stroke();
  keys.forEach((k,i)=>{const[a,b]=q(i,R*cnt(k)/mx*p);x.beginPath();x.arc(a,b,4.5,0,6.3);x.fillStyle=CATS[k][1];x.fill()})}
$("#langs").innerHTML=LANGS.map(l=>`<div class="bar"><div><span>${esc(l[0])}</span><span>${esc(l[1])}</span></div><div class="meter"><i data-w="${l[2]}"></i></div></div>`).join("");
io(([e])=>{if(e.isIntersecting&&!shown){shown=true;$$(".meter i[data-w]").forEach(m=>m.style.width=m.dataset.w+"%");const t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/1100);radar(RM?1:1-Math.pow(1-p,3));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}},{threshold:.25}).observe($(".charts"));
addEventListener("resize",()=>shown&&radar(1));

/* ---------- profile-dependent content ---------- */
function render(){const L=LENS[lens];
  $("#timeline").innerHTML=EXP.map(x=>`<li><div class="when">${esc(x.when)}</div><div><h3>${esc(x.role||L.exp)}</h3><p class="team">${esc(x.team||"ODDO BHF")}</p><ul class="bul">${(x.b[lens]||x.b.all).map(t=>`<li>${esc(t)}</li>`).join("")}</ul></div></li>`).join("");
  const rel=[...PROJECTS].sort((a,b)=>(!!b[5]-!!a[5])||(b[4].includes(LC[lens])-a[4].includes(LC[lens])));
  $("#projgrid").innerHTML=rel.map(p=>`<article class="panel pc${p[5]?" feat":""}"><span class="pi">${ic(p[0])}</span>${p[4].includes(LC[lens])?`<span class="match">Top for ${esc(L.tab)}</span>`:""}<h3>${esc(p[1])}</h3><p>${esc(p[2])}</p><div class="tags">${p[3].map(t=>`<span>${esc(t)}</span>`).join("")}</div></article>`).join("");
  $$(".tl>li,.pc").forEach(e=>e.classList.add("rv","in"))}
$("#projgrid").addEventListener("pointermove",e=>{const c=e.target.closest(".pc");if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")});

/* ---------- terminal ---------- */
const term=$("#term");let tTok=0;
async function typeTerm(rows){const my=++tTok;term.textContent="";
  for(const [cls,text] of rows){if(my!==tTok)return;const row=document.createElement("div");row.className="ln "+cls;const p=document.createElement("span");p.className="p";p.textContent=cls==="cmd"?"$":">";const t=document.createElement("span");row.append(p,t);term.append(row);
    if(RM){t.textContent=text;continue}
    const car=document.createElement("i");car.className="caret";row.append(car);
    for(let i=1;i<=text.length;i++){if(my!==tTok)return;t.textContent=text.slice(0,i);await sleep(cls==="cmd"?30:11)}
    car.remove();await sleep(cls==="cmd"?140:30)}
  if(my===tTok){const last=term.lastElementChild;if(last&&!RM){const c=document.createElement("i");c.className="caret";last.append(c)}}}

/* ---------- the profile switch ---------- */
const railBtns=KEYS.map(k=>{const b=document.createElement("button");b.type="button";b.dataset.k=k;b.setAttribute("aria-pressed","false");b.innerHTML=`${ic(LENS[k].ic)}<span>${esc(LENS[k].tab)}</span><i class="fill"></i>`;rail.append(b);return b});
rail.onclick=e=>{const b=e.target.closest("button");b&&go(b.dataset.k,"click")};
const pips=$$("#pbadge .pips i"),pbTxt=$("#pbTxt"),pbIc=$("#pbIc use");
function sceneActive(){const r=scene.getBoundingClientRect();return PINNED&&r.top<innerHeight*.9&&r.bottom>innerHeight*.5}
let manual=null;
function go(k,src){
  if(sceneActive()){const i=KEYS.indexOf(k),span=scene.offsetHeight-innerHeight,top=scene.getBoundingClientRect().top+scrollY,p=i===0?0:(i+.5)/3;
    manual={k,src};scrollTo({top:top+p*span+1,behavior:RM||src==="cmd"?"auto":"smooth"})}
  else setLens(k,{src});
}
["wheel","touchstart","keydown"].forEach(t=>addEventListener(t,()=>{manual=null},{passive:true}));
function setLens(k,{src="init"}={}){
  if(!LENS[k])k="data";
  const first=!ready,changed=k!==lens;
  if(!changed&&!first)return;
  lens=k;root.dataset.lens=k;const L=LENS[k],i=KEYS.indexOf(k);
  rail.style.setProperty("--i",i);railBtns.forEach((b,j)=>b.setAttribute("aria-pressed",j===i));pips.forEach((p,j)=>p.classList.toggle("on",j===i));
  const [r1,r2]=L.role.split(" · ");
  roll($("#role"),`<em>${esc(r1)}</em>${r2?`<small>${esc(r2)}</small>`:""}`,first);
  roll(pbTxt,esc(L.tab),first);pbIc.setAttribute("href","#i-"+L.ic);
  $("#pitch").innerHTML=`<span>${esc(L.pitch)}</span>`;
  $$(".orb .rollbox").forEach((el,j)=>setTimeout(()=>roll(el,esc(L.orbit[j]),first),first||RM?0:j*70));
  typeTerm([["cmd","wael --profile "+L.slug],...L.pts.slice(0,4).map(t=>["out",t])]);$("#termTag").textContent=L.slug;
  const a=$("#cvdl");a.href=CFG.cv[k];a.setAttribute("download",L.file);$("#cvlbl").textContent="Download CV · "+L.tab;
  $("#idrole").textContent=L.role;$("#idlist").innerHTML=L.pts.map(t=>`<li>${esc(t)}</li>`).join("");
  if(!first&&!RM){holo.classList.remove("flash");void holo.offsetWidth;holo.classList.add("flash")}
  const paint=()=>{render();paintTiles()};
  if(!first&&src==="cmd"&&document.startViewTransition&&!RM)document.startViewTransition(paint);else paint();
  if(src==="click"||src==="cmd"||src==="badge"){try{history.replaceState(null,"",location.pathname+"?lens="+k+location.hash)}catch(e){}}
  shareK=k;updateShare();
  if(shown)setTimeout(()=>radar(1),950);
  ready=true;
}
$("#pbadge").onclick=()=>go(KEYS[(KEYS.indexOf(lens)+1)%3],"badge");

/* ---------- scroll: scene, progress, nav ---------- */
const menu=$("#menu"),ind=$(".ind",menu),links=$$("a",menu);let curSec="";
function moveInd(){const a=links.find(l=>l.getAttribute("aria-current")==="true");if(!a||getComputedStyle(ind).display==="none"){ind.style.setProperty("--o",0);return}
  ind.style.setProperty("--x",a.offsetLeft+"px");ind.style.setProperty("--w2",a.offsetWidth+"px");ind.style.setProperty("--o",1)}
if("IntersectionObserver" in window){const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){curSec=e.target.id;links.forEach(l=>l.setAttribute("aria-current",l.getAttribute("href")==="#"+curSec));moveInd()}}),{rootMargin:"-45% 0px -50% 0px"});SECS.forEach(s=>so.observe(document.getElementById(s)))}
addEventListener("resize",moveInd);
let tick=false;
function onScroll(){tick=false;const y=scrollY,h=Math.max(1,root.scrollHeight-innerHeight);
  bar.style.transform=`scaleX(${y/h})`;toTop.classList.toggle("show",y>innerHeight*1.3);
  if(!PINNED)return;
  const r=scene.getBoundingClientRect(),span=Math.max(1,r.height-innerHeight),p=clamp(-r.top/span,0,1);
  hint.classList.toggle("off",p>.015);
  railBtns.forEach((b,i)=>b.style.setProperty("--p",clamp(p*3-i,0,1).toFixed(3)));
  if(r.top<innerHeight*.9&&r.bottom>innerHeight*.5){const k=KEYS[Math.min(2,Math.floor(p*3))];setLens(k,{src:manual?manual.src:"scroll"});if(manual&&manual.k===k)manual=null}}
addEventListener("scroll",()=>{if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
toTop.onclick=()=>scrollTo({top:0,behavior:RM?"auto":"smooth"});
const burger=$("#burger");burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o);burger.querySelector("use").setAttribute("href",o?"#i-close":"#i-menu")};
menu.onclick=e=>{if(e.target.closest("a")){menu.classList.remove("open");burger.setAttribute("aria-expanded","false");burger.querySelector("use").setAttribute("href","#i-menu")}};

/* reveal on scroll */
if("IntersectionObserver" in window){const r=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");r.unobserve(e.target)}}),{threshold:.1,rootMargin:"0px 0px -6% 0px"});
  window.__rv=r;$$(".rv").forEach(e=>r.observe(e))}else $$(".rv").forEach(e=>e.classList.add("in"));

/* ---------- avatar: tilt, intro, voice, clock ---------- */
if(FINE&&!RM){const hero=$(".hero");hero.addEventListener("pointermove",e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;holo.style.setProperty("--ry",(x*16).toFixed(2)+"deg");holo.style.setProperty("--rx",(-y*11).toFixed(2)+"deg")});
  hero.addEventListener("pointerleave",()=>{holo.style.setProperty("--ry","0deg");holo.style.setProperty("--rx","0deg")})}
if(!RM){$$("#name span").forEach((s,si)=>{const t=s.textContent;s.textContent="";[...t].forEach((c,i)=>{const l=document.createElement("i");l.className="lt";l.textContent=c;l.style.setProperty("--d",si*5+i);s.append(l)})})}
$("#hear").onclick=()=>{const b=avatar;if(!("speechSynthesis" in window)){toast("Voice is not available in this browser");return}
  if(speechSynthesis.speaking){speechSynthesis.cancel();b.classList.remove("talk");return}
  const u=new SpeechSynthesisUtterance(SAY_SPOKEN);u.lang="en-US";u.rate=.98;u.onstart=()=>b.classList.add("talk");u.onend=u.onerror=()=>b.classList.remove("talk");speechSynthesis.speak(u)};
try{const f=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Africa/Tunis"});
  const tk=()=>{const t=f.format(new Date());$("#clock").innerHTML=`Tunis ${t}<span class="tz"> (UTC+1)</span>`;$("#clock2").textContent=`Tunis ${t}`};tk();setInterval(tk,20000)}catch(e){}

/* ---------- theme ---------- */
const tb=$("#theme"),isDark=()=>root.dataset.theme!=="light";
const paintTheme=()=>{tb.querySelector("use").setAttribute("href",isDark()?"#i-sun":"#i-moon");const m=$('meta[name="theme-color"]');if(m)m.content=isDark()?"#05070f":"#eef2fa";shown&&setTimeout(()=>radar(1),60)};
tb.onclick=()=>{root.dataset.theme=isDark()?"light":"dark";try{localStorage.setItem("wh-theme",root.dataset.theme)}catch(e){}paintTheme()};paintTheme();

/* ---------- contact + share ---------- */
$("#links").innerHTML=[["mail","Email",MAIL,"mailto:"+MAIL],...(TELRAW?[["phone","Phone",TEL,"tel:"+TELRAW]]:[]),["link","LinkedIn","Open profile",CFG.linkedin]]
  .map(l=>`<a class="btn" href="${esc(l[3])}"${l[0]==="link"?' target="_blank" rel="noopener noreferrer"':""}>${ic(l[0])}${l[1]}<span>${esc(l[2])}</span></a>`).join("");
$("#cvs").innerHTML=Object.entries(LENS).map(([k,v])=>`<a class="btn ghost" href="${CFG.cv[k]}" download="${v.file}">${ic("dl")}CV · ${esc(v.tab)}</a>`).join("");
$("#form").onsubmit=e=>{e.preventDefault();location.href=`mailto:${MAIL}?subject=${encodeURIComponent("Opportunity for Wael Halila: "+$("#fn").value.slice(0,120))}&body=${encodeURIComponent($("#fm").value.slice(0,2000))}`};
$("#sharelens").innerHTML=KEYS.map(k=>`<button class="chip" type="button" data-k="${k}" aria-pressed="false">${ic(LENS[k].ic)}${esc(LENS[k].tab)}</button>`).join("");
$("#sharelens").onclick=e=>{const b=e.target.closest("button");if(b){shareK=b.dataset.k;updateShare()}};
function pageUrl(k){const u=new URL(location.href);u.hash="";u.search="";u.pathname=u.pathname.replace(/[^/]*$/,"")+LENS[k].page;return u.href}
function absUrl(rel){return new URL(rel,location.href).href}
function updateShare(){const L=LENS[shareK],u=pageUrl(shareK);
  $$("#sharelens button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.k===shareK));
  $("#urlbox").textContent=u;
  try{$("#qr").innerHTML=qrSvg(u,{size:150,margin:1,dark:"#04101a",light:"#ffffff"})}catch(e){$("#qr").textContent=""}
  const subject=`Wael Halila, ${L.role}`,body=`Hi,\n\nHere is Wael Halila's portfolio, tailored for ${L.tab} roles:\n${u}\n\nCV (PDF): ${absUrl(CFG.cv[shareK])}\n\nBest regards`;
  $("#bMail").href=`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
async function copy(t){try{await navigator.clipboard.writeText(t);toast("Link copied")}catch(e){const s=getSelection(),r=document.createRange();r.selectNodeContents($("#urlbox"));s.removeAllRanges();s.addRange(r);toast("Press Ctrl+C to copy")}}
$("#bCopy").onclick=()=>copy(pageUrl(shareK));
$("#bShare").onclick=async()=>{const L=LENS[shareK],d={title:`Wael Halila, ${L.role}`,text:"Wael Halila's portfolio",url:pageUrl(shareK)};try{if(navigator.share)await navigator.share(d);else copy(d.url)}catch(e){}};

/* ---------- command menu + local search ---------- */
const STOP=new Set("a an the and or of to in on for with is are was were be been do does did you your i me my we what which who how where when why can could would should about tell give show any have has had at as by from it its this that these those not no yes also".split(" "));
const tok=t=>t.toLowerCase().replace(/[^a-z0-9+#.À-ſ ]/g," ").split(/\s+/).filter(w=>w&&!STOP.has(w)).map(w=>w.replace(/^certif\w*/,"certif").replace(/(ing|es|s)$/,""));
const KB=[{t:"About Wael",x:"Engineer with 4+ years in financial services across data, .NET, DevOps and AI. Based in Tunis, Tunisia, open to opportunities. Works at ODDO BHF since September 2022.",s:"about"},
{t:"Contact",x:"Reach Wael by email, phone or LinkedIn from the contact section. CVs for Data, .NET and DevOps roles can be downloaded there. Hiring and recruiting messages are welcome.",s:"contact"},
{t:"Languages",x:"Arabic is native; English, French and German are at B2 level.",s:"credentials"}];
Object.values(LENS).forEach(L=>KB.push({t:"Profile: "+L.role,x:L.pitch,s:"home"}));
EXP.forEach(e=>{const seen=new Set();Object.values(e.b).flat().forEach(b=>{if(!seen.has(b)){seen.add(b);KB.push({t:e.team||"Internship",x:b,s:"experience"})}})});
PROJECTS.forEach(p=>KB.push({t:p[1],x:p[2]+" Tools: "+p[3].join(", "),s:p[5]?"ai":"projects"}));
AI.forEach(a=>KB.push({t:"AI on Ivanti HEAT: "+a.tab,x:a.p+" "+a.li.join(". "),s:"ai"}));
KB.push({t:"ITIL certification",x:"Yes, Wael holds the ITIL® 5 Foundation certificate, which supports his ITSM work on Ivanti HEAT.",s:"credentials"},{t:"Generative AI engineering training",x:"Trained in generative AI engineering: LLM applications, prompt engineering and natural-language search and querying.",s:"credentials"});
CERTS.forEach(c=>KB.push({t:"Certifications and training",x:c,s:"credentials"}));EDU.forEach(e=>KB.push({t:e[1],x:e[2],s:"credentials"}));
Object.entries(CATS).forEach(([k,v])=>KB.push({t:"Skills: "+v[0],x:SKILLS.filter(s=>s[2]===k).map(s=>s[1]).join(", "),s:"skills"}));
const docs=KB.map(d=>({d,w:tok(d.t+" "+d.x),tt:tok(d.t)})),df={};docs.forEach(o=>new Set(o.w).forEach(w=>df[w]=(df[w]||0)+1));
const idf=w=>Math.log(1+docs.length/(df[w]||.5));
function search(q){const qt=[...new Set(tok(q))];if(!qt.length)return[];return docs.map(o=>{let s=0;qt.forEach(w=>{const tf=o.w.filter(x=>x===w).length;if(tf)s+=idf(w)*(1+Math.log(tf));if(o.tt.includes(w))s+=idf(w)});return[o.d,s]}).filter(r=>r[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,3)}

const pal=$("#pal"),pq=$("#pq"),plist=$("#plist");let items=[],sel=0;
const jump=id=>()=>{const t=document.getElementById(id);t&&t.scrollIntoView({behavior:RM?"auto":"smooth"})};
const SEC_LABEL={about:"About",experience:"Experience",ai:"AI on Ivanti HEAT",skills:"Skills",projects:"Projects",credentials:"Credentials",contact:"Contact"};
const CMDS=[
 ...SECS.map(s=>({g:"Go to",i:"out",l:SEC_LABEL[s],h:"#"+s,run:jump(s),kw:s})),
 ...KEYS.map(k=>({g:"Profile",i:LENS[k].ic,l:`Show the ${LENS[k].tab} profile`,h:LENS[k].role.split(" · ")[0],run:()=>{scrollTo({top:0,behavior:"auto"});go(k,"cmd")},kw:"lens profile role "+LENS[k].tab})),
 ...KEYS.map(k=>({g:"Actions",i:"dl",l:`Download CV: ${LENS[k].tab}`,h:"PDF",run:()=>{const a=document.createElement("a");a.href=CFG.cv[k];a.download=LENS[k].file;document.body.append(a);a.click();a.remove()},kw:"cv resume download pdf "+LENS[k].tab})),
 {g:"Actions",i:"mail",l:"Write an email to Wael",h:"mailto",run:()=>{location.href="mailto:"+MAIL},kw:"contact hire recruit message"},
 {g:"Actions",i:"link",l:"Open LinkedIn",h:"new tab",run:()=>open(CFG.linkedin,"_blank","noopener,noreferrer"),kw:"linkedin social"},
 {g:"Actions",i:"card",l:"Save contact (.vcf)",h:"vCard",run:()=>{const a=document.createElement("a");a.href=CFG.vcard;a.download="Wael_Halila.vcf";document.body.append(a);a.click();a.remove()},kw:"vcard contact address book"},
 {g:"Actions",i:"copy",l:"Copy link to this profile",h:"clipboard",run:()=>copy(pageUrl(lens)),kw:"share link url"},
 {g:"Actions",i:"share",l:"Go to the share panel",h:"QR · email",run:jump("sharepanel"),kw:"share qr code email send"},
 {g:"Actions",i:"sun",l:"Switch dark or light theme",h:"theme",run:()=>tb.click(),kw:"theme dark light mode"}
];
function paintPal(q){q=q.trim();const ts=q.toLowerCase().split(/\s+/).filter(Boolean);
  const hit=CMDS.filter(c=>ts.every(t=>(c.l+" "+c.kw+" "+c.h).toLowerCase().includes(t))).slice(0,q?8:11);
  items=[];let html="",last="";
  hit.forEach(c=>{if(c.g!==last){html+=`<div class="grp" role="presentation">${c.g}</div>`;last=c.g}const id="o"+items.length;items.push({run:c.run});html+=`<div class="opt" role="option" id="${id}" data-i="${items.length-1}" aria-selected="false">${ic(c.i)}<span>${esc(c.l)}</span><small>${esc(c.h)}</small></div>`});
  if(q.length>=3){const r=search(q);if(r.length&&r[0][1]>1.2){const d=r[0][0];html+=`<div class="grp" role="presentation">From the portfolio</div><div class="ans"><b>${esc(d.t)}</b>${esc(d.x)}</div>`;
    const id="o"+items.length;items.push({run:jump(d.s)});html+=`<div class="opt" role="option" id="${id}" data-i="${items.length-1}" aria-selected="false">${ic("out")}<span>Open the related section</span><small>#${esc(d.s)}</small></div>`}
    else if(!hit.length)html+=`<div class="ans"><b>Nothing found for “${esc(q.slice(0,60))}”</b>Try a skill, a tool, “ITIL”, “Playwright” or “contact”.</div>`}
  plist.innerHTML=html;sel=0;mark()}
function mark(){$$(".opt",plist).forEach((o,i)=>o.setAttribute("aria-selected",i===sel));const o=$$(".opt",plist)[sel];if(o){pq.setAttribute("aria-activedescendant",o.id);o.scrollIntoView({block:"nearest"})}}
function runSel(i=sel){const it=items[i];if(!it)return;pal.close();setTimeout(it.run,30)}
pq.addEventListener("input",()=>paintPal(pq.value));
pq.addEventListener("keydown",e=>{if(e.key==="ArrowDown"){e.preventDefault();sel=Math.min(items.length-1,sel+1);mark()}else if(e.key==="ArrowUp"){e.preventDefault();sel=Math.max(0,sel-1);mark()}else if(e.key==="Enter"){e.preventDefault();runSel()}});
plist.addEventListener("click",e=>{const o=e.target.closest(".opt");o&&runSel(+o.dataset.i)});
plist.addEventListener("pointermove",e=>{const o=e.target.closest(".opt");if(o&&+o.dataset.i!==sel){sel=+o.dataset.i;mark()}});
const openPal=()=>{if(pal.open)return;pq.value="";paintPal("");pal.showModal();pq.focus()};
$("#askbtn").onclick=openPal;pal.addEventListener("click",e=>{if(e.target===pal)pal.close()});
addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();pal.open?pal.close():openPal()}});

/* ---------- ambient network canvas ---------- */
(function fx(){const c=$("#fx"),x=c.getContext("2d");if(!x)return;let W=0,H=0,pts=[],mx=-9e3,my=-9e3,last=0,col="#35d8ff",n=0;
  function size(){const d=Math.min(devicePixelRatio||1,1.5);W=innerWidth;H=innerHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);const N=clamp(Math.round(W/30),20,60);pts=Array.from({length:N},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28}))}
  function draw(){x.clearRect(0,0,W,H);if(n++%12===0)col=getComputedStyle(root).getPropertyValue("--acc").trim()||col;x.strokeStyle=col;x.fillStyle=col;
    for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
    for(let i=0;i<pts.length;i++){const a=pts[i];x.globalAlpha=.55;x.beginPath();x.arc(a.x,a.y,1.4,0,6.3);x.fill();
      for(let j=i+1;j<pts.length;j++){const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<140){x.globalAlpha=(1-d/140)*.3;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
      const dm=Math.hypot(a.x-mx,a.y-my);if(dm<170){x.globalAlpha=(1-dm/170)*.6;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(mx,my);x.stroke()}}
    x.globalAlpha=1}
  function loop(t){requestAnimationFrame(loop);if(document.hidden||t-last<34)return;last=t;draw()}
  size();draw();if(!RM){requestAnimationFrame(loop);addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY},{passive:true})}
  let rt;addEventListener("resize",()=>{clearTimeout(rt);rt=setTimeout(()=>{size();draw()},200)})})();

/* ---------- start ---------- */
setLens(lens,{src:"init"});onScroll();moveInd();
$$("body > main .rv").forEach(e=>{const r=e.getBoundingClientRect();if(r.top<innerHeight)e.classList.add("in")});
if("serviceWorker" in navigator&&/^https?:/.test(location.protocol))addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
})();
