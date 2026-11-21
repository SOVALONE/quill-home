// Quill Home — Car module (Subaru Turbo, simulated)
"use strict";
Object.assign(P,{
  car:'<path d="M3 16v-3l2-5h10l4 4h2v4"/><circle cx="7" cy="16.5" r="2"/><circle cx="17" cy="16.5" r="2"/><path d="M9 16.5h6"/>',
  power:'<path d="M12 3v8"/><path d="M6.3 7a8 8 0 1 0 11.4 0"/>',
  horn:'<path d="M3 10v4h4l6 4V6L7 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
  trunk:'<path d="M3 15v-3l3-5h12l3 5v3z"/><path d="M3 15v3h18v-3"/><path d="M15 7l3-3"/>',
  win:'<path d="M4 20V9l6-5h10v16z"/><path d="M4 13h16"/>',
  pin:'<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  seat:'<path d="M7 3h4l1 10h6l1 7H8z"/><path d="M6 21h14"/>',
  fuel:'<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16"/><path d="M3 21h12M4 10h10"/><path d="M14 8h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V8l-3-3"/>',
  turbo:'<circle cx="12" cy="12" r="9"/><path d="M12 12 7 7M12 3v2M3 12h2M19 12h2M5.6 5.6 7 7"/><circle cx="12" cy="12" r="1.5"/>',
});
Object.assign(T.uk.tabs,{car:"Авто"});Object.assign(T.en.tabs,{car:"Car"});
const TC={
 uk:{parked:"Припарковано · Київ, вул. Хрещатик",locked:"Зачинено",unlocked:"Відчинено",range:"Запас ходу",oil:"Масло",
  boost:"Турбо-тиск",idle:"Двигун вимкнено",running:"Двигун працює",start:"Запуск",stop:"Зупинити",rev:"Газ!",
  light:"Кастомна підсвітка",color:"Колір",bri:"Яскравість",mode:"Режим",zones:"Зони",
  modes:{static:"Статика",breathe:"Дихання",rainbow:"Веселка",strobe:"Строб"},
  z:{under:"Днище",inside:"Салон",grille:"Решітка"},
  ctl:"Керування",climate:"Клімат",windows:"Вікна",trunk:"Багажник",horn:"Сигнал",find:"Знайти",seat:"Підігрів",
  open:"Відкрито",closed:"Закрито",on:"Увімк.",off:"Вимк.",tyres:"Тиск у шинах",
  t:{started:"Двигун запущено",stopped:"Двигун зупинено",horn:"Бі-біп! Фари блимнули",find:"Авто за 120 м від вас"}},
 en:{parked:"Parked · Kyiv, Khreshchatyk St",locked:"Locked",unlocked:"Unlocked",range:"Range",oil:"Oil",
  boost:"Boost",idle:"Engine off",running:"Engine running",start:"Start",stop:"Stop",rev:"Rev!",
  light:"Custom lighting",color:"Colour",bri:"Brightness",mode:"Mode",zones:"Zones",
  modes:{static:"Static",breathe:"Breathe",rainbow:"Rainbow",strobe:"Strobe"},
  z:{under:"Underglow",inside:"Interior",grille:"Grille"},
  ctl:"Controls",climate:"Climate",windows:"Windows",trunk:"Trunk",horn:"Horn",find:"Find",seat:"Seat heat",
  open:"Open",closed:"Closed",on:"On",off:"Off",tyres:"Tyre pressure",
  t:{started:"Engine started",stopped:"Engine stopped",horn:"Beep! Lights flashed",find:"Car is 120 m away"}}
};
const CDEF={locked:true,engine:false,climate:false,temp:21,windows:false,trunk:false,seat:false,
  light:{on:true,hue:205,mode:"breathe",bri:85,zones:{under:true,inside:true,grille:true}}};
if(!S.car) {S.car=structuredClone(CDEF);save();}
const C=()=>S.car, TT=()=>TC[S.lang];
const hsl=(h,l=60)=>`hsl(${h} 100% ${l}%)`;
let boost=-0.7, revUntil=0, boostTimer=null, flashUntil=0;

function carSvg(){const c=C(),L=c.light,col=hsl(L.hue),a=L.on?L.bri/100:0,flash=Date.now()<flashUntil;
  const anim=L.on?`lg-${L.mode}`:"";
  return `<svg class="carsvg ${anim}" viewBox="0 0 360 170" style="--lc:${col}">
  <defs><filter id="ug" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="9"/></filter>
   <linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4f8f"/><stop offset=".55" stop-color="#1d2b5c"/><stop offset="1" stop-color="#0e1533"/></linearGradient>
   <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9fb4e8" stop-opacity=".55"/><stop offset="1" stop-color="#1a2340" stop-opacity=".9"/></linearGradient></defs>
  <g class="lz" opacity="${L.zones.under?a:0}"><ellipse cx="180" cy="142" rx="150" ry="11" fill="var(--lc)" filter="url(#ug)"/><ellipse cx="180" cy="140" rx="120" ry="3" fill="var(--lc)"/></g>
  <path d="M22 118 C20 100 28 92 52 88 L104 82 L140 56 C150 50 160 48 176 48 L232 48 C248 48 258 52 270 62 L294 82 L324 88 C338 91 344 100 343 112 L342 122 L22 124Z" fill="url(#body)" stroke="#5a6fb0" stroke-width="1"/>
  <path d="M148 62 C154 57 162 55 174 55 L200 55 L202 82 L120 84Z" fill="url(#glass)"/>
  <path d="M208 55 L232 55 C244 55 252 58 262 66 L280 82 L210 82Z" fill="url(#glass)"/>
  <g class="lz" opacity="${L.zones.inside?a*.8:0}"><path d="M150 64 L198 60 L200 80 L130 82Z M212 60 L258 66 L274 80 L212 80Z" fill="var(--lc)" opacity=".45" filter="url(#ug)"/></g>
  <path d="M150 74 L170 72 L172 76 L150 78Z" fill="#0e1533"/>
  <path d="M118 82 L148 80 L146 86 L120 88Z" fill="#0a0f22"/><rect x="126" y="80" width="18" height="3" rx="1.5" fill="#2a3a70"/>
  <line x1="203" y1="56" x2="205" y2="120" stroke="#0e1533" stroke-width="2"/>
  <path d="M60 104 L320 102" stroke="#ffffff14"/>
  <path d="M26 96 L46 93 L48 100 L28 103Z" fill="${flash?"#fff":"#ffb3b3"}" opacity="${flash?1:.85}"/>
  <path d="M322 92 L340 96 L340 104 L320 100Z" fill="${flash?"#fff":"#dff0ff"}"/>
  <g class="lz" opacity="${L.zones.grille?a:0}"><path d="M318 106 L341 108" stroke="var(--lc)" stroke-width="3" stroke-linecap="round"/><ellipse cx="330" cy="107" rx="16" ry="5" fill="var(--lc)" filter="url(#ug)" opacity=".7"/></g>
  ${flash?`<ellipse cx="352" cy="100" rx="30" ry="12" fill="#fff" opacity=".35" filter="url(#ug)"/>`:""}
  ${c.trunk?`<path d="M24 92 L10 70 L52 86" fill="#1d2b5c" stroke="#5a6fb0"/>`:""}
  ${[86,276].map(x=>`<circle cx="${x}" cy="122" r="25" fill="#07090f"/><circle cx="${x}" cy="122" r="17" fill="#1a1d27" stroke="#c9ccd8" stroke-width="2"/>
   <g class="${c.engine?"spin":""}" style="transform-origin:${x}px 122px">${[0,72,144,216,288].map(r=>`<path d="M${x} 122 L${x} 107" stroke="#c9ccd8" stroke-width="3" transform="rotate(${r} ${x} 122)"/>`).join("")}</g>
   <circle cx="${x}" cy="122" r="4" fill="#c9ccd8"/>`).join("")}
  ${c.engine?`<g class="exhaust"><circle cx="16" cy="118" r="4" fill="#ffffff22"/><circle cx="8" cy="114" r="6" fill="#ffffff14"/></g>`:""}
 </svg>`;}

function gauge(){return `<svg viewBox="0 0 200 120" class="gauge"><path d="M20 105 A80 80 0 0 1 180 105" fill="none" stroke="#ffffff14" stroke-width="12" stroke-linecap="round"/>
  <path d="M20 105 A80 80 0 0 1 180 105" fill="none" stroke="url(#bg)" stroke-width="12" stroke-linecap="round" pathLength="100" stroke-dasharray="100" id="bArc"/>
  <defs><linearGradient id="bg"><stop offset="0" stop-color="#5eead4"/><stop offset=".6" stop-color="#a98bff"/><stop offset="1" stop-color="#ff6b7a"/></linearGradient></defs>
  ${[-1,-.5,0,.5,1,1.5].map(v=>{const a=Math.PI*(1-(v+1)/2.5),x=100+62*Math.cos(a),y=105-62*Math.sin(a);return `<text x="${x}" y="${y+4}" fill="#8d8ca3" font-size="9" text-anchor="middle">${v}</text>`}).join("")}
  <line id="needle" x1="100" y1="105" x2="100" y2="35" stroke="#fff" stroke-width="3" stroke-linecap="round" style="transform-origin:100px 105px;transition:transform .15s"/><circle cx="100" cy="105" r="7" fill="#fff"/></svg>`;}
function setGauge(){const n=document.getElementById("needle");if(!n){clearInterval(boostTimer);boostTimer=null;return;}
  const tgt=!C().engine?-1:Date.now()<revUntil?1.15+Math.random()*.2:-0.65+Math.random()*.06;
  boost+= (tgt-boost)*0.35; const f=(boost+1)/2.5;
  n.style.transform=`rotate(${-90+f*180}deg)`; document.getElementById("bArc").style.strokeDashoffset=100-f*100;
  document.getElementById("bVal").textContent=(boost>0?"+":"")+boost.toFixed(2);
  document.getElementById("rpm").textContent=C().engine?Math.round(800+Math.max(0,boost+.65)*3800)+" rpm":"— rpm";}

V.car=function(){const c=C(),t=TT(),L=c.light,tile=(k,ic,on,st)=>`<button class="ctile ${on?"on":""}" data-car="${k}">${I(ic,22)}<b>${t[k]}</b><span>${st}</span></button>`;
 return `<section class="carhero rise" style="--lc:${hsl(L.hue)}">
  <div class="car-top"><div><b class="car-name">Subaru Turbo</b><p class="muted">${I("pin",13)} ${t.parked}</p></div>
   <button class="lockchip ${c.locked?"on":""}" data-car="lock">${I(c.locked?"lock":"unlock",16)}${c.locked?t.locked:t.unlocked}</button></div>
  <div class="carwrap">${carSvg()}</div>
  <div class="carstats"><div>${I("fuel",16)}<b>412 km</b><span>${t.range} · 64%</span></div><div>${I("turbo",16)}<b>${c.engine?"92°C":"18°C"}</b><span>${t.oil}</span></div></div></section>

 <section class="engine rise" style="animation-delay:60ms"><div class="eng-l"><span class="muted">${t.boost}, bar</span><div class="bval" id="bVal">-1.00</div><span class="muted" id="rpm"></span>
   <div class="eng-st ${c.engine?"on":""}"><i></i>${c.engine?t.running:t.idle}</div></div>
  <div class="eng-r">${gauge()}<div class="eng-btns"><button class="startbtn ${c.engine?"on":""}" data-car="engine">${I("power",20,2.2)}${c.engine?t.stop:t.start}</button>
   ${c.engine?`<button class="revbtn" data-car="rev">${t.rev}</button>`:""}</div></div></section>

 <h2>${t.light} <button class="sw2 ${L.on?"on":""}" data-car="lightOn" style="--c:${hsl(L.hue)}"></button></h2>
 <section class="lightpanel rise" style="--lc:${hsl(L.hue)};animation-delay:120ms">
  <span class="muted">${t.color}</span>
  <div class="presets">${[0,28,55,120,170,205,265,300].map(h=>`<button class="swatch ${L.hue===h?"on":""}" style="background:${hsl(h)}" data-hue="${h}"></button>`).join("")}</div>
  <input type="range" class="hue" min="0" max="359" value="${L.hue}" data-carin="hue">
  <span class="muted">${t.bri} · <b id="briV">${L.bri}%</b></span>
  <input type="range" class="bri" min="10" max="100" value="${L.bri}" data-carin="bri">
  <span class="muted">${t.mode}</span>
  <div class="seg">${Object.keys(t.modes).map(m=>`<button class="${L.mode===m?"on":""}" data-lmode="${m}">${t.modes[m]}</button>`).join("")}</div>
  <span class="muted">${t.zones}</span>
  <div class="seg">${Object.keys(t.z).map(z=>`<button class="${L.zones[z]?"on":""}" data-zone="${z}">${t.z[z]}</button>`).join("")}</div>
 </section>

 <h2>${t.ctl}</h2><div class="ctiles">
  ${tile("climate","fan",c.climate,c.climate?c.temp+"°C":t.off)}${tile("seat","seat",c.seat,c.seat?t.on:t.off)}
  ${tile("windows","win",c.windows,c.windows?t.open:t.closed)}${tile("trunk","trunk",c.trunk,c.trunk?t.open:t.closed)}
  ${tile("horn","horn",false,"")}${tile("find","pin",false,"")}</div>
 ${c.climate?`<div class="climrow rise"><button class="step" data-ctemp="-1">−</button><b>${c.temp}°C</b><button class="step" data-ctemp="1">+</button></div>`:""}

 <h2>${t.tyres}</h2><div class="tyres rise">${[["FL",2.4],["FR",2.4],["RL",2.3],["RR",2.1]].map(([k,v])=>`<div class="${v<2.2?"warn":""}"><span>${k}</span><b>${v}</b><small>bar</small></div>`).join("")}
  <svg viewBox="0 0 60 110" class="topcar"><rect x="12" y="6" width="36" height="98" rx="14" fill="#1d2b5c" stroke="#5a6fb0"/><rect x="17" y="30" width="26" height="20" rx="4" fill="#9fb4e855"/><rect x="17" y="70" width="26" height="14" rx="4" fill="#9fb4e833"/></svg></div>`;
};

function carUpd(){$("#view").innerHTML=V.car();$("#view").classList.add("still");startGauge();}
function startGauge(){if(tab!=="car")return;if(!boostTimer)boostTimer=setInterval(setGauge,120);setGauge();}
document.addEventListener("click",e=>{const x=e.target.closest("[data-car],[data-hue],[data-lmode],[data-zone],[data-ctemp]");if(!x)return;
 const c=C(),t=TT(),k=x.dataset.car;e.stopPropagation();
 if(x.dataset.hue){c.light.hue=+x.dataset.hue;c.light.on=true;}
 else if(x.dataset.lmode){c.light.mode=x.dataset.lmode;c.light.on=true;}
 else if(x.dataset.zone){const z=x.dataset.zone;c.light.zones[z]=!c.light.zones[z];}
 else if(x.dataset.ctemp){c.temp=Math.min(28,Math.max(16,c.temp+ +x.dataset.ctemp));}
 else if(k==="lock"){c.locked=!c.locked;flashUntil=Date.now()+500;setTimeout(carUpd,520);toast(c.locked?t.locked:t.unlocked);buzz([20,60,20]);}
 else if(k==="engine"){c.engine=!c.engine;if(c.engine){revUntil=Date.now()+700;c.locked=true;}toast(c.engine?t.t.started:t.t.stopped);buzz(c.engine?[30,40,80]:30);}
 else if(k==="rev"){revUntil=Date.now()+1200;buzz([60,30,60,30,120]);return;}
 else if(k==="lightOn"){c.light.on=!c.light.on;}
 else if(k==="horn"){flashUntil=Date.now()+600;setTimeout(carUpd,620);toast(t.t.horn);buzz([80,60,80]);}
 else if(k==="find"){flashUntil=Date.now()+600;setTimeout(carUpd,620);toast(t.t.find);}
 else if(k){c[k]=!c[k];}
 save();buzz();carUpd();},true);
document.addEventListener("input",e=>{const k=e.target.dataset.carin;if(!k)return;const L=C().light;L[k]=+e.target.value;L.on=true;save();
 const h=document.querySelector(".carhero"),p=document.querySelector(".lightpanel");
 if(k==="hue"){[h,p].forEach(n=>n&&n.style.setProperty("--lc",hsl(L.hue)));document.querySelector(".carwrap").innerHTML=carSvg();}
 else{document.getElementById("briV").textContent=L.bri+"%";document.querySelector(".carwrap").innerHTML=carSvg();}});
document.addEventListener("change",e=>{if(e.target.dataset.carin)carUpd();});
// leave "still" mode & start gauge whenever tabs change
document.addEventListener("click",e=>{if(e.target.closest("[data-tab]")){$("#view").classList.remove("still");setTimeout(startGauge,0);}});
render();
