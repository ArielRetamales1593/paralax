import React from "react";
import styles from "./ProductosCotizados.module.css";

const ProductosCotizados = ({ productos }) => {
  return (
    <div>
      <div className={styles.cont}>
        <table className={styles.table} border="1">
          <thead>
            <th>Producto</th>
            <th>Usuario</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Mensaje</th>
          </thead>
          <tr>
            <td>{productos.nombre}</td>
            <td>{productos.nombreUsuario}</td>
            <td>{productos.telUsuario}</td>
            <td>{productos.emailUsuario}</td>
            <td>{productos.comentUsuario}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductosCotizados;
