/* ═══ Інтерактив сторінок: таби Services, фільтр News, вкладки документів ═══ */
function svItems(k){
  var sv=SERVICES[SVFIG[k].i];
  return sv.items.map(function(it,n){
    return '<div class="svitem"><span class="ic"><img src="'+SVICON[n%SVICON.length]+'" alt="" loading="lazy"></span>'+
      '<div class="svitT">'+it[0]+'</div><p class="svitP">'+it[1]+'</p></div>';}).join('');
}
function svTags(k){
  var t=SVFIG[k].tags||SERVICES[SVFIG[k].i].tags;
  return t.map(function(x){return '<span class="svtag">'+x+'</span>';}).join('');
}
function svStep(k){
  var sec=document.getElementById('svsec');
  if(!sec||!SVFIG[k]||sec.__sv===k)return; sec.__sv=k;
  var f=SVFIG[k],sv=SERVICES[f.i];
  var K=sec.querySelector('[data-s="k"]'),T=sec.querySelector('[data-s="t"]'),
      P2=sec.querySelector('[data-s="p"]'),G=sec.querySelector('[data-s="grid"]'),
      TG=sec.querySelector('[data-s="tags"]');
  K.textContent='0'+(k+1)+'/0'+SVFIG.length;
  T.innerHTML=f.h; P2.textContent=sv.d; G.innerHTML=svItems(k); TG.innerHTML=svTags(k);
  [K,T,P2,G,TG].forEach(function(el){el.classList.remove('svswap');void el.offsetWidth;el.classList.add('svswap');});
  var btns=sec.querySelectorAll('[data-sv-step]');
  for(var n=0;n<btns.length;n++){
    var idx=+btns[n].dataset.svStep;
    btns[n].setAttribute('aria-current',String(idx===k));
    btns[n].classList.toggle('done',idx<k);
    if(idx!==k)btns[n].style.removeProperty('--svFill');
  }
}
/* Зсув піна: секція чіпляється не верхнім краєм, а так, щоб блок .svbody —
   шкала, картки й зображення, тобто те, що перемикається — став по центру екрана.
   Значення зазвичай відʼємне: заголовок і таби йдуть вище кадру, і це навмисно. */
function svPinTop(w,stick,scr){
  var body=w.querySelector('.svbody');if(!body)return 0;
  /* різниця країв не залежить від того, зсунутий sticky чи ні */
  var inner=body.getBoundingClientRect().top-stick.getBoundingClientRect().top;
  return Math.round(scr.clientHeight/2-inner-body.offsetHeight/2);
}
/* Пін секції Services: шість табів — це пʼять кроків скролу по півтора екрана. */
function onSvScroll(){
  var w=document.getElementById('svWrap');if(!w)return;
  var scr=document.getElementById('screen');
  var stick=w.firstElementChild;
  var rm=window.matchMedia?window.matchMedia('(prefers-reduced-motion:reduce)').matches:false;
  if(document.body.dataset.vp!=='d'||rm){w.style.height='';stick.style.top='';return;}
  var steps=SVFIG.length-1;
  var step=Math.round(scr.clientHeight*1.5);
  w.style.height=(stick.offsetHeight+step*steps)+'px';
  var T=svPinTop(w,stick,scr);
  stick.style.top=T+'px';
  var total=w.offsetHeight-stick.offsetHeight;
  /* нуль прогресу — момент, коли .svbody опинився рівно по центру екрана */
  var passed=(scr.getBoundingClientRect().top+T)-w.getBoundingClientRect().top;
  var prog=total>0?Math.min(Math.max(passed/total,0),1):0;
  var pos=prog*SVFIG.length, si=Math.min(steps,Math.floor(pos));
  svStep(si);
  var act=w.querySelector('.svrail button[aria-current="true"]');
  if(act)act.style.setProperty('--svFill',Math.round(Math.min(pos-si,1)*100)+'%');
}
/* Клік по табу під піном не просто підміняє контент, а відмотує скрол у середину
   потрібного кроку — інакше наступний рух колеса повернув би попередній таб. */
function svGoTo(k){
  var w=document.getElementById('svWrap'),scr=document.getElementById('screen');
  if(!w||!scr||!w.style.height){svStep(k);return;}
  var stick=w.firstElementChild,total=w.offsetHeight-stick.offsetHeight;
  if(total<=0){svStep(k);return;}
  var passed=(scr.getBoundingClientRect().top+svPinTop(w,stick,scr))
             -w.getBoundingClientRect().top;
  var target=(k+0.5)/SVFIG.length*total;
  scr.scrollTop+=Math.round(target-passed);
  onSvScroll();
}

/* ── COMPANY · Figma 51:7783 ── */
/* Прапорець біля «Made in Germany» · Figma 59:9106 (27×16) */
function nFilter(k){
  var wrap=document.querySelector('.nall');if(!wrap||!NFILT[k])return;
  var btns=wrap.querySelectorAll('[data-nfilt]');
  for(var i=0;i<btns.length;i++){
    var on=+btns[i].dataset.nfilt===k;
    btns[i].setAttribute('aria-current',String(on));
    btns[i].setAttribute('aria-selected',String(on));
    btns[i].tabIndex=on?0:-1;
  }
  var label=NFILT[k][0],rows=wrap.querySelectorAll('.newslist .nrow:not(.nnext)'),shown=0;
  for(var r=0;r<rows.length;r++){
    var t=rows[r].querySelector('.nt'),src=null;
    for(var m=0;m<NEWS.length;m++)if(t&&NEWS[m].t===t.textContent)src=NEWS[m];
    var vis=k===0||(src&&src.k===label);
    rows[r].style.display=vis?'':'none';
    if(vis)shown++;
  }
  var empty=wrap.querySelector('.nempty');
  if(!empty){empty=document.createElement('p');empty.className='nempty sm';
    empty.style.cssText='padding:32px;color:var(--muted)';
    wrap.querySelector('.newslist').appendChild(empty);}
  empty.textContent=shown?'':'Keine Beiträge in dieser Rubrik.';
  empty.style.display=shown?'none':'';
  var cnt=wrap.querySelector('.nallC');
  if(cnt)cnt.textContent=NFILT[k][1]+' Beiträge';
}

/* ── ARTICLE · Figma 66:13951 ── */
function legalDoc(k){
  return LEGAL[k].blocks.map(function(b){
    var out='<div><h3>'+b.h+'</h3>';
    if(b.p)out+=b.p.map(function(t){return '<p style="margin-top:16px">'+t+'</p>';}).join('');
    if(b.list)out+='<div class="arList" style="margin-top:16px">'+b.list.map(function(t,i){
      return '<div class="arLi"><span class="n">'+(i<9?'0':'')+(i+1)+'</span>'+
        '<span class="t">'+t+'</span></div>';}).join('')+'</div>';
    if(b.kv)out+='<div class="gform" style="gap:16px;margin-top:16px">'+b.kv.map(function(r){
      return '<div class="gkv"><span class="k">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>';}).join('')+'</div>';
    if(b.table)out+='<table class="arTable" style="margin-top:16px"><thead><tr>'+
      b.table.head.map(function(h){return '<th>'+h+'</th>';}).join('')+'</tr></thead><tbody>'+
      b.table.rows.map(function(r){return '<tr>'+r.map(function(c,i){
        return '<td'+(i===0?' class="k"':'')+'>'+c+'</td>';}).join('')+'</tr>';}).join('')+
      '</tbody></table>';
    return out+'</div>';
  }).join('');
}
function legalStep(k){
  var sec=document.getElementById('lsec');
  if(!sec||!LEGAL[k]||sec.__l===k)return; sec.__l=k;
  document.querySelector('[data-l="h"]').textContent=LEGAL[k].title;
  document.querySelector('[data-l="s"]').textContent=LEGAL[k].sub;
  document.querySelector('[data-l="upd"]').textContent=LEGAL[k].upd;
  var body=sec.querySelector('[data-l="body"]');
  body.innerHTML=legalDoc(k);
  body.classList.remove('svswap');void body.offsetWidth;body.classList.add('svswap');
  var btns=sec.querySelectorAll('[data-legal]');
  for(var n=0;n<btns.length;n++){
    var on=+btns[n].dataset.legal===k;
    btns[n].setAttribute('aria-current',String(on));
    btns[n].setAttribute('aria-selected',String(on));
    btns[n].tabIndex=on?0:-1;
  }
  document.title='NAXCON · '+LEGAL[k].title+' · Wireframe V2';
}

/* ── СТАНИ ── */
