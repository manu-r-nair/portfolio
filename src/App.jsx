
import { useEffect, useRef, useState } from 'react'
import './App.css'

const skills = {
  'Manual Testing': [
    'Test Case Design',
    'Functional Testing',
    'Regression Testing',
    'Exploratory Testing',
    'Bug Reporting',
    'SDLC / STLC',
    'Agile',
  ],
  'Automation & Tools': [
    'Selenium WebDriver',
    'Playwright',
    'Pytest',
    'Postman',
    'Apache JMeter',
  ],
  'Programming & Databases': ['Python', 'C', 'MySQL'],
}

const projects = [
  {
    number: '01',
    type: 'MANUAL TESTING',
    title: 'SMEC Technologies Website',
    description:
      'Manual testing of website pages, forms, navigation, links, UI elements, and user workflows.',
    tags: ['Manual Testing', 'Functional QA', 'Regression', 'Bug Reporting'],
    overview:
      'A website testing project focused on validating functionality, usability, navigation, and consistency across website pages.',
    objective:
      'Verify that website features behave as expected and identify defects that could affect the user experience.',
    responsibilities: [
      'Created and executed test cases for website functionality and user workflows.',
      'Tested navigation menus, forms, input fields, links, images, and UI elements.',
      'Performed functional, UI, exploratory, regression, and compatibility testing.',
      'Documented defects with reproducible steps, expected and actual results, severity, priority, and supporting evidence.',
      'Retested fixes and performed regression testing.',
    ],
    tools: ['Manual Testing', 'Test Cases', 'Bug Reports', 'Browser DevTools'],
    methodology:
      'Reviewed website requirements, designed test cases, executed tests, recorded actual results, reported defects, and retested fixes.',
    outcome:
      'Produced structured test cases and defect reports to support website quality and usability validation.',
  },
  {
    number: '02',
    type: 'AUTOMATION TESTING',
    title: 'BlueHost Website',
    description:
      'Automated web UI validation using Playwright with Python and Selenium WebDriver.',
    tags: ['Playwright', 'Selenium', 'Python', 'Pytest'],
    overview:
      'An automation testing project focused on validating website navigation, interactive elements, forms, and expected browser behaviour.',
    objective:
      'Automate repeatable website checks and verify that important user workflows behave as expected.',
    responsibilities: [
      'Developed and executed browser automation scripts.',
      'Validated navigation, links, form fields, and interactive UI elements.',
      'Used assertions to verify page titles, element visibility, URLs, and expected results.',
      'Practised reusable test scripts and test execution using Pytest.',
      'Captured screenshots during test failures to support debugging.',
      'Practised cross-browser testing with Selenium WebDriver and Playwright.',
    ],
    tools: ['Playwright', 'Python', 'Selenium WebDriver', 'Pytest'],
    methodology:
      'Identified test scenarios, automated browser actions, added assertions, executed scripts, and reviewed test results.',
    outcome:
      'Created reusable automation scripts for website checks and practised automated validation of user workflows.',
  },
  {
    number: '03',
    type: 'EMBEDDED SYSTEMS',
    title: 'Safety-Enhanced Smart Iron',
    description:
      'A smart ironing system concept combining temperature control, sensing, and an automatic lifting mechanism.',
    tags: ['ESP32', 'MPC', 'Embedded Systems', 'Safety'],
    overview:
      'An engineering project designed to improve ironing safety by monitoring temperature and lifting the iron when appropriate.',
    objective:
      'Reduce the risk of fabric burns and improve safety when an iron is left idle.',
    responsibilities: [
      'Worked on an ESP32-based embedded system design.',
      'Integrated temperature sensing and electronic power control concepts.',
      'Designed an automatic self-lifting mechanism.',
      'Explored Model Predictive Control for temperature regulation.',
      'Worked on system architecture and hardware integration.',
    ],
    tools: ['ESP32', 'Temperature Sensing', 'Servo Mechanism', 'Embedded Systems'],
    methodology:
      'Combined sensing, control logic, microcontroller integration, and mechanical actuation to develop the safety-system concept.',
    outcome:
      'Developed a smart ironing system concept. Patent filing was being prepared according to the project documentation.',
  },
}

const navigation = [
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
]

function Reveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible')
          observer.unobserve(element)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

function SectionTitle({ number, title, accent }) {
  return (
    <div className="section-title">
      <span className="eyebrow">
        // {number} — QUALITY IN EVERY DETAIL
      </span>
      <h2>
        {title} <em>{accent}</em>
      </h2>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="project-modal-close"
          type="button"
          aria-label="Close project details"
          onClick={onClose}
        >
          ✕
        </button>

        <span className="eyebrow">
          PROJECT {project.number} / {project.type}
        </span>

        <h2 id="project-modal-title">{project.title}</h2>
        <p className="modal-intro">{project.overview}</p>

        <div className="modal-section">
          <h3>Project Objective</h3>
          <p>{project.objective}</p>
        </div>

        <div className="modal-section">
          <h3>Work Performed</h3>
          <ul>
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h3>Tools & Technologies</h3>
          <div className="project-tags">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <h3>Methodology</h3>
          <p>{project.methodology}</p>
        </div>

        <div className="modal-section">
          <h3>Outcome</h3>
          <p>{project.outcome}</p>
        </div>

        <button
          className="btn btn-primary modal-done"
          type="button"
          onClick={onClose}
        >
          Close Details ✕
        </button>
      </article>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [pointer, setPointer] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const movePointer = (event) => {
      setPointer({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', movePointer, {
      passive: true,
    })

    return () =>
      window.removeEventListener('pointermove', movePointer)
  }, [])

  const resumeUrl = `${import.meta.env.BASE_URL}Manu_R_Nair_Resume.pdf`

  return (
    <div
      className="app"
      style={{
        '--mouse-x': `${pointer.x}px`,
        '--mouse-y': `${pointer.y}px`,
      }}
    >
      <div className="mouse-glow" aria-hidden="true" />

      <header className="header">
        <a className="brand" href="#home">
          M<span>.</span>RNAIR
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href="mailto:manurnair3@gmail.com"
        >
          Let's talk <span>↗</span>
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-inner">
            <Reveal>
              <div className="availability">
                <span className="status-dot" />
                OPEN TO SOFTWARE TESTING OPPORTUNITIES
              </div>

              <p className="hero-overline">HELLO WORLD, I'M</p>

              <h1 className="hero-name">
                MANU R NAIR<span>.</span>
              </h1>

              <div className="role">
                <span className="role-line" />
                SOFTWARE TESTER <span className="slash">/</span>
                QA ENTHUSIAST
              </div>

              <p className="hero-description">
                I test with curiosity, automate with purpose, and focus
                on the details that make software reliable, intuitive,
                and effortless to use.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  Explore my work <span>↗</span>
                </a>

                <a
                  className="btn btn-outline"
                  href={resumeUrl}
                  download
                >
                  Download resume ↓
                </a>
              </div>

              <div className="social-row">
                <a
                  href="https://github.com/manu-r-nair"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/manu-r-nair/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN ↗
                </a>
                <a href="mailto:manurnair3@gmail.com">
                  EMAIL ↗
                </a>
              </div>
            </Reveal>

            <div className="hero-graphic" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="graphic-core">
                {'</>'}
                <span>TEST. VERIFY. IMPROVE.</span>
              </div>
              <span className="float-label label-a">
                QUALITY ASSURANCE
              </span>
              <span className="float-label label-b">QA // 2026</span>
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            SCROLL TO DISCOVER <span>↓</span>
          </a>
        </section>

        <section id="about" className="section">
          <Reveal>
            <SectionTitle
              number="01 / ABOUT ME"
              title="More than"
              accent="a tester."
            />

            <div className="about-layout">
              <p className="big-statement">
                Building confidence in software,{' '}
                <span>one test at a time.</span>
              </p>

              <div className="about-copy">
                <p>
                  I'm a detail-oriented Software Tester with a B.Tech
                  background in Electronics and Communication Engineering
                  and training in Advanced Software Testing.
                </p>
                <p>
                  My interests include manual and automation testing,
                  test case design, defect reporting, and validating web
                  applications using Selenium WebDriver and Playwright.
                </p>
                <p>
                  Beyond technology, I have led college dance and fashion
                  teams, developing my teamwork, communication,
                  coordination, and leadership skills.
                </p>
                <a className="text-link" href="#contact">
                  LET'S CONNECT ↗
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="section skills-section">
          <Reveal>
            <SectionTitle
              number="02 / TECHNICAL TOOLKIT"
              title="Skills &"
              accent="expertise."
            />

            <div className="skill-grid">
              {Object.entries(skills).map(([category, items], index) => (
                <article className="skill-card" key={category}>
                  <div className="skill-card-top">
                    <span className="skill-symbol">
                      {['⌘', '⚡', '{ }'][index]}
                    </span>
                    <span className="card-index">0{index + 1}</span>
                  </div>

                  <h3>{category}</h3>

                  <div className="skill-tags">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="experience" className="section">
          <Reveal>
            <SectionTitle
              number="03 / EXPERIENCE"
              title="Hands-on"
              accent="experience."
            />

            <article className="experience-card">
              <div className="exp-date">
                JUL 2026 — OCT 2026
                <span>KOCHI, KERALA</span>
              </div>

              <div>
                <div className="exp-heading">
                  <h3>Software Tester</h3>
                  <span className="exp-company">
                    SMEC TECHNOLOGIES
                  </span>
                </div>

                <p>
                  Completed Advanced Software Testing training with
                  practical exposure to manual testing, test case
                  execution, defect reporting, automation testing,
                  API testing, and performance testing.
                </p>

                <div className="exp-highlights">
                  <div>
                    <b>10+</b>
                    <span>WEBSITES TESTED</span>
                  </div>
                  <div>
                    <b>QA</b>
                    <span>MANUAL + AUTOMATION</span>
                  </div>
                  <div>
                    <b>Agile</b>
                    <span>TESTING WORKFLOWS</span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        <section id="projects" className="section projects-section">
          <Reveal>
            <SectionTitle
              number="04 / SELECTED WORK"
              title="Featured"
              accent="projects."
            />

            <div className="project-list">
              {projects.map((project) => (
                <button
                  className="project-card"
                  key={project.number}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="project-number">
                    {project.number} / 03
                  </div>

                  <div className="project-body">
                    <span className="eyebrow">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <span className="project-open">
                      VIEW PROJECT DETAILS ↗
                    </span>
                  </div>

                  <div className="project-icon" aria-hidden="true">
                    ↗
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="education" className="section">
          <Reveal>
            <SectionTitle
              number="05 / BACKGROUND"
              title="Education &"
              accent="leadership."
            />

            <div className="edu-grid">
              <div className="info-panel">
                <h3>Education</h3>

                <div className="timeline-item">
                  <span>2022 — 2026</span>
                  <b>
                    B.Tech, Electronics & Communication Engineering
                  </b>
                  <p>College of Engineering Chengannur</p>
                </div>

                <div className="timeline-item">
                  <span>2021</span>
                  <b>Higher Secondary</b>
                  <p>NSS HSS Kaviyoor</p>
                </div>

                <div className="timeline-item">
                  <span>2019</span>
                  <b>Secondary Education</b>
                  <p>Amrita Vidyalayam, Thiruvalla</p>
                </div>
              </div>

              <div className="info-panel">
                <h3>Leadership & Activities</h3>

                <div className="timeline-item">
                  <span>FASHION TEAM</span>
                  <b>Magnum CEC</b>
                  <p>
                    Led and coordinated college fashion team activities
                    and event-related responsibilities.
                  </p>
                </div>

                <div className="timeline-item">
                  <span>DANCE TEAM</span>
                  <b>KDC CEC</b>
                  <p>
                    Coordinated rehearsals, team collaboration, and
                    college event performances.
                  </p>
                </div>

                <div className="timeline-item">
                  <span>LANGUAGES</span>
                  <b>English · Malayalam · Tamil · Hindi</b>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section contact-section">
          <Reveal>
            <span className="eyebrow">// 06 / WHAT'S NEXT?</span>

            <h2>
              LET'S BUILD
              <br />
              <em>BETTER SOFTWARE.</em>
            </h2>

            <p>
              Have an opportunity or project in mind? Let's connect.
            </p>

            <a
              className="contact-email"
              href="mailto:manurnair3@gmail.com"
            >
              manurnair3@gmail.com ↗
            </a>

            <div className="contact-links">
              <a
                href="https://github.com/manu-r-nair"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/manu-r-nair/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href={resumeUrl} download>
                Resume ↓
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} MANU R NAIR</span>
        <span>DESIGNED WITH INTENTION. TESTED WITH CARE.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App
