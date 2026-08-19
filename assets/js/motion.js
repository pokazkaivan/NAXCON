/* ═══ Поява елементів по скролу + інерційний скрол ═══ */
var RV_SKIP='.psolWrap,.pintroWrap,.pnextWrap,.svWrap,.fwrap,.wwrap';
/* Каскад: діти одного контейнера виїжджають по черзі. */
var RV_GROUPS=[
 ['.ghead>*','sm'],['.svheroL>*','up'],['.arHeadTxt>*','up'],['.arMeta>span','sm'],
 ['.newslist>.nrow','sm'],['.newslist>.gjob','sm'],
 ['.svgrid>.svitem','up'],['.svtags>.svtag','sm'],
 ['.cnumRow>.cnumCol','up'],['.cpartGrid>.cpartCell','sm'],['.cteamGrid>.cteamCard','up'],
 ['.clocGrid>.clocItem','sm'],['.krow>.kcard','up'],
 ['.nfeat>.nfCard','up'],['.arRelGrid>.nfCard','up'],
 ['.arStats>.arStat','up'],['.arList>.arLi','sm'],['.arShare>*','sm'],
 ['.arTable tbody tr','sm'],['.gform>*','sm'],['.gdef>*','up'],['.gkv','sm'],
 ['.ltabs>button','sm'],['.nfilt>button','sm'],
 ['.mgrid>*','up'],['.pfeatGrid>*','up'],['.pspecsT>.pspecRow','sm'],
 ['.ftop>*','sm'],['.faddr>*','sm']];
/* Поодинокі елементи. */
var RV_SINGLES=[
 ['.svheroP','up'],['.svtitle','line'],['.ctitle','line'],['.nallT','line'],['.arRelT','line'],
 ['.arH1','line'],['.arLead','up'],['.arIntro','up'],['.arBlk','up'],['.arQuote','side'],
 ['.arFig','img'],['.arTable','sm'],['.arHero','img'],
 ['.svvid','img'],['.svshot','img'],['.cshot','img'],['.clocMap','img'],['.nfImg','img'],
 ['.gpanel','up'],['.cquote','up'],['.cmissBox','up'],['.clocLead','up'],['.clocEnd','up'],
 ['.svbtnrow','sm'],['.arBack','sm'],['.nnext','sm'],['.fbig','img']];

var rvObs=null;
function markReveals(){
  var wf=document.getElementById('wf');if(!wf)return;
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  if(rm)return;
  var skip=wf.querySelectorAll(RV_SKIP);
  var inSkip=function(el){
    for(var i=0;i<skip.length;i++)if(skip[i].contains(el))return true;
    return false;
  };
  var tag=function(el,kind,delay){
    if(!el||el.hasAttribute('data-rv')||inSkip(el))return;
    /* не вішаємо на предка того, хто вже помічений — інакше каскад з'їдається */
    if(el.querySelector('[data-rv]'))return;
    el.setAttribute('data-rv',kind);
    if(delay)el.style.setProperty('--rvD',delay+'ms');
  };
  /* спершу групи: у них є ритм */
  RV_GROUPS.forEach(function(g){
    var seen={};
    wf.querySelectorAll(g[0]).forEach(function(el){
      var p=el.parentElement;if(!p)return;
      var key=p.__rvKey||(p.__rvKey=Math.random().toString(36).slice(2));
      var i=seen[key]===undefined?0:seen[key]+1; seen[key]=i;
      tag(el,g[1],Math.min(i,6)*55);
    });
  });
  RV_SINGLES.forEach(function(sn){
    wf.querySelectorAll(sn[0]).forEach(function(el){tag(el,sn[1],0);});
  });
  /* вкладеність неприпустима: дитина чекала б на предка і виїжджала двічі.
     Лишаємо дрібніший рівень — саме він дає ритм. */
  wf.querySelectorAll('[data-rv]').forEach(function(el){
    var up=el.parentElement&&el.parentElement.closest('[data-rv]');
    if(up&&wf.contains(up)){up.removeAttribute('data-rv');up.style.removeProperty('--rvD');}
  });
  /* спостерігач один на сторінку */
  var scr=document.getElementById('screen');
  if(rvObs)rvObs.disconnect();
  if(!window.IntersectionObserver){
    wf.querySelectorAll('[data-rv]').forEach(function(el){el.classList.add('rvIn');});
    return;
  }
  rvObs=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting)return;
      en.target.classList.add('rvIn');
      rvObs.unobserve(en.target);
    });
  },{root:scr,rootMargin:'0px 0px -10% 0px',threshold:0.01});
  wf.querySelectorAll('[data-rv]').forEach(function(el){rvObs.observe(el);});
  /* те, що вже у кадрі на момент рендера, показуємо без очікування скролу */
  requestAnimationFrame(function(){
    var h=scr.clientHeight;
    wf.querySelectorAll('[data-rv]:not(.rvIn)').forEach(function(el){
      var r=el.getBoundingClientRect(),s=scr.getBoundingClientRect();
      if(r.top<s.top+h*0.92)el.classList.add('rvIn');
    });
  });
}

/* ═════════ ІНЕРЦІЙНИЙ СКРОЛ ═════════ */
/* Колесо не рухає контейнер напряму, а зсуває ціль; позиція наздоганяє її
   покроково. Це і є «лейзі скрол». Програмні стрибки (клік по табу, зміна
   маршруту) підхоплюються через звірку з фактичним scrollTop. */
var LZ={target:0,applied:-1,raf:0,on:false};
function lazyOn(){
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  var coarse=window.matchMedia?window.matchMedia('(pointer:coarse)').matches:false;
  return document.body.dataset.vp==='d'&&!rm&&!coarse;
}
function lazyStep(){
  var scr=document.getElementById('screen');if(!scr){LZ.raf=0;return;}
  var cur=scr.scrollTop, d=LZ.target-cur;
  if(Math.abs(d)<0.6){scr.scrollTop=LZ.target;LZ.applied=scr.scrollTop;LZ.raf=0;return;}
  var next=cur+d*0.14;
  scr.scrollTop=next; LZ.applied=scr.scrollTop;
  LZ.raf=requestAnimationFrame(lazyStep);
}
function lazyWheel(e){
  if(!lazyOn())return;
  var scr=document.getElementById('screen');if(!scr)return;
  if(document.body.classList.contains('panel-open'))return;
  /* хтось посунув скрол повз нас — беремо його позицію за нову точку відліку */
  if(LZ.applied<0||Math.abs(scr.scrollTop-LZ.applied)>2)LZ.target=scr.scrollTop;
  var max=scr.scrollHeight-scr.clientHeight;
  var next=Math.min(Math.max(LZ.target+e.deltaY,0),max);
  if(next===LZ.target)return;          /* уперлись у край — лишаємо нативну поведінку */
  e.preventDefault();
  LZ.target=next;
  if(!LZ.raf)LZ.raf=requestAnimationFrame(lazyStep);
}
function lazyReset(){
  var scr=document.getElementById('screen');
  if(LZ.raf){cancelAnimationFrame(LZ.raf);LZ.raf=0;}
  LZ.target=scr?scr.scrollTop:0; LZ.applied=LZ.target;
}
