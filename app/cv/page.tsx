"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import cvData from "@/data/cv.json";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CVPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["experience"]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  return (
    <main className="cv-page">
      <div className="container">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <div className="cv-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>{cvData.personalInfo.name}</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {cvData.personalInfo.title}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', color: 'var(--text-muted)' }}>
              <a href={`mailto:${cvData.personalInfo.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {cvData.personalInfo.email}
              </a>
              {cvData.personalInfo.phone && (
                <>
                  <span>•</span>
                  <span>{cvData.personalInfo.phone}</span>
                </>
              )}
              {cvData.personalInfo.location && (
                <>
                  <span>•</span>
                  <span>{cvData.personalInfo.location}</span>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* @ts-ignore */}
          <div className="cv-section">
            <h2 className="cv-section-title">Professional Summary</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {cvData.personalInfo.summary}
            </p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* @ts-ignore */}
          <div className="cv-section">
            <h2 
              className="cv-section-title"
              onClick={() => toggleSection("experience")}
            >
              Work Experience
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ 
                  transform: isExpanded("experience") ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </h2>
            
            {isExpanded("experience") && (
              <div>
                {cvData.experience.map((job, idx) => (
                  <div key={idx} className="cv-item">
                    <div className="cv-item-header">
                      <span className="cv-item-title">{job.role}</span>
                      <span className="cv-item-date">{job.date}</span>
                    </div>
                    <p className="cv-item-subtitle">{job.company}</p>
                    <p className="cv-item-description">{job.description}</p>
                    {job.responsibilities && (
                      <ul style={{ 
                        marginTop: '0.75rem', 
                        marginLeft: '1.25rem', 
                        color: 'var(--text-secondary)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.6
                      }}>
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} style={{ marginBottom: '0.375rem' }}>{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* @ts-ignore */}
          <div className="cv-section">
            <h2 
              className="cv-section-title"
              onClick={() => toggleSection("education")}
            >
              Education
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ 
                  transform: isExpanded("education") ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </h2>
            
            {isExpanded("education") && (
              <div>
                {cvData.education.map((edu, idx) => (
                  <div key={idx} className="cv-item">
                    <div className="cv-item-header">
                      <span className="cv-item-title">{edu.degree}</span>
                      <span className="cv-item-date">{edu.year}</span>
                    </div>
                    <p className="cv-item-subtitle">{edu.school}</p>
                    {edu.details && (
                      <p className="cv-item-description">{edu.details}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* @ts-ignore */}
          <div className="cv-section">
            <h2 
              className="cv-section-title"
              onClick={() => toggleSection("skills")}
            >
              Skills
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ 
                  transform: isExpanded("skills") ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </h2>
            
            {isExpanded("skills") && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {Object.entries(cvData.skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 style={{ 
                      fontSize: '0.875rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.75rem'
                    }}>
                      {category}
                    </h4>
                    <div className="skill-tags">
                      {Array.isArray(items) && items.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Projects */}
        {cvData.projects && cvData.projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* @ts-ignore */}
            <div className="cv-section">
              <h2 
                className="cv-section-title"
                onClick={() => toggleSection("projects")}
              >
                Projects
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  style={{ 
                    transform: isExpanded("projects") ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s'
                  }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </h2>
              
              {isExpanded("projects") && (
                <div>
                  {cvData.projects.map((project, idx) => (
                    <div key={idx} className="cv-item">
                      <span className="cv-item-title">{project.title}</span>
                      <p className="cv-item-description">{project.description}</p>
                      {project.highlights && (
                        <ul style={{ 
                          marginTop: '0.75rem', 
                          marginLeft: '1.25rem', 
                          color: 'var(--text-secondary)',
                          fontSize: '0.9375rem'
                        }}>
                          {project.highlights.map((highlight, i) => (
                            <li key={i} style={{ marginBottom: '0.375rem' }}>{highlight}</li>
                          ))}
                        </ul>
                      )}
                      {project.tech && (
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                          {project.tech.map((tech, i) => (
                            <span 
                              key={i} 
                              style={{ 
                                padding: '0.25rem 0.625rem', 
                                background: 'var(--bg)', 
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                color: 'var(--text-secondary)',
                                fontFamily: 'var(--font-mono)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {(project.github || project.liveUrl) && (
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 500 }}
                            >
                              View Code →
                            </a>
                          )}
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 500 }}
                            >
                              Live Demo →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/resume.pdf" download className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Full Resume (PDF)
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {cvData.personalInfo.name}
        </footer>
      </div>
    </main>
  );
}
