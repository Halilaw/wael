/* Runs before first paint: theme + profile, so the page never flashes the wrong colours. */
(function(){
  var d=document.documentElement;
  try{var t=localStorage.getItem("wh-theme");if(t==="light"||t==="dark")d.setAttribute("data-theme",t)}catch(e){}
  var map={data:"data",soft:"soft",dotnet:"soft",net:"soft",dev:"dev",devops:"dev"};
  var q=new URLSearchParams(location.search).get("lens"),m=document.querySelector('meta[name="wh-lens"]');
  var k=map[(q||"").toLowerCase()]||map[m&&m.content]||"";
  if(k){d.setAttribute("data-lens",k);d.setAttribute("data-preset","1")}
  d.classList.add("js");
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)d.setAttribute("data-rm","1");
})();
