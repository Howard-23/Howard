"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    // Focus the close button when modal opens
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="modal-header">
          <h3 id="modal-title" className="modal-title">{project.title}</h3>
          <button
            ref={closeRef}
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Project Image/Icon */}
          <div 
            style={{ 
              aspectRatio: '16/9', 
              background: 'linear-gradient(135deg, var(--gray-800), var(--gray-700))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              marginBottom: '1.5rem'
            }}
          >
            {project.icon || "🚀"}
          </div>

          {/* Description */}
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ 
                fontSize: '0.875rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem'
              }}>
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    style={{ 
                      padding: '0.375rem 0.875rem', 
                      background: 'rgba(99, 102, 241, 0.1)', 
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      borderRadius: '50px',
                      fontSize: '0.875rem',
                      color: 'var(--accent)',
                      fontWeight: 500
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 style={{ 
                fontSize: '0.875rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem'
              }}>
                Key Highlights
              </h4>
              <ul style={{ 
                marginLeft: '1.25rem', 
                color: 'var(--text-secondary)',
                lineHeight: 1.7
              }}>
                {project.highlights.map((highlight, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
