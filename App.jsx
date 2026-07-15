import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  GraduationCap,
  Coffee,
  Moon,
  Sun,
  ExternalLink,
  Code2,
  BriefcaseBusiness,
  Download,
} from "lucide-react";

const projects = [
  {
    title: "Luxora AI",
    description:
      "AI-powered career platform with jobs, internships, ATS resume analysis, smart suggestions and resume templates.",
    tech: ["HTML", "CSS", "JavaScript", "AI"],
    demo: "https://connectwithkavyxcyber024-lab.github.io/Luxora-AI/",
    code: "https://github.com/connectwithKavyXCyber024-lab/Luxora-AI",
  },
  {
    title: "ResumAI ATS Optimizer",
    description:
      "Resume-analysis application that checks ATS compatibility and gives practical improvement suggestions.",
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    code: "https://github.com/connectwithKavyXCyber024-lab?tab=repositories",
  },
  {
    title: "Taru Cafe",
    description:
      "Responsive business website for a local café with menu, location, contact and customer information.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://connectwithkavysoni-cyber.github.io/Taru-Cafe_project/",
    code: "https://github.com/connectwithKavyXCyber024-lab?tab=repositories",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/connectwithKavyXCyber024-lab",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kavy-soni-s2401",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:connectwithkavysoni@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div className="site-shell">
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <button
            className={page === "home" ? "nav-link active" : "nav-link"}
            onClick={() => setPage("home")}
          >
            home
          </button>
          <button
            className={page === "about" ? "nav-link active" : "nav-link"}
            onClick={() => setPage("about")}
          >
            about me
          </button>

          <button
            className="brand"
            onClick={() => setPage("home")}
            aria-label="Go to home"
          >
            ks
          </button>

          <button
            className={page === "portfolio" ? "nav-link active" : "nav-link"}
            onClick={() => setPage("portfolio")}
          >
            portfolio
          </button>

          <button
            className="theme-button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle color theme"
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </nav>
      </header>

      <main className="main">
        {page === "home" && <Home setPage={setPage} />}
        {page === "about" && <About />}
        {page === "portfolio" && <Portfolio />}
      </main>

      <footer className="footer">
        created with <span>♥</span> by Kavy Soni
        <br />© 2026
      </footer>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <section className="hero">
      <div className="portrait-wrap">
        <div className="portrait-ring">
          <img
            className="portrait"
            src="/kavy-profile.jpg"
            alt="Kavy Soni"
          />
        </div>
      </div>

      <div className="hero-content">
        <p className="eyebrow">Hello, welcome to my portfolio</p>

        <h1>
          Hi, I&apos;m <span>Kavy</span> <span className="wave">👋</span>
        </h1>

        <h2>I&apos;m a Python &amp; React.js Developer.</h2>

        <div className="quick-facts">
          <p>
            <Coffee aria-hidden="true" />
            fueled by curiosity and chai
          </p>
          <p>
            <MapPin aria-hidden="true" />
            based in Sagar, Madhya Pradesh, India
          </p>
          <p>
            <GraduationCap aria-hidden="true" />
            B.Tech student at RGPV
          </p>
          <p>
            <Mail aria-hidden="true" />
            <a href="mailto:connectwithkavysoni@gmail.com">
              connectwithkavysoni@gmail.com
            </a>
          </p>
        </div>

        <div className="hero-actions">
          <button className="primary-button" onClick={() => setPage("portfolio")}>
            <BriefcaseBusiness size={18} />
            View my work
          </button>
          <a className="secondary-button" href="mailto:connectwithkavysoni@gmail.com">
            <Mail size={18} />
            Contact me
          </a>
        </div>

        <div className="socials" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React.js",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git & GitHub",
    "Docker",
    "AWS",
  ];

  return (
    <section className="content-page">
      <div className="section-heading">
        <span>01</span>
        <h1>About me</h1>
      </div>

      <div className="about-grid">
        <article className="panel about-copy">
          <Code2 className="panel-icon" />
          <h2>Building useful software</h2>
          <p>
            I am a developer focused on responsive web applications and
            AI-powered products. I enjoy turning ideas into practical,
            user-friendly experiences and continuously improving my
            problem-solving skills.
          </p>
          <p>
            My current learning priorities are data structures and algorithms,
            backend development, cloud tools and AI/ML.
          </p>
          <a className="primary-button inline-button" href="mailto:connectwithkavysoni@gmail.com">
            <Mail size={18} />
            Let&apos;s connect
          </a>
        </article>

        <article className="panel">
          <h2>Technologies</h2>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="content-page">
      <div className="section-heading">
        <span>02</span>
        <h1>Selected projects</h1>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number">0{index + 1}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.code} target="_blank" rel="noreferrer">
                <Github size={17} /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink size={17} /> Live demo
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="github-cta">
        <h2>More projects are available on GitHub</h2>
        <a
          className="primary-button inline-button"
          href="https://github.com/connectwithKavyXCyber024-lab"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={18} />
          Open GitHub
        </a>
      </div>
    </section>
  );
}

export default App;
