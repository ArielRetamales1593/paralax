import React from "react";
import styles from "./Gallery.module.css";

function Gallery({ productos }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <a href="#">
          <figure>
            <img className={styles.img} src={productos.url} alt="" />
            <h2>{productos.nombre}</h2>
            <p>{productos.descripcion}</p>
          </figure>
        </a>
      </div>
    </div>
  );
}

export default Gallery;
