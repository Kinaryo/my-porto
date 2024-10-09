import React from "react";
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";
export const Contact = ()=>{
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.title}>Contact</h2>
                <p>feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")
                    } alt="Email" />
                    <a href="mailto:kinaryo733huda@gmail.com">kinaryo733huda@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")
                    } alt="Linkind" />
                    <a href="https://www.linkedin.com/in/kinaryo">Linkedin.com/kinaryo</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")
                    } alt="github" />
                    <a href="https://www.github.com/kinaryo">github.com/kinaryo</a>
                </li>
            </ul>
        </footer>
    )
}