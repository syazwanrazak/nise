/* eslint-disable */
/* NISE — Shared components, icons, hooks */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ------------------------------------------------------------------ */
/* Reveal hook — IntersectionObserver, adds .in class                  */
/* ------------------------------------------------------------------ */
function useReveal(opts = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('in');
          setSeen(true);
          io.unobserve(el);
        }
      });
    }, { threshold: opts.threshold ?? 0.18, rootMargin: opts.rootMargin ?? '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

function Reveal({ as = 'div', children, className = '', delay = 0, ...rest }) {
  const [ref] = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: delay ? delay + 'ms' : undefined }} {...rest}>
      {children}
    </Tag>
  );
}

function Stagger({ as = 'div', children, className = '', ...rest }) {
  const [ref] = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={`stagger ${className}`} {...rest}>{children}</Tag>
  );
}

/* ------------------------------------------------------------------ */
/* SVG icons — outline, minimal                                        */
/* ------------------------------------------------------------------ */
const Icon = {
  arrow:  (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  arrowUp:(p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M7 17L17 7M9 7h8v8"/></svg>,
  check:  (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12l5 5L20 7"/></svg>,
  spark:  (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M18.4 5.6l-4.2 4.2M9.8 14.2l-4.2 4.2"/></svg>,

  globe:  (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18"/></svg>,
  grid:   (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
  bell:   (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>,
  calendar:(p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>,
  users:  (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.7-3 3.4-5 6.5-5s5.8 2 6.5 5"/><circle cx="17" cy="9" r="2.8"/><path d="M16 14.5c2.6.3 4.6 1.9 5.5 4.5"/></svg>,
  wallet: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="6" width="18" height="14" rx="2.5"/><path d="M3 10h18M16 14h2"/></svg>,

  unplug: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M9 14l-4 4M19 4l-4 4M14 9l-5 5M15 8l1-1a3 3 0 0 1 4 4l-1 1M8 15l-1 1a3 3 0 1 1-4-4l1-1"/></svg>,
  doc:    (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M8 13h8M8 17h5"/></svg>,
  chat:   (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z"/></svg>,
  shield: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z"/></svg>,
  cloud:  (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M7 18a4.5 4.5 0 0 1-.7-9 6 6 0 0 1 11.7 1.5A3.5 3.5 0 0 1 17.5 18H7Z"/></svg>,
  book:   (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2zM4 5v15"/><path d="M19 18v3H7a2 2 0 0 1-2-2"/></svg>,

  monitor:(p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  layers: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/></svg>,
  mosque: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 21V13c0-4 3.5-7 8-7s8 3 8 7v8"/><path d="M4 21h16M10 21v-4a2 2 0 0 1 4 0v4"/><path d="M12 3v3M11 4.5h2"/></svg>,
  tool:   (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14.7 6.3a4 4 0 1 0 3 3l-2.4 2.4-2.6-.6-.6-2.6 2.6-2.2Z"/><path d="M13 11 4.4 19.6a1.4 1.4 0 1 0 2 2L15 13"/></svg>,

  compass:(p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="m15 9-3.5 5.5L9 15l3-3.5L15 9Z"/></svg>,
  heart:  (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg>,
  whatsapp:(p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M19.1 4.9A10 10 0 0 0 2.4 16.8L1 22l5.4-1.4A10 10 0 1 0 19.1 4.9Zm-7.1 16a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8 8 0 1 1 6.8 3.7Zm4.5-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4a.4.4 0 0 0 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1.1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.5.6 2.1.7 2.9.6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c-.1 0-.3-.1-.5-.2Z"/></svg>,
  mail:   (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  pin:    (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  phone:  (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>,
};

/* ------------------------------------------------------------------ */
/* Islamic geometric pattern — subtle bg, low opacity                  */
/* ------------------------------------------------------------------ */
function setPatternVar() {
  // 8-point star tile in muted dark green
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'>
    <g fill='none' stroke='%230F3D2E' stroke-width='1' opacity='1'>
      <path d='M48 4 L60 16 L72 4 L72 24 L92 24 L80 36 L92 48 L72 48 L72 68 L60 56 L48 68 L36 56 L24 68 L24 48 L4 48 L16 36 L4 24 L24 24 L24 4 L36 16 Z'/>
      <circle cx='48' cy='36' r='10'/>
      <path d='M0 0 L96 96 M96 0 L0 96' stroke-opacity='.35'/>
    </g>
  </svg>`;
  const url = `url("data:image/svg+xml;utf8,${svg.replace(/\n/g,'').replace(/\s+/g,' ')}")`;
  document.documentElement.style.setProperty('--pattern-svg', url);
}
setPatternVar();

/* ------------------------------------------------------------------ */
/* CTA Button                                                          */
/* ------------------------------------------------------------------ */
function Btn({ kind = 'primary', children, href, onClick, icon = true, ...rest }) {
  const cls = `btn ${kind === 'ghost' ? 'btn-ghost' : kind === 'dark' ? 'btn-dark' : ''}`;
  const inner = <>{children}{icon && <span className="arr"><Icon.arrow /></span>}</>;
  if (href) return <a href={href} className={cls} onClick={onClick} {...rest}>{inner}</a>;
  return <button className={cls} onClick={onClick} {...rest}>{inner}</button>;
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Primary">
      <a href="#top" className="nav-brand" aria-label="NISE Enterprise home">
        <span className="mark mark-logo" aria-hidden="true" />
        <span>NISE <span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>Enterprise</span></span>
      </a>
      <div className="nav-links">
        {t.nav.links.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
      <LangToggle />
      <a href="#contact" className="btn nav-cta-desktop" style={{ height: 40, padding: '0 16px', fontSize: 14 }}>
        {t.nav.cta}
        <span className="arr"><Icon.arrow /></span>
      </a>
      <a href="#contact" className="nav-menu-btn nav-cta-mobile" aria-label="Contact">
        <Icon.arrow />
      </a>
    </nav>
  );
}

Object.assign(window, { useReveal, Reveal, Stagger, Icon, Btn, Nav });
