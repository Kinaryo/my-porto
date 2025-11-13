import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
          <a href="mailto:kinaryo733huda@gmail.com">kinaryo733huda@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/kinaryo" target="_blank" rel="noopener noreferrer">
            linkedin.com/kinaryo
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
          <a href="https://www.github.com/kinaryo" target="_blank" rel="noopener noreferrer">
            github.com/kinaryo
          </a>
        </li>
      </ul>
    </footer>
  );
};
