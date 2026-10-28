(function(){
  var combos = {
      A: { title: 'Advisor', desc: 'Focused senior counsel on a defined challenge — positioning, go-to-market into regulated buyers, AI architecture or compliance readiness — without equity or day-to-day involvement.', fit: 'Companies with a strong team and one specific gap', form: 'Advisory retainer or advisory-board seat', time: 'Scheduled sessions, typically monthly' },
      I: { title: 'Investor', desc: 'Capital from KpiFinity and its principals for a team whose thesis fits ours, with a light-touch relationship and support available on request.', fit: 'Experienced founders who need capital more than guidance', form: 'Equity participation, often alongside a lead investor', time: 'Investor updates and periodic check-ins' },
      M: { title: 'Mentor', desc: 'Personal, founder-to-operator guidance: leading a team, building delivery discipline, making the first hires and running the first enterprise pilot.', fit: 'First-time founders and newly promoted leaders', form: 'Regular 1:1 sessions with the founder', time: 'Recurring 1:1s, typically every two weeks' },
      AI: { title: 'Advisor + Investor', desc: 'Capital plus a seat at the strategy table. We invest and help shape the decisions that determine whether that investment succeeds.', fit: 'Seed-stage companies entering enterprise or regulated markets', form: 'Equity plus advisory-board or board-observer seat', time: 'Monthly strategy sessions and quarterly reviews' },
      AM: { title: 'Advisor + Mentor', desc: 'Strategic counsel for the company and personal guidance for the founder — the most common way we begin a partnership.', fit: 'Early-stage founders building for regulated industries', form: 'Advisory retainer, advisory shares or a blend', time: 'Monthly strategy sessions plus founder 1:1s' },
      IM: { title: 'Investor + Mentor', desc: 'Capital and founder coaching together, for a technically strong founder who is building a company for the first time.', fit: 'Technical founders at pre-seed and seed', form: 'Equity participation with a mentoring commitment', time: 'Founder 1:1s and quarterly reviews' },
      AIM: { title: 'The full AIM partnership', desc: 'We commit capital, sit at the strategy table and work alongside the founder — taking a long-term, hands-on stake in the outcome. Reserved for a small number of companies at a time.', fit: 'Companies where our experience is central to the plan', form: 'Equity, board or advisory-board seat, and founder mentoring', time: 'Deep, ongoing involvement under one AIM charter' }
    };
  var state = {A:true, I:false, M:true};
  var root = document.getElementById('aim-config'); if(!root) return;
  function code(){ return (state.A?'A':'')+(state.I?'I':'')+(state.M?'M':''); }
  function render(){
    var c = code(), d = combos[c] || combos.A;
    root.querySelectorAll('[data-role]').forEach(function(b){
      var on = !!state[b.dataset.role];
      b.setAttribute('aria-pressed', on); b.classList.toggle('on', on);
      b.querySelector('.state').textContent = on ? 'SELECTED' : 'ADD';
    });
    root.querySelectorAll('[data-preset]').forEach(function(b){ b.classList.toggle('on', b.dataset.preset === c); });
    var out = {code: c.split('').join(' \u00b7 '), title: d.title, desc: d.desc, fit: d.fit, form: d.form, time: d.time};
    Object.keys(out).forEach(function(k){ root.querySelector('[data-out="'+k+'"]').textContent = out[k]; });
  }
  root.addEventListener('click', function(e){
    var r = e.target.closest('[data-role]'), p = e.target.closest('[data-preset]');
    if(r){ var k = r.dataset.role, next = {A:state.A, I:state.I, M:state.M}; next[k] = !next[k];
      if(next.A || next.I || next.M){ state = next; render(); } }
    if(p){ var v = p.dataset.preset; state = {A:v.indexOf('A')>-1, I:v.indexOf('I')>-1, M:v.indexOf('M')>-1}; render(); }
  });
  render();
})();
