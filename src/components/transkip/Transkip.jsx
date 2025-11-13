import React from "react";
import style from "./transkrip.module.css";
import { getImageUrl } from "../../utils";

export const Transkrip = () => {
  return (
    <section id="transkrip" className={style.transkripSection}>
      <h1 className={style.title}>Transkrip Nilai</h1>

      <div className={style.imageContainer}>
        <img
          src={getImageUrl("transkip/transkip_nilai.jpg")}
          alt="Transkrip Nilai"
          className={style.transkripImage}
        />
      </div>
    </section>
  );
};
