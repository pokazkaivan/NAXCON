/* ═══ Секції з піном і підвантаженням ═══ */
function onNextScroll(){
  var scr=document.getElementById('screen');if(!scr)return;
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  var pinned=document.body.dataset.vp==='d'&&!rm;
  var wraps=document.querySelectorAll('.pnextWrap');
  for(var i=0;i<wraps.length;i++){
    var w=wraps[i],stick=w.firstElementChild;
    if(!pinned){w.style.height='';w.style.marginBottom='';stick.style.transform='';continue;}
    var H=stick.offsetHeight;
    var hold=scr.clientHeight;                /* затримка на один екран: рух починається з другого свайпу */
    w.style.height=(H+hold+H)+'px';           /* + шлях відʼїзду вгору */
    /* наступний блок піднімається під штору на всю висоту відʼїзду:
       поки штора їде вгору, він уже стоїть на місці й просто відкривається */
    w.style.marginBottom=(-H)+'px';
    var total=w.offsetHeight-H;
    var passed=scr.getBoundingClientRect().top-w.getBoundingClientRect().top;
    var prog=total>0?Math.min(Math.max(passed/total,0),1):0;
    var holdP=hold/(hold+H);                  /* частка прогресу, віддана затримці */
    var t=prog<=holdP?0:(prog-holdP)/(1-holdP);
    stick.style.transform='translate3d(0,'+(-t*H).toFixed(1)+'px,0)';
  }
}
function onIntroScroll(){
  var scr=document.getElementById('screen');if(!scr)return;
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  var pinned=document.body.dataset.vp==='d'&&!rm;
  var wraps=document.querySelectorAll('.pintroWrap');
  for(var i=0;i<wraps.length;i++){
    var w=wraps[i],stick=w.firstElementChild,
        el=w.querySelector('.pintroT'),ws=el.querySelectorAll('.w');
    if(!ws.length)continue;
    var n;
    if(!pinned){ w.style.height=''; n=ws.length; }
    else{
      /* висота піна = екран + шлях заливки; поки він не пройдений, секція стоїть */
      var span=Math.round(scr.clientHeight*1.1);
      w.style.height=(stick.offsetHeight+span)+'px';
      var total=w.offsetHeight-stick.offsetHeight;
      var passed=scr.getBoundingClientRect().top-w.getBoundingClientRect().top;
      var prog=total>0?Math.min(Math.max(passed/total,0),1):0;
      /* невелике випередження, щоб останнє слово встигло дозалитись до відпускання піна */
      n=Math.round(Math.min(prog*1.08,1)*ws.length);
    }
    if(el.__n===n)continue; el.__n=n;
    for(var j=0;j<ws.length;j++)ws[j].classList.toggle('on',j<n);
  }
}
function solStep(wrap,i,auto){
  if(!PSOLS[i])return;
  if(wrap.__sol===i)return; wrap.__sol=i;
  var d=PSOLS[i];
  var k=wrap.querySelector('[data-f="k"]'),t=wrap.querySelector('[data-f="t"]'),
      p=wrap.querySelector('[data-f="p"]'),tc=wrap.querySelector('[data-f="tech"]');
  k.textContent=d.k; t.textContent=d.t; p.textContent=d.p;
  tc.innerHTML=d.tech.map(function(x){return '<div class="ptechRow"><span>'+x+'</span><i aria-hidden="true">✓</i></div>';}).join('');
  [k,t,p,tc].forEach(function(el){el.classList.remove('psolSwap');void el.offsetWidth;el.classList.add('psolSwap');});
  var btns=wrap.querySelectorAll('.pprog button');
  for(var n=0;n<btns.length;n++){
    btns[n].setAttribute('aria-current',String(n===i));
    btns[n].classList.toggle('done',n<i);
    if(n!==i)btns[n].style.removeProperty('--solFill');
  }
}
function onSolScroll(){
  var scr=document.getElementById('screen');
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  var pinned=document.body.dataset.vp==='d'&&!rm;
  var wraps=document.querySelectorAll('.psolWrap');
  for(var i=0;i<wraps.length;i++){
    var w=wraps[i];
    if(!pinned){w.style.height='';continue;}
    var stick=w.firstElementChild;
    /* крок — півтора екрана: коротший шлях дозволяв перестрибнути два пункти за один свайп */
    var step=Math.round(scr.clientHeight*1.5);
    w.style.height=(stick.offsetHeight+step*3)+'px';
    var total=w.offsetHeight-stick.offsetHeight;
    var passed=scr.getBoundingClientRect().top-w.getBoundingClientRect().top;
    var prog=total>0?Math.min(Math.max(passed/total,0),1):0;
    /* si, не i: var-змінна з іменем лічильника циклу зациклювала обхід */
    var pos=prog*4, si=Math.min(3,Math.floor(pos));
    solStep(w,si);
    /* заливка активного сегмента = прогрес усередині поточного кроку */
    var act=w.querySelector('.pprog button[aria-current="true"]');
    if(act)act.style.setProperty('--solFill',Math.round(Math.min(pos-si,1)*100)+'%');
  }
}
function onWarumScroll(){
  var wrap=document.getElementById('wwrap');if(!wrap)return;
  var track=document.getElementById('wtrack'),view=document.getElementById('wview'),scr=document.getElementById('screen');
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  var pinned=document.body.dataset.vp==='d'&&!rm;
  if(!pinned){wrap.style.height='';track.style.transform='';return;}
  /* картка має вміститись у видиму висоту: екран − паддінги секції 160 − шапка 67 − відступ треку 32 */
  var avail=scr.clientHeight-259;
  document.documentElement.style.setProperty('--wcardh',Math.max(400,Math.min(667,avail))+'px');
  var max=track.scrollWidth-view.clientWidth;
  if(max<=0){wrap.style.height='';track.style.transform='';return;}
  wrap.style.height=(scr.clientHeight+max)+'px';
  var total=wrap.offsetHeight-scr.clientHeight;
  var passed=scr.getBoundingClientRect().top-wrap.getBoundingClientRect().top;
  var prog=total>0?Math.min(Math.max(passed/total,0),1):0;
  track.style.transform='translate3d('+(-prog*max).toFixed(2)+'px,0,0)';
}
function onFactsScroll(){
  var wrap=document.getElementById('fwrap');if(!wrap)return;
  var scr=document.getElementById('screen');
  var total=wrap.offsetHeight-scr.clientHeight;
  var passed=scr.getBoundingClientRect().top-wrap.getBoundingClientRect().top;
  var prog=total>0?Math.min(Math.max(passed/total,0),1):0;
  var idx=Math.min(3,Math.floor(prog*4));
  if(idx!==factIdx){factIdx=idx;
    factSwap(document.getElementById('factNum'),FACTS[idx][0]);
    factSwap(document.getElementById('factCap'),FACTS[idx][1]);
    var bars=document.querySelectorAll('#factBars span');
    for(var i=0;i<bars.length;i++)bars[i].classList.toggle('on',i===idx);}
}
/* Дві фази: спершу гасимо старе значення, після переходу підставляємо нове й
   вводимо його знизу. Таймер прив'язаний до елемента — швидкий скрол не лишає
   черги з підмін і не показує проміжних значень. */
function factSwap(el,txt){
  if(!el)return;
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  if(rm){el.textContent=txt;return;}
  if(el.__ft){clearTimeout(el.__ft);el.__ft=0;}
  el.classList.add('fOut');
  el.__ft=setTimeout(function(){
    el.textContent=txt;
    el.classList.add('fJump');el.classList.remove('fOut');
    void el.offsetWidth;                 /* фіксуємо нижню точку без переходу */
    el.classList.remove('fJump');
    el.__ft=0;
  },320);
}
/* Спільний підвантажувач: діти контейнера з'являються по черзі, щойно він
   входить у кадр. Використовують Fakten (референси) і Märkte (картки). */
function loadIn(sel,child,step,flag,varName){
  var box=document.querySelector(sel);if(!box)return;
  var scr=document.getElementById('screen');
  var kids=box.querySelectorAll(child);
  for(var i=0;i<kids.length;i++)kids[i].style.setProperty(varName,i*step+'ms');
  var show=function(){box.classList.add(flag);};
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  if(rm||!window.IntersectionObserver){show();return;}
  var io=new IntersectionObserver(function(en){
    if(en[0].isIntersecting){show();io.disconnect();}
  },{root:scr,rootMargin:'0px 0px -12% 0px',threshold:0.01});
  io.observe(box);
}
function marktLoad(){loadIn('.msec .mright','.mcard',90,'mLoaded','--mD');}
/* Права колонка: рядки підвантажуються каскадом, коли секція входить у кадр. */
function factsLoad(){
  var right=document.querySelector('.fwrap .fright');if(!right)return;
  var scr=document.getElementById('screen');
  var rows=right.querySelectorAll('.refrow');
  for(var i=0;i<rows.length;i++)rows[i].style.setProperty('--rD',i*70+'ms');
  var show=function(){right.classList.add('rLoaded');};
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  if(rm||!window.IntersectionObserver){show();return;}
  var io=new IntersectionObserver(function(en){
    if(en[0].isIntersecting){show();io.disconnect();}
  },{root:scr,rootMargin:'0px 0px -12% 0px',threshold:0.01});
  io.observe(right);
}
