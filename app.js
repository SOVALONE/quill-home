// Quill Home — smart home demo PWA by Obsidian Quill (simulated devices)
const T = {
  uk:{home:"Дім",rooms:"Кімнати",scenes:"Сцени",energy:"Енергія",morning:"Доброго ранку",day:"Добрий день",evening:"Добрий вечір",night:"Доброї ночі",
      inside:"Всередині",active:"Увімкнено",usage:"Сьогодні",fav:"Улюблені",all:"Усі",on:"Увімк.",off:"Вимк.",open:"Відчинено",locked:"Зачинено",
      apply:"Застосувати",close:"Закрити",bright:"Яскравість",target:"Цільова",live:"● LIVE",week:"Споживання за тиждень, кВт·год",
      saved:"Заощаджено",solar:"Сонячні панелі",devices:"пристроїв",run:"Сцену запущено",
      r:{living:"Вітальня",kitchen:"Кухня",bed:"Спальня",hall:"Передпокій"},
      s:{morning:"Ранок",away:"Я пішов",movie:"Кіно",sleep:"Сон"},
      sd:{morning:"Світло 70%, 22°, штори відкрито",away:"Усе вимкнено, замок, охорона",movie:"Світло 15%, ТВ увімкнено",sleep:"Світло вимк., 19°, замок"}},
  en:{home:"Home",rooms:"Rooms",scenes:"Scenes",energy:"Energy",morning:"Good morning",day:"Good afternoon",evening:"Good evening",night:"Good night",
      inside:"Inside",active:"Active",usage:"Today",fav:"Favourites",all:"All",on:"On",off:"Off",open:"Open",locked:"Locked",
      apply:"Apply",close:"Close",bright:"Brightness",target:"Target",live:"● LIVE",week:"Weekly usage, kWh",
      saved:"Saved",solar:"Solar",devices:"devices",run:"Scene activated",
      r:{living:"Living room",kitchen:"Kitchen",bed:"Bedroom",hall:"Hallway"},
      s:{morning:"Morning",away:"Leaving",movie:"Movie",sleep:"Sleep"},
      sd:{morning:"Lights 70%, 22°, blinds open",away:"All off, door locked, alarm",movie:"Lights 15%, TV on",sleep:"Lights off, 19°, door locked"}}
};

const DEF = {
  lang:"uk",
  devices:[
    {id:1,room:"living",type:"light",ic:"💡",name:{uk:"Люстра",en:"Ceiling light"},on:true,val:80},
    {id:2,room:"living",type:"climate",ic:"❄️",name:{uk:"Кондиціонер",en:"Air conditioner"},on:true,val:22},
    {id:3,room:"living",type:"tv",ic:"📺",name:{uk:"Телевізор",en:"TV"},on:false},
    {id:4,room:"kitchen",type:"light",ic:"💡",name:{uk:"Підсвітка",en:"Under-cabinet"},on:false,val:60},
    {id:5,room:"kitchen",type:"plug",ic:"☕",name:{uk:"Кавоварка",en:"Coffee maker"},on:false},
    {id:6,room:"bed",type:"light",ic:"🌙",name:{uk:"Нічник",en:"Night lamp"},on:false,val:30},
    {id:7,room:"bed",type:"blinds",ic:"🪟",name:{uk:"Штори",en:"Blinds"},on:false,val:0},
    {id:8,room:"hall",type:"lock",ic:"🔒",name:{uk:"Замок",en:"Smart lock"},on:true},
    {id:9,room:"hall",type:"camera",ic:"📷",name:{uk:"Камера",en:"Camera"},on:true},
  ],
  fav:[1,2,8,9,5,7],
};
let S = JSON.parse(localStorage.getItem("qh")||"null") || structuredClone(DEF);
let tab="home", roomFilter="all";
const L=()=>T[S.lang], $=s=>document.querySelector(s), save=()=>localStorage.setItem("qh",JSON.stringify(S));
const dev=id=>S.devices.find(d=>d.id===id);

function status(d){
  const t=L();
  if(d.type==="lock") return d.on?t.locked:t.open;
  if(!d.on) return t.off;
  if(d.type==="light") return d.val+"%";
  if(d.type==="climate") return d.val+"°C";
  if(d.type==="blinds") return d.val+"%";
  if(d.type==="camera") return t.live;
  return t.on;
}
const card=(d,i)=>`<button class="dev ${d.on?"on":""}" style="animation-delay:${i*40}ms" data-dev="${d.id}">
  <div class="sw" data-tog="${d.id}"></div><div class="ic">${d.ic}</div>
  <div class="nm">${d.name[S.lang]}</div><div class="st">${L().r[d.room]} · ${status(d)}</div></button>`;

const views={
  home(){
    const t=L(), act=S.devices.filter(d=>d.on&&d.type!=="lock").length;
    const kwh=(S.devices.filter(d=>d.on).length*0.9+3.2).toFixed(1);
    return `<section class="hero"><div><b>${dev(2).on?dev(2).val:23}°</b>${t.inside}</div>
      <div><b>${act}</b>${t.active}</div><div><b>${kwh}</b>${t.usage}, kWh</div></section>
      <h2>${t.scenes}</h2><div class="chips">${Object.keys(t.s).map(k=>`<button class="chip" data-scene="${k}">${t.s[k]}</button>`).join("")}</div>
      <h2>${t.fav}</h2><div class="grid">${S.fav.map(dev).map(card).join("")}</div>`;
  },
  rooms(){
    const t=L(), rs=Object.keys(t.r);
    const list=S.devices.filter(d=>roomFilter==="all"||d.room===roomFilter);
    return `<div class="chips"><button class="chip ${roomFilter==="all"?"on":""}" data-room="all">${t.all}</button>
      ${rs.map(r=>`<button class="chip ${roomFilter===r?"on":""}" data-room="${r}">${t.r[r]}</button>`).join("")}</div>
      ${roomFilter==="all"?rs.map(r=>{const n=S.devices.filter(d=>d.room===r);
        return `<button class="room" data-room="${r}"><div><b>${t.r[r]}</b><p class="muted">${n.length} ${t.devices} · ${n.filter(d=>d.on).length} ${t.on.toLowerCase()}</p></div><span>›</span></button>`}).join(""):""}
      <h2>${roomFilter==="all"?t.all:t.r[roomFilter]}</h2><div class="grid">${list.map(card).join("")}</div>`;
  },
  scenes(){
    const t=L(), ic={morning:"🌅",away:"🚪",movie:"🎬",sleep:"😴"};
    return Object.keys(t.s).map((k,i)=>`<button class="scene" style="animation-delay:${i*60}ms" data-scene="${k}">
      <div class="ic">${ic[k]}</div><div><b>${t.s[k]}</b><p class="muted">${t.sd[k]}</p></div></button>`).join("");
  },
  energy(){
    const t=L(), w=[9.1,7.4,8.8,6.2,7.9,10.4,8.3], m=Math.max(...w);
    return `<h2>${t.week}</h2><div class="bars">${w.map((v,i)=>`<i style="height:${v/m*100}%;animation-delay:${i*60}ms" title="${v}"></i>`).join("")}</div>
      <div class="kpi"><div><span class="muted">${t.saved}</span><b>18%</b></div><div><span class="muted">${t.solar}</span><b>4.6 kWh</b></div>
      <div><span class="muted">${t.usage}</span><b>${(S.devices.filter(d=>d.on).length*0.9+3.2).toFixed(1)} kWh</b></div><div><span class="muted">CO₂</span><b>−2.1 kg</b></div></div>`;
  }
};

function render(){
  const t=L(), h=new Date().getHours();
  $("#greet").textContent = h<5?t.night:h<12?t.morning:h<18?t.day:h<23?t.evening:t.night;
  $("#langBtn").textContent = S.lang==="uk"?"UA":"EN";
  document.documentElement.lang=S.lang;
  document.querySelectorAll("[data-i]").forEach(e=>e.textContent=t[e.dataset.i]);
  document.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("on",b.dataset.tab===tab));
  $("#view").innerHTML=views[tab]();
}
function toast(m){const e=$("#toast");e.textContent=m;e.classList.add("show");clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove("show"),1800)}
const buzz=()=>navigator.vibrate&&navigator.vibrate(12);

function openSheet(d){
  const t=L(); let body=`<h2 style="margin-top:0">${d.ic} ${d.name[S.lang]}</h2><p class="muted">${t.r[d.room]}</p>`;
  if(d.type==="climate") body+=`<div class="dial" id="dial" style="background:conic-gradient(var(--warm) ${(d.val-16)/14*360}deg,var(--line) 0)"><div style="position:absolute;inset:14px;border-radius:50%;background:var(--card)"></div><span style="position:relative" id="dv">${d.val}°</span></div>
     <p class="muted" style="text-align:center">${t.target}</p><div class="row"><button class="btn" data-step="-1">−</button><button class="btn" data-step="1">+</button></div>`;
  else if(["light","blinds"].includes(d.type)) body+=`<h2>${d.type==="light"?t.bright:t.open}: <span id="dv">${d.val}%</span></h2><input type="range" id="rng" min="0" max="100" value="${d.val}">`;
  else if(d.type==="camera") body+=`<div class="cam"><span>${t.live}</span></div>`;
  body+=`<button class="btn pri" data-close>${t.close}</button>`;
  $("#sheetBody").innerHTML=body; $("#sheet").hidden=false;
  const r=$("#rng"); if(r) r.oninput=()=>{d.val=+r.value;d.on=d.val>0||d.type==="blinds";$("#dv").textContent=d.val+"%";save()};
  $("#sheetBody").querySelectorAll("[data-step]").forEach(b=>b.onclick=()=>{d.val=Math.min(30,Math.max(16,d.val+ +b.dataset.step));d.on=true;save();buzz();openSheet(d)});
}

function scene(k){
  const set=(id,on,val)=>{const d=dev(id);d.on=on;if(val!==undefined)d.val=val};
  if(k==="morning"){set(1,true,70);set(2,true,22);set(7,false,100);set(5,true)}
  if(k==="away"){S.devices.forEach(d=>d.on=false);set(8,true);set(9,true)}
  if(k==="movie"){set(1,true,15);set(3,true);set(4,false)}
  if(k==="sleep"){[1,3,4,5,6].forEach(i=>set(i,false));set(2,true,19);set(7,false,0);set(8,true)}
  save();buzz();toast(L().run+": "+L().s[k]);render();
}

document.addEventListener("click",e=>{
  const g=s=>e.target.closest(s);
  let x;
  if(x=g("[data-tog]")){const d=dev(+x.dataset.tog);d.on=!d.on;save();buzz();render();return}
  if(x=g("[data-dev]")){const d=dev(+x.dataset.dev);
    if(["light","climate","blinds","camera"].includes(d.type)) openSheet(d); else {d.on=!d.on;save();buzz();render()} return}
  if(x=g("[data-scene]")) return scene(x.dataset.scene);
  if(x=g("[data-room]")){roomFilter=x.dataset.room;render();return}
  if(x=g("[data-tab]")){tab=x.dataset.tab;render();scrollTo(0,0);return}
  if(g("[data-close]")||e.target.id==="sheet"){$("#sheet").hidden=true;render()}
});
$("#langBtn").onclick=()=>{S.lang=S.lang==="uk"?"en":"uk";save();render()};

render();
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
