// Mobile navigation toggle
(function(){
  var h = document.querySelector('.site-header'), t = h && h.querySelector('.nav-toggle');
  if(!t) return;
  t.addEventListener('click', function(){
    var open = h.classList.toggle('nav-open');
    t.setAttribute('aria-expanded', open);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && h.classList.contains('nav-open')){ h.classList.remove('nav-open'); t.setAttribute('aria-expanded','false'); t.focus(); }
  });
})();
