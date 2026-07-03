/* eslint-disable */
/* NISE — Sections B: Solution, Services, Why, Process */

/* ------------------------------------------------------------------ */
/* SOLUTION — Connected ecosystem diagram                              */
/* ------------------------------------------------------------------ */
function Solution() {
  const modules = [
    { id: 'web',   icon: 'globe',    title: 'Website Rasmi',
      desc: 'Pusat maklumat online yang sentiasa terkini.' },
    { id: 'dash',  icon: 'grid',     title: 'Dashboard Admin',
      desc: 'Kawalan penuh operasi dari satu panel.', primary: true },
    { id: 'ann',   icon: 'bell',     title: 'Announcement System',
      desc: 'Hantar berita terus kepada komuniti.' },
    { id: 'evt',   icon: 'calendar', title: 'Event Management',
      desc: 'Urus program, ceramah dan aktiviti.' },
    { id: 'com',   icon: 'users',    title: 'Community System',
      desc: 'Hubungkan ahli dalam satu ekosistem.' },
    { id: 'pay',   icon: 'wallet',   title: 'Donation & Payment',
      desc: 'Terima derma dan bayaran secara selamat.' },
  ];
  return (
    <section id="solution" className="solution">
      <div className="pattern-bg" />
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="eyebrow">Penyelesaian Kami / Our Solution</span></Reveal>
          <Reveal delay={100}><h2>Sistem digital berpusat — <span className="serif" style={{ color: 'var(--accent)' }}>satu ekosistem</span>, semua operasi.</h2></Reveal>
          <Reveal delay={200}>
            <p className="lead">
              Every module talks to the next. Komuniti, kewangan, acara dan komunikasi
              — dari satu tempat.
            </p>
          </Reveal>
        </div>

        <div className="solution-diagram">
          {/* SVG connection layer */}
          <svg className="conn-layer" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity=".0"/>
                <stop offset="50%" stopColor="var(--accent)" stopOpacity=".55"/>
                <stop offset="100%" stopColor="var(--accent)" stopOpacity=".0"/>
              </linearGradient>
            </defs>
            {/* lines: center to each corner */}
            <g stroke="var(--line-2)" strokeWidth="1" fill="none">
              <path d="M500 300 L170 100"/>
              <path d="M500 300 L170 300"/>
              <path d="M500 300 L170 500"/>
              <path d="M500 300 L830 100"/>
              <path d="M500 300 L830 500"/>
            </g>
            {/* animated pulse lines */}
            <g fill="none" stroke="url(#lg)" strokeWidth="2" strokeLinecap="round" className="pulses">
              <path d="M500 300 L170 100" className="p1"/>
              <path d="M500 300 L170 300" className="p2"/>
              <path d="M500 300 L170 500" className="p3"/>
              <path d="M500 300 L830 100" className="p4"/>
              <path d="M500 300 L830 500" className="p5"/>
            </g>
          </svg>

          <div className="modules">
            {modules.map((m, i) => {
              const I = Icon[m.icon];
              return (
                <div key={m.id} className={`module module-${m.id} ${m.primary ? 'module-primary' : ''}`}>
                  <div className="module-card">
                    <div className="module-icon"><I /></div>
                    <div className="module-content">
                      <h4>{m.title}</h4>
                      <p>{m.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Reveal>
          <blockquote className="pull" style={{ marginTop: 'clamp(48px, 6vw, 72px)' }}>
            "Satu sistem untuk memudahkan pengurusan dan menghubungkan
            organisasi dengan komuniti."
          </blockquote>
        </Reveal>
      </div>

      <style>{`
        .solution { background: linear-gradient(180deg, var(--bg) 0%, var(--bg-soft) 100%); }
        .solution-diagram { position: relative; margin-top: 24px; }
        .conn-layer { display: none; }
        @media (min-width: 1000px) {
          .conn-layer { display: block; position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
        }
        .pulses path {
          stroke-dasharray: 80 600; stroke-dashoffset: 680;
          animation: pulseLine 4.5s linear infinite;
        }
        .pulses .p1 { animation-delay: 0s; }
        .pulses .p2 { animation-delay: .6s; }
        .pulses .p3 { animation-delay: 1.2s; }
        .pulses .p4 { animation-delay: 1.8s; }
        .pulses .p5 { animation-delay: 2.4s; }
        .pulses .p6 { animation-delay: 3s; }
        @keyframes pulseLine { to { stroke-dashoffset: 0; } }

        .modules {
          display: grid; gap: 16px; grid-template-columns: 1fr;
          position: relative;
        }
        @media (min-width: 720px)  { .modules { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1000px) {
          .modules {
            grid-template-columns: 1fr 1.3fr 1fr;
            grid-template-rows: auto auto auto;
            gap: clamp(20px, 2.5vw, 32px) clamp(48px, 7vw, 110px);
            min-height: 540px;
            align-items: center;
          }
          .module-web  { grid-column: 1; grid-row: 1; }
          .module-ann  { grid-column: 1; grid-row: 2; }
          .module-com  { grid-column: 1; grid-row: 3; }
          .module-dash { grid-column: 2; grid-row: 1 / span 3; align-self: center; }
          .module-evt  { grid-column: 3; grid-row: 1; }
          .module-pay  { grid-column: 3; grid-row: 2; }
          /* 6th module = community on left bottom (com), and right bottom adds an empty visual breather */
        }

        .module { position: relative; z-index: 2; }
        .module-card {
          background: var(--bg-elev);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 20px;
          display: flex; gap: 16px; align-items: flex-start;
          box-shadow: var(--shadow-1);
          transition: transform var(--t) var(--ease), box-shadow var(--t) var(--ease), border-color var(--t) var(--ease);
          opacity: 0; transform: translateY(20px);
          animation: modIn .8s var(--ease) forwards;
        }
        .modules .module:nth-child(1) .module-card { animation-delay: .05s; }
        .modules .module:nth-child(2) .module-card { animation-delay: .2s; }
        .modules .module:nth-child(3) .module-card { animation-delay: .35s; }
        .modules .module:nth-child(4) .module-card { animation-delay: .5s; }
        .modules .module:nth-child(5) .module-card { animation-delay: .65s; }
        .modules .module:nth-child(6) .module-card { animation-delay: .8s; }
        @keyframes modIn { to { opacity: 1; transform: none; } }
        .module-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-2); border-color: var(--line-2); }

        .module-primary .module-card {
          background: var(--accent); color: white;
          border-color: var(--accent);
          box-shadow: 0 30px 60px -20px color-mix(in oklch, var(--accent) 55%, transparent);
        }
        .module-primary .module-icon { background: rgba(255,255,255,.12); color: white; }
        .module-primary p { color: rgba(255,255,255,.78); }

        .module-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: var(--accent-soft); color: var(--accent);
          display: grid; place-items: center; flex-shrink: 0;
        }
        .module-content h4 { font-size: 16px; font-weight: 600; letter-spacing: -.01em; }
        .module-content p { font-size: 14px; color: var(--ink-3); margin-top: 6px; line-height: 1.55; }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */
function Services() {
  const items = [
    { icon: 'monitor', tag: '01', title: 'Website Development',
      bullets: ['Corporate & organization websites', 'Professional landing pages', 'Responsive design & custom UI/UX'] },
    { icon: 'layers',  tag: '02', title: 'System Development',
      bullets: ['Centralized admin dashboards', 'Booking & event management', 'Community & database systems'] },
    { icon: 'mosque',  tag: '03', title: 'Masjid Digitalization',
      bullets: ['Official masjid websites', 'Donation & community systems', 'Live programs & announcements'] },
    { icon: 'tool',    tag: '04', title: 'Support & Maintenance',
      bullets: ['Technical support & security updates', 'Automated backup systems', 'Ongoing admin training'] },
  ];
  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="eyebrow">Apa Yang Kami Tawarkan / What we offer</span></Reveal>
          <Reveal delay={100}><h2>Servis utama yang kami bina untuk anda.</h2></Reveal>
          <Reveal delay={200}>
            <p className="lead">
              From a landing page to a full community system — practical,
              well-built, supported after launch.
            </p>
          </Reveal>
        </div>

        <Stagger className="services-grid">
          {items.map((s, i) => {
            const I = Icon[s.icon];
            return (
              <article key={i} className="service card cardlink" tabIndex="0">
                <div className="service-top">
                  <div className="icon-tile"><I /></div>
                  <span className="service-tag">{s.tag}</span>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <ul className="service-bullets">
                  {s.bullets.map((b, j) => (
                    <li key={j}><Icon.check className="check" />{b}</li>
                  ))}
                </ul>
                <span className="hover-arr" style={{ marginTop: 24 }}>
                  Learn more <Icon.arrow />
                </span>
              </article>
            );
          })}
        </Stagger>

        <Reveal>
          <blockquote className="pull" style={{ marginTop: 'clamp(48px, 6vw, 72px)' }}>
            "Fokus utama kami adalah membina sistem yang praktikal
            dan mudah digunakan."
          </blockquote>
        </Reveal>
      </div>

      <style>{`
        .services-grid {
          display: grid; gap: 20px; grid-template-columns: 1fr;
        }
        @media (min-width: 720px)  { .services-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1180px) { .services-grid { grid-template-columns: repeat(4, 1fr); } }
        .service { display: flex; flex-direction: column; height: 100%; min-height: 320px; }
        .service-top { display: flex; align-items: flex-start; justify-content: space-between; }
        .service-tag { font-size: 12px; color: var(--ink-4); letter-spacing: .12em; font-weight: 500; }
        .service-title { margin-top: 28px; font-size: 22px; letter-spacing: -.02em; }
        .service-bullets { list-style: none; padding: 0; margin: 20px 0 0; display: flex; flex-direction: column; gap: 10px; }
        .service-bullets li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--ink-2); line-height: 1.5; }
        .service-bullets .check { color: var(--accent-2); margin-top: 2px; flex-shrink: 0; }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* WHY                                                                 */
/* ------------------------------------------------------------------ */
function Why() {
  const items = [
    { title: 'Pendekatan moden & praktikal',
      desc: 'Clean, professional, relevan dengan keperluan semasa.' },
    { title: 'Mobile-first development',
      desc: 'Every system built with mobile in mind from day one.' },
    { title: 'Fokus kepada komuniti',
      desc: 'Designed to connect organizations with their community.' },
    { title: 'Customized untuk anda',
      desc: 'No one-size-fits-all. Setiap sistem disesuaikan dengan keperluan.' },
    { title: 'Support selepas projek',
      desc: 'Our relationship doesn’t end at launch — we keep the system running.' },
    { title: 'Sistem yang berkembang',
      desc: 'Flexible architecture — grows as your organization grows.' },
  ];
  return (
    <section id="why" className="why">
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="eyebrow">Kelebihan Kami / Why choose NISE</span></Reveal>
          <Reveal delay={100}><h2>Why teams trust us with their digital backbone.</h2></Reveal>
        </div>

        <Stagger className="why-grid">
          {items.map((it, i) => (
            <div key={i} className="why-item">
              <div className="why-num">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="why-title">{it.title}</h3>
              <p className="body">{it.desc}</p>
            </div>
          ))}
        </Stagger>
      </div>

      <style>{`
        .why-grid {
          display: grid; gap: 0;
          grid-template-columns: 1fr;
          border-top: 1px solid var(--line);
        }
        @media (min-width: 760px)  { .why-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1080px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }

        .why-item {
          padding: clamp(28px, 3.5vw, 40px) clamp(20px, 2.5vw, 32px);
          border-bottom: 1px solid var(--line);
          position: relative;
          transition: background var(--t) var(--ease);
        }
        @media (min-width: 760px)  {
          .why-item:not(:nth-child(2n)) { border-right: 1px solid var(--line); }
        }
        @media (min-width: 1080px) {
          .why-item { border-right: 1px solid var(--line); }
          .why-item:nth-child(3n) { border-right: 0; }
          .why-item:not(:nth-child(2n)) { border-right: 1px solid var(--line); }
          .why-item:nth-child(3n) { border-right: 0; }
        }
        .why-item:hover { background: var(--bg-elev); }
        .why-item:hover .why-num { color: var(--accent); }

        .why-num {
          font-size: 13px; color: var(--ink-4); font-weight: 500; letter-spacing: .12em;
          transition: color var(--t) var(--ease);
        }
        .why-title {
          font-size: 22px; font-weight: 500; letter-spacing: -.02em;
          margin: 16px 0 12px; line-height: 1.25; max-width: 22ch;
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROCESS                                                             */
/* ------------------------------------------------------------------ */
function Process() {
  const steps = [
    { n: '01', title: 'Konsultasi', en: 'Consultation',
      desc: 'We listen first. Understand the organization, people, and real friction.' },
    { n: '02', title: 'Rancangan', en: 'Planning',
      desc: 'A clear plan — scope, structure, timeline — before any code is written.' },
    { n: '03', title: 'Pembangunan', en: 'Development',
      desc: 'Built in transparent stages. We don’t move forward without your approval.' },
    { n: '04', title: 'Pelancaran', en: 'Launch & beyond',
      desc: 'Launch is the start. Training, monitoring, and ongoing support.' },
  ];
  return (
    <section id="process" className="process">
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="eyebrow">Proses Kerja Kami / How we work</span></Reveal>
          <Reveal delay={100}><h2>A clear path from <span className="serif" style={{ color: 'var(--accent)' }}>idea</span> to launched system.</h2></Reveal>
        </div>

        <div className="timeline">
          <div className="track" />
          <Stagger className="steps">
            {steps.map((s, i) => (
              <div key={i} className="step">
                <div className="step-dot" aria-hidden="true">
                  <span className="step-pulse" />
                </div>
                <div className="step-content">
                  <div className="step-num">{s.n}</div>
                  <h3 className="step-title">{s.title}</h3>
                  <div className="step-en">{s.en}</div>
                  <p className="body" style={{ marginTop: 12 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <p className="process-foot">
            Setiap peringkat ada komunikasi aktif. No next stage without your approval.
          </p>
        </Reveal>
      </div>

      <style>{`
        .timeline { position: relative; margin-top: 24px; }
        .track {
          position: absolute; background: var(--line);
        }
        .steps {
          display: grid; gap: 32px; grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .steps { grid-template-columns: repeat(4, 1fr); gap: 24px; }
          .track { left: 5%; right: 5%; top: 14px; height: 1px; }
          .track::after {
            content: ""; position: absolute; inset: 0;
            background: linear-gradient(90deg, transparent, var(--accent) 50%, transparent);
            background-size: 200% 100%;
            animation: trackFlow 6s linear infinite;
          }
          @keyframes trackFlow { to { background-position: -200% 0; } }
        }
        @media (max-width: 899px) {
          .track { left: 13px; top: 8px; bottom: 0; width: 1px; }
        }

        .step { position: relative; padding-left: 0; }
        @media (max-width: 899px) { .step { padding-left: 44px; } }

        .step-dot {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--bg-elev);
          border: 1px solid var(--line);
          display: grid; place-items: center;
          margin-bottom: 20px; position: relative; z-index: 2;
        }
        .step-dot::after {
          content: ""; width: 10px; height: 10px; border-radius: 50%;
          background: var(--accent);
        }
        @media (max-width: 899px) {
          .step-dot { position: absolute; left: 0; top: 0; margin-bottom: 0; }
        }
        .step-pulse {
          position: absolute; inset: -2px; border-radius: 50%;
          border: 1px solid var(--accent); opacity: 0;
          animation: stepPulse 3s var(--ease) infinite;
        }
        .step:nth-child(1) .step-pulse { animation-delay: 0s; }
        .step:nth-child(2) .step-pulse { animation-delay: .6s; }
        .step:nth-child(3) .step-pulse { animation-delay: 1.2s; }
        .step:nth-child(4) .step-pulse { animation-delay: 1.8s; }
        @keyframes stepPulse {
          0% { transform: scale(.9); opacity: .5; }
          70% { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .step-num { font-size: 12px; color: var(--ink-4); letter-spacing: .12em; font-weight: 500; }
        .step-title { font-size: 22px; font-weight: 500; letter-spacing: -.02em; margin-top: 6px; }
        .step-en { font-size: 13px; color: var(--accent); margin-top: 2px; font-weight: 500; letter-spacing: -.005em; }

        .process-foot {
          margin-top: clamp(40px, 5vw, 64px);
          font-size: 15px; color: var(--ink-3); max-width: 64ch; line-height: 1.65;
          padding-top: 24px; border-top: 1px solid var(--line);
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Solution, Services, Why, Process });
