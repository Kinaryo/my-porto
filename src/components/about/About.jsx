import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../about/About.module.css"


export const About = () =>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="Me sitting with a laptop" 
                    className={styles.aboutImg}/>

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Saya memiliki keahlian dalam membangun antarmuka pengguna yang menarik dan interaktif. Menguasai HTML, CSS, dan JavaScript sebagai fondasi, saya mampu menciptakan tampilan yang responsif dan sesuai dengan berbagai perangkat. Dengan fokus pada pengalaman pengguna, saya selalu berusaha menciptakan tampilan yang tidak hanya menarik secara visual, tetapi juga mudah digunakan.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor icon" />
                        <div  className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Saya juga memiliki pemahaman yang baik tentang pengembangan backend. Saya dapat membangun server-side aplikasi menggunakan Node.js dan Express.js. Keahlian saya dalam mengelola database, baik MySQL maupun MongoDB, memungkinkan saya untuk menyimpan dan mengelola data aplikasi secara efektif</p>
                        </div>
                    </li>
                     {/* <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor icon" />
                        <div  className={styles.aboutItemText}>
                        <h3>Data</h3>
                        <p>Dengan pengalaman yang kuat dalam analisis data, saya mampu mengubah data mentah menjadi informasi yang berharga. Saya menguasai Google Data Studio untuk menciptakan visualisasi data yang menarik dan mudah dipahami, serta Microsoft Excel untuk melakukan analisis data yang mendalam. Keahlian saya ini telah memungkinkan saya untuk memberikan insight yang berharga bagi tim dan membantu dalam pengambilan keputusan bisnis yang strategis.</p>
                        </div>
                    </li> */}
{/*
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor icon" />
                        <div  className={styles.aboutItemText}>
                        <h3>Ui Designer</h3>
                        <p>I'am devloper frontend Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, praesentium?</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor icon" />
                        <div  className={styles.aboutItemText}>
                        <h3>data analis and digital marketing</h3>


                        <p>I'am devloper frontend Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, praesentium?</p>
                        </div>
                    </li> */}
                </ul>
            </div>

        </section>
    )

}