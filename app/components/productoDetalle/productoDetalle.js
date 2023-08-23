import React from "react";
import styles from "./productoDetalle.module.css";

function ProductosDetalle({ productos }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <figure>
          <img className={styles.img} src={productos.url} alt="" />
          <h1>{productos.nombre}</h1>
          {/* <h2>{productos.nombre}</h2>
            <p>{productos.descripcion}</p> */}
        </figure>
      </div>

      <div>
        <p>$ {productos.valor}</p>
        <p>{productos.descripcion}</p>
        <p>{productos.categoria}</p>
      </div>
    </div>
  );
}

export default ProductosDetalle;
