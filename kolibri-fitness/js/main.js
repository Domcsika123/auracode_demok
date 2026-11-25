(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const locName = Object.fromEntries(LOCATIONS.map((l) => [l.id, l.name]));
  const mapsUrl = (l) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${l.zip} ${l.name}, ${l.street}`)}`;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header: scroll state + mobile menu ---------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#burger');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menü bezárása' : 'Menü megnyitása');
  };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  $$('#nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

  /* ---------- Marquee ---------- */
  const names = CLASSES.map((c) => c.name);
  const chunk = names.map((n) => `<span>${esc(n)}</span><i>✦</i>`).join('');
  $('#marquee').innerHTML = chunk + chunk;

  /* ---------- Locations ---------- */
  const countFor = (id) => CLASSES.filter((c) => c.locs.includes(id)).length;
  $('#locGrid').innerHTML = LOCATIONS.map((l, i) => `
    <article class="loc reveal" id="terem-${l.id}">
      <div class="loc__media">
        <img src="${l.img}" alt="Edzés a Kolibri ${esc(l.name)} termében" loading="lazy">
        <span class="loc__num">0${i + 1}</span>
      </div>
      <div class="loc__body">
        <p class="loc__label">Kolibri</p>
        <h3 class="loc__name">${esc(l.name)}</h3>
        <p class="loc__tag">${esc(l.tagline)}</p>
        <a class="loc__addr" href="${mapsUrl(l)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.6"/></svg>
          ${esc(l.zip)} ${esc(l.name)}, ${esc(l.street)}
        </a>
        <div class="loc__meta">
          <span><strong>${countFor(l.id)}</strong> óratípus</span>
          <span><strong>50′</strong> órák</span>
        </div>
        <ul class="tags">${l.extras.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        <div class="loc__ctas">
          <a class="btn btn--primary" href="${l.booking}" target="_blank" rel="noopener">Órarend &amp; foglalás <span aria-hidden="true">↗</span></a>
          <button class="btn btn--ghost" type="button" data-loc-filter="${l.id}">Órák itt</button>
        </div>
      </div>
    </article>`).join('');

  $('#addrList').innerHTML = LOCATIONS.map((l) => `
    <li><span>${esc(l.name)}</span><a href="${mapsUrl(l)}" target="_blank" rel="noopener">${esc(l.zip)} ${esc(l.name)}, ${esc(l.street)} ↗</a></li>`).join('');

  /* ---------- Classes: filters + grid ---------- */
  const state = { cat: 'all', loc: 'all', expanded: false };
  const chip = (group, value, label) =>
    `<button type="button" class="chip" data-group="${group}" data-value="${value}" aria-pressed="${state[group] === value}">${esc(label)}</button>`;

  const renderFilters = () => {
    $('#catFilter').innerHTML = chip('cat', 'all', 'Minden óra') + Object.entries(CATEGORIES).map(([k, v]) => chip('cat', k, v)).join('');
    $('#locFilter').innerHTML = `<span class="filters__label">Terem:</span>` + chip('loc', 'all', 'Mindegyik') + LOCATIONS.map((l) => chip('loc', l.id, l.name)).join('');
  };

  const cardMedia = (c) => c.img
    ? `<img src="${c.img}" alt="" loading="lazy">`
    : `<span class="ccard__ph ccard__ph--${c.cat}" style="--n:${Math.max(4, (c.ph || c.name).length)}" aria-hidden="true">${esc(c.ph || c.name)}</span>`;

  const LIMIT = 8;
  const renderClasses = () => {
    const all = CLASSES.map((c, i) => ({ ...c, i }))
      .filter((c) => (state.cat === 'all' || c.cat === state.cat) && (state.loc === 'all' || c.locs.includes(state.loc)));
    const list = state.expanded ? all : all.slice(0, LIMIT);
    $('#classMore').hidden = all.length <= LIMIT;
    $('#classMoreBtn').textContent = state.expanded ? 'Kevesebb óra' : `Mind a ${all.length} óra mutatása`;
    $('#classGrid').innerHTML = list.map((c) => `
      <button type="button" class="ccard" data-class="${c.i}">
        <span class="ccard__media">${cardMedia(c)}<span class="ccard__cat">${esc(CATEGORIES[c.cat])}</span></span>
        <span class="ccard__body">
          <span class="ccard__name">${esc(c.name)}</span>
          <span class="ccard__short">${esc(c.short)}</span>
          <span class="ccard__foot">
            <span class="ccard__locs">${c.locs.length === 3 ? 'Mindhárom teremben' : c.locs.map((x) => locName[x]).join(', ')}</span>
            <span class="ccard__more" aria-hidden="true">+</span>
          </span>
        </span>
      </button>`).join('') || `<p class="muted">Ehhez a szűréshez nincs óra.</p>`;
  };

  const setFilter = (group, value) => {
    state[group] = value;
    $$(`.chip[data-group="${group}"]`).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.value === value)));
    renderClasses();
  };

  renderFilters();
  renderClasses();
  $('#classMoreBtn').addEventListener('click', () => {
    const collapsing = state.expanded;
    state.expanded = !state.expanded;
    renderClasses();
    if (collapsing) $('#orak').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });
  $('.filters').addEventListener('click', (e) => {
    const b = e.target.closest('.chip');
    if (b) setFilter(b.dataset.group, b.dataset.value);
  });
  $('#locGrid').addEventListener('click', (e) => {
    const b = e.target.closest('[data-loc-filter]');
    if (!b) return;
    setFilter('cat', 'all');
    setFilter('loc', b.dataset.locFilter);
    $('#orak').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---------- Class modal ---------- */
  const modal = $('#classModal');
  $('#classGrid').addEventListener('click', (e) => {
    const card = e.target.closest('.ccard');
    if (!card) return;
    const c = CLASSES[+card.dataset.class];
    $('#modalCat').textContent = CATEGORIES[c.cat] + ' · 50 perc';
    $('#modalTitle').textContent = c.name;
    $('#modalLocs').innerHTML = c.locs.map((x) => `<li>${esc(locName[x])}</li>`).join('');
    $('#modalText').innerHTML = c.desc.split('\n').filter(Boolean).map((p) => `<p>${esc(p)}</p>`).join('');
    $('#modalMedia').innerHTML = cardMedia(c);
    modal.showModal();
    $('.modal__body', modal).scrollTop = 0;
  });

  /* ---------- Gallery + lightbox ---------- */
  const lb = $('#lightbox');
  const lbImg = $('#lightboxImg');
  let lbIndex = 0;
  const showLb = (i) => {
    lbIndex = (i + GALLERY.length) % GALLERY.length;
    lbImg.src = GALLERY[lbIndex].src;
    lbImg.alt = GALLERY[lbIndex].alt;
  };
  $('#gallery').innerHTML = GALLERY.map((g, i) => `
    <button type="button" class="gitem gitem--${i}" data-g="${i}" aria-label="Nagyítás: ${esc(g.alt)}">
      <img src="${g.src}" alt="${esc(g.alt)}" loading="lazy">
    </button>`).join('');
  $('#gallery').addEventListener('click', (e) => {
    const b = e.target.closest('[data-g]');
    if (!b) return;
    showLb(+b.dataset.g);
    lb.showModal();
  });
  $$('.lightbox__nav', lb).forEach((b) => b.addEventListener('click', () => showLb(lbIndex + +b.dataset.dir)));
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') showLb(lbIndex + 1);
    if (e.key === 'ArrowLeft') showLb(lbIndex - 1);
  });

  // Close dialogs: close buttons + backdrop click
  $$('dialog').forEach((d) => {
    d.addEventListener('click', (e) => {
      if (e.target === d || e.target.closest('[data-close]')) d.close();
    });
  });
  // Lock page scroll while a dialog is open
  const lockObserver = new MutationObserver(() =>
    document.documentElement.classList.toggle('dialog-open', $$('dialog').some((d) => d.open)));
  $$('dialog').forEach((d) => lockObserver.observe(d, { attributes: true, attributeFilter: ['open'] }));

  /* ---------- Contact form (mailto, no backend) ---------- */
  const form = $('#contactForm');
  const status = $('#formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const missing = ['name', 'email', 'msg'].filter((k) => !String(f.get(k) || '').trim());
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(f.get('email') || ''));
    $$('.field', form).forEach((el) => el.classList.remove('is-invalid'));
    if (missing.length || !emailOk) {
      missing.concat(emailOk ? [] : ['email']).forEach((k) => form.elements[k].closest('.field').classList.add('is-invalid'));
      status.textContent = 'Kérjük, töltsd ki a mezőket (érvényes e-mail címmel).';
      status.dataset.state = 'error';
      return;
    }
    const subject = `Érdeklődés – ${f.get('loc')}`;
    const body = `${f.get('msg')}\n\n—\nNév: ${f.get('name')}\nE-mail: ${f.get('email')}\nTerem: ${f.get('loc')}`;
    location.href = `mailto:inci@kolibri.fitness?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Köszönjük! Megnyitottuk a levelezőprogramodat – csak küldd el az üzenetet.';
    status.dataset.state = 'ok';
  });

  /* ---------- Reveal on scroll + counters ---------- */
  const countUp = (el) => {
    const target = +el.dataset.count;
    if (reduceMotion) return;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / 1100);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        $$('[data-count]', en.target).forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((el) => io.observe(el));
  } else {
    $$('.reveal').forEach((el) => el.classList.add('is-in'));
  }

  $('#year').textContent = new Date().getFullYear();
})();
