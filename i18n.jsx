/* eslint-disable */
/* NISE — i18n: language context, translations, toggle */

const NISE_I18N = {
  en: {
    nav: {
      links: [
        { href: '#solution',  label: 'Solution' },
        { href: '#services',  label: 'Services' },
        { href: '#process',   label: 'Process' },
        { href: '#masjid',    label: 'Masjid' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#contact',   label: 'Contact' },
      ],
      cta: 'Book consultation',
    },
    hero: {
      chip: 'Smart Digital Ecosystem',
      h1: { line1: 'Smart digital', line2: 'ecosystem', accent: ' solutions', line3: 'for modern organizations.' },
      lead: 'Websites, dashboards and centralized digital systems — built for organizations, masjid and communities that need to last.',
      ctaPrimary: 'Book free consultation',
      ctaSecondary: 'View demo',
      meta: [
        { num: '4+',         lbl: ['Core systems', 'per ecosystem'] },
        { num: '100%',       lbl: ['Mobile-first', 'development'] },
        { num: 'Long-term',  lbl: ['Partnership &', 'maintenance'] },
      ],
    },
    about: {
      eyebrow: 'About us',
      h2: { lines: ['We build the digital', 'infrastructure that helps', 'organizations grow with'], accent: 'clarity', tail: ' and structure.' },
      lead: 'A digital solutions company building websites, systems and centralized platforms — for modern organizations, masjid and communities across Malaysia.',
      body: 'Not just a web agency. We build systems that help organizations grow — more structured, closer to the community.',
      list: ['Modern, responsive websites', 'Centralized admin dashboards', 'Digital community systems', 'Operations management platforms', 'End-to-end digital ecosystems'],
    },
    problem: {
      eyebrow: "Today's reality",
      h2: 'The reality most organizations actually live in.',
      lead: "Many organizations are active and full of passion — but the systems behind them haven't kept up. Friction, missed updates, burnout.",
      items: [
        { icon: 'unplug', title: 'Disconnected systems',          desc: 'Data scattered across spreadsheets, group chats and notes. No single source of truth.' },
        { icon: 'doc',    title: 'Manual, repetitive processes',  desc: 'Hours every week forwarding messages, updating lists, rebuilding the same reports.' },
        { icon: 'chat',   title: 'Poor community communication',  desc: 'Important announcements get lost in chat threads — the people who matter most are the last to know.' },
      ],
      quote: 'Many organizations are genuinely active — but their systems are still disorganized.',
    },
    solution: {
      eyebrow: 'Our Solution',
      h2: { pre: 'A centralized digital system — ', accent: 'one ecosystem', post: ', every operation.' },
      lead: 'Every module talks to the next. Community, finance, events and communication — from one place.',
      modules: [
        { id: 'web',  icon: 'globe',    title: 'Official Website',      desc: "An online information hub that's always up to date." },
        { id: 'dash', icon: 'grid',     title: 'Admin Dashboard',       desc: 'Full operational control from one panel.', primary: true },
        { id: 'ann',  icon: 'bell',     title: 'Announcement System',   desc: 'Send news directly to your community.' },
        { id: 'evt',  icon: 'calendar', title: 'Event Management',      desc: 'Manage programs, talks and activities.' },
        { id: 'com',  icon: 'users',    title: 'Community System',      desc: 'Connect members within one ecosystem.' },
        { id: 'pay',  icon: 'wallet',   title: 'Donation & Payment',    desc: 'Accept donations and payments securely.' },
      ],
      quote: 'One system to simplify management and connect organizations with their community.',
    },
    services: {
      eyebrow: 'What we offer',
      h2: 'The core services we build for you.',
      lead: 'From a landing page to a full community system — practical, well-built, supported after launch.',
      items: [
        { icon: 'monitor', tag: '01', title: 'Website Development',     bullets: ['Corporate & organization websites', 'Professional landing pages', 'Responsive design & custom UI/UX'] },
        { icon: 'layers',  tag: '02', title: 'System Development',      bullets: ['Centralized admin dashboards', 'Booking & event management', 'Community & database systems'] },
        { icon: 'mosque',  tag: '03', title: 'Masjid Digitalization',   bullets: ['Official masjid websites', 'Donation & community systems', 'Live programs & announcements'] },
        { icon: 'tool',    tag: '04', title: 'Support & Maintenance',   bullets: ['Technical support & security updates', 'Automated backup systems', 'Ongoing admin training'] },
      ],
      learnMore: 'Learn more',
      quote: 'Our main focus is building systems that are practical and easy to use.',
    },
    why: {
      eyebrow: 'Why choose NISE',
      h2: 'Why teams trust us with their digital backbone.',
      items: [
        { title: 'Modern & practical approach',    desc: "Clean, professional, relevant to today's needs." },
        { title: 'Mobile-first development',       desc: 'Every system built with mobile in mind from day one.' },
        { title: 'Community-focused',              desc: 'Designed to connect organizations with their community.' },
        { title: 'Customized for you',             desc: 'No one-size-fits-all. Every system is tailored to your needs.' },
        { title: 'Support after the project',      desc: "Our relationship doesn't end at launch — we keep the system running." },
        { title: 'Systems that grow with you',     desc: 'Flexible architecture — grows as your organization grows.' },
      ],
    },
    process: {
      eyebrow: 'How we work',
      h2: { pre: 'A clear path from ', accent: 'idea', post: ' to launched system.' },
      steps: [
        { n: '01', title: 'Consultation',    desc: 'We listen first. Understand the organization, people, and real friction.' },
        { n: '02', title: 'Planning',        desc: 'A clear plan — scope, structure, timeline — before any code is written.' },
        { n: '03', title: 'Development',     desc: "Built in transparent stages. We don't move forward without your approval." },
        { n: '04', title: 'Launch & beyond', desc: 'Launch is the start. Training, monitoring, and ongoing support.' },
      ],
      foot: 'Every stage has active communication. No next stage without your approval.',
    },
    masjid: {
      chip: 'Special Focus',
      h2: { line1: 'Smart mosque', accent: 'digital ecosystem', tail: '.' },
      lead: 'A centralized website platform for masjid — more organized, more professional, suited for JAIS and state administrations.',
      stats: [
        { icon: 'mosque', num: 'JAIS-ready',        lbl: 'Suited for state administration' },
        { icon: 'heart',  num: 'Community-first',   lbl: 'Designed for congregation and community members' },
      ],
      cards: [
        { h: 'Suitable for', icon: 'check', items: ['Masjid without an official website yet', 'Masjid with an outdated website that needs a revamp', 'Masjid that want to add modern features'] },
        { h: 'Key goals',    icon: 'spark', items: ['Increase congregation attendance', 'Simplify masjid management', 'Expand program outreach', 'Support masjid fundraising'] },
      ],
      quote: "Helping masjid keep pace with today's technology and community development.",
    },
    portfolio: {
      eyebrow: 'Selected work',
      h2: "Systems we've built — and the communities they serve.",
      inProgress: 'In Progress',
      projects: [
        { key: 'cetak',      tag: 'E-Commerce',          title: 'Design Cetak — Print E-commerce',      desc: 'Full ordering platform for a printing business — product catalog, file uploads, and WhatsApp-based order confirmation, with an admin panel to track incoming orders.' },
        { key: 'masjid',     tag: 'Smart Mosque',         title: 'Masjid Al-Itisam TTDI Jaya',           desc: 'Bilingual community portal with live prayer times, announcements and a secure admin panel for managing community records — built with zero ongoing server cost.' },
        { key: 'salon',      tag: 'Queue Management',     title: 'Salon Nabela — Live Queue System',     desc: '3-screen system for a salon: customer self-registration, live staff dashboard, and TV display — with smart auto staff assignment based on workload.' },
        { key: 'balikpulau', tag: 'Hospitality',          title: 'Balik Pulau Inn — Homestay',           desc: 'Responsive site for a Penang kampung homestay — hero slideshow, filterable photo gallery with lightbox, and a WhatsApp booking enquiry form.' },
        { key: 'sewana',     tag: 'Property Management',  title: 'Sewana — Rental Dashboard',            desc: 'Web app for landlords and property managers to manage multiple rental units — tenant records, payment tracking, and a property overview dashboard.' },
      ],
    },
    team: {
      eyebrow: 'Our team',
      h2: 'Small team. Long-term thinking.',
      lead: 'Creative, technical and strategic — building modern digital solutions for Malaysian communities.',
      members: [
        { role: 'Founder & Growth Strategist', bio: 'Leads strategic direction at NISE — expertise in digital ecosystem development, growth strategy, and brand positioning for modern organizations, communities and masjid.' },
        { role: 'Chief Technical Officer',     bio: 'Leads technical development at NISE — building websites, dashboards and centralized systems with focus on architecture, scalability and clean UX.' },
      ],
    },
    support: {
      eyebrow: 'We stay with you',
      h2: 'Launch is the beginning — not the end.',
      lead: "Our work doesn't stop at launch. We keep your system running, secure and up to date.",
      items: [
        { icon: 'chat',   title: 'Technical Support',    desc: 'WhatsApp support whenever you need it.' },
        { icon: 'shield', title: 'Security Monitoring',  desc: 'Regular checks and the latest updates.' },
        { icon: 'cloud',  title: 'Backup System',        desc: 'Automatic backups — your data is always safe.' },
        { icon: 'book',   title: 'Admin Training',       desc: 'Training so your admin can run the system confidently.' },
      ],
    },
    vision: {
      eyebrow: 'Our vision',
      h2: { lines: ['Building a', 'more connected'], accent: 'digital future.' },
      quote: "Good technology isn't just beautiful — it helps people connect better.",
      points: [
        { title: 'More Modern',    desc: "Relevant to today's digital needs." },
        { title: 'More Organized', desc: 'Centralized operations, organized data, efficient management.' },
        { title: 'More Connected', desc: 'Organizations and communities in one ecosystem.' },
      ],
    },
    cta: {
      chip: 'Start the Conversation',
      h2: { pre: "Let's build something", accent: 'meaningful', post: ' together.' },
      lead: 'A free consultation to understand your digital needs — and recommend the right solution.',
      tickets: ['Free consultation', 'No commitment', 'Live demo available'],
      whatsapp: 'WhatsApp Danny',
      email: 'Email us',
    },
    footer: {
      tag: 'Smart digital ecosystem solutions for organizations, masjid and modern communities across Malaysia.',
      contactHeading: 'Contact us',
      servicesHeading: 'Services',
      servicesList: ['Website Development', 'System Development', 'Masjid Digitalization', 'Support & Maintenance'],
      getInTouch: 'Get in touch',
      whatsapp: 'WhatsApp us',
      availability: ['Available Mon–Sat,', '9am – 7pm Malaysia time.'],
      copyright: '© 2025 NISE Enterprise. Built with care in Malaysia.',
      tagline: 'Smart Digital Ecosystem Solutions',
    },
  },
  bm: {
    nav: {
      links: [
        { href: '#solution',  label: 'Solusi' },
        { href: '#services',  label: 'Servis' },
        { href: '#process',   label: 'Proses' },
        { href: '#masjid',    label: 'Masjid' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#contact',   label: 'Hubungi' },
      ],
      cta: 'Buat Temujanji',
    },
    hero: {
      chip: 'Ekosistem Digital Pintar',
      h1: { line1: 'Ekosistem digital', line2: 'pintar', accent: ' & tersusun', line3: 'untuk organisasi moden.' },
      lead: 'Laman web, dashboard dan sistem digital berpusat — dibina untuk organisasi, masjid dan komuniti yang perlu bertahan lama.',
      ctaPrimary: 'Tempah konsultasi percuma',
      ctaSecondary: 'Lihat demo',
      meta: [
        { num: '4+',              lbl: ['Sistem teras', 'setiap ekosistem'] },
        { num: '100%',             lbl: ['Pembangunan mesra', 'mudah alih'] },
        { num: 'Jangka Panjang',   lbl: ['Perkongsian &', 'penyelenggaraan'] },
      ],
    },
    about: {
      eyebrow: 'Siapa Kami',
      h2: { lines: ['Kami membina infrastruktur', 'digital yang membantu', 'organisasi berkembang dengan'], accent: 'jelas', tail: ' dan tersusun.' },
      lead: 'Sebuah syarikat penyelesaian digital yang membina laman web, sistem dan platform berpusat — untuk organisasi moden, masjid dan komuniti di seluruh Malaysia.',
      body: 'Bukan sekadar agensi web. Kami membina sistem yang membantu organisasi berkembang — lebih tersusun, lebih dekat dengan komuniti.',
      list: ['Laman web moden & responsif', 'Dashboard admin berpusat', 'Sistem komuniti digital', 'Platform pengurusan operasi', 'Ekosistem digital hujung-ke-hujung'],
    },
    problem: {
      eyebrow: 'Realiti Hari Ini',
      h2: 'Realiti yang dihadapi kebanyakan organisasi hari ini.',
      lead: 'Banyak organisasi aktif dan penuh semangat — tetapi sistem di sebalik mereka tidak berkembang seiring. Gangguan, maklumat tertinggal, keletihan.',
      items: [
        { icon: 'unplug', title: 'Sistem terpisah-pisah',           desc: 'Data berselerak antara spreadsheet, group chat dan nota. Tiada satu sumber rujukan.' },
        { icon: 'doc',    title: 'Proses manual dan berulang',      desc: 'Berjam-jam setiap minggu menghantar semula mesej, mengemas kini senarai, membina semula laporan yang sama.' },
        { icon: 'chat',   title: 'Komunikasi komuniti yang lemah',  desc: 'Pengumuman penting hilang dalam thread chat — orang yang paling penting adalah yang terakhir tahu.' },
      ],
      quote: 'Banyak organisasi sebenarnya aktif — tetapi sistem mereka masih tidak tersusun.',
    },
    solution: {
      eyebrow: 'Penyelesaian Kami',
      h2: { pre: 'Sistem digital berpusat — ', accent: 'satu ekosistem', post: ', semua operasi.' },
      lead: 'Setiap modul saling berhubung. Komuniti, kewangan, acara dan komunikasi — dari satu tempat.',
      modules: [
        { id: 'web',  icon: 'globe',    title: 'Website Rasmi',       desc: 'Pusat maklumat online yang sentiasa terkini.' },
        { id: 'dash', icon: 'grid',     title: 'Dashboard Admin',     desc: 'Kawalan penuh operasi dari satu panel.', primary: true },
        { id: 'ann',  icon: 'bell',     title: 'Sistem Pengumuman',   desc: 'Hantar berita terus kepada komuniti.' },
        { id: 'evt',  icon: 'calendar', title: 'Pengurusan Acara',    desc: 'Urus program, ceramah dan aktiviti.' },
        { id: 'com',  icon: 'users',    title: 'Sistem Komuniti',     desc: 'Hubungkan ahli dalam satu ekosistem.' },
        { id: 'pay',  icon: 'wallet',   title: 'Derma & Pembayaran',  desc: 'Terima derma dan bayaran secara selamat.' },
      ],
      quote: 'Satu sistem untuk memudahkan pengurusan dan menghubungkan organisasi dengan komuniti.',
    },
    services: {
      eyebrow: 'Apa Yang Kami Tawarkan',
      h2: 'Servis utama yang kami bina untuk anda.',
      lead: 'Daripada laman utama sehingga sistem komuniti penuh — praktikal, dibina dengan baik, disokong selepas pelancaran.',
      items: [
        { icon: 'monitor', tag: '01', title: 'Pembangunan Laman Web',       bullets: ['Laman web korporat & organisasi', 'Laman utama profesional', 'Reka bentuk responsif & UI/UX tersuai'] },
        { icon: 'layers',  tag: '02', title: 'Pembangunan Sistem',          bullets: ['Dashboard admin berpusat', 'Pengurusan tempahan & acara', 'Sistem komuniti & pangkalan data'] },
        { icon: 'mosque',  tag: '03', title: 'Digitalisasi Masjid',        bullets: ['Laman web rasmi masjid', 'Sistem derma & komuniti', 'Program langsung & pengumuman'] },
        { icon: 'tool',    tag: '04', title: 'Sokongan & Penyelenggaraan', bullets: ['Sokongan teknikal & kemas kini keselamatan', 'Sistem sandaran automatik', 'Latihan admin berterusan'] },
      ],
      learnMore: 'Ketahui lebih lanjut',
      quote: 'Fokus utama kami adalah membina sistem yang praktikal dan mudah digunakan.',
    },
    why: {
      eyebrow: 'Kelebihan Kami',
      h2: 'Mengapa organisasi mempercayai kami dengan tulang belakang digital mereka.',
      items: [
        { title: 'Pendekatan moden & praktikal',      desc: 'Bersih, profesional, relevan dengan keperluan semasa.' },
        { title: 'Pembangunan mesra mudah alih',      desc: 'Setiap sistem dibina dengan mudah alih dalam fikiran sejak hari pertama.' },
        { title: 'Fokus kepada komuniti',             desc: 'Direka untuk menghubungkan organisasi dengan komuniti mereka.' },
        { title: 'Disesuaikan untuk anda',            desc: 'Tiada satu saiz untuk semua. Setiap sistem disesuaikan dengan keperluan.' },
        { title: 'Sokongan selepas projek',           desc: 'Hubungan kami tidak berakhir di pelancaran — kami terus memastikan sistem berjalan lancar.' },
        { title: 'Sistem yang berkembang',            desc: 'Seni bina fleksibel — berkembang seiring perkembangan organisasi anda.' },
      ],
    },
    process: {
      eyebrow: 'Proses Kerja Kami',
      h2: { pre: 'Laluan jelas daripada ', accent: 'idea', post: ' kepada sistem yang dilancarkan.' },
      steps: [
        { n: '01', title: 'Konsultasi',    desc: 'Kami dengar dahulu. Memahami organisasi, orang, dan cabaran sebenar.' },
        { n: '02', title: 'Rancangan',     desc: 'Pelan yang jelas — skop, struktur, garis masa — sebelum sebarang kod ditulis.' },
        { n: '03', title: 'Pembangunan',   desc: 'Dibina secara berperingkat dan telus. Kami tidak meneruskan tanpa kelulusan anda.' },
        { n: '04', title: 'Pelancaran',    desc: 'Pelancaran hanyalah permulaan. Latihan, pemantauan, dan sokongan berterusan.' },
      ],
      foot: 'Setiap peringkat ada komunikasi aktif. Tiada peringkat seterusnya tanpa kelulusan anda.',
    },
    masjid: {
      chip: 'Fokus Khusus',
      h2: { line1: 'Ekosistem digital', accent: 'masjid pintar', tail: '.' },
      lead: 'Platform laman web berpusat untuk masjid — lebih tersusun, lebih profesional, sesuai untuk JAIS dan pentadbiran negeri.',
      stats: [
        { icon: 'mosque', num: 'JAIS-ready',      lbl: 'Sesuai untuk pengurusan negeri' },
        { icon: 'heart',  num: 'Community-first', lbl: 'Direka untuk jemaah dan kariah' },
      ],
      cards: [
        { h: 'Sesuai untuk',   icon: 'check', items: ['Masjid belum mempunyai website rasmi', 'Masjid dengan website lama perlu revamp', 'Masjid yang mahu tambah fitur moden'] },
        { h: 'Matlamat utama', icon: 'spark', items: ['Tingkatkan kehadiran jemaah', 'Mudahkan pengurusan masjid', 'Perluaskan hebahan program', 'Bantu penjanaan dana masjid'] },
      ],
      quote: 'Membantu masjid bergerak seiring perkembangan teknologi dan komuniti masa kini.',
    },
    portfolio: {
      eyebrow: 'Rekod Kami',
      h2: 'Sistem yang telah kami bina — dan komuniti yang kami khidmati.',
      inProgress: 'Dalam Pembinaan',
      projects: [
        { key: 'cetak',      tag: 'E-Dagang',              title: 'Design Cetak — E-dagang Percetakan',         desc: 'Platform pesanan penuh untuk perniagaan percetakan — katalog produk, muat naik fail, dan pengesahan pesanan melalui WhatsApp, dengan panel admin untuk menjejak pesanan masuk.' },
        { key: 'masjid',     tag: 'Masjid Pintar',         title: 'Masjid Al-Itisam TTDI Jaya',                 desc: 'Portal komuniti dwibahasa dengan waktu solat langsung, pengumuman dan panel admin selamat untuk menguruskan rekod komuniti — dibina tanpa kos pelayan berterusan.' },
        { key: 'salon',      tag: 'Pengurusan Giliran',    title: 'Salon Nabela — Sistem Giliran Langsung',     desc: 'Sistem 3-skrin untuk salon: pendaftaran kendiri pelanggan, dashboard staf langsung, dan paparan TV — dengan agihan staf automatik pintar berdasarkan beban kerja.' },
        { key: 'balikpulau', tag: 'Hospitaliti',           title: 'Balik Pulau Inn — Homestay',                 desc: 'Laman responsif untuk homestay kampung di Pulau Pinang — slaid hero, galeri foto boleh ditapis dengan lightbox, dan borang pertanyaan tempahan WhatsApp.' },
        { key: 'sewana',     tag: 'Pengurusan Hartanah',   title: 'Sewana — Dashboard Sewaan',                  desc: 'Aplikasi web untuk tuan rumah dan pengurus hartanah menguruskan pelbagai unit sewaan — rekod penyewa, penjejakan bayaran, dan dashboard gambaran keseluruhan hartanah.' },
      ],
    },
    team: {
      eyebrow: 'Orang Di Sebalik NISE',
      h2: 'Pasukan kecil. Pemikiran jangka panjang.',
      lead: 'Kreatif, teknikal dan strategik — membina penyelesaian digital moden untuk komuniti Malaysia.',
      members: [
        { role: 'Pengasas & Ahli Strategi Pertumbuhan', bio: 'Mengetuai hala tuju strategik di NISE — kepakaran dalam pembangunan ekosistem digital, strategi pertumbuhan, dan penjenamaan untuk organisasi, komuniti dan masjid moden.' },
        { role: 'Ketua Pegawai Teknikal',                bio: 'Mengetuai pembangunan teknikal di NISE — membina laman web, dashboard dan sistem berpusat dengan fokus pada seni bina, kebolehskalaan dan UX yang bersih.' },
      ],
    },
    support: {
      eyebrow: 'Sokongan & Penyelenggaraan',
      h2: 'Pelancaran adalah permulaan — bukan pengakhiran.',
      lead: 'Kerja kami tidak berhenti di pelancaran. Kami memastikan sistem anda terus berjalan, selamat dan terkini.',
      items: [
        { icon: 'chat',   title: 'Sokongan Teknikal',       desc: 'Sokongan WhatsApp bila-bila masa anda perlukan.' },
        { icon: 'shield', title: 'Pemantauan Keselamatan',  desc: 'Pemeriksaan berkala dan kemas kini terkini.' },
        { icon: 'cloud',  title: 'Sistem Sandaran',         desc: 'Sandaran automatik — data anda sentiasa selamat.' },
        { icon: 'book',   title: 'Latihan Admin',           desc: 'Latihan supaya admin anda dapat menjalankan sistem dengan yakin.' },
      ],
    },
    vision: {
      eyebrow: 'Visi Kami',
      h2: { lines: ['Membina masa depan', 'digital yang lebih'], accent: 'connected.' },
      quote: 'Teknologi yang baik bukan sekadar cantik — tetapi membantu manusia berhubung dengan lebih baik.',
      points: [
        { title: 'Lebih Moden',     desc: 'Relevan dengan keperluan digital masa kini.' },
        { title: 'Lebih Tersusun',  desc: 'Operasi berpusat, data tersusun, pengurusan cekap.' },
        { title: 'Lebih Connected', desc: 'Organisasi dan komuniti dalam satu ekosistem.' },
      ],
    },
    cta: {
      chip: 'Mulakan Perbualan',
      h2: { pre: 'Mari bina sesuatu yang', accent: 'bermakna', post: ' bersama.' },
      lead: 'Konsultasi percuma untuk memahami keperluan digital anda — dan mencadangkan penyelesaian yang tepat.',
      tickets: ['Konsultasi percuma', 'Tiada komitmen', 'Demo langsung tersedia'],
      whatsapp: 'WhatsApp Danny',
      email: 'Emel kami',
    },
    footer: {
      tag: 'Penyelesaian ekosistem digital pintar untuk organisasi, masjid dan komuniti moden di seluruh Malaysia.',
      contactHeading: 'Hubungi kami',
      servicesHeading: 'Servis',
      servicesList: ['Pembangunan Laman Web', 'Pembangunan Sistem', 'Digitalisasi Masjid', 'Sokongan & Penyelenggaraan'],
      getInTouch: 'Mula Berhubung',
      whatsapp: 'WhatsApp kami',
      availability: ['Tersedia Isnin–Sabtu,', '9 pagi – 7 petang waktu Malaysia.'],
      copyright: '© 2025 NISE Enterprise. Dibina dengan teliti di Malaysia.',
      tagline: 'Penyelesaian Ekosistem Digital Pintar',
    },
  },
};

const LangContext = React.createContext(null);

function useLang() {
  return React.useContext(LangContext);
}

function LangProvider({ children }) {
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem('nise_lang') === 'bm' ? 'bm' : 'en'; }
    catch (e) { return 'en'; }
  });

  React.useEffect(() => {
    document.documentElement.lang = lang === 'bm' ? 'ms' : 'en';
    try { localStorage.setItem('nise_lang', lang); } catch (e) {}
  }, [lang]);

  const toggleLang = React.useCallback(() => {
    setLang((l) => (l === 'en' ? 'bm' : 'en'));
  }, []);

  const value = React.useMemo(() => ({ lang, toggleLang, t: NISE_I18N[lang] }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function LangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Switch to Bahasa Melayu' : 'Switch to English'}
    >
      <span className={lang === 'en' ? 'on' : ''}>EN</span>
      <span className={lang === 'bm' ? 'on' : ''}>BM</span>
    </button>
  );
}

Object.assign(window, { NISE_I18N, useLang, LangProvider, LangToggle });
