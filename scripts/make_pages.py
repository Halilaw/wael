#!/usr/bin/env python3
"""Regenerate lens pages (data/dotnet/devops.html), sitemap.xml, sw.js version and SHA256SUMS.txt.
Edit index.html (the template, data-lens="data"), then run from the repo root:  python scripts/make_pages.py"""
import datetime,hashlib,os,re
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)));BASE="https://halilaw.github.io/wael/"
LENS={"data":("Data Engineer · BI Consultant","data.html"),"dotnet":(".NET Software Engineer","dotnet.html"),"devops":("DevOps Engineer","devops.html")}
rd=lambda p:open(os.path.join(ROOT,p),encoding="utf8").read()
def wr(p,s):open(os.path.join(ROOT,p),"w",encoding="utf8",newline="\n").write(s)
src=rd("index.html")
for k,(label,fn) in LENS.items():
    s=src.replace('data-lens="data"',f'data-lens="{k}"',1)
    s=re.sub(r"<title>.*?</title>",f"<title>Wael Halila — {label} · Tunis</title>",s,count=1,flags=re.S)
    s=s.replace(f'<link rel="canonical" href="{BASE}">',f'<link rel="canonical" href="{BASE}{fn}">').replace(f'<meta property="og:url" content="{BASE}">',f'<meta property="og:url" content="{BASE}{fn}">')
    s=re.sub(r'(<meta property="og:title" content=")[^"]*(")',rf"\1Wael Halila — {label}\2",s,count=1)
    wr(fn,s)
today=datetime.date.today().isoformat()
urls=[BASE]+[BASE+v[1] for v in LENS.values()]
wr("sitemap.xml",'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+"".join(f"<url><loc>{u}</loc><lastmod>{today}</lastmod></url>" for u in urls)+"</urlset>\n")
def files():
    for r,d,fs in os.walk(ROOT):
        d[:]=[x for x in d if x not in(".git","node_modules")]
        for f in fs:
            p=os.path.relpath(os.path.join(r,f),ROOT).replace(os.sep,"/")
            if p not in("SHA256SUMS.txt","sw.js") and not p.startswith(".github/"):yield p
h=hashlib.sha256()
for p in sorted(files()):h.update(open(os.path.join(ROOT,p),"rb").read())
sw=rd("sw.js");wr("sw.js",re.sub(r'const V="[^"]*"',f'const V="wh-{h.hexdigest()[:10]}"',sw,count=1))
wr("SHA256SUMS.txt","".join(f"{hashlib.sha256(open(os.path.join(ROOT,p),'rb').read()).hexdigest()}  {p}\n" for p in sorted(list(files())+["sw.js"])))
print("pages, sitemap, sw version and checksums updated")
