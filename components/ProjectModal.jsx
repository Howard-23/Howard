"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    // focus the close button when modal opens
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <button
          ref={closeRef}
          className="modal-close btn"
          onClick={onClose}
          aria-label="Close project dialog"
          title="Close"
        >
          ✕
        </button>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>
          <strong>Tech:</strong> {project.tech?.join(", ")}
        </p>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View GitHub →
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
