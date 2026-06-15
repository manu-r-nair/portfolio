import "./App.css";
import manu from "./assets/manu.png.png";

function App() {
  const skills = [
    "C",
    "Python",
    "SQL",
    "Arduino",
    "ESP32",
    "Microsoft Excel",
    "Problem Solving",
    "Communication",
  ];

  return (
    <>
      <nav className="navbar">
        <h2>Manu R Nair</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Manu R Nair</h1>

          <h2>
            Electronics & Communication Engineer
          </h2>

          <p>
            Aspiring Software Engineer passionate about
            Embedded Systems, Python, SQL and intelligent
            hardware-software solutions.
          </p>

          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
        <div className="social-links">
  <a href="https://https://github.com/manu-r-nair" target="_blank">
    GitHub
  </a>

  <a href="https://www.linkedin.com/in/manu-r-nair/" target="_blank">
    LinkedIn
  </a>

  <a href="manurnair3@gmail.com">
    Email
  </a>
</div>

        <img
          src={manu}
          alt="Manu"
          className="profile-img"
        />
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <div className="card">
          <p>
            Electronics and Communication Engineering graduate
            with strong fundamentals in embedded systems,
            programming and problem solving. Interested in
            Software Development, IoT and Smart Technologies.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>
            Safety Enhanced Smart Iron With Predictive Thermal Control
          </h3>

          <p>
            Smart iron using Raspberry Pi 5, MPC control,
            automatic lifting mechanism and intelligent
            thermal regulation.
          </p>
        </div>

        <div className="card">
          <h3>Smart Safety Iron Box</h3>

          <p>
            Smart ironing device using MPU6050 and wireless
            automation to prevent fabric burns and fire hazards.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Robotics Intern</h3>

          <p>
            Worked with Arduino projects, sensors and motor
            control systems.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Leadership</h2>

        <div className="card">
          <ul>
            <li>Manager - Dance Club, CEC</li>
            <li>Team Head - Fashion Club, CEC</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="card">
          <p>📧 manurnair3@gmail.com</p>
          <p>📱 +91 9745512959</p>

          <a
            href="https://linkedin.com/in/manu-r-nair"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </>
  );
}

export default App;