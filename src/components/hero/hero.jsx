import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}> Hi,  Saya Kinaryo Citra Mashuda</h1>
                <p className={styles.description}>
                 Saya adalah mahasiswa tingkat akhir Teknik Informatika yang memiliki semangat besar dalam dunia teknologi dan pengembangan perangkat lunak. Seluruh mata kuliah telah saya selesaikan, dan saat ini saya berfokus mengembangkan berbagai proyek untuk memperdalam keahlian saya di bidang pemrograman, desain sistem, serta inovasi digital.

                </p>

                <a className={styles.contactBtn} href="mailto:kinaryo733huda@gmail.com">Contact Me</a>

            </div>
            <div className={styles.imageContainer}>
                <img src={getImageUrl("hero/heroImage.png")} alt="image of me" className={styles.heroImg} />
            </div>

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}