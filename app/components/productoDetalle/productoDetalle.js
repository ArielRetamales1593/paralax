import React from "react";
import styles from "./productoDetalle.module.css";

function ProductosDetalle({ productos }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <figure>
          <img className={styles.img} src={productos.url} alt="" />

          {/* <h2>{productos.nombre}</h2>
            <p>{productos.descripcion}</p> */}
        </figure>
      </div>

      <div className={styles.datos}>
        <div>
          <h2 className={styles.titulo}>{productos.nombre}</h2>
          <p className={styles.item}>${productos.valor}</p>
        </div>
        <div>
          <p className={styles.item}> Material: {productos.material}</p>
          <p className={styles.item}> Categoria: {productos.categoria}</p>
          <p> {productos.descripcion}</p>
        </div>

        <button className={styles.boton}>Cotizar</button>
      </div>
    </div>
  );
}

export default ProductosDetalle;
