/* Minimal QR Code generator (byte mode, ECC level M, versions 1-10). No dependencies.
   Usage: const m = qrMatrix("https://example.com"); // array of arrays of booleans (true = dark) */
(function(g){
"use strict";
const ECC=[0,10,16,26,18,24,16,18,22,22,26],BLK=[0,1,1,1,2,2,4,4,4,5,5];
const ALIGN=[[],[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50]];
const rawModules=v=>{let r=(16*v+128)*v+64;if(v>=2){const n=Math.floor(v/7)+2;r-=(25*n-10)*n-55;if(v>=7)r-=36}return r};
const dataCW=v=>Math.floor(rawModules(v)/8)-ECC[v]*BLK[v];
/* GF(256) arithmetic for Reed-Solomon */
const EXP=new Array(512),LOG=new Array(256);
(()=>{let x=1;for(let i=0;i<255;i++){EXP[i]=x;LOG[x]=i;x<<=1;if(x&256)x^=0x11d}for(let i=255;i<512;i++)EXP[i]=EXP[i-255]})();
const gmul=(a,b)=>a&&b?EXP[LOG[a]+LOG[b]]:0;
function rsGen(d){let p=[1];for(let i=0;i<d;i++){const n=new Array(p.length+1).fill(0);for(let j=0;j<p.length;j++){n[j]^=p[j];n[j+1]^=gmul(p[j],EXP[i])}p=n}return p}
function rsRem(data,gen){const d=gen.length-1,r=new Array(d).fill(0);for(const b of data){const f=b^r.shift();r.push(0);if(f)for(let i=0;i<d;i++)r[i]^=gmul(gen[i+1],f)}return r}
function utf8(s){return Array.from(new TextEncoder().encode(s))}
function qrMatrix(text){
  const bytes=utf8(text);let ver=1;
  while(ver<=10&&bytes.length>dataCW(ver)-(ver<=9?2:3))ver++;
  if(ver>10)throw new Error("Text too long for this QR generator");
  const bits=[],push=(v,n)=>{for(let i=n-1;i>=0;i--)bits.push((v>>>i)&1)};
  push(4,4);push(bytes.length,ver<=9?8:16);bytes.forEach(b=>push(b,8));
  const cap=dataCW(ver)*8;push(0,Math.min(4,cap-bits.length));while(bits.length%8)bits.push(0);
  const data=[];for(let i=0;i<bits.length;i+=8){let b=0;for(let j=0;j<8;j++)b=b<<1|bits[i+j];data.push(b)}
  for(let pad=0xec;data.length<dataCW(ver);pad^=0xec^0x11)data.push(pad);
  /* split into blocks, add ECC, interleave */
  const nb=BLK[ver],ec=ECC[ver],total=Math.floor(rawModules(ver)/8),shortLen=Math.floor(total/nb)-ec,longCnt=total%nb;
  const gen=rsGen(ec),blocks=[];let k=0;
  for(let i=0;i<nb;i++){const len=shortLen+(i<nb-longCnt?0:1),d=data.slice(k,k+len);k+=len;blocks.push({d,e:rsRem(d,gen)})}
  const out=[];for(let i=0;i<=shortLen;i++)blocks.forEach((b,j)=>{if(i<shortLen||j>=nb-longCnt)out.push(b.d[i])});
  for(let i=0;i<ec;i++)blocks.forEach(b=>out.push(b.e[i]));
  const n=ver*4+17,M=[],F=[];
  for(let i=0;i<n;i++){M.push(new Array(n).fill(false));F.push(new Array(n).fill(false))}
  const set=(x,y,v)=>{if(x>=0&&y>=0&&x<n&&y<n){M[y][x]=v;F[y][x]=true}};
  const finder=(cx,cy)=>{for(let dy=-4;dy<=4;dy++)for(let dx=-4;dx<=4;dx++){const d=Math.max(Math.abs(dx),Math.abs(dy));set(cx+dx,cy+dy,d!==2&&d!==4)}};
  finder(3,3);finder(n-4,3);finder(3,n-4);
  for(let i=0;i<n;i++){if(!F[6][i])set(i,6,i%2===0);if(!F[i][6])set(6,i,i%2===0)}
  const al=ALIGN[ver];
  for(const cy of al)for(const cx of al){if((cx===6&&cy===6)||(cx===6&&cy===al[al.length-1])||(cx===al[al.length-1]&&cy===6))continue;
    for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)set(cx+dx,cy+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1)}
  /* reserve format + version areas */
  const fmtBits=mask=>{const d=(0<<3)|mask;let r=d;for(let i=0;i<10;i++)r=(r<<1)^((r>>>9)*0x537);return((d<<10)|r)^0x5412};
  const drawFmt=mask=>{const b=fmtBits(mask),bit=i=>((b>>>i)&1)!==0;
    for(let i=0;i<=5;i++)set(8,i,bit(i));set(8,7,bit(6));set(8,8,bit(7));set(7,8,bit(8));for(let i=9;i<15;i++)set(14-i,8,bit(i));
    for(let i=0;i<8;i++)set(n-1-i,8,bit(i));for(let i=8;i<15;i++)set(8,n-15+i,bit(i));set(8,n-8,true)};
  drawFmt(0);
  if(ver>=7){let r=ver;for(let i=0;i<12;i++)r=(r<<1)^((r>>>11)*0x1f25);const b=(ver<<12)|r;
    for(let i=0;i<18;i++){const v=((b>>>i)&1)!==0,a=n-11+i%3,c=Math.floor(i/3);set(a,c,v);set(c,a,v)}}
  /* place data bits in zigzag */
  const dbits=[];out.forEach(b=>{for(let i=7;i>=0;i--)dbits.push((b>>>i)&1)});
  let bi=0;
  for(let right=n-1;right>=1;right-=2){if(right===6)right=5;
    for(let vert=0;vert<n;vert++)for(let j=0;j<2;j++){const x=right-j,up=((right+1)&2)===0,y=up?n-1-vert:vert;
      if(!F[y][x]&&bi<dbits.length){M[y][x]=dbits[bi++]===1}}}
  const masks=[(x,y)=>(x+y)%2===0,(x,y)=>y%2===0,(x,y)=>x%3===0,(x,y)=>(x+y)%3===0,(x,y)=>(Math.floor(x/3)+Math.floor(y/2))%2===0,
    (x,y)=>x*y%2+x*y%3===0,(x,y)=>(x*y%2+x*y%3)%2===0,(x,y)=>((x+y)%2+x*y%3)%2===0];
  const penalty=m=>{let p=0;
    for(let y=0;y<n;y++){let run=1;for(let x=1;x<n;x++){if(m[y][x]===m[y][x-1]){run++;if(run===5)p+=3;else if(run>5)p++}else run=1}}
    for(let x=0;x<n;x++){let run=1;for(let y=1;y<n;y++){if(m[y][x]===m[y-1][x]){run++;if(run===5)p+=3;else if(run>5)p++}else run=1}}
    for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const c=m[y][x];if(c===m[y][x+1]&&c===m[y+1][x]&&c===m[y+1][x+1])p+=3}
    let dark=0;m.forEach(r=>r.forEach(v=>{if(v)dark++}));p+=Math.floor(Math.abs(dark*20-n*n*10)/(n*n))*10;return p};
  let best=null,bestP=1e9,bestMask=0;
  for(let mk=0;mk<8;mk++){const t=M.map((r,y)=>r.map((v,x)=>F[y][x]?v:v!==masks[mk](x,y)));const pn=penalty(t);if(pn<bestP){bestP=pn;best=t;bestMask=mk}}
  /* write format bits for the chosen mask into the final matrix */
    const final=best,setF=(x,y,v)=>{final[y][x]=v},bb=fmtBits(bestMask),bit=i=>((bb>>>i)&1)!==0;
  for(let i=0;i<=5;i++)setF(8,i,bit(i));setF(8,7,bit(6));setF(8,8,bit(7));setF(7,8,bit(8));for(let i=9;i<15;i++)setF(14-i,8,bit(i));
  for(let i=0;i<8;i++)setF(n-1-i,8,bit(i));for(let i=8;i<15;i++)setF(8,n-15+i,bit(i));setF(8,n-8,true);
  return final;
}
/* Render helpers */
function qrSvg(text,{size=220,margin=2,dark="#000",light="#fff"}={}){
  const m=qrMatrix(text),n=m.length,t=n+margin*2;let d="";
  m.forEach((r,y)=>{let x=0;while(x<n){if(r[x]){let e=x;while(e<n&&r[e])e++;d+=`M${x+margin} ${y+margin}h${e-x}v1h${-(e-x)}z`;x=e}else x++}});
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${t} ${t}" width="${size}" height="${size}" shape-rendering="crispEdges" role="img" aria-label="QR code"><rect width="${t}" height="${t}" fill="${light}"/><path d="${d}" fill="${dark}"/></svg>`;
}
g.qrMatrix=qrMatrix;g.qrSvg=qrSvg;
})(typeof window!=="undefined"?window:globalThis);
