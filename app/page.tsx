"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectModal from "@/components/ProjectModal";
import experience from "@/data/experience.json";
import projects from "@/data/projects.json";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-content">
            {/* Profile Image */}
            <div className="profile-image">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
                <img src="/profile.jpg" alt="John Howard Garcia" />
              </motion.div>
            </div>

            {/* Text Content */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
              <h1>John Howard P. Garcia</h1>
              <h2>Front-End Developer</h2>
              <p>I build modern, scalable web applications using Next.js and React.</p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="buttons">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <a href="/resume.pdf" download className="btn">Download Resume</a>
              <a href="/cv" className="btn secondary">View CV</a>
              <a href="https://github.com/Howard-23/Howard-23" className="btn secondary">GitHub</a>
              <a href="https://www.linkedin.com/in/john-howard-garcia-31a075390/" className="btn secondary">LinkedIn</a>
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
              <a href="https://www.facebook.com/ghooward23" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ghooward/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.79.263-1.473.606-2.115 1.248-.643.642-.985 1.326-1.247 2.115-.267.788-.469 1.659-.529 3.937C.016 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 2.277.261 3.148.528 3.936.264.79.607 1.473 1.248 2.115.642.643 1.325.985 2.115 1.248.788.268 1.659.469 3.937.529C8.333 23.984 8.74 24 12 24s3.667-.015 4.947-.072c2.277-.06 3.148-.26 3.936-.528.79-.264 1.473-.606 2.115-1.248.643-.642.985-1.326 1.248-2.115.268-.788.469-1.659.529-3.937.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-2.277-.26-3.148-.528-3.936-.264-.79-.606-1.473-1.248-2.115-.642-.643-1.325-.985-2.115-1.248-.788-.267-1.659-.469-3.937-.529C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zm0 3.678c-3.405 0-6.162 2.756-6.162 6.162 0 3.405 2.756 6.162 6.162 6.162 3.405 0 6.162-2.756 6.162-6.162 0-3.405-2.756-6.162-6.162-6.162zM12 16a4 4 0 110-8 4 4 0 010 8zm4.29-10.662a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3>Skills</h3>
          <ul className="skills">
            {["Next.js", "React", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Java", "Python"].map((skill, i) => (
              <li key={i}>
                <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                  {skill}
                </motion.span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3>Experience</h3>
          <div className="timeline">
            {experience.map((item, i) => (
              <div key={i} className="timeline-item">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                  <span className="date">{item.date}</span>
                  <h4>{item.role}</h4>
                  <p>{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3>Projects</h3>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className="project-card" onClick={() => setSelectedProject(project)}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} whileHover={{ y: -5 }}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* CONTACT */}
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3>Contact</h3>
          <ContactForm />
        </motion.div>
      </section>

      <footer>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          © {new Date().getFullYear()} John Howard P. Garcia
        </motion.div>
      </footer>
    </main>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    // Replace 'yourFormID' with your actual Formspree form ID from formspree.io
    const res = await fetch("https://formspree.io/f/xzzvdvpk", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" }
    });

    if (res.ok) {
      setStatus("success");
      e.currentTarget.reset();
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" required />
      <input name="email" type="email" placeholder="Your Email" required />
      <textarea name="message" rows={5} placeholder="Your Message" required />
      <button className="btn" disabled={status === "loading"} type="submit">
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && <p className="success">✅ Message sent successfully! I'll get back to you soon.</p>}
      {status === "error" && <p className="error">❌ Something went wrong. Please try again.</p>}
    </form>
  );
}
