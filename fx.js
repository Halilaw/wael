/* FX layer: GSAP · Three.js · Lenis. Progressive enhancement. */
(()=>{"use strict";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],root=document.documentElement;
const G=window.gsap,ST=window.ScrollTrigger,T=window.THREE;
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const fine=matchMedia("(hover:hover) and (pointer:fine)").matches;
const safe=(n,f)=>{try{f()}catch(e){console.warn("fx:"+n,e)}};
const pre=$("#pre"),hidePre=()=>pre&&pre.remove();
let uiTheme=()=>{};
if(G&&ST)G.registerPlugin(ST);

/* ---------- Three.js ---------- */
function initGL(){
  if(!T)return;
  const cv=$("#gl");let R;
  try{R=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true,powerPreference:"low-power"})}
  catch(e){cv.remove();return}
  const mob=()=>innerWidth<760;
  const av=$("#avatar");
  R.setPixelRatio(Math.min(devicePixelRatio||1,mob()?1.25:1.6));
  const sc=new T.Scene(),cam=new T.PerspectiveCamera(50,1,.1,100);
  cam.position.z=7;
  const css=getComputedStyle(root),col=n=>new T.Color((css.getPropertyValue(n)||"").trim()||"#6670ff");
  const N=mob()?900:2400,pos=new Float32Array(N*3),mix=new Float32Array(N),colA=new Float32Array(N*3);
  for(let i=0;i<N;i++){const r=4+Math.random()*9,th=Math.random()*6.2832,ph=Math.acos(2*Math.random()-1);
    pos[i*3]=r*Math.sin(ph)*Math.cos(th);pos[i*3+1]=r*Math.sin(ph)*Math.sin(th)*.7;pos[i*3+2]=r*Math.cos(ph)-2;mix[i]=Math.random()}
  const pg=new T.BufferGeometry();
  pg.setAttribute("position",new T.BufferAttribute(pos,3));
  pg.setAttribute("color",new T.BufferAttribute(colA,3));
  const pm=new T.PointsMaterial({size:.045,vertexColors:true,transparent:true,opacity:.75,depthWrite:false,sizeAttenuation:true});
  const pts=new T.Points(pg,pm);sc.add(pts);
  const core=new T.Group();
  const wm=new T.LineBasicMaterial({transparent:true,opacity:.9});
  const im=new T.MeshBasicMaterial({wireframe:true,transparent:true,opacity:.35});
  core.add(new T.LineSegments(new T.WireframeGeometry(new T.IcosahedronGeometry(1.35,1)),wm));
  const inner=new T.Mesh(new T.IcosahedronGeometry(.8,2),im);core.add(inner);
  const rings=[0,1,2].map(i=>{
    const m=new T.MeshBasicMaterial({transparent:true,opacity:.7});
    const r=new T.Mesh(new T.TorusGeometry(1.9+i*.28,.012,8,140),m);
    r.rotation.set(i*1.1,i*.7,0);core.add(r);return r
  });
  const dots=rings.map(()=>{
    const m=new T.Mesh(new T.SphereGeometry(.07,12,12),new T.MeshBasicMaterial({transparent:true}));
    core.add(m);return m
  });
  sc.add(core);
  const paint=()=>{
    const a=col("--acc"),g=col("--gold");
    wm.color.copy(a);im.color.copy(g);
    rings.forEach((r,i)=>r.material.color.copy(i%2?g:a));
    dots.forEach(d=>d.material.color.copy(g));
    for(let i=0;i<N;i++){const c=a.clone().lerp(g,mix[i]);colA[i*3]=c.r;colA[i*3+1]=c.g;colA[i*3+2]=c.b}
    pg.attributes.color.needsUpdate=true;
  };
  paint();uiTheme=paint;
  const fit=()=>{R.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();if(reduce)frame(0)};
  const m={x:0,y:0,tx:0,ty:0};
  addEventListener("pointermove",e=>{m.tx=e.clientX/innerWidth*2-1;m.ty=e.clientY/innerHeight*2-1},{passive:true});
  const S={p:0};
  if(ST)ST.create({trigger:document.body,start:"top top",end:"bottom bottom",scrub:.8,onUpdate:s=>S.p=s.progress});
  else addEventListener("scroll",()=>S.p=scrollY/Math.max(1,root.scrollHeight-innerHeight),{passive:true});
  const cl=(v,a,b)=>Math.min(b,Math.max(a,v));
  function frame(t){
    t*=.001;m.x+=(m.tx-m.x)*.05;m.y+=(m.ty-m.y)*.05;
    const p=S.p,hx=mob()?0:2.5;
    core.position.x=mob()?0:hx*Math.cos(p*Math.PI*4);
    core.position.y=(mob()?1.9:.3)-p*.6+Math.sin(t)*.12;
    core.scale.setScalar((mob()?.72:1)*(1+Math.sin(t*1.3)*.03)*(1+(av&&av.classList.contains("talk")?Math.sin(t*14)*.05:0)));
    core.rotation.y=t*.25+m.x*.6+p*6;
    core.rotation.x=m.y*.4+Math.sin(t*.4)*.1;
    inner.rotation.y=-t*.5;
    rings.forEach((r,i)=>{r.rotation.z=t*(.3+i*.15)*(i%2?-1:1);r.rotation.x+=.002*(i+1)});
    dots.forEach((d,i)=>{
      const a=t*(.9+i*.4)+i*2,r=1.9+i*.28;
      d.position.set(Math.cos(a)*r,Math.sin(a)*r*Math.sin(rings[i].rotation.x+i*1.1)*.6,Math.sin(a)*r*.5);
    });
    const vis=Math.max(1-cl(p*7,0,1),cl((p-.88)*9,0,1));
    wm.opacity=.9*vis;im.opacity=.35*vis;
    rings.forEach(r=>r.material.opacity=.7*vis);
    dots.forEach(d=>d.material.opacity=vis);
    pts.rotation.y=t*.02+p*2.4;pts.rotation.x=m.y*.08;
    cam.position.x=m.x*.5;cam.position.y=-m.y*.3;cam.position.z=7-p*1.6;
    cam.lookAt(0,0,0);R.render(sc,cam);
  }
  addEventListener("resize",fit);fit();
  if(reduce){frame(0);return}
  const loop=t=>{if(!document.hidden)frame(t);requestAnimationFrame(loop)};
  requestAnimationFrame(loop);
}
safe("gl",initGL);

$("#theme").addEventListener("click",()=>setTimeout(uiTheme,0));
matchMedia("(prefers-color-scheme:dark)").addEventListener("change",()=>setTimeout(uiTheme,0));

if(!G||!ST||reduce){hidePre();return}
root.classList.add("fx");

/* ---------- helpers ---------- */
function split(el){
  if(el.dataset.sp)return;el.dataset.sp=1;
  el.setAttribute("aria-label",el.textContent.trim());
  const walk=n=>[...n.childNodes].forEach(c=>{
    if(c.nodeType===3){
      const f=document.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach(w=>{
        if(!w)return;
        if(/^\s+$/.test(w)){f.append(" ");return}
        const s=document.createElement("span");s.className="w";s.setAttribute("aria-hidden","true");
        [...w].forEach(ch=>{const i=document.createElement("span");i.className="c";i.textContent=ch;s.append(i)});
        f.append(s)
      });
      c.replaceWith(f)
    } else if(c.nodeType===1)walk(c)
  });
  walk(el);
}
function words(el){
  const t=el.textContent;el.textContent="";
  t.split(" ").forEach((w,i,a)=>{const s=document.createElement("span");s.className="ww";s.textContent=w;el.append(s);if(i<a.length-1)el.append(" ")});
}
function scramble(el,ms=800){
  const fin=el.textContent,ch="01#$%&*<>/\\+=_",t0=performance.now();
  const f=()=>{const p=Math.min(1,(performance.now()-t0)/ms);
    el.textContent=[...fin].map((c,i)=>c===" "||i<p*fin.length?c:ch[Math.random()*ch.length|0]).join("");
    p<1?requestAnimationFrame(f):el.textContent=fin};
  f();
}
function ind(box){
  if(!box)return()=>{};
  const i=document.createElement("i");i.className="ind";box.prepend(i);box.style.position="relative";
  const mv=d=>{const a=box.querySelector(".chip2.on");if(a)G.to(i,{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight,duration:d,ease:"back.out(1.5)"})};
  box.addEventListener("click",()=>requestAnimationFrame(()=>mv(.5)));
  addEventListener("resize",()=>mv(0));mv(0);
  if(document.fonts)document.fonts.ready.then(()=>mv(0));
  return mv;
}
const beams=()=>$$(".pc.feat,#flow").forEach(c=>{
  if(!c.querySelector(":scope>.beam")){
    const b=document.createElement("span");b.className="beam";b.setAttribute("aria-hidden","true");c.append(b)
  }
});

/* ---------- Lenis ---------- */
let lenis;
safe("lenis",()=>{
  if(!window.Lenis)return;
  lenis=new Lenis({lerp:.1});
  lenis.on("scroll",ST.update);
  G.ticker.add(t=>lenis.raf(t*1000));
  G.ticker.lagSmoothing(0);
  document.addEventListener("click",e=>{
    const a=e.target.closest('a[href^="#"]');if(!a)return;
    const id=a.getAttribute("href");if(id.length<2)return;
    const t=document.querySelector(id);if(!t)return;
    e.preventDefault();lenis.start();lenis.scrollTo(t,{offset:-70});
  },true);
  const sm=HTMLDialogElement.prototype.showModal;
  HTMLDialogElement.prototype.showModal=function(){lenis.stop();return sm.call(this)};
  const ask=$("#ask");
  if(ask)ask.addEventListener("close",()=>lenis.start());
  const msgs=$("#msgs");
  if(msgs)msgs.setAttribute("data-lenis-prevent","");
});

/* quick jump buttons in Ask AI */
safe("asknav",()=>{
  const d=document.createElement("div");d.className="sug";
  [["#experience","↗ Experience"],["#ai","↗ AI × HEAT"],["#projects","↗ Projects"],["#contact","↗ Contact"]].forEach(([h,l])=>{
    const b=document.createElement("button");b.type="button";b.textContent=l;
    b.onclick=()=>{
      $("#ask").close();
      const t=document.querySelector(h);
      if(lenis){lenis.start();lenis.scrollTo(t,{offset:-70})}
      else t.scrollIntoView({behavior:"smooth"});
    };
    d.append(b);
  });
  const sug=$("#sug");if(sug)sug.after(d);
});

/* ---------- Intro ---------- */
$$("h1,h2").forEach(h=>safe("split",()=>split(h)));
safe("intro",()=>{
  const tl=G.timeline({defaults:{ease:"power4.out"}});
  tl.from(".hero h1 .c",{yPercent:125,rotate:7,stagger:.045,duration:1},"0")
    .from([".hero .eyebrow","#lens","#role","#pitch",".badges span",".bubble",".hero .row .btn"],{y:30,opacity:0,stagger:.07,duration:.8},"-=.55")
    .from(".portrait",{scale:.9,opacity:0,filter:"blur(16px)",duration:1.2,ease:"power3.out",clearProps:"filter"},"-=.95")
    .from(".oc",{scale:0,stagger:.08,duration:.7,ease:"back.out(2)",clearProps:"transform"},"-=.7");
  tl.to("#pre",{yPercent:-100,duration:.9,ease:"power4.inOut",delay:.1,onComplete:hidePre});
});

/* ---------- Scroll choreography ---------- */
safe("scroll",()=>{
  $$("h2").forEach(h=>G.from(h.querySelectorAll(".c"),{yPercent:115,duration:.9,stagger:.02,ease:"power4.out",scrollTrigger:{trigger:h,start:"top 88%"}}));
  $$(".about-text p").forEach(p=>{words(p);G.from(p.querySelectorAll(".ww"),{opacity:0,y:8,filter:"blur(8px)",stagger:.015,duration:.6,ease:"power2.out",scrollTrigger:{trigger:p,start:"top 85%"}})});
  const sel=".stats div,.facts div,.card,.certs li";
  G.set(sel,{opacity:0,y:36});
  ST.batch(".tile",{start:"top 92%",once:true,onEnter:b=>G.from(b,{y:26,scale:.85,stagger:.012,duration:.6,ease:"back.out(1.6)",clearProps:"transform"})});
  ST.batch(sel,{start:"top 90%",once:true,onEnter:b=>G.to(b,{opacity:1,y:0,stagger:.06,duration:.8,ease:"power3.out",overwrite:true})});
  setTimeout(()=>$$(sel).forEach(e=>{if(+getComputedStyle(e).opacity<.05)G.to(e,{opacity:1,y:0,duration:.5})}),9000);
  G.to(".portrait",{yPercent:-9,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
  G.to(".hero-text",{yPercent:8,opacity:.2,ease:"none",scrollTrigger:{trigger:".hero",start:"60% top",end:"bottom top",scrub:true}});
  G.fromTo(".lamp",{scaleX:.25,opacity:.1},{scaleX:1,opacity:.45,ease:"none",scrollTrigger:{trigger:"#contact",start:"top 90%",end:"top 35%",scrub:true}});
  G.from(".timeline",{clipPath:"inset(0 0 100% 0)",duration:1.4,ease:"power2.out",scrollTrigger:{trigger:".timeline",start:"top 85%"}});
});

/* ---------- Marquee ---------- */
safe("mq",()=>{
  const mq=$("#mq");if(!mq)return;
  const tw=G.to(mq,{xPercent:-50,duration:42,ease:"none",repeat:-1});
  let dir=1;const sk=G.quickTo(mq,"skewX",{duration:.4});let kv=0;
  ST.create({onUpdate:s=>{kv=-Math.max(-9,Math.min(9,s.getVelocity()/350));dir=s.direction||1;tw.timeScale(dir*(1+Math.min(9,Math.abs(s.getVelocity())/220)))}});
  G.ticker.add(()=>{tw.timeScale(tw.timeScale()+(dir-tw.timeScale())*.04);kv*=.92;sk(kv)});
});

/* ---------- Horizontal project gallery ---------- */
safe("hs",()=>{
  const mm=G.matchMedia();
  mm.add("(min-width:1100px)",()=>{
    const g=$("#projgrid"),s=$("#projects");
    if(!g||!s)return;
    g.classList.add("hs");s.classList.add("hs");
    const d=()=>Math.max(0,g.scrollWidth-(s.clientWidth-80));
    G.to(g,{x:()=>-d(),ease:"none",scrollTrigger:{trigger:s,start:"top top+=70",end:()=>"+="+d(),pin:true,scrub:.6,invalidateOnRefresh:true,anticipatePin:1}});
    return()=>{g.classList.remove("hs");s.classList.remove("hs");G.set(g,{clearProps:"all"})};
  });
});

/* ---------- Orbit ---------- */
safe("orbit",()=>{
  const w=document.createElement("div");w.className="orbitwrap";w.setAttribute("aria-hidden","true");
  ["🗄️","⚙️","🐳","🤖","🎭","📊"].forEach((e,i)=>{
    const c=document.createElement("div");c.className="oc";c.style.setProperty("--r",i*60+"deg");
    const s=document.createElement("span");s.textContent=e;c.append(s);w.append(c);
  });
  const portrait=$(".portrait");if(!portrait)return;
  portrait.append(w);
  const fit=()=>w.style.setProperty("--R",w.offsetWidth*.5*.9+"px");
  fit();addEventListener("resize",fit);
});

/* ---------- Dock ---------- */
safe("dock",()=>{
  const d=document.createElement("nav");d.className="dock";d.setAttribute("aria-label","Quick navigation");
  const it=[["home","🏠","Home"],["about","🧑‍💻","About"],["experience","💼","Experience"],["ai","🤖","AI × HEAT"],["skills","🧪","Skills"],["projects","🚀","Projects"],["credentials","🏅","Credentials"],["contact","✉️","Contact"]];
  it.forEach(([id,e,l])=>{const a=document.createElement("a");a.href="#"+id;a.dataset.l=l;a.setAttribute("aria-label",l);a.textContent=e;d.append(a)});
  document.body.append(d);
  const as=[...d.children],set=as.map(a=>G.quickTo(a,"scale",{duration:.25,ease:"power2.out"}));
  d.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;as.forEach((a,i)=>{const r=a.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2);set[i](1+.75*Math.exp(-(dx*dx)/(2*58*58)))})});
  d.addEventListener("pointerleave",()=>set.forEach(s=>s(1)));
  const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)as.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
  it.forEach(([id])=>{const s=document.getElementById(id);s&&so.observe(s)});
});

/* ---------- Tab indicators ---------- */
const inds=[ind($("#lens")),ind($("#aitabs")),ind($("#filters"))];

/* ---------- Pulse / Meteors / Lamp ---------- */
safe("pulse",()=>{
  const f=$("#flow");if(!f)return;
  const p=document.createElement("i");p.className="pulse";f.append(p);
  const sp=f.querySelector(".fs span");
  if(sp)f.style.setProperty("--lx",sp.offsetLeft+sp.offsetWidth/2-1+"px");
  G.fromTo(p,{y:0},{y:()=>f.offsetHeight-60,duration:3,ease:"power1.inOut",repeat:-1,yoyo:true});
});
safe("meteors",()=>{
  const ai=$("#ai");if(!ai)return;
  for(let i=0;i<9;i++){const m=document.createElement("i");m.className="met";
    m.style.left=Math.random()*100+"%";
    m.style.animationDelay=Math.random()*6+"s";
    m.style.animationDuration=4+Math.random()*4+"s";
    ai.append(m);
  }
});
safe("lamp",()=>{
  const c=$("#contact");if(!c)return;
  const l=document.createElement("i");l.className="lamp";l.setAttribute("aria-hidden","true");c.prepend(l);
});

/* ---------- Pointer effects ---------- */
safe("pointer",()=>{
  document.addEventListener("pointermove",e=>{
    const c=e.target.closest&&e.target.closest(".card");
    if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}
    const hero=$(".hero");
    if(hero){const h=hero.getBoundingClientRect();hero.style.setProperty("--hx",e.clientX-h.left+"px");hero.style.setProperty("--hy",e.clientY-h.top+"px")}
  },{passive:true});

  document.addEventListener("click",e=>{
    for(let i=0;i<8;i++){
      const s=document.createElement("i");s.className="spark";
      s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";
      document.body.append(s);
      const a=i/8*6.28;
      G.to(s,{x:Math.cos(a)*(30+Math.random()*24),y:Math.sin(a)*(30+Math.random()*24),opacity:0,scale:.2,duration:.6,ease:"power2.out",onComplete:()=>s.remove()});
    }
  });

  if(!fine)return;

  const ring=document.createElement("div"),dot=document.createElement("div");
  ring.className="cur";dot.className="dot";document.body.append(ring,dot);
  G.set([ring,dot],{opacity:0});let seen=0;
  const rx=G.quickTo(ring,"x",{duration:.35,ease:"power3"}),ry=G.quickTo(ring,"y",{duration:.35,ease:"power3"});
  const dx=G.quickTo(dot,"x",{duration:.08}),dy=G.quickTo(dot,"y",{duration:.08});
  addEventListener("pointermove",e=>{
    if(!seen){seen=1;G.to([ring,dot],{opacity:1,duration:.3})}
    rx(e.clientX);ry(e.clientY);dx(e.clientX);dy(e.clientY);
    ring.classList.toggle("big",!!(e.target.closest&&e.target.closest("a,button,.tile,.card,input,textarea")))
  },{passive:true});

  const mag=el=>{
    const x=G.quickTo(el,"x",{duration:.5,ease:"elastic.out(1,.5)"});
    const y=G.quickTo(el,"y",{duration:.5,ease:"elastic.out(1,.5)"});
    el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*.3);y((e.clientY-r.top-r.height/2)*.3)});
    el.addEventListener("pointerleave",()=>{x(0);y(0)});
  };
  $$(".btn,.pill,.tbtn").forEach(mag);

  document.addEventListener("pointermove",e=>{
    const c=e.target.closest&&e.target.closest(".pc");if(!c)return;
    const r=c.getBoundingClientRect();
    G.to(c,{rotateY:((e.clientX-r.left)/r.width-.5)*12,rotateX:-((e.clientY-r.top)/r.height-.5)*12,transformPerspective:900,duration:.35,overwrite:"auto"})
  },{passive:true});
  document.addEventListener("pointerout",e=>{
    const c=e.target.closest&&e.target.closest(".pc");
    if(c&&!c.contains(e.relatedTarget))G.to(c,{rotateX:0,rotateY:0,duration:.6,ease:"power3.out"})
  });
});

/* ---------- Lens switch hook ---------- */
const _sl=window.setLens;
window.setLens=function(k){
  if(typeof _sl==="function")_sl(k);
  safe("lens",()=>{
    scramble($("#role"));
    beams();
    G.fromTo(".timeline>li",{y:34,opacity:0},{y:0,opacity:1,stagger:.1,duration:.7,ease:"power3.out",overwrite:true});
    G.fromTo(".pc",{y:30,opacity:0},{y:0,opacity:1,stagger:.05,duration:.6,ease:"power3.out",overwrite:true});
    ST.refresh();
  });
};
beams();
addEventListener("load",()=>{ST.refresh();inds.forEach(f=>f&&f(0))});
})();