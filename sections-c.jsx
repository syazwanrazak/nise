/* eslint-disable */
/* NISE — Sections C: Masjid, Portfolio, Team, Support, Vision, CTA, Footer */

/* ------------------------------------------------------------------ */
/* MASJID — Smart Mosque Ecosystem                                     */
/* ------------------------------------------------------------------ */
function Masjid() {
  return (
    <section id="masjid" className="masjid">
      <div className="pattern-bg" />
      <div className="wrap masjid-wrap">

        <div className="masjid-left">
          <Reveal>
            <span className="chip" style={{ background: 'rgba(255,255,255,.08)', color: '#E9F0EB' }}>
              <span className="dot" /> Fokus Khusus
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="masjid-h2">
              Ekosistem digital<br />
              <span className="serif" style={{ color: 'var(--accent-2)' }}>masjid pintar</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="masjid-lead">
              A centralized website platform for masjid — more organized,
              more professional, suited for JAIS and state administrations.
            </p>
          </Reveal>

          <div className="masjid-stats">
            <Reveal delay={300}>
              <div className="masjid-stat">
                <Icon.mosque />
                <div>
                  <div className="masjid-stat-num">JAIS-ready</div>
                  <div className="masjid-stat-lbl">Sesuai untuk pengurusan negeri</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="masjid-stat">
                <Icon.heart />
                <div>
                  <div className="masjid-stat-num">Community-first</div>
                  <div className="masjid-stat-lbl">Direka untuk jemaah dan kariah</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="masjid-right">
          <Reveal>
            <div className="masjid-card">
              <h4 className="masjid-card-h">Sesuai untuk</h4>
              <ul className="masjid-list">
                <li><Icon.check /> Masjid belum mempunyai website rasmi</li>
                <li><Icon.check /> Masjid dengan website lama perlu revamp</li>
                <li><Icon.check /> Masjid yang mahu tambah fitur moden</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="masjid-card">
              <h4 className="masjid-card-h">Matlamat utama</h4>
              <ul className="masjid-list">
                <li><Icon.spark /> Tingkatkan kehadiran jemaah</li>
                <li><Icon.spark /> Mudahkan pengurusan masjid</li>
                <li><Icon.spark /> Perluaskan hebahan program</li>
                <li><Icon.spark /> Bantu penjanaan dana masjid</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <blockquote className="masjid-quote">
            "Membantu masjid bergerak seiring perkembangan teknologi
            dan komuniti masa kini."
          </blockquote>
        </Reveal>
      </div>

      <style>{`
        .masjid {
          background: var(--bg-deep);
          color: #E5EAE7;
          overflow: hidden;
        }
        .masjid .pattern-bg { mix-blend-mode: screen; opacity: calc(var(--pattern-op) * 1.8); }
        .masjid-wrap {
          display: grid; gap: clamp(40px, 5vw, 64px);
          grid-template-columns: 1fr;
        }
        @media (min-width: 1000px) {
          .masjid-wrap { grid-template-columns: 1.1fr 1fr; align-items: start; }
        }
        .masjid-left { display: flex; flex-direction: column; gap: 24px; }
        .masjid-h2 {
          font-size: clamp(36px, 5vw, 64px);
          letter-spacing: -.03em; line-height: 1.05;
          color: white;
        }
        .masjid-lead {
          font-size: clamp(16px, 1.4vw, 19px);
          color: rgba(255,255,255,.72); line-height: 1.6; max-width: 52ch;
        }
        .masjid-stats {
          display: grid; gap: 16px; grid-template-columns: 1fr;
          padding-top: 16px; margin-top: 12px;
          border-top: 1px solid rgba(255,255,255,.1);
        }
        @media (min-width: 560px) { .masjid-stats { grid-template-columns: 1fr 1fr; } }
        .masjid-stat { display: flex; gap: 14px; align-items: flex-start; padding-top: 18px; }
        .masjid-stat svg { color: var(--accent-2); flex-shrink: 0; }
        .masjid-stat-num { font-weight: 500; color: white; letter-spacing: -.01em; }
        .masjid-stat-lbl { font-size: 13px; color: rgba(255,255,255,.55); margin-top: 2px; }

        .masjid-right { display: flex; flex-direction: column; gap: 16px; }
        .masjid-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: var(--radius-lg);
          padding: 24px;
          backdrop-filter: blur(8px);
        }
        .masjid-card-h {
          font-size: 13px; letter-spacing: .12em; text-transform: uppercase;
          color: var(--accent-2); font-weight: 500;
        }
        .masjid-list { list-style: none; padding: 0; margin: 16px 0 0; display: flex; flex-direction: column; gap: 10px; }
        .masjid-list li {
          display: flex; align-items: flex-start; gap: 12px;
          color: rgba(255,255,255,.88); font-size: 15px; line-height: 1.5;
        }
        .masjid-list svg { color: var(--accent-2); margin-top: 2px; flex-shrink: 0; }

        .masjid-quote {
          grid-column: 1 / -1;
          margin: 0; padding: 32px 0 0;
          border-top: 1px solid rgba(255,255,255,.1);
          font-family: var(--serif); font-style: italic;
          font-size: clamp(20px, 2.2vw, 28px);
          line-height: 1.35; color: white; max-width: 60ch;
          letter-spacing: -.01em;
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PORTFOLIO                                                           */
/* ------------------------------------------------------------------ */
function Portfolio() {
  const [active, setActive] = React.useState(0);
  const projects = [
    {
      key: 'cetak',
      tag: 'E-Commerce',
      title: 'Design Cetak — Print E-commerce',
      desc: 'Full ordering platform for a printing business — product catalog, file uploads, and WhatsApp-based order confirmation, with an admin panel to track incoming orders.',
      url: 'designcetak.com',
      live: 'https://designcetak.com',
      modules: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      status: 'live',
      screenshot: 'assets/portfolio/designcetak.png'
    },
    {
      key: 'masjid',
      tag: 'Smart Mosque',
      title: 'Masjid Al-Itisam TTDI Jaya',
      desc: 'Bilingual community portal with live prayer times, announcements and a secure admin panel for managing community records — built with zero ongoing server cost.',
      url: 'masjidalitisam.vercel.app',
      live: 'https://masjidalitisam.vercel.app',
      modules: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      status: 'live',
      screenshot: 'assets/portfolio/masjidalitisam.png'
    },
    {
      key: 'salon',
      tag: 'Queue Management',
      title: 'Salon Nabela — Live Queue System',
      desc: '3-screen system for a salon: customer self-registration, live staff dashboard, and TV display — with smart auto staff assignment based on workload.',
      url: 'salon-nabella.vercel.app',
      live: 'https://salon-nabella.vercel.app',
      modules: ['React 18', 'Vite', 'Firebase Firestore', 'Tailwind CSS'],
      status: 'live',
      screenshot: 'assets/portfolio/salonnabela.png'
    },
    {
      key: 'balikpulau',
      tag: 'Hospitality',
      title: 'Balik Pulau Inn — Homestay',
      desc: 'Responsive site for a Penang kampung homestay — hero slideshow, filterable photo gallery with lightbox, and a WhatsApp booking enquiry form.',
      url: 'balikpulauinn.vercel.app',
      live: 'https://balikpulauinn.vercel.app',
      modules: ['HTML', 'CSS', 'JavaScript'],
      status: 'live',
      screenshot: 'assets/portfolio/balikpulauinn.png'
    },
    {
      key: 'sewana',
      tag: 'Property Management',
      title: 'Sewana — Rental Dashboard',
      desc: 'Web app for landlords and property managers to manage multiple rental units — tenant records, payment tracking, and a property overview dashboard.',
      url: 'sewana-3517.vercel.app',
      live: 'https://sewana-3517.vercel.app',
      modules: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      status: 'in-progress',
      screenshot: 'assets/portfolio/sewana.png'
    }
  ];
  const p = projects[active];

  return (
    <section id="portfolio" className="portfolio">
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="eyebrow">Rekod Kami / Selected work</span></Reveal>
          <Reveal delay={100}><h2>Systems we've built — and the communities they serve.</h2></Reveal>
        </div>

        <div className="port-grid">
          <Reveal>
            <div className="port-stage">
              <a
                className="port-thumb"
                key={p.key}
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${p.title}`}
              >
                <img className="thumb-img" src={p.screenshot} alt={p.title} key={p.key} />
                <div className="port-thumb-overlay">
                  <span className="port-thumb-url">{p.url}</span>
                  <span className="hover-arr"><Icon.arrowUp /></span>
                </div>
              </a>
              <div className="port-meta">
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span className="chip">{p.tag}</span>
                  {p.status === 'in-progress' && (
                    <span className="chip chip-progress">In Progress</span>
                  )}
                </div>
                <h3 className="port-title">{p.title}</h3>
                <p className="body" style={{ marginTop: 12, maxWidth: '56ch' }}>{p.desc}</p>
                <div className="port-modules">
                  {p.modules.map((m, i) => (
                    <span key={i} className="port-mod">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="port-switch">
            {projects.map((proj, i) => (
              <button
                key={proj.key}
                className={`port-tab ${i === active ? 'on' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="port-tab-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="port-tab-body">
                  <span className="port-tab-title">{proj.title}</span>
                  <span className="port-tab-tag">{proj.tag}</span>
                </span>
                <Icon.arrow className="port-tab-arrow" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .port-grid {
          display: grid; gap: 24px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1000px) {
          .port-grid { grid-template-columns: 1.4fr 1fr; gap: 32px; align-items: stretch; }
        }
        .port-stage {
          background: var(--bg-elev); border: 1px solid var(--line);
          border-radius: var(--radius-xl); overflow: hidden;
          display: flex; flex-direction: column;
        }
        .port-thumb {
          display: block;
          position: relative; aspect-ratio: 16 / 10; background: var(--bg-soft);
          overflow: hidden;
          animation: fadeUp .6s var(--ease) both;
        }
        .chip-progress {
          background: var(--bg-soft); color: var(--ink-3);
          border: 1px dashed var(--line-2);
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } }
        .thumb-img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: top center; transition: transform var(--t) var(--ease); }
        .port-stage:hover .thumb-img { transform: scale(1.02); }
        .port-thumb-overlay {
          position: absolute; inset: auto 16px 16px 16px;
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 14px;
          background: rgba(14,26,20,.78); color: white;
          border-radius: 999px; backdrop-filter: blur(8px);
          font-size: 12px; letter-spacing: .04em;
          opacity: 0; transition: opacity var(--t) var(--ease), transform var(--t) var(--ease);
          transform: translateY(8px);
        }
        .port-stage:hover .port-thumb-overlay { opacity: 1; transform: none; }
        .port-thumb-url { font-family: var(--sans); }
        .port-thumb-overlay .hover-arr { color: white; }

        .port-meta { padding: clamp(24px, 3vw, 32px); display: flex; flex-direction: column; gap: 12px; }
        .port-title { font-size: clamp(22px, 2.2vw, 28px); letter-spacing: -.02em; margin-top: 4px; }
        .port-modules { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .port-mod {
          padding: 6px 12px; border-radius: 999px;
          background: var(--bg-soft); border: 1px solid var(--line);
          font-size: 12px; color: var(--ink-2); font-weight: 500;
        }

        .port-switch { display: flex; flex-direction: column; gap: 8px; }
        .port-tab {
          appearance: none; background: transparent; border: 0; text-align: left;
          padding: 18px 16px; border-radius: var(--radius-lg);
          display: flex; align-items: center; gap: 16px;
          color: var(--ink-2); transition: all var(--t) var(--ease);
          border: 1px solid transparent;
        }
        .port-tab:hover { background: var(--bg-elev); border-color: var(--line); }
        .port-tab.on {
          background: var(--bg-elev); border-color: var(--line-2);
          box-shadow: var(--shadow-2); color: var(--ink);
        }
        .port-tab.on .port-tab-num { color: var(--accent); }
        .port-tab.on .port-tab-arrow { color: var(--accent); transform: translateX(2px); }
        .port-tab-num { font-size: 13px; letter-spacing: .12em; color: var(--ink-4); font-weight: 500; min-width: 32px; transition: color var(--t) var(--ease); }
        .port-tab-body { flex: 1; display: flex; flex-direction: column; gap: 2px; }
        .port-tab-title { font-size: 16px; font-weight: 500; letter-spacing: -.01em; line-height: 1.3; }
        .port-tab-tag { font-size: 12px; color: var(--ink-4); }
        .port-tab-arrow { color: var(--ink-4); transition: all var(--t) var(--ease); }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TEAM                                                                */
/* ------------------------------------------------------------------ */
function Team() {
  const members = [
    { name: 'Danny', role: 'Founder & Growth Strategist',
      bio: 'Leads strategic direction at NISE — expertise in digital ecosystem development, growth strategy, and brand positioning for modern organizations, communities and masjid.',
      initials: 'D', tint: 'a' },
    { name: 'Syazwan', role: 'Chief Technical Officer',
      bio: 'Leads technical development at NISE — building websites, dashboards and centralized systems with focus on architecture, scalability and clean UX.',
      initials: 'S', tint: 'b' },
  ];
  return (
    <section id="team" className="team">
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="eyebrow">Orang Di Sebalik NISE / Our team</span></Reveal>
          <Reveal delay={100}><h2>Small team. Long-term thinking.</h2></Reveal>
          <Reveal delay={200}>
            <p className="lead">
              Creative, technical and strategic — building modern digital solutions
              for Malaysian communities.
            </p>
          </Reveal>
        </div>

        <Stagger className="team-grid">
          {members.map((m, i) => (
            <div key={i} className="team-card">
              <div className={`team-avatar tint-${m.tint}`}>
                <span>{m.initials}</span>
                <svg className="team-avatar-pattern" viewBox="0 0 200 200" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1" opacity=".18">
                    <circle cx="100" cy="100" r="80"/>
                    <circle cx="100" cy="100" r="55"/>
                    <circle cx="100" cy="100" r="30"/>
                    <path d="M100 20 L100 180 M20 100 L180 100 M40 40 L160 160 M160 40 L40 160"/>
                  </g>
                </svg>
              </div>
              <div className="team-info">
                <h3 className="team-name">{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p className="body" style={{ marginTop: 14 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </Stagger>
      </div>

      <style>{`
        .team-grid { display: grid; gap: 24px; grid-template-columns: 1fr; }
        @media (min-width: 820px) { .team-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        .team-card {
          background: var(--bg-elev); border: 1px solid var(--line);
          border-radius: var(--radius-xl); overflow: hidden;
          display: grid; grid-template-columns: 1fr; gap: 0;
          transition: transform var(--t) var(--ease), box-shadow var(--t) var(--ease);
        }
        @media (min-width: 560px) { .team-card { grid-template-columns: 200px 1fr; } }
        .team-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-2); }

        .team-avatar {
          position: relative; aspect-ratio: 1; min-height: 180px;
          display: grid; place-items: center;
          color: white; font-size: 64px; font-family: var(--serif); font-style: italic; font-weight: 500;
          overflow: hidden;
        }
        .team-avatar > span { position: relative; z-index: 2; line-height: 1; }
        .team-avatar-pattern { position: absolute; inset: 0; width: 100%; height: 100%; }
        .tint-a { background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%); }
        .tint-b { background: linear-gradient(135deg, #14253C 0%, var(--accent) 100%); }

        .team-info { padding: clamp(24px, 3vw, 32px); display: flex; flex-direction: column; }
        .team-name { font-size: 24px; letter-spacing: -.02em; }
        .team-role { font-size: 13px; color: var(--accent); letter-spacing: .04em; margin-top: 4px; font-weight: 500; }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SUPPORT                                                             */
/* ------------------------------------------------------------------ */
function Support() {
  const items = [
    { icon: 'chat',   title: 'Technical Support', desc: 'WhatsApp support whenever you need it.' },
    { icon: 'shield', title: 'Security Monitoring', desc: 'Regular checks and the latest updates.' },
    { icon: 'cloud',  title: 'Backup System', desc: 'Automatic backups — data sentiasa selamat.' },
    { icon: 'book',   title: 'Admin Training', desc: 'Training so your admin can run the system confidently.' },
  ];
  return (
    <section id="support" className="support">
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="eyebrow">Sokongan & Maintenance / We stay with you</span></Reveal>
          <Reveal delay={100}><h2>Launch is the beginning — not the end.</h2></Reveal>
          <Reveal delay={200}>
            <p className="lead">
              Kerja kami tidak berhenti di pelancaran. We keep your system
              running, secure and up to date.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid-4">
          {items.map((it, i) => {
            const I = Icon[it.icon];
            return (
              <div key={i} className="support-card card">
                <div className="icon-tile"><I /></div>
                <h4 style={{ marginTop: 20, fontSize: 18 }}>{it.title}</h4>
                <p className="body" style={{ marginTop: 10, fontSize: 14 }}>{it.desc}</p>
              </div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* VISION                                                              */
/* ------------------------------------------------------------------ */
function Vision() {
  return (
    <section id="vision" className="vision">
      <div className="pattern-bg" />
      <div className="wrap">
        <div className="vision-inner">
          <Reveal><span className="eyebrow">Visi Kami / Our vision</span></Reveal>

          <h2 className="vision-h2 lines">
            <span>Membina masa depan</span>
            <span>digital yang lebih</span>
            <span className="serif" style={{ color: 'var(--accent)' }}>connected.</span>
          </h2>

          <Reveal delay={400}>
            <p className="vision-quote serif">
              "Teknologi yang baik bukan sekadar cantik — tetapi membantu
              manusia berhubung dengan lebih baik."
            </p>
          </Reveal>

          <Stagger className="vision-points">
            <div className="vision-point">
              <span className="vision-point-num">01</span>
              <div>
                <h4>Lebih Moden</h4>
                <p>Relevant to today’s digital needs.</p>
              </div>
            </div>
            <div className="vision-point">
              <span className="vision-point-num">02</span>
              <div>
                <h4>Lebih Tersusun</h4>
                <p>Centralized operations, organized data, efficient management.</p>
              </div>
            </div>
            <div className="vision-point">
              <span className="vision-point-num">03</span>
              <div>
                <h4>Lebih Connected</h4>
                <p>Organizations and communities in one ecosystem.</p>
              </div>
            </div>
          </Stagger>
        </div>
      </div>

      <style>{`
        .vision { overflow: hidden; }
        .vision-inner { display: flex; flex-direction: column; gap: clamp(24px, 3vw, 32px); }
        .vision-h2 {
          font-size: clamp(44px, 8vw, 112px);
          letter-spacing: -.04em; line-height: 1.0;
          font-weight: 500;
          max-width: 14ch;
        }
        .vision-quote {
          font-size: clamp(20px, 2.2vw, 26px);
          color: var(--ink-2); max-width: 56ch; line-height: 1.45;
          padding-left: 22px; border-left: 2px solid var(--accent);
        }
        .vision-points {
          display: grid; gap: 28px; grid-template-columns: 1fr;
          margin-top: 24px; padding-top: 32px;
          border-top: 1px solid var(--line);
        }
        @media (min-width: 760px) { .vision-points { grid-template-columns: repeat(3, 1fr); gap: 24px; } }
        .vision-point { display: flex; gap: 16px; align-items: flex-start; }
        .vision-point-num {
          font-size: 12px; letter-spacing: .12em; font-weight: 500;
          color: var(--accent); padding-top: 4px; flex-shrink: 0;
        }
        .vision-point h4 { font-size: 18px; font-weight: 500; letter-spacing: -.01em; }
        .vision-point p { color: var(--ink-3); font-size: 14px; margin-top: 6px; line-height: 1.5; }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA + FOOTER                                                        */
/* ------------------------------------------------------------------ */
function CTA() {
  return (
    <section id="contact" className="cta-sec">
      <div className="wrap">
        <Reveal>
          <div className="cta-card">
            <div className="pattern-bg" />
            <div className="cta-inner">
              <span className="chip" style={{ background: 'rgba(255,255,255,.08)', color: 'white' }}>
                <span className="dot" /> Mulakan Perbualan
              </span>
              <h2 className="cta-h2">
                Let's build something<br/>
                <span className="serif" style={{ color: 'var(--accent-2)' }}>meaningful</span> together.
              </h2>
              <p className="cta-lead">
                A free consultation to understand your digital needs —
                and recommend the right solution.
              </p>
              <div className="cta-tickets">
                <span><Icon.check /> Free consultation</span>
                <span><Icon.check /> No commitment</span>
                <span><Icon.check /> Live demo available</span>
              </div>
              <div className="cta-actions">
                <a className="btn" style={{ background: 'white', color: 'var(--ink)' }} href="https://wa.me/60111142046" target="_blank" rel="noopener noreferrer">
                  <Icon.whatsapp /> WhatsApp Danny
                  <span className="arr"><Icon.arrow /></span>
                </a>
                <a className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,.25)', color: 'white', background: 'transparent' }} href="mailto:ats.danial@nuklearmarketing.com">
                  <Icon.mail /> Email us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .cta-sec { padding: clamp(40px, 6vw, 80px) 0 clamp(60px, 8vw, 100px); }
        .cta-card {
          position: relative; overflow: hidden;
          background: var(--bg-deep); color: white;
          border-radius: var(--radius-xl);
          padding: clamp(40px, 6vw, 96px) clamp(28px, 4vw, 80px);
          isolation: isolate;
        }
        .cta-card .pattern-bg { opacity: calc(var(--pattern-op) * 2.2); mix-blend-mode: screen; }
        .cta-card::after {
          content: ""; position: absolute; inset: auto -20% -40% auto;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, color-mix(in oklch, var(--accent-2) 60%, transparent), transparent 60%);
          pointer-events: none; z-index: 0;
        }
        .cta-inner { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 24px; max-width: 720px; }
        .cta-h2 {
          font-size: clamp(36px, 5vw, 64px); color: white;
          letter-spacing: -.03em; line-height: 1.05; font-weight: 500;
        }
        .cta-lead { color: rgba(255,255,255,.72); font-size: clamp(16px, 1.4vw, 19px); line-height: 1.55; max-width: 56ch; }
        .cta-tickets { display: flex; flex-wrap: wrap; gap: 16px 24px; padding-top: 8px; }
        .cta-tickets span { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; color: rgba(255,255,255,.85); }
        .cta-tickets svg { color: var(--accent-2); }
        .cta-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px; }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="site-foot">
      <div className="pattern-bg" />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div className="foot-grid">
          <div>
            <img className="foot-logo" src="assets/brand/logo.jpeg" alt="NISE Enterprise" />
            <p className="foot-tag">
              Smart digital ecosystem solutions for organizations, masjid
              and modern communities across Malaysia.
            </p>
          </div>

          <div>
            <h5 className="foot-h">Hubungi kami</h5>
            <ul className="foot-list">
              <li><Icon.pin /><span>No. 9 Jalan Sastera 4 U2/1D<br/>TTDI Jaya, 40150 Shah Alam, Selangor</span></li>
              <li><Icon.phone /><a href="tel:+60111142046">011-1142 0466 (Danny)</a></li>
              <li><Icon.mail /><a href="mailto:ats.danial@nuklearmarketing.com">ats.danial@nuklearmarketing.com</a></li>
            </ul>
          </div>

          <div>
            <h5 className="foot-h">Services</h5>
            <ul className="foot-list">
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">System Development</a></li>
              <li><a href="#masjid">Masjid Digitalization</a></li>
              <li><a href="#support">Support & Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h5 className="foot-h">Get in touch</h5>
            <a className="btn" style={{ background: '#25D366', color: 'white' }} href="https://wa.me/60111142046" target="_blank" rel="noopener noreferrer">
              <Icon.whatsapp /> WhatsApp us
            </a>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', marginTop: 16, lineHeight: 1.6 }}>
              Available Mon–Sat,<br/>9am – 7pm Malaysia time.
            </p>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© 2025 NISE Enterprise. Built with care in Malaysia.</div>
          <div className="foot-bottom-end">Smart Digital Ecosystem Solutions</div>
        </div>
      </div>

      <style>{`
        .site-foot .pattern-bg { mix-blend-mode: screen; opacity: calc(var(--pattern-op) * 1.6); }
        .foot-grid {
          display: grid; gap: 40px;
          grid-template-columns: 1fr;
          padding-bottom: 56px;
        }
        @media (min-width: 720px)  { .foot-grid { grid-template-columns: 1fr 1fr; gap: 48px; } }
        @media (min-width: 1080px) { .foot-grid { grid-template-columns: 1.4fr 1.2fr 1fr 1fr; gap: 48px; } }
        .foot-logo { height: 72px; width: auto; display: block; }
        .foot-tag { margin-top: 16px; color: rgba(255,255,255,.55); font-size: 14px; line-height: 1.6; max-width: 36ch; }
        .foot-h { font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--accent-2); font-weight: 500; margin-bottom: 18px; }
        .foot-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .foot-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: rgba(255,255,255,.75); line-height: 1.5; }
        .foot-list svg { color: var(--accent-2); margin-top: 3px; flex-shrink: 0; }
        .foot-bottom {
          display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
          padding-top: 24px; border-top: 1px solid rgba(255,255,255,.08);
          font-size: 12px; color: rgba(255,255,255,.45);
        }
        .foot-bottom-end { color: rgba(255,255,255,.5); }
      `}</style>
    </footer>
  );
}

Object.assign(window, { Masjid, Portfolio, Team, Support, Vision, CTA, Footer });
