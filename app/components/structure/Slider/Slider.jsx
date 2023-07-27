import React from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.contSlider}>
      <section className={styles.slider}>
        <img className={styles.foto} src="/assets/img/mueble1.png" alt="/" />
        <img className={styles.foto} src="/assets/img/mueble2.png" alt="" />
        <img className={styles.foto} src="/assets/img/mueble3.png" alt="" />
      </section>
    </div>
  );
};

export default Slider;
