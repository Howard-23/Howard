"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import cvData from "@/data/cv.json";
import Link from "next/link";

export default function CVPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("experience");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="container cv-page">
      {/* Header with back button */}
      <div className="cv-header">
        <Link href="/" className="back-link">← Back to Home</Link>
        <h1>Curriculum Vitae</h1>
      </div>

      {/* Personal Summary */}
      <div className="cv-section personal-summary">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <h2>{cvData.personalInfo.name}</h2>
          <h3>{cvData.personalInfo.title}</h3>
          <p className="summary">{cvData.personalInfo.summary}</p>
        
          <div className="contact-info">
            <a href={`mailto:${cvData.personalInfo.email}`}>{cvData.personalInfo.email}</a>
            {cvData.personalInfo.phone && <span>•</span>}
            {cvData.personalInfo.phone && <span>{cvData.personalInfo.phone}</span>}
            {cvData.personalInfo.location && <span>•</span>}
            {cvData.personalInfo.location && <span>{cvData.personalInfo.location}</span>}
          </div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <div className="cv-section">
        <h2 
          onClick={() => setExpandedSection(expandedSection === "experience" ? null : "experience")}
          className="section-title clickable"
        >
          Experience {expandedSection === "experience" ? "▼" : "▶"}
        </h2>
        
        {expandedSection === "experience" && (
          <div className="section-content">
            {cvData.experience.map((job, idx) => (
              <div key={idx} className="cv-item">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <div className="item-header">
                    <h4>{job.role}</h4>
                    <span className="date">{job.date}</span>
                  </div>
                  <p className="company">{job.company}</p>
                  <p className="description">{job.description}</p>
                  {job.responsibilities && (
                    <ul className="responsibilities">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Education Section */}
      <div className="cv-section">
        <h2 
          onClick={() => setExpandedSection(expandedSection === "education" ? null : "education")}
          className="section-title clickable"
        >
          Education {expandedSection === "education" ? "▼" : "▶"}
        </h2>
        
        {expandedSection === "education" && (
          <div className="section-content">
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="cv-item">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <div className="item-header">
                    <h4>{edu.degree}</h4>
                    <span className="date">{edu.year}</span>
                  </div>
                  <p className="school">{edu.school}</p>
                  {edu.details && <p className="details">{edu.details}</p>}
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="cv-section">
        <h2 
          onClick={() => setExpandedSection(expandedSection === "skills" ? null : "skills")}
          className="section-title clickable"
        >
          Skills {expandedSection === "skills" ? "▼" : "▶"}
        </h2>
        
        {expandedSection === "skills" && (
          <div className="section-content skills-grid">
            {Object.entries(cvData.skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  <div className="skill-tags">
                    {Array.isArray(items) && items.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Projects Section */}
      {cvData.projects && cvData.projects.length > 0 && (
        <div className="cv-section">
          <h2 
            onClick={() => setExpandedSection(expandedSection === "projects" ? null : "projects")}
            className="section-title clickable"
          >
            Projects {expandedSection === "projects" ? "▼" : "▶"}
          </h2>
          
          {expandedSection === "projects" && (
            <div className="section-content">
              {cvData.projects.map((project, idx) => (
                <div key={idx} className="cv-item">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <h4>{project.title}</h4>
                    <p className="description">{project.description}</p>
                    {project.highlights && (
                      <ul className="highlights">
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link">Live Demo</a>
                      )}
                    </div>
                    {project.tech && (
                      <div className="tech-stack">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Download Resume Button */}
      <div className="cv-actions">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <a href="/resume.pdf" download className="btn primary">📄 Download Full Resume (PDF)</a>
        </motion.div>
      </div>

      <footer>© {new Date().getFullYear()} John Howard P. Garcia</footer>
    </main>
  );
}
