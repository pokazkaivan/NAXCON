/* ═══ Модуль ревʼю · comment-layer 1.2.0 ═══
   За замовчуванням коментарі зберігаються локально в браузері рецензента —
   нічого налаштовувати не треба, працює одразу.

   Щоб коментарі бачили всі одночасно, потрібен Supabase:
   1. виконати comments/schema.sql у SQL Editor свого проєкту;
   2. розкоментувати два <script> у кожному HTML (клієнт із CDN та адаптер);
   3. вписати ключі нижче.
   Докладно — docs/COMMENT-LAYER.md */
(function(){
  if(typeof CommentLayer==='undefined')return;      /* модуль не підвантажився */

  var PROJECT='naxcon-wireframe';                   /* простір імен коментарів */
  var SUPABASE={url:'https://hlyxunkteycaqahjlsqj.supabase.co',anonKey:'sb_publishable_z9mFAcjtVxsgz-ArcXe8hg_RvkwWHWJ'};                 /* порожньо = локальний режим */

  var opts={projectId:PROJECT,version:'v1'};
  var start=function(){requestAnimationFrame(function(){CommentLayer.init(opts);});};

  var shared=SUPABASE.url&&SUPABASE.anonKey
    &&typeof CommentLayerSupabase!=='undefined'
    &&typeof window.supabase!=='undefined';         /* клієнт із CDN */

  if(!shared){
    if(SUPABASE.url)console.warn('comment-layer: адаптер або клієнт Supabase не підвантажився — коментарі локальні');
    start();return;
  }

  var store=CommentLayerSupabase({
    url:SUPABASE.url,
    anonKey:SUPABASE.anonKey,
    projectId:PROJECT
  });
  opts.storage=store;
  store.ready.then(start).catch(function(e){
    console.warn('comment-layer: Supabase недоступний, працюємо локально',e);
    delete opts.storage;start();
  });
})();
