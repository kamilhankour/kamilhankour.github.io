(() => {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (!nav || !toggle) return;

  nav.classList.add('enhanced');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    toggle.textContent = open ? 'Close' : 'Menu';
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  nav.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
  window.matchMedia('(min-width: 64rem)').addEventListener('change', () => setOpen(false));
})();
