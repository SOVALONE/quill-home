// Quill Home — smart home concept app by Obsidian Quill (devices are simulated)
"use strict";

/* ---------- icons (stroke, 24px grid) ---------- */
const P = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  rooms:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  fan:'<path d="M12 12c0-5 2-8 5-8 2 0 3 2 1 4l-6 4"/><path d="M12 12c5 0 8 2 8 5 0 2-2 3-4 1l-4-6"/><path d="M12 12c0 5-2 8-5 8-2 0-3-2-1-4l6-4"/><path d="M12 12c-5 0-8-2-8-5 0-2 2-3 4-1l4 6"/>',
  tv:'<rect x="2" y="5" width="20" height="13" rx="2"/><path d="M8 21h8"/>',
  coffee:'<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 2v3M12 2v3"/>',
  blinds:'<path d="M3 3h18"/><path d="M5 3v18M19 3v18"/><path d="M5 7h14M5 11h14M5 15h14"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  unlock:'<rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
  cam:'<path d="M3 7h3l2-3h8l2 3h3v13H3z"/><circle cx="12" cy="13" r="4"/>',
  speaker:'<rect x="5" y="2" width="14" height="20" rx="3"/><circle cx="12" cy="14" r="3.5"/><circle cx="12" cy="7" r="1"/>',
  plug:'<path d="M9 2v6M15 2v6"/><path d="M6 8h12v4a6 6 0 0 1-12 0z"/><path d="M12 18v4"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"/>',
  door:'<path d="M14 3H6v18h8"/><path d="M14 3l5 2v16l-5-2z"/>',
  film:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4"/>',
  snow:'<path d="M12 2v20M4 6l16 12M20 6 4 18"/>',
  flame:'<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 3-5 5-5 8a7 7 0 0 0 7 7z"/>',
  auto:'<circle cx="12" cy="12" r="9"/><path d="M8.5 16 12 7l3.5 9M9.7 13h4.6"/>',
  drop:'<path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12z"/>',
  wind:'<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"/>',
  play:'<path d="M7 4v16l13-8z"/>',
  mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>',
  shot:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 21h4"/>',
  check:'<path d="m5 12 5 5L20 7"/>',
  arrow:'<path d="m9 6 6 6-6 6"/>',
  sofa:'<path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2z"/><path d="M5 18v2M19 18v2"/>',
  pot:'<path d="M3 10h18"/><path d="M5 10v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-7"/><path d="M9 6c0-1 1-2 3-2s3 1 3 2"/>',
  bed:'<path d="M3 18V6"/><path d="M3 14h18v4"/><path d="M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/>',
  cloud:'<path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18z"/>',
};
const I=(n,s=22,w=1.8)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${P[n]||""}</svg>`;

/* ---------- i18n ---------- */
const T={
 uk:{tabs:{home:"Дім",rooms:"Кімнати",scenes:"Сцени",energy:"Енергія"},
  g:["Доброї ночі","Доброго ранку","Добрий день","Добрий вечір"],
  inside:"всередині",hum:"Вологість",active:"Активні",today:"Сьогодні",weather:"Хмарно · 14° надворі",
  armed:"Охорона увімкнена · двері зачинені",disarmed:"Двері відчинені",
  scenes:"Сцени",rooms:"Кімнати",fav:"Улюблені",all:"Усі",devices:"пристр.",
  on:"Увімк.",off:"Вимк.",locked:"Зачинено",unlocked:"Відчинено",live:"Наживо",playing:"Грає",
  bright:"Яскравість",openP:"Відкрито",target:"Ціль",now:"Зараз",
  modes:{cool:"Холод",heat:"Тепло",auto:"Авто",dry:"Осуш."},
  tapLock:"Натисніть, щоб змінити",history:"Історія",
  logs:[["Зачинено","Сьогодні, 08:42"],["Відчинено · Олег","Сьогодні, 08:40"],["Зачинено · авто","Вчора, 23:15"]],
  talk:"Говорити",snap:"Знімок",ring:"Дзвінок",
  done:"Готово",sceneOn:"Сцену увімкнено",
  week:"Цього тижня",kwh:"кВт·год",vs:"на 12% менше, ніж минулого тижня",
  saved:"Заощаджено",solar:"Сонячні панелі",cost:"Вартість",co2:"CO₂",topD:"Найбільше споживають",
  days:["Пн","Вт","Ср","Чт","Пт","Сб","Нд"],
  r:{living:"Вітальня",kitchen:"Кухня",bed:"Спальня",hall:"Передпокій"},
  s:{morning:"Ранок",away:"Я пішов",movie:"Кіно",sleep:"Сон"},
  sd:{morning:"Світло 70%, 22°, штори відкриті, кава",away:"Усе вимкнено, замок, камера",movie:"Приглушене світло, ТВ, колонка",sleep:"Темрява, 19°, двері зачинені"}},
 en:{tabs:{home:"Home",rooms:"Rooms",scenes:"Scenes",energy:"Energy"},
  g:["Good night","Good morning","Good afternoon","Good evening"],
  inside:"inside",hum:"Humidity",active:"Active",today:"Today",weather:"Cloudy · 14° outside",
  armed:"Security on · doors locked",disarmed:"Front door unlocked",
  scenes:"Scenes",rooms:"Rooms",fav:"Favourites",all:"All",devices:"devices",
  on:"On",off:"Off",locked:"Locked",unlocked:"Unlocked",live:"Live",playing:"Playing",
  bright:"Brightness",openP:"Open",target:"Target",now:"Now",
  modes:{cool:"Cool",heat:"Heat",auto:"Auto",dry:"Dry"},
  tapLock:"Tap to toggle",history:"History",
  logs:[["Locked","Today, 08:42"],["Unlocked · Oleh","Today, 08:40"],["Locked · auto","Yesterday, 23:15"]],
  talk:"Talk",snap:"Snapshot",ring:"Ring",
  done:"Done",sceneOn:"Scene on",
  week:"This week",kwh:"kWh",vs:"12% less than last week",
  saved:"Saved",solar:"Solar",cost:"Cost",co2:"CO₂",topD:"Top consumers",
  days:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
  r:{living:"Living room",kitchen:"Kitchen",bed:"Bedroom",hall:"Hallway"},
  s:{morning:"Morning",away:"Leaving",movie:"Movie",sleep:"Sleep"},
  sd:{morning:"Lights 70%, 22°, blinds open, coffee",away:"All off, door locked, camera on",movie:"Dim lights, TV, speaker",sleep:"Dark, 19°, doors locked"}}
};

const ROOMS={living:{ic:"sofa",g:"linear-gradient(140deg,#6d4bd8,#2a1f5c)"},kitchen:{ic:"pot",g:"linear-gradient(140deg,#e08a3c,#6b2f1a)"},
  bed:{ic:"bed",g:"linear-gradient(140deg,#2f7fd0,#16294f)"},hall:{ic:"door",g:"linear-gradient(140deg,#12a38f,#0f3b3a)"}};
const SCENES={morning:{ic:"sun",g:"linear-gradient(140deg,#ffb86b,#e0663c)"},away:{ic:"door",g:"linear-gradient(140deg,#5eead4,#1b7f75)"},
  movie:{ic:"film",g:"linear-gradient(140deg,#a98bff,#5b3fd0)"},sleep:{ic:"moon",g:"linear-gradient(140deg,#5b7cff,#1f2a6b)"}};
const COLOR={light:"#ffcf6b",climate:"#7cc4ff",tv:"#a98bff",plug:"#ffb86b",blinds:"#5eead4",lock:"#5eead4",camera:"#ff6b7a",speaker:"#a98bff"};
const KTEMP=["#ffb45c","#ffd8a0","#fff3e0","#dfeaff","#b9d3ff"];

const DEF={v:2,lang:"uk",scene:null,
 devices:[
  {id:1,room:"living",type:"light",ic:"bulb",name:{uk:"Люстра",en:"Ceiling light"},on:true,val:80,k:1},
  {id:2,room:"living",type:"climate",ic:"fan",name:{uk:"Кондиціонер",en:"Air conditioner"},on:true,val:22,mode:"cool"},
  {id:3,room:"living",type:"tv",ic:"tv",name:{uk:"Телевізор",en:"TV"},on:false},
  {id:10,room:"living",type:"speaker",ic:"speaker",name:{uk:"Колонка",en:"Speaker"},on:false},
  {id:4,room:"kitchen",type:"light",ic:"bulb",name:{uk:"Підсвітка",en:"Cabinet light"},on:false,val:60,k:0},
  {id:5,room:"kitchen",type:"plug",ic:"coffee",name:{uk:"Кавоварка",en:"Coffee maker"},on:false},
  {id:6,room:"bed",type:"light",ic:"bulb",name:{uk:"Нічник",en:"Night lamp"},on:false,val:30,k:0},
  {id:7,room:"bed",type:"blinds",ic:"blinds",name:{uk:"Штори",en:"Blinds"},on:true,val:40},
  {id:11,room:"bed",type:"climate",ic:"flame",name:{uk:"Обігрівач",en:"Heater"},on:false,val:21,mode:"heat"},
  {id:8,room:"hall",type:"lock",ic:"lock",name:{uk:"Вхідні двері",en:"Front door"},on:true},
  {id:9,room:"hall",type:"camera",ic:"cam",name:{uk:"Камера",en:"Doorbell cam"},on:true},
 ],
 fav:[1,2,8,9,7,5]};

let S; try{S=JSON.parse(localStorage.getItem("qh2"))}catch(e){}
if(!S||S.v!==2) S=structuredClone(DEF);
let tab="home", roomF="all", sheetDev=null;
const $=s=>document.querySelector(s), L=()=>T[S.lang], dev=id=>S.devices.find(d=>d.id===id);
const save=()=>localStorage.setItem("qh2",JSON.stringify(S));
const buzz=(n=10)=>{try{navigator.vibrate&&navigator.vibrate(n)}catch(e){}};

function status(d){const t=L();
  if(d.type==="lock") return d.on?t.locked:t.unlocked;
  if(!d.on) return t.off;
  return {light:d.val+"%",climate:t.modes[d.mode]+" · "+d.val+"°",blinds:t.openP+" "+d.val+"%",camera:"● "+t.live,speaker:t.playing}[d.type]||t.on;}
const kwh=()=>(2.4+S.devices.reduce((a,d)=>a+(d.on?({climate:1.6,tv:.4,plug:.6,light:.15}[d.type]||.05):0),0)).toFixed(1);

const card=(d,i)=>`<div class="dev ${d.on?"on":""}" style="--c:${COLOR[d.type]};animation-delay:${i*45}ms" data-dev="${d.id}" role="button">
  <div class="di">${I(d.type==="lock"&&!d.on?"unlock":d.ic)}</div><div class="sw"></div><button class="sw-hit" data-tog="${d.id}" aria-label="toggle"></button>
  <div><div class="nm">${d.name[S.lang]}</div><div class="st">${status(d)}</div></div></div>`;

/* ---------- views ---------- */
const V={
 home(){const t=L(),a=dev(2),lock=dev(8),act=S.devices.filter(d=>d.on&&d.type!=="lock").length;
  return `<section class="hero">
   <div class="hero-top"><div class="temp">${a.on?a.val:23}<sup>°C</sup><div class="muted" style="letter-spacing:0;margin-top:6px">${t.inside}</div></div>
   <div class="weather">${I("cloud",28)}${t.weather}</div></div>
   <div class="stats"><div class="stat"><b>48%</b><span>${t.hum}</span></div><div class="stat"><b>${act}</b><span>${t.active}</span></div><div class="stat"><b>${kwh()}</b><span>${t.today}, ${t.kwh}</span></div></div>
   <div class="secure"><span class="dot ${lock.on?"":"off"}"></span>${lock.on?t.armed:t.disarmed}</div></section>
  <h2>${t.scenes}</h2><div class="hscroll">${Object.keys(SCENES).map(k=>`<button class="scene ${S.scene===k?"on":""}" data-scene="${k}"><div class="si">${I(SCENES[k].ic,19)}</div><b>${t.s[k]}</b></button>`).join("")}</div>
  <h2>${t.rooms}</h2><div class="rooms">${roomCards()}</div>
  <h2>${t.fav}</h2><div class="grid">${S.fav.map(dev).map(card).join("")}</div>`;},
 rooms(){const t=L(),list=S.devices.filter(d=>roomF==="all"||d.room===roomF);
  return `<div class="chips"><button class="chip ${roomF==="all"?"on":""}" data-room="all">${t.all}</button>${Object.keys(ROOMS).map(r=>`<button class="chip ${roomF===r?"on":""}" data-room="${r}">${t.r[r]}</button>`).join("")}</div>
  <h2>${roomF==="all"?t.all:t.r[roomF]} <small>${list.length} ${t.devices}</small></h2><div class="grid">${list.map(card).join("")}</div>`;},
 scenes(){const t=L();
  return `<h2 style="margin-top:4px">${t.scenes}</h2>`+Object.keys(SCENES).map((k,i)=>`<button class="scard ${S.scene===k?"on":""}" style="animation-delay:${i*60}ms" data-scene="${k}">
   <div class="si" style="--g:${SCENES[k].g}">${I(SCENES[k].ic,24)}</div><div><b>${t.s[k]}</b><p class="muted">${t.sd[k]}</p></div><div class="go">${I(S.scene===k?"check":"play",16,2.2)}</div></button>`).join("");},
 energy(){const t=L(),w=[9.1,7.4,8.8,6.2,7.9,10.4,+kwh()],tot=w.reduce((a,b)=>a+b,0);
  return `<div class="chart" style="animation:rise .5s both"><span class="muted">${t.week}</span><div class="big">${tot.toFixed(1)} <small>${t.kwh}</small></div>
   <span class="muted up">↓ ${t.vs}</span>${chart(w)}<div class="days">${t.days.map(x=>`<span>${x}</span>`).join("")}</div></div>
   <div class="kpi"><div><span class="muted">${t.saved}</span><b class="up">18%</b></div><div><span class="muted">${t.solar}</span><b>4.6 ${t.kwh}</b></div>
   <div><span class="muted">${t.cost}</span><b>${(tot*5.3).toFixed(0)} ₴</b></div><div><span class="muted">${t.co2}</span><b>−2.1 kg</b></div></div>
   <h2>${t.topD}</h2><div class="chart">${[[2,62],[11,21],[3,9],[5,8]].map(([id,p],i)=>`<div class="top-dev"><div class="di" style="color:${COLOR[dev(id).type]}">${I(dev(id).ic,20)}</div>
   <div style="width:110px;font-size:14px">${dev(id).name[S.lang]}</div><div class="bar"><i style="width:${p}%;animation-delay:${i*100}ms"></i></div><span class="muted" style="width:34px;text-align:right">${p}%</span></div>`).join("")}</div>`;}
};
function roomCards(){const t=L();return Object.keys(ROOMS).map((r,i)=>{const n=S.devices.filter(d=>d.room===r),on=n.filter(d=>d.on&&d.type!=="lock").length,c=n.find(d=>d.type==="climate");
  return `<button class="room" style="--g:${ROOMS[r].g};animation-delay:${i*50}ms" data-room="${r}"><div class="room-head">${I(ROOMS[r].ic,26)}<span class="room-t">${c?c.val+"°":"21°"}</span></div>
  <div><b>${t.r[r]}</b><span>${on}/${n.length} ${t.on.toLowerCase()}</span></div></button>`}).join("");}
function chart(w){const W=320,H=150,m=Math.max(...w)*1.15,pts=w.map((v,i)=>[10+i*(W-20)/6,H-10-v/m*(H-30)]);
  let d=`M${pts[0]}`;for(let i=1;i<pts.length;i++){const [x0,y0]=pts[i-1],[x1,y1]=pts[i],cx=(x0+x1)/2;d+=` C${cx},${y0} ${cx},${y1} ${x1},${y1}`;}
  const [lx,ly]=pts[6];
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="ga" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#a98bff" stop-opacity=".45"/><stop offset="1" stop-color="#a98bff" stop-opacity="0"/></linearGradient>
  <linearGradient id="gl" x1="0" x2="1"><stop offset="0" stop-color="#a98bff"/><stop offset="1" stop-color="#5eead4"/></linearGradient></defs>
  <path d="${d} L${lx},${H} L10,${H}Z" fill="url(#ga)"/><path d="${d}" fill="none" stroke="url(#gl)" stroke-width="3" stroke-linecap="round" stroke-dasharray="1000" style="animation:draw 1.4s ease both"/>
  <circle cx="${lx}" cy="${ly}" r="6" fill="#5eead4" stroke="#14141b" stroke-width="3"/></svg>`;}

/* ---------- render ---------- */
function render(){const t=L(),h=new Date().getHours();
  $("#greet").textContent=t.g[h<5?0:h<12?1:h<18?2:h<23?3:0];
  $("#title").textContent=tab==="home"?"Quill Home":t.tabs[tab];
  $("#langBtn").textContent=S.lang==="uk"?"UA":"EN"; document.documentElement.lang=S.lang;
  $("#tabs").innerHTML=Object.entries({home:"home",rooms:"rooms",scenes:"spark",energy:"bolt"}).map(([k,ic])=>`<button class="${tab===k?"on":""}" data-tab="${k}">${I(ic,21)}${t.tabs[k]}</button>`).join("");
  $("#view").innerHTML=V[tab]();}
function refresh(){ // re-render without replaying entrance animations
  $("#view").querySelectorAll("[style*=animation-delay]").forEach(e=>e.style.animation="none");
  const keep=$("#view").innerHTML;render();$("#view").querySelectorAll(".dev,.room,.scard,.hero,.chart").forEach(e=>e.style.animation="none");}
function toast(m){const e=$("#toast");e.innerHTML=I("check",16,2.4)+m;e.classList.add("show");clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove("show"),1900);}

/* ---------- sheet ---------- */
function openSheet(d){sheetDev=d;drawSheet();$("#sheet").classList.add("open");$("#sheet").setAttribute("aria-hidden","false");}
function closeSheet(){$("#sheet").classList.remove("open");$("#sheet").setAttribute("aria-hidden","true");sheetDev=null;refresh();}
function head(d){return `<div class="sh-head" style="--c:${COLOR[d.type]}"><div class="di">${I(d.type==="lock"&&!d.on?"unlock":d.ic,24)}</div><div><b>${d.name[S.lang]}</b><span class="muted">${L().r[d.room]} · <span id="shSt">${status(d)}</span></span></div>
  ${d.type!=="lock"&&d.type!=="camera"?`<button class="sw2 ${d.on?"on":""}" id="shTog" aria-label="power"></button>`:""}</div>`;}
function drawSheet(){const d=sheetDev,t=L();let b=head(d);
  if(d.type==="light"||d.type==="blinds"){
    b+=`<div class="vwrap"><div class="vs" id="vs" style="--fill:${d.type==="light"?`linear-gradient(0deg,${KTEMP[d.k]},#fff)`:"linear-gradient(0deg,#5eead4,#c7fff4)"}"><i id="vsFill"></i><div class="vs-ic">${I(d.ic,26,2)}</div></div>
     <div><div class="muted">${d.type==="light"?t.bright:t.openP}</div><div class="vval" id="vval">${d.on||d.type==="blinds"?d.val:0}<small>%</small></div></div></div>`;
    if(d.type==="light") b+=`<div class="swatches">${KTEMP.map((c,i)=>`<button class="swatch ${d.k===i?"on":""}" style="background:${c}" data-k="${i}"></button>`).join("")}</div>`;
  } else if(d.type==="climate"){
    b+=`<div class="dial" id="dial"></div><div class="steps"><button class="step" data-step="-1">−</button><button class="step" data-step="1">+</button></div>
     <div class="modes">${[["cool","snow"],["heat","flame"],["auto","auto"],["dry","drop"]].map(([m,ic])=>`<button class="mode ${d.mode===m?"on":""}" data-mode="${m}">${I(ic,20)}${t.modes[m]}</button>`).join("")}</div>`;
  } else if(d.type==="lock"){
    b+=`<button class="lockbtn ${d.on?"on":"off"}" id="lockBtn">${I(d.on?"lock":"unlock",64,1.5)}</button><p class="center muted">${t.tapLock}</p>
     <div class="log"><b>${t.history}</b>${t.logs.map(([a,c])=>`<div><span>${a}</span><span class="muted">${c}</span></div>`).join("")}</div>`;
  } else if(d.type==="camera"){
    b+=`<div class="cam">${camSvg()}<span class="rec"><i></i>${t.live.toUpperCase()}</span><span class="ts" id="camTs"></span></div>
     <div class="camrow"><button data-cam="talk">${I("mic",20)}${t.talk}</button><button data-cam="snap">${I("shot",20)}${t.snap}</button><button data-cam="ring">${I("bell",20)}${t.ring}</button></div>`;
  } else {
    b+=`<div class="vwrap"><button class="lockbtn ${d.on?"on":""}" id="powBtn" style="--c:${COLOR[d.type]}">${I(d.ic,64,1.5)}</button></div>`;
  }
  b+=`<button class="btn" data-close>${t.done}</button>`;
  $("#sheetBody").innerHTML=b; wireSheet();}
function setSt(){const e=$("#shSt");if(e)e.textContent=status(sheetDev);const s=$("#shTog");if(s)s.classList.toggle("on",sheetDev.on);}
function wireSheet(){const d=sheetDev;
  const tog=$("#shTog"); if(tog) tog.onclick=()=>{d.on=!d.on;if(d.on&&d.type==="light"&&!d.val)d.val=50;save();buzz();drawSheet();};
  const vs=$("#vs"); if(vs){const fill=$("#vsFill"),out=$("#vval");
    const show=()=>{const v=d.type==="blinds"||d.on?d.val:0;fill.style.height=v+"%";out.innerHTML=v+"<small>%</small>";};show();
    const move=e=>{const r=vs.getBoundingClientRect();d.val=Math.round(Math.min(100,Math.max(0,(r.bottom-e.clientY)/r.height*100)));
      d.on=d.type==="blinds"?true:d.val>0;show();setSt();save();};
    vs.onpointerdown=e=>{vs.setPointerCapture(e.pointerId);move(e);buzz(5);vs.onpointermove=move;};
    vs.onpointerup=vs.onpointercancel=()=>{vs.onpointermove=null;};}
  document.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{d.k=+b.dataset.k;d.on=true;if(!d.val)d.val=50;save();buzz();drawSheet();});
  const dial=$("#dial"); if(dial){drawDial();
    const move=e=>{const r=dial.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
      let a=Math.atan2(x,-y)*180/Math.PI; if(a<-135)a=-135; if(a>135)a=135;
      const v=Math.round(16+(a+135)/270*14); if(v!==d.val){d.val=v;d.on=true;buzz(4);drawDial();setSt();save();}};
    dial.onpointerdown=e=>{dial.setPointerCapture(e.pointerId);move(e);dial.onpointermove=move;};
    dial.onpointerup=dial.onpointercancel=()=>{dial.onpointermove=null;};}
  document.querySelectorAll("[data-step]").forEach(b=>b.onclick=()=>{d.val=Math.min(30,Math.max(16,d.val+ +b.dataset.step));d.on=true;save();buzz();drawDial();setSt();});
  document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{d.mode=b.dataset.mode;d.on=true;save();buzz();drawSheet();});
  const lb=$("#lockBtn"); if(lb) lb.onclick=()=>{d.on=!d.on;save();buzz(30);drawSheet();toast(d.on?L().locked:L().unlocked);};
  const pb=$("#powBtn"); if(pb) pb.onclick=()=>{d.on=!d.on;save();buzz();drawSheet();};
  document.querySelectorAll("[data-cam]").forEach(b=>b.onclick=()=>{b.classList.toggle("on");buzz();if(b.dataset.cam==="snap")toast(L().snap+" ✓");});
  const ts=$("#camTs"); if(ts){const tick=()=>{if(!document.body.contains(ts))return;ts.textContent=new Date().toLocaleTimeString("uk-UA");setTimeout(tick,1000);};tick();}}
function drawDial(){const d=sheetDev,dial=$("#dial");if(!dial)return;
  const R=110,C=130,arc=(a0,a1)=>{const p=a=>[C+R*Math.sin(a*Math.PI/180),C-R*Math.cos(a*Math.PI/180)];const [x0,y0]=p(a0),[x1,y1]=p(a1);return `M${x0},${y0} A${R},${R} 0 ${a1-a0>180?1:0} 1 ${x1},${y1}`;};
  const a=-135+(d.val-16)/14*270, col=d.mode==="heat"?"#ffb86b":d.mode==="cool"?"#7cc4ff":"#a98bff";
  const kx=C+R*Math.sin(a*Math.PI/180),ky=C-R*Math.cos(a*Math.PI/180);
  let ticks="";for(let i=0;i<=28;i++){const t=-135+i*270/28,s=Math.sin(t*Math.PI/180),c=Math.cos(t*Math.PI/180);ticks+=`<line x1="${C+82*s}" y1="${C-82*c}" x2="${C+(i%7?88:92)*s}" y2="${C-(i%7?88:92)*c}" stroke="${t<=a?col:"#ffffff25"}" stroke-width="2" stroke-linecap="round"/>`;}
  dial.innerHTML=`<svg viewBox="0 0 260 260"><defs><filter id="gw"><feGaussianBlur stdDeviation="6"/></filter></defs>
   <path d="${arc(-135,135)}" stroke="#ffffff12" stroke-width="18" fill="none" stroke-linecap="round"/>
   <path d="${arc(-135,Math.max(a,-134))}" stroke="${col}" stroke-width="18" fill="none" stroke-linecap="round" filter="url(#gw)" opacity=".5"/>
   <path d="${arc(-135,Math.max(a,-134))}" stroke="${col}" stroke-width="18" fill="none" stroke-linecap="round"/>${ticks}
   <circle cx="${kx}" cy="${ky}" r="14" fill="#fff" stroke="${col}" stroke-width="4"/></svg>
   <div class="dv"><div><span>${L().target}</span><b>${d.val}<sup>°C</sup></b><span>${L().now} 23.4° · ${L().modes[d.mode]}</span></div></div>`;}
function camSvg(){return `<svg class="scene-svg" viewBox="0 0 400 275" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e3436"/><stop offset="1" stop-color="#0d1517"/></linearGradient></defs>
  <rect width="400" height="275" fill="url(#sky)"/><path d="M0 190 L400 170 L400 275 L0 275Z" fill="#162224"/>
  <path d="M150 275 L190 175 L230 175 L290 275Z" fill="#1d2c2e"/><rect x="40" y="70" width="90" height="110" fill="#14201f" stroke="#2c4241"/>
  <rect x="300" y="60" width="70" height="115" fill="#14201f" stroke="#2c4241"/><circle cx="345" cy="40" r="18" fill="#5eead415"/>
  <g class="walker" opacity=".8"><circle cx="40" cy="168" r="8" fill="#9fb8b5"/><rect x="33" y="177" width="14" height="28" rx="6" fill="#9fb8b5"/></g>
  <rect x="0" y="0" width="400" height="275" fill="none" stroke="#5eead433" stroke-width="2"/></svg>`;}

/* ---------- scenes ---------- */
function scene(k){const set=(id,on,v)=>{const d=dev(id);d.on=on;if(v!==undefined)d.val=v;};
  if(k==="morning"){set(1,true,70);set(2,true,22);dev(2).mode="auto";set(7,true,100);set(5,true);set(6,false);}
  if(k==="away"){S.devices.forEach(d=>d.on=false);set(8,true);set(9,true);set(7,true,0);}
  if(k==="movie"){set(1,true,15);dev(1).k=0;set(3,true);set(10,true);set(4,false);set(7,true,0);}
  if(k==="sleep"){[1,3,4,5,10].forEach(i=>set(i,false));set(6,false);set(2,true,19);set(7,true,0);set(8,true);}
  S.scene=k;save();buzz([10,40,10]);toast(L().sceneOn+": "+L().s[k]);refresh();}

/* ---------- events ---------- */
document.addEventListener("click",e=>{const g=s=>e.target.closest(s);let x;
  if(g("#sheetCard")){if(g("[data-close]"))closeSheet();return;}
  if(e.target.id==="sheet"){closeSheet();return;}
  if(x=g("[data-tog]")){const d=dev(+x.dataset.tog);d.on=!d.on;S.scene=null;save();buzz();refresh();return;}
  if(x=g("[data-dev]")){openSheet(dev(+x.dataset.dev));buzz(6);return;}
  if(x=g("[data-scene]"))return scene(x.dataset.scene);
  if(x=g("[data-room]")){roomF=x.dataset.room;if(tab!=="rooms"){tab="rooms";render();scrollTo(0,0);}else refresh();return;}
  if(x=g("[data-tab]")){tab=x.dataset.tab;render();scrollTo({top:0});buzz(5);return;}
});
$("#langBtn").onclick=()=>{S.lang=S.lang==="uk"?"en":"uk";save();render();};
// swipe sheet down to close
(()=>{let y0=null;const c=$("#sheetCard");
  c.addEventListener("touchstart",e=>{if(c.scrollTop<=0&&!e.target.closest("#vs,#dial"))y0=e.touches[0].clientY;},{passive:true});
  c.addEventListener("touchmove",e=>{if(y0===null)return;const dy=e.touches[0].clientY-y0;if(dy>0){c.style.transition="none";c.style.transform=`translateY(${dy}px)`;}},{passive:true});
  c.addEventListener("touchend",e=>{if(y0===null)return;const dy=e.changedTouches[0].clientY-y0;c.style.transition="";c.style.transform="";y0=null;if(dy>110)closeSheet();});})();

render();
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
