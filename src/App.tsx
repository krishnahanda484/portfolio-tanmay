import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  result: string;
  tags: string[];
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Vibee — T-Shirt E-Commerce',
    category: 'Brand strategy · E-commerce',
    description: 'Built a focused e-commerce concept around positioning, product storytelling, and an online sales journey for a new apparel brand.',
    result: 'A sharper brand direction with campaigns designed to improve visibility and customer engagement.',
    tags: ['Branding', 'Social media', 'Content'],
  },
  {
    number: '02',
    title: 'Dehatar Student Valuation',
    category: 'Business analysis · Excel',
    description: 'Explored revenue drivers, unit economics, supply-chain logistics, and operating margins across a farmer-to-buyer marketplace.',
    result: 'Scenario analysis that clarified valuation assumptions and potential GMV growth.',
    tags: ['Financial model', 'Research', 'Strategy'],
  },
  {
    number: '03',
    title: 'August Bioscience',
    category: 'Campus ambassador · LPU',
    description: 'Planned targeted outreach and created a campus-focused promotional approach for a bioscience brand.',
    result: '10 orders and ₹5,333 in sales from 167 clicks at a 6% conversion rate.',
    tags: ['Performance marketing', 'SEO', 'Ads'],
  },
  {
    number: '04',
    title: 'Velora Brand',
    category: 'Branding · Social media',
    description: 'Created a launch and branding direction for a soft toy and jewellery line targeting students through market research.',
    result: 'A relatable product story and Instagram presence shaped around student interests.',
    tags: ['Market research', 'Instagram', 'Positioning'],
  },
];

const experience = [
  { date: 'JUN — JUL 2026', role: 'Sales and Marketing Intern', company: 'The Times of India', copy: 'Achieved 55+ subscription sales through effective customer engagement and targeted sales strategies. Executed lead generation and customer acquisition activities to expand the customer base.' },
  { date: '2025 — 2026', role: 'Marketing & Growth Projects', company: 'Independent / LPU', copy: 'Worked across e-commerce, campus campaigns, product positioning, social media strategy, and market research with a practical, hands-on approach.' },
  { date: '2025', role: 'Campus Ambassador', company: 'August Bioscience · LPU', copy: 'Led promotional outreach and built a targeted campus campaign that converted attention into measurable sales.' },
];

const education = [
  { year: '2025 — Present', school: 'Lovely Professional University', course: 'Master of Business Administration — Digital Marketing and Entrepreneurship', place: 'Phagwara, Punjab' },
  { year: '2022 — 2025', school: 'Kalinga Institute of Industrial Technology', course: 'Bachelor of Arts — Sociology Hons · 89.30%', place: 'Bhubaneswar, Odisha' },
];

function Portrait({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`portrait-fallback ${className}`} aria-label="Tanmay Bighnesh Das">TBD</div>
  ) : (
    <img className={className} src="/images/download.png" alt="Tanmay Bighnesh Das in a suit" onError={() => setFailed(true)} />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" />
      <div className="stars stars-one" />
      <div className="stars stars-two" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu}>TANMAY<span>.</span></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? 'nav-open' : ''}>
          {['home', 'about', 'work', 'experience', 'education', 'contact'].map((item) => (
            <a href={`#${item}`} key={item} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
      </header>

      <aside className="side-note"><span>CURRENTLY</span><strong>MBA · DM</strong><small>Building skills across<br />marketing & business.</small></aside>
      <div className="social-rail"><a href="https://www.linkedin.com/in/tanmay-bighnesh-das" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="mailto:tanmaybd153@gmail.com" aria-label="Email"><Mail size={16} /></a></div>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> MBA · DIGITAL MARKETING · ENTREPRENEURSHIP</p>
            <h1>Hello.<br /><em>I’m Tanmay.</em></h1>
            <p className="hero-intro">I turn ideas into clear stories, thoughtful strategies, and measurable outcomes — with a curious mind and a bias toward action.</p>
            <div className="hero-actions"><a className="button button-solid" href="#work">Explore my work <ArrowUpRight size={16} /></a><a className="button button-ghost" href="#contact">Let’s connect <ChevronRight size={16} /></a></div>
          </div>
          <div className="hero-card-wrap reveal delay-one">
            <div className="floating-label label-top">analytical <span>+</span> expressive</div>
            <div className="profile-card"><div className="card-line" /><Portrait className="hero-portrait" /><div className="profile-details"><h2>Tanmay Bighnesh Das</h2><p>Marketing · Sales · Strategy</p><div className="chip-row"><span>Marketing</span><span>Analytics</span><span>Growth</span></div></div></div>
            <div className="floating-label label-bottom">ideas meet <span>action</span> <Sparkles size={13} /></div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={18} /></a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading"><span className="section-index">01</span><h2>A little<br /><em>about me.</em></h2></div>
          <div className="about-grid"><div className="about-image-frame"><Portrait className="about-portrait" /><span className="image-caption">Curious by nature.<br />Intentional by choice.</span></div><div className="about-copy"><p className="large-copy">I’m currently pursuing an <strong>MBA in Digital Marketing and Entrepreneurship</strong> at Lovely Professional University, where I’m building the bridge between creative thinking and business outcomes.</p><p>My experience spans sales, marketing campaigns, brand positioning, market research, and campus growth. I enjoy understanding what makes people pay attention — then shaping that insight into work that feels useful, clear, and memorable.</p><p>From building a product concept to analysing a growth funnel, I bring energy, structure, and a willingness to learn quickly.</p><div className="skill-cloud"><span>Digital marketing</span><span>Sales</span><span>Market research</span><span>Brand strategy</span><span>Business analytics</span><span>Social media</span></div></div></div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="work-intro"><div className="section-heading"><span className="section-index">02</span><h2>Things I’ve<br /><em>created.</em></h2></div><p>A curated collection of projects across digital marketing, business analysis, branding, and growth. Click a card to explore the thinking behind the work.</p></div>
          <div className="project-grid">{projects.map((project) => <button className="project-folder" key={project.number} onClick={() => setActiveProject(project)}><div className="folder-tab" /><div className="project-top"><span>{project.number}</span><span>OPEN PROJECT <ArrowUpRight size={14} /></span></div><div className="project-bottom"><span>{project.category}</span><strong>{project.title}</strong></div></button>)}</div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-heading"><span className="section-index">03</span><h2>Where I’ve<br /><em>been learning.</em></h2></div>
          <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><span className="timeline-dot" /><div className="timeline-date">{item.date}</div><div className="timeline-content"><p className="eyebrow">{item.company}</p><h3>{item.role}</h3><p>{item.copy}</p></div></article>)}</div>
        </section>

        <section className="education section-wrap" id="education">
          <div className="education-top"><div className="section-heading"><span className="section-index">04</span><h2>The path<br /><em>so far.</em></h2></div><p>Every chapter adds a different lens — from understanding people and culture to shaping business ideas for the real world.</p></div>
          <div className="education-list">{education.map((item) => <div className="education-item" key={item.school}><span>{item.year}</span><div><p className="eyebrow">{item.place}</p><h3>{item.school}</h3><p>{item.course}</p></div><ArrowUpRight size={19} /></div>)}</div>
          <div className="resume-strip"><div><p className="eyebrow">WANT THE FULL STORY?</p><h3>Take a closer look at my resume.</h3></div><a className="button button-solid" href="/TANMAY_(SPECIALISED_CV).pdf" download>Download CV <Download size={16} /></a></div>
        </section>

        <section className="contact section-wrap" id="contact"><div className="contact-orbit" /><p className="eyebrow"><span className="eyebrow-dot" /> HAVE A GOOD IDEA?</p><h2>Let’s make<br /><em>something count.</em></h2><p className="contact-copy">Whether you’re looking to discuss a project, an opportunity, or simply connect professionally, I’d be happy to hear from you.</p><a className="contact-email" href="mailto:tanmaybd153@gmail.com">tanmaybd153@gmail.com <ArrowUpRight size={21} /></a><div className="contact-footer"><span>Tanmay Bighnesh Das</span><span>© 2026 · Built with intent</span><a href="https://www.linkedin.com/in/tanmay-bighnesh-das"><Linkedin size={16} /> LinkedIn</a></div></section>
      </main>

      {activeProject && <div className="modal-backdrop" onClick={() => setActiveProject(null)}><div className="project-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close project" onClick={() => setActiveProject(null)}><X size={19} /></button><span className="section-index">{activeProject.number}</span><p className="eyebrow">{activeProject.category}</p><h2>{activeProject.title}</h2><p>{activeProject.description}</p><div className="result-box"><span>THE OUTCOME</span><strong>{activeProject.result}</strong></div><div className="chip-row">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>}
    </div>
  );
}

export default App;
