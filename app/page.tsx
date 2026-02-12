"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectModal from "@/components/ProjectModal";
import experience from "@/data/experience.json";
import projects from "@/data/projects.json";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            JHG
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`nav-links-mobile ${mobileMenuOpen ? "active" : ""}`}>
          <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
          <a href="#skills" className="nav-link" onClick={closeMobileMenu}>Skills</a>
          <a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a>
          <a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a>
          <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
          <div style={{ marginTop: "1rem", padding: "1rem" }}>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          {(
            <motion.div 
              className="hero-content"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={fadeInUp}>
                Hi, I&apos;m <span className="gradient">John Howard Garcia</span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="hero-subtitle">
                Front-End Developer
              </motion.div>
              
              <motion.div variants={fadeInUp} className="hero-description">
                I craft responsive, user-focused web applications using modern technologies. 
                With expertise in Next.js, React, and Shopify, I help businesses build 
                their digital presence while providing efficient virtual assistance.
              </motion.div>
              
              <motion.div variants={fadeInUp} className="hero-actions">
                <a href="/resume.pdf" download className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume
                </a>
                <a href="/cv" className="btn btn-secondary">
                  View CV
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Get in Touch
                </a>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="hero-socials">
                <a href="https://github.com/Howard-23/Howard-23" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/john-howard-garcia-31a075390/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:johnhowardgarcia23@gmail.com" className="social-link" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>About Me</h2>
              <p>Get to know me better</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="about-content" style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: 'clamp(1.25rem, 4vw, 2.5rem)'
            }}>
              <div style={{ 
                display: 'flex', 
                gap: 'clamp(1rem, 3vw, 2rem)', 
                flexWrap: 'wrap', 
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Profile Image */}
                <div style={{
                  width: 'clamp(100px, 25vw, 150px)',
                  height: 'clamp(100px, 25vw, 150px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '3px solid var(--primary-500)'
                }}>
                  <img 
                    src="/profile.jpg" 
                    alt="John Howard P. Garcia"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                {/* About Text */}
                <div style={{ flex: 1, minWidth: 'min(100%, 250px)', textAlign: 'center' }}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', 
                    fontWeight: 600, 
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, var(--primary-500), #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    John Howard P. Garcia
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    I&apos;m a passionate Front-End Developer and Virtual Assistant based in the Philippines. 
                    With a strong foundation in modern web technologies and a keen eye for detail, 
                    I help businesses establish their digital presence and streamline their operations.
                  </p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    When I&apos;m not coding, you can find me learning new technologies, optimizing workflows, 
                    or helping clients achieve their goals through efficient virtual assistance.
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="about-stats" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
                    gap: '1rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border)'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', fontWeight: 700, color: 'var(--primary-500)' }}>1+</div>
                      <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--text-muted)' }}>Years Experience</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', fontWeight: 700, color: 'var(--primary-500)' }}>8+</div>
                      <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--text-muted)' }}>Projects Completed</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', fontWeight: 700, color: 'var(--primary-500)' }}>3+</div>
                      <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: 'var(--text-muted)' }}>Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Skills & Expertise</h2>
              <p>Technologies and tools I use to bring ideas to life</p>
            </motion.div>
          </div>

          <motion.div 
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SkillCard 
              icon="🎨"
              title="Frontend Development"
              skills={["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]}
              level={90}
            />
            <SkillCard 
              icon="⚙️"
              title="Backend & Tools"
              skills={["Node.js", "Java", "Python",]}
              level={75}
            />
            <SkillCard 
              icon="🛍️"
              title="E-Commerce"
              skills={["Shopify Liquid"]}
              level={80}
            />
            <SkillCard 
              icon="💼"
              title="Virtual Assistance"
              skills={["Email Management", "Chat Support", "Data Entry", "Calendar Management"]}
              level={85}
            />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Work Experience</h2>
              <p>My professional journey and career highlights</p>
            </motion.div>
          </div>

          <div className="experience-timeline">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="timeline-title">{item.role}</h4>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <p className="timeline-company">{item.company || "Freelance"}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Featured Projects</h2>
              <p>A selection of my recent work and personal projects</p>
            </motion.div>
          </div>

          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={fadeInUp}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -4 }}
              >
                <div className="project-image">
                  {project.icon || "🚀"}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech?.slice(0, 4).map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                    {project.tech && project.tech.length > 4 && (
                      <span>+{project.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Get In Touch</h2>
              <p>Have a project in mind? Let&apos;s work together</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="https://github.com/Howard-23/Howard-23" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/john-howard-garcia-31a075390/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:johnhowardgarcia23@gmail.com" className="footer-link">Email</a>
          </div>
          <p>© {new Date().getFullYear()} John Howard P. Garcia. All rights reserved.</p>
        </div>
      </footer>

      {/* Navigation Styles */}
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: var(--bg);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        
        @supports (backdrop-filter: blur(12px)) {
          .nav {
            background: rgba(15, 23, 42, 0.8);
          }
          
          :global(.light) .nav {
            background: rgba(248, 250, 252, 0.8);
          }
        }
        
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        
        .nav-logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-500), #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9375rem;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: var(--text);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}

// Skill Card Component
function SkillCard({ icon, title, skills, level }: { icon: string; title: string; skills: string[]; level: number }) {
  return (
    <motion.div className="skill-card" variants={fadeInUp}>
      <div className="skill-card-header">
        <div className="skill-card-icon">{icon}</div>
        <h4>{title}</h4>
      </div>
      <div className="skill-item">
        <div className="skill-info">
          <span className="skill-name">Proficiency</span>
          <span className="skill-level">{level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div 
            className="skill-progress" 
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>
      <div className="skill-tags">
        {skills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
}

// Contact Form Component
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("https://formspree.io/f/xzzvdvpk", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" }
    });

    if (res.ok) {
      setStatus("success");
      e.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              id="name"
              name="name" 
              type="text" 
              className="form-input" 
              placeholder="John Doe" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              id="email"
              name="email" 
              type="email" 
              className="form-input" 
              placeholder="john@example.com" 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input 
            id="subject"
            name="subject" 
            type="text" 
            className="form-input" 
            placeholder="Project inquiry" 
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            id="message"
            name="message" 
            className="form-textarea" 
            placeholder="Tell me about your project..." 
            required 
          />
        </div>
        
        <div className="form-group">
          <button 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9"/>
                </svg>
                Send Message
              </>
            )}
          </button>
        </div>

        {status === "success" && (
          <div className="form-status success">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}
        
        {status === "error" && (
          <div className="form-status error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            Something went wrong. Please try again.
          </div>
        )}
      </form>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  ); }
