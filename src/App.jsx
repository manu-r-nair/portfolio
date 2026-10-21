
import { useEffect, useState } from "react";
import "./App.css";

const resumeUrl = `${import.meta.env.BASE_URL}Manu_R_Nair_Resume.pdf`;

const skills = [
  {
    category: "Manual Testing",
    items: [
      "Test Case Design",
      "Test Scenarios",
      "Functional Testing",
      "UI Testing",
      "Regression Testing",
      "Smoke Testing",
      "Exploratory Testing",
      "Defect Reporting",
    ],
  },
  {
    category: "Automation Testing",
    items: [
      "Selenium WebDriver",
      "Playwright",
      "Python",
      "Pytest",
      "Browser Automation",
    ],
  },
  {
    category: "API & Performance Testing",
    items: [
      "Postman",
      "Apache JMeter",
      "API Testing",
      "Load Testing",
      "Response Validation",
    ],
  },
  {
    category: "Testing Fundamentals",
    items: [
      "SDLC",
      "STLC",
      "Agile Methodology",
      "Defect Life Cycle",
      "Severity & Priority",
      "Test Documentation",
    ],
  },
  {
    category: "Programming & Tools",
    items: [
      "Python",
      "MySQL",
      "C Programming",
      "Git",
      "GitHub",
      "Jira",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "SMEC Technologies Website",
    type: "Manual Testing",
    subtitle: "Functional testing, test cases and defect reporting",
    overview:
      "Performed manual testing of website functionality and user workflows to evaluate application behavior, usability, and consistency.",
    objective:
      "Verify that website features behave as expected and identify defects that could affect the user experience.",
    work: [
      "Reviewed website pages, navigation menus, forms, links, and interactive elements.",
      "Prepared and executed test cases for expected and negative scenarios.",
      "Performed functional, UI, exploratory, regression, and compatibility testing.",
      "Recorded defects with reproducible steps, expected results, actual results, severity, and priority.",
      "Retested reported defects and checked affected functionality.",
    ],
    tools: ["Manual Testing", "Test Cases", "Excel", "Browser DevTools"],
    methodology: [
      "Understand requirements",
      "Identify test scenarios",
      "Prepare and execute test cases",
      "Report and track defects",
      "Retest fixes and perform regression testing",
    ],
    outcome:
      "Produced structured test documentation and identified issues to support website quality improvement.",
  },
  {
    number: "02",
    title: "Website Automation Testing",
    type: "Automation Testing",
    subtitle: "Browser automation using Playwright, Selenium and Python",
    overview:
      "Practiced automated browser testing for website workflows, focusing on repeatable checks and validating expected application behavior.",
    objective:
      "Reduce repetitive manual checks and improve consistency when validating selected website workflows.",
    work: [
      "Created automation scripts for selected website scenarios.",
      "Used browser locators and interactions to perform test steps.",
      "Validated page elements, navigation, and expected outcomes.",
      "Used assertions to verify application behavior.",
      "Reviewed execution results and investigated test failures.",
    ],
    tools: ["Playwright", "Selenium WebDriver", "Python", "Pytest"],
    methodology: [
      "Select suitable test scenarios",
      "Design automation steps",
      "Implement browser interactions",
      "Add assertions and validations",
      "Execute tests and review results",
    ],
    outcome:
      "Built reusable browser checks and strengthened practical understanding of UI test automation.",
  },
  {
    number: "03",
    title: "Safety-Enhanced Smart Iron",
    type: "Embedded Systems",
    subtitle: "ESP32-based safety and automatic lifting mechanism",
    overview:
      "Developed a smart ironing device concept designed to reduce the risk of clothes burning when an iron is left unattended.",
    objective:
      "Improve ironing safety by detecting relevant conditions and controlling the iron's position and power.",
    work: [
      "Integrated an ESP32 microcontroller with sensing components.",
      "Designed a servo-based automatic lifting mechanism.",
      "Worked with touch and tilt sensing for condition detection.",
      "Explored temperature monitoring and solid-state relay power control.",
      "Contributed to hardware integration, control logic, and system testing.",
    ],
    tools: ["ESP32", "Arduino IDE", "Servo Motors", "Touch Sensor", "Tilt Sensor", "SSR"],
    methodology: [
      "Define the safety problem",
      "Design the system architecture",
      "Integrate hardware components",
      "Implement embedded control logic",
      "Test system responses",
    ],
    outcome:
      "Developed a prototype concept combining embedded control and automatic lifting to improve ironing safety.",
  },
];

const experience = [
  {
    role: "Software Testing Intern",
    company: "SMEC Technologies",
    location: "Kochi, Kerala",
    period: "Jul 2026 – Oct 2026",
    details: [
      "Gained practical exposure to manual software testing and test case preparation.",
      "Worked with SDLC, STLC, and Agile testing concepts.",
      "Executed functional test cases and documented results.",
      "Practiced defect reporting, retesting, and regression testing.",
    ],
  },
];

const education = [
  {
    qualification: "B.Tech in Electronics and Communication Engineering",
    institution: "College of Engineering Chengannur",
    period: "2022 – 2026",
    details:
      "KTU 2019 Scheme · Electronics, embedded systems, and software testing interests.",
  },
];

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

/* Content is always visible; no observer can leave it hidden. */
function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <p className="eyebrow">{project.type}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="modal-subtitle">{project.subtitle}</p>

        <div className="modal-section">
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </div>

        <div className="modal-section">
          <h3>Objective</h3>
          <p>{project.objective}</p>
        </div>

        <div className="modal-section">
          <h3>Work Performed</h3>
          <ul>
            {project.work.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="modal-section">
          <h3>Tools & Technologies</h3>
          <div className="tag-list">
            {project.tools.map((tool) => (
              <span className="tag" key={tool}>{tool}</span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <h3>Methodology</h3>
          <ol>
            {project.methodology.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>

        <div className="modal-section">
          <h3>Outcome</h3>
          <p>{project.outcome}</p>
        </div>
      </article>
    </div>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeProjectModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="mouse-spotlight" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            MRN<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {navigation.map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>{label}</a>
            ))}
            <a
              className="nav-resume"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <Reveal className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              SOFTWARE TESTING · QUALITY ASSURANCE
            </p>

            <h1 className="hero-name">MANU R NAIR<span>.</span></h1>

            <h2 className="hero-role">
              Software Tester <span>&</span> QA Enthusiast
            </h2>

            <p className="hero-description">
              I focus on software quality through thoughtful test design,
              systematic testing, and automation. I enjoy finding issues,
              validating user workflows, and helping build reliable digital
              experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a
                className="button button-secondary"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Resume ↓
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/manu-r-nair" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/manu-r-nair/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="mailto:manurnair3@gmail.com">Email ↗</a>
            </div>
          </Reveal>

          <Reveal className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="hero-card">
              <div className="hero-card-top">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-label">qa_profile.exe</span>
              </div>

              <div className="hero-card-body">
                <p className="code-muted">// quality starts here</p>
                <p><span className="code-purple">const</span>{" "}
                  <span className="code-blue">tester</span> = {"{"}
                </p>
                <p className="code-indent">focus: <span className="code-green">"Quality"</span>,</p>
                <p className="code-indent">testing: <span className="code-green">"Manual + Automation"</span>,</p>
                <p className="code-indent">mindset: <span className="code-green">"Find the edge cases"</span>,</p>
                <p className="code-indent">goal: <span className="code-green">"Reliable software"</span></p>
                <p>{"};"}</p>

                <div className="terminal-divider" />
                <div className="terminal-status">
                  <span className="status-dot" />
                  Ready to test
                </div>
              </div>
            </div>

            <div className="floating-badge badge-top"><span>✓</span> Quality focused</div>
            <div className="floating-badge badge-bottom"><span>⌘</span> Test automation</div>
          </Reveal>

          <a className="scroll-indicator" href="#about">
            <span className="scroll-line" />
            Scroll to explore
          </a>
        </section>

        <section className="section-container section-block" id="about">
          <Reveal>
            <SectionTitle
              eyebrow="01 / ABOUT ME"
              title="Curious by nature. Quality by design."
              description="Combining analytical thinking with a practical approach to software testing."
            />
          </Reveal>

          <div className="about-grid">
            <Reveal className="about-main">
              <p>
                I am a B.Tech Electronics and Communication Engineering
                student with a strong interest in software testing and quality
                assurance. My academic background helps me approach problems
                analytically and understand how systems behave.
              </p>
              <p>
                I have explored manual testing, test case preparation, defect
                reporting, and browser automation using Selenium WebDriver and
                Playwright. I am continuing to strengthen my testing skills
                and practical understanding of software development workflows.
              </p>
              <a className="text-link" href="#contact">Let&apos;s connect <span>→</span></a>
            </Reveal>

            <Reveal className="about-stats">
              {[
                ["01", "Manual testing", "Structured test execution and defect reporting"],
                ["02", "Automation", "Browser testing with modern automation tools"],
                ["03", "Problem solving", "Analytical thinking and attention to detail"],
                ["04", "Teamwork", "Communication and student team leadership"],
              ].map(([number, label, description]) => (
                <div className="stat-card" key={number}>
                  <span className="stat-number">{number}</span>
                  <span className="stat-label">{label}</span>
                  <p>{description}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section-container section-block" id="skills">
          <Reveal>
            <SectionTitle
              eyebrow="02 / SKILLS"
              title="My testing toolkit."
              description="Tools, techniques, and fundamentals I use to understand and evaluate software."
            />
          </Reveal>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <Reveal className="skill-card" key={group.category}>
                <div className="skill-card-heading">
                  <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.category}</h3>
                </div>
                <div className="tag-list">
                  {group.items.map((skill) => (
                    <span className="tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-container section-block" id="experience">
          <Reveal>
            <SectionTitle
              eyebrow="03 / EXPERIENCE"
              title="Learning through practice."
              description="Software testing experience and practical exposure."
            />
          </Reveal>

          <div className="timeline">
            {experience.map((item) => (
              <Reveal className="timeline-item" key={item.company}>
                <div className="timeline-marker" />
                <article className="experience-card">
                  <div className="experience-top">
                    <div>
                      <p className="eyebrow">{item.period}</p>
                      <h3>{item.role}</h3>
                      <p className="experience-company">{item.company} · {item.location}</p>
                    </div>
                    <span className="experience-symbol">↗</span>
                  </div>
                  <ul>
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-container section-block" id="projects">
          <Reveal>
            <SectionTitle
              eyebrow="04 / PROJECTS"
              title="Work that puts skills into practice."
              description="Select a project to explore its objectives, approach, tools, and outcomes."
            />
          </Reveal>

          <div className="projects-grid">
            {projects.map((project) => (
              <Reveal className="project-card" key={project.number}>
                <button
                  className="project-open"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-arrow">↗</span>
                  </div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <div className="project-card-footer">
                    <span>View project details</span>
                    <span>→</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-container section-block" id="education">
          <Reveal>
            <SectionTitle
              eyebrow="05 / EDUCATION"
              title="Building a strong foundation."
              description="My academic background and technical learning journey."
            />
          </Reveal>

          <div className="education-grid">
            {education.map((item) => (
              <Reveal className="education-card" key={item.institution}>
                <div className="education-icon">⌘</div>
                <p className="eyebrow">{item.period}</p>
                <h3>{item.qualification}</h3>
                <p className="education-institution">{item.institution}</p>
                <p>{item.details}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="leadership-card">
            <div>
              <p className="eyebrow">LEADERSHIP & ACTIVITIES</p>
              <h3>Teamwork beyond technology.</h3>
              <p>
                Experience coordinating college dance and fashion teams,
                supporting collaboration, communication, and event preparation.
              </p>
            </div>
            <div className="leadership-tags">
              <span className="tag">Magnum CEC</span>
              <span className="tag">KDC CEC</span>
              <span className="tag">Team Coordination</span>
            </div>
          </Reveal>
        </section>

        <section className="section-container section-block contact-section" id="contact">
          <Reveal className="contact-card">
            <p className="eyebrow">06 / CONTACT</p>
            <h2>Let&apos;s build something <span>reliable.</span></h2>
            <p>
              Looking for a software testing opportunity where I can learn,
              contribute, and help improve product quality.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:manurnair3@gmail.com">
                Email Me ↗
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/manu-r-nair/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
            <p className="contact-email">manurnair3@gmail.com</p>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#home" className="brand">MRN<span>.</span></a>
        <p>Designed with curiosity. Built with attention to detail.</p>
        <p>© {new Date().getFullYear()} Manu R Nair</p>
      </footer>

      <ProjectModal project={selectedProject} onClose={closeProjectModal} />
    </div>
  );
}
