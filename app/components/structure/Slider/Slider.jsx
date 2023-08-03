import React from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.contSlider}>
      <section className={styles.slider}>
        <img
          className={styles.foto}
          src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Rack%20Lenga%20(2).jpg"
          alt="/"
        />
        <img
          className={styles.foto}
          src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/CZ2.jpg"
          alt=""
        />
        <img
          className={styles.foto}
          src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Repisero%20Rodrigo%20Herrera%20(39).JPG"
          alt=""
        />
      </section>
    </div>
  );
};

export default Slider;
