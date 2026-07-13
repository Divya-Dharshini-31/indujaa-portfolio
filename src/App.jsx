import indujaaImage from './assets/indujaa.jpeg';

const skills = [
  'Java',
  'Python',
  'SQL',
  'HTML',
  'CSS',
  'JavaScript',
  'MySQL',
  'Git & GitHub',
  'Spring Boot',
  'REST APIs',
  'Cloud Basics',
  'Problem Solving'
];

const projects = [
  {
    title: 'Ray Shield',
    description:
      'Developed a system to detect early signs of sunstroke by monitoring body indicators and temperature in extreme heat conditions.'
  },
  {
    title: 'Aquaconnect IoT',
    description:
      'Built an IoT-based solution for aquaponics monitoring with smart insights on water quality, plant health, and system efficiency.'
  },
  {
    title: 'Smart Pet Care App',
    description:
      'Designed a mobile application for pet health tracking, appointment scheduling, reminders, and a marketplace for pet products and services.'
  }
];

const experience = [
  {
    title: 'Infosys Springboard',
    role: 'Java Stack Development Intern',
    description:
      'Strengthened my foundation in core Java, OOP, problem solving, and basic backend development concepts.'
  },
  {
    title: 'Wiz Tech Automations',
    role: 'Web Development Intern',
    description:
      'Assisted in responsive web page development using HTML, CSS, and JavaScript, while improving UI quality and collaborating in a real-time team setting.'
  }
];

function App() {
  return (
    <div className="page-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <header className="topbar">
        <a href="#home" className="brand">
          INDUJAA R
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">Professional Profile</p>
            <h1>INDUJAA R</h1>
            <p className="hero__subtitle">B.Tech Computer Science and Business Systems</p>
            <p className="hero__lead">
              Motivated undergraduate building practical solutions at the intersection of
              technology, data, and business growth.
            </p>
            <div className="contact-row">
              <a href="mailto:rindujaa22@gmail.com" className="icon-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 8 8 6 8-6" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/indujaa-ramesh-a0909a285"
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
                  <path d="M6.94 7.5A1.56 1.56 0 1 0 6.94 4.38a1.56 1.56 0 0 0 0 3.12ZM5.5 8.75h2.88V17H5.5Zm5.03 0h2.76v1.13h.04c.38-.72 1.32-1.48 2.71-1.48 2.9 0 3.44 1.9 3.44 4.38V17h-2.88v-7.42c0-1.77-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.9V17H10.53Z" />
                </svg>
              </a>
            </div>
            <div className="contact-row compact">
              <a href="mailto:rindujaa22@gmail.com">rindujaa22@gmail.com</a>
              <a href="tel:+917904814190">+91 7904814190</a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="photo-frame">
              <img src={indujaaImage} alt="Indujaa portrait" />
            </div>
            </div>            
        </section>

        <section id="about" className="panel reveal-card">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>About Me</h2>
          </div>
          <p>
            I’m a dedicated and curious undergraduate student pursuing B.Tech in Computer
            Science and Business Systems. I enjoy learning how technology and business work
            together to create practical, measurable impact. I’m known for being responsible,
            adaptable, and sincere in my work, and I’m always eager to grow in professional
            environments.
          </p>
        </section>

        <section className="panel-grid">
          <article className="panel card reveal-card">
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h3>Academic Background</h3>
            </div>
            <ul className="detail-list">
              <li>
                <strong>B.Tech in Computer Science and Business Systems</strong> — R.M.D.
                Engineering College (2023–2027)
              </li>
              <li>
                <strong>Computer Science and Mathematics</strong> — Velammal Matric Higher
                Secondary School (2021–2023)
              </li>
              <li>
                <strong>CGPA</strong> — 8.41
              </li>
            </ul>
          </article>

          <article className="panel card reveal-card">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h3>Core Strengths</h3>
            </div>
            <div className="chip-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </section>

        <section id="projects" className="panel reveal-card">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected Work</h2>
          </div>
          <div className="card-grid">
            {projects.map((project) => (
              <article className="card project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="panel reveal-card">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Internships & Growth</h2>
          </div>
          <div className="card-grid">
            {experience.map((item) => (
              <article className="card experience-card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="subtle">{item.role}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel-grid">
          <article className="panel card reveal-card">
            <div className="section-heading">
              <p className="eyebrow">Certifications</p>
              <h3>Credentials</h3>
            </div>
            <ul className="detail-list">
              <li>
                Enhancing Soft Skills and Personality (NPTEL)
                <a href="https://drive.google.com/file/d/1rdpYgZMBfubBEE826vvOLc60YWbej8x8/view?usp=sharing" target="_blank" rel="noreferrer" className="link-icon" aria-label="Open certificate">🔗</a>
              </li>
              <li>
                Software Conceptual Design (NPTEL)
                <a href="https://drive.google.com/file/d/1e7to01ZaVWc5unpvYqPGeVD1e4iMZoOL/view?usp=sharing" target="_blank" rel="noreferrer" className="link-icon" aria-label="Open certificate">🔗</a>
              </li>
              <li>
                Introduction to Internet of Things (NPTEL)
                <a href="https://drive.google.com/file/d/1EtX0_iDv_cu_JbewuxOOafPRkIaYzBOk/view?usp=sharing" target="_blank" rel="noreferrer" className="link-icon" aria-label="Open certificate">🔗</a>
              </li>
              <li>
                Human Computer Interaction (NPTEL)
                <a href="https://drive.google.com/file/d/1AiU4iLNCOim_5-Pf8rgfJIua5bDUrS5K/view?usp=sharing" target="_blank" rel="noreferrer" className="link-icon" aria-label="Open certificate">🔗</a>
              </li>
              <li>
                Java Foundation Certificate
                <a href="https://drive.google.com/file/d/1lAtOiIx-2nIgmRJvxo8zzWaig3J00tV6/view?usp=sharing" target="_blank" rel="noreferrer" className="link-icon" aria-label="Open certificate">🔗</a>
              </li>
              <li>
                Python Foundation Certificate
                <a href="https://drive.google.com/file/d/1fPeiy8wC5yp-AFF-jumMrnvnsUUaN9rD/view?usp=sharing" target="_blank" rel="noreferrer" className="link-icon" aria-label="Open certificate">🔗</a>
              </li>
              <li>
                Oracle Foundations Associate Certificate
                <a href="https://drive.google.com/file/d/1Pf7hxFlXQCbI3o0p4R0nen7rK8tQV2c_/view?usp=sharing" target="_blank" rel="noreferrer" className="link-icon" aria-label="Open certificate">🔗</a>
              </li>
              <li>
                Oracle Data Science Certificate
                <a href="https://drive.google.com/file/d/1-VgaQqeQ-6Uk2HXchrRRg8vURpNHHUrN/view?usp=sharing" target="_blank" rel="noreferrer" className="link-icon" aria-label="Open certificate">🔗</a>
              </li>
            </ul>
          </article>

          <article className="panel card reveal-card">
            <div className="section-heading">
              <p className="eyebrow">Achievements</p>
              <h3>Recognitions</h3>
            </div>
            <ul className="detail-list">
              <li>Best Paper Award (ICCII 2025) and First Prize in the International Conference Paper Presentation at Velammal Institute of Technology.</li>
              <li>First Prize with a Cash Award in the Intra-Department Paper & Product Presentation.</li>
              <li>Organized and coordinated events for a National-Level Technical Symposium, demonstrating leadership and event management skills.</li>
              <li>Participated in the Vortex Hackathon at SSN College of Engineering and a Design Thinking & Entrepreneurship Workshop at Anna University.</li>
            </ul>
          </article>
        </section>

        <section id="contact" className="panel contact-panel reveal-card">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s Connect</h2>
          </div>
          <p>
            I’m currently looking for opportunities to learn, contribute, and grow in software
            development and data-driven roles.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:rindujaa22@gmail.com">
              Email Me
            </a>
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/indujaa-ramesh-a0909a285"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
