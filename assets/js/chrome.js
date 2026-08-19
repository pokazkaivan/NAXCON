/* ═══ Хром сторінки: ширина екрана, мегаменю, делегування кліків, старт ═══ */
function vp(v){
  document.body.dataset.vp=v;
  lazyReset();
  setTimeout(function(){onWarumScroll();onFactsScroll();onSolScroll();onSvScroll();onIntroScroll();onNextScroll();},0);
  document.querySelectorAll('.seg button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.vp===v));});
}
document.getElementById('screen').addEventListener('wheel',lazyWheel,{passive:false});
document.getElementById('screen').addEventListener('scroll',function(){onFactsScroll();onWarumScroll();onSolScroll();onSvScroll();onIntroScroll();onNextScroll();},{passive:true});
window.addEventListener('resize',function(){onFactsScroll();onWarumScroll();onSolScroll();onIntroScroll();onNextScroll();});

window.addEventListener('hashchange',function(){render();});
document.querySelectorAll('.seg button').forEach(function(b){b.addEventListener('click',function(){vp(b.dataset.vp);});});
document.addEventListener('click',function(e){
  var t=e.target.closest('[data-act],[data-sol-step],[data-sv-step],[data-nfilt],[data-legal]');if(!t)return;
  if(t.dataset.solStep!==undefined){e.preventDefault();solStep(t.closest('.psolWrap'),+t.dataset.solStep);return;}
  if(t.dataset.svStep!==undefined){e.preventDefault();svGoTo(+t.dataset.svStep);return;}
  if(t.dataset.nfilt!==undefined){e.preventDefault();nFilter(+t.dataset.nfilt);return;}
  if(t.dataset.legal!==undefined){e.preventDefault();legalStep(+t.dataset.legal);return;}
  if(t.dataset.act==='toform'){e.preventDefault();
    var f=document.getElementById('bewerben'),scr=document.getElementById('screen');
    if(f&&scr){var d=f.getBoundingClientRect().top-scr.getBoundingClientRect().top;
      scr.scrollTo({top:scr.scrollTop+d-24,behavior:'smooth'});lazyReset();}
    return;}
  if(t.dataset.act==='copy'){e.preventDefault();
    var url=location.href, msg=document.getElementById('copyMsg'), btn=document.getElementById('copyLink');
    var ok=false;
    try{ if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url);ok=true;} }catch(err){}
    if(!ok){ try{ var ta=document.createElement('textarea');ta.value=url;document.body.appendChild(ta);
      ta.select();document.execCommand('copy');document.body.removeChild(ta);ok=true; }catch(err2){} }
    if(btn)btn.textContent=ok?'Kopiert ✓':'Link kopieren';
    if(msg)msg.textContent=ok?'Link in die Zwischenablage kopiert':'Kopieren nicht möglich — Adresse aus der Adressleiste übernehmen';
    setTimeout(function(){var b=document.getElementById('copyLink'),m=document.getElementById('copyMsg');
      if(b)b.textContent='Link kopieren';if(m)m.textContent='';},2500);
    return;}
  if(t.dataset.act==='mega'){e.preventDefault();toggleMega();return;}});
function toggleMega(force){
  var mp=document.getElementById('megaP');if(!mp)return;
  var open=(typeof force==='boolean')?force:!mp.classList.contains('open');
  mp.classList.toggle('open',open);
  document.querySelectorAll('[data-act="mega"]').forEach(function(b){b.setAttribute('aria-expanded',String(open));});
}
document.addEventListener('click',function(e){
  var mp=document.getElementById('megaP');
  if(mp&&mp.classList.contains('open')&&!e.target.closest('.hdr'))toggleMega(false);
});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    var mp=document.getElementById('megaP');
    if(mp&&mp.classList.contains('open')){toggleMega(false);return;}
  }
  if(e.target.matches('input,textarea'))return;
  var k=e.key.toLowerCase();
  if(k==='1'){vp('d');}else if(k==='2'){vp('t');}else if(k==='3'){vp('m');}});

/* Старт сторінки. У SPA тут був render(); тепер розмітка вже в HTML,
   тож лишається лише запустити анімації й підвантаження. */
(function(){
  var boot=function(){
    lazyReset();
    onFactsScroll();onWarumScroll();onSolScroll();onSvScroll();onIntroScroll();onNextScroll();
    markReveals();factsLoad();marktLoad();
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
