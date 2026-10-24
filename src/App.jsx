import { useState } from "react";

import "./App.css";

const services = [
  {
    icon: "⌘",
    title: "Web Development",
    text: "Modern, responsive websites built for performance and growth.",
  },
  {
    icon: "◈",
    title: "Frontend Development",
    text: "Clean and interactive interfaces using modern frontend technologies.",
  },
  {
    icon: "▣",
    title: "E-Commerce",
    text: "Professional online stores designed to convert visitors into customers.",
  },
  {
    icon: "✦",
    title: "UI/UX Design",
    text: "Simple, intuitive and visually engaging user experiences.",
  },
  {
    icon: "◒",
    title: "Landing Pages",
    text: "High-converting landing pages for products, services and campaigns.",
  },
  {
    icon: "↻",
    title: "Website Redesign",
    text: "Transform outdated websites into modern digital experiences.",
  },
];

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern shopping experience with responsive layouts and intuitive navigation.",
  },
  {
    number: "02",
    title: "Business Website",
    category: "Corporate Website",
    description:
      "A professional digital presence designed to build trust and attract customers.",
  },
  {
    number: "03",
    title: "SaaS Dashboard",
    category: "Web Application",
    description:
      "A clean dashboard interface focused on usability, data and productivity.",
  },
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
  "REST API",
  "Responsive Design",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your goals, audience and project requirements.",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a clear visual direction and user-friendly experience.",
  },
  {
    number: "03",
    title: "Develop",
    text: "We turn the design into a fast and responsive website.",
  },
  {
    number: "04",
    title: "Test",
    text: "We test functionality, responsiveness and browser compatibility.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Your website is prepared for deployment and goes live.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("7lance-theme") || "dark"
  );
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("7lance-theme", newTheme);
    setTheme(newTheme);
  };
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (

    <div className={`app ${theme}-mode`}>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo" onClick={() => scrollTo("home")}>
            <span className="logo-mark">7</span>
            <span>Lance</span>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("work")}>Our Work</button>
            <button onClick={() => scrollTo("process")}>Process</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <button
            className="nav-cta"
            onClick={() => scrollTo("contact")}
          >
            Start a Project
          </button>
          <button
  className="theme-toggle"
  onClick={toggleTheme}
  aria-label={
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode"
  }
  title="Switch theme">
  {theme === "dark" ? "☀ Light" : "☾ Dark"}
</button>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span></span>
                DIGITAL SOLUTIONS FOR MODERN BUSINESSES
              </div>

              <h1>
                We build digital
                <span> experiences</span>
                <br />
                that make an impact.
              </h1>

              <p>
                7Lance creates modern websites and digital experiences that
                help businesses grow, connect and stand out online.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => scrollTo("contact")}
                >
                  Start a Project <span>↗</span>
                </button>
            
                <button
                  className="secondary-btn"
                  onClick={() => scrollTo("work")}
                >
                  View Our Work
                </button>
              </div>

              <div className="stats">
                <div>
                  <strong>50+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>30+</strong>
                  <span>Happy Clients</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Commitment</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="code-window">
                <div className="window-top">
                  <div className="dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <span>7lance.dev</span>
                  <span>⌁</span>
                </div>

                <div className="code-body">
                  <span className="line-number">01</span>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">website</span> = {"{"}
                  <br />

                  <span className="line-number">02</span>
                  &nbsp;&nbsp;name:{" "}
                  <span className="code-green">'7Lance'</span>,
                  <br />

                  <span className="line-number">03</span>
                  &nbsp;&nbsp;design:{" "}
                  <span className="code-green">'modern'</span>,
                  <br />

                  <span className="line-number">04</span>
                  &nbsp;&nbsp;responsive:{" "}
                  <span className="code-orange">true</span>,
                  <br />

                  <span className="line-number">05</span>
                  &nbsp;&nbsp;performance:{" "}
                  <span className="code-orange">100</span>,
                  <br />

                  <span className="line-number">06</span>
                  &nbsp;&nbsp;impact:{" "}
                  <span className="code-green">'∞'</span>
                  <br />

                  <span className="line-number">07</span>
                  {"}"};
                </div>
              </div>

              <div className="floating-card floating-one">
                <div className="floating-icon">✦</div>
                <div>
                  <strong>Creative Design</strong>
                  <small>Built for people</small>
                </div>
              </div>

              <div className="floating-card floating-two">
                <strong>Fast</strong>
                <span>& Responsive</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">WHAT WE DO</span>
                <h2>
                  Services that move
                  <span> your business forward.</span>
                </h2>
              </div>

              <p>
                From idea to launch, we build digital solutions focused on
                quality, usability and real-world results.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="card-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY 7LANCE */}
        <section className="why-section">
          <div className="container why-grid">
            <div className="why-visual">
              <div className="big-seven">7</div>
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="orbit-dot"></div>
            </div>

            <div className="why-content">
              <span className="section-label">WHY 7LANCE</span>

              <h2>
                We don't just build websites.
                <span> We build experiences.</span>
              </h2>

              <p>
                Every project starts with understanding your goals. We combine
                thoughtful design, clean development and responsive technology
                to create websites people enjoy using.
              </p>

              <div className="benefits">
                <div>
                  <span>01</span>
                  <strong>Modern & Responsive</strong>
                  <p>Looks great on desktop, tablet and mobile.</p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Clean Development</strong>
                  <p>Maintainable code built with modern technologies.</p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Client Focused</strong>
                  <p>Your goals and users stay at the center.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">SELECTED WORK</span>
                <h2>
                  Ideas transformed into
                  <span> digital products.</span>
                </h2>
              </div>

              <p>
                A few examples of the type of digital experiences we can
                create.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-preview">
                    <div className="browser-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="preview-content">
                      <div className="preview-sidebar"></div>
                      <div className="preview-main">
                        <div className="preview-line large"></div>
                        <div className="preview-line"></div>
                        <div className="preview-cards">
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project-info">
                    <div>
                      <span>{project.number}</span>
                      <small>{project.category}</small>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button>View Project ↗</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="tech-section">
          <div className="container">
            <div className="tech-heading">
              <span className="section-label">OUR TOOLKIT</span>
              <h2>Built with modern technology.</h2>
            </div>

            <div className="tech-grid">
              {technologies.map((tech) => (
                <div className="tech-item" key={tech}>
                  <span>✦</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">OUR PROCESS</span>
                <h2>
                  Simple process.
                  <span> Great results.</span>
                </h2>
              </div>

              <p>
                A straightforward approach that keeps every project organized,
                transparent and focused.
              </p>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <div className="process-item" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="testimonial-section">
          <div className="container">
            <span className="quote-mark">“</span>

            <blockquote>
              Great websites are not only beautiful.
              <span> They solve problems, create trust and make people act.</span>
            </blockquote>

            <div className="testimonial-author">
              <div className="author-avatar">7</div>
              <div>
                <strong>7Lance Team</strong>
                <span>Digital Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section pricing-section">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">SIMPLE PRICING</span>
              <h2>
                Choose what fits
                <span> your project.</span>
              </h2>

              <p>
                Flexible starting points for businesses of different sizes.
              </p>
            </div>

            <div className="pricing-grid">
              <article className="price-card">
                <span className="price-label">STARTER</span>
                <h3>Landing Page</h3>
                <div className="price">
                  ₹4,999<span>+</span>
                </div>
                <p>Perfect for campaigns, personal brands and small launches.</p>
                <button onClick={() => scrollTo("contact")}>
                  Get Started
                </button>
              </article>

              <article className="price-card featured">
                <div className="popular">POPULAR</div>
                <span className="price-label">PROFESSIONAL</span>
                <h3>Business Website</h3>
                <div className="price">
                  ₹14,999<span>+</span>
                </div>
                <p>
                  A complete professional website for growing businesses.
                </p>
                <button onClick={() => scrollTo("contact")}>
                  Get Started
                </button>
              </article>

              <article className="price-card">
                <span className="price-label">CUSTOM</span>
                <h3>Business Solution</h3>
                <div className="price talk">Let's Talk</div>
                <p>
                  Custom websites and web applications built around your
                  requirements.
                </p>
                <button onClick={() => scrollTo("contact")}>
                  Contact Us
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-content">
              <span className="section-label">LET'S WORK TOGETHER</span>

              <h2>
                Have an idea?
                <span> Let's build it.</span>
              </h2>

              <p>
                Tell us about your project and let's discuss how we can turn
                your idea into a powerful digital experience.
              </p>

              <a className="email-link" href="mailto:hello@7lance.com">
                hello@7lance.com ↗
              </a>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll get back to you soon.");
              }}
            >
              <div className="form-row">
                <input type="text" placeholder="Your name" required />
                <input type="email" placeholder="Email address" required />
              </div>

              <input type="text" placeholder="Project type" />

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                required
              ></textarea>

              <button type="submit" className="primary-btn">
                Send Message <span>↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-top">
          <div className="logo">
            <span className="logo-mark">7</span>
            <span>Lance</span>
          </div>

          <p>
            Building digital experiences for modern businesses.
          </p>

          <div className="footer-links">
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("work")}>Work</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 7Lance. All rights reserved.</span>
          <span>Built with React & passion.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;