import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard.jsx";

export const Projects = () => {
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden"; // blok scroll
    } else {
      document.body.style.overflow = ""; // aktifkan scroll lagi
    }

    // bersihkan saat unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalIndex]);

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isActive={activeModalIndex === index}
            onOpenModal={() => setActiveModalIndex(index)}
            onCloseModal={() => setActiveModalIndex(null)}
          />
        ))}
      </div>
    </section>
  );
};
