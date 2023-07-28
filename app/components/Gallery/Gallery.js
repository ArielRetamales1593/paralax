import React from "react";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/mueble8.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/mueble5.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/mueble3.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/silla1.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/silla4.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/mueble7.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/mueble9.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/mueble6.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.box}>
        <a href="#">
          <figure>
            <img src="/assets/img/muebles/mueble2.JPG" alt="" />
          </figure>
        </a>
      </div>

      <div className={styles.logo}>
        <a href="#">
          <figure>
            <img src="/assets/logos/logo.svg" width={300} alt="" />
          </figure>
        </a>
      </div>
    </div>
  );
}

export default Gallery;
