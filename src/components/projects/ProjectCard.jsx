import React from "react";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source }
}) => {
    return (
        <div className={styles.container}>

            <div className={styles.containerImage}>
            <img
                className={styles.image}
                src={getImageUrl(imageSrc)}
                alt={`image of ${title}`}
            />
            </div>
       
            <a href="https://kinaryo.github.io/oleh-oleh/"><h3 className={styles.title}>{title}</h3></a>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    );
};
