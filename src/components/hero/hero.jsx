import React from "react";
import {getImageUrl} from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () =>{
    return (
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}> Hi,  Saya Kinaryo Citra Mashuda</h1>
                <p className={styles.description}>
                Saya mahasiswa Teknik Informatika yang memiliki passion besar dalam teknologi, pengembangan perangkat lunak, serta aktif dalam kegiatan sosial. Selain mengasah kemampuan di bidang pemrograman dan pengembangan aplikasi, saya juga berkomitmen untuk berkontribusi pada masyarakat melalui berbagai kegiatan sosial. Jelajahi proyek-proyek saya, ikuti perjalanan saya dalam dunia teknologi dan kegiatan sosial, dan mari ciptakan sesuatu yang bermanfaat bersama!


                </p>

                <a className={styles.contactBtn} href="mailto :kinaryo733huda@gmail.com">Contact Me</a>
            </div>
            <div className={styles.imageContainer}>
            <img src={getImageUrl("hero/heroImage.png")} alt="image of me" className={styles.heroImg}/>
            </div>
            
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}