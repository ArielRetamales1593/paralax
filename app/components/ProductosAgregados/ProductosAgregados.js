import React from "react";
import eliminarProducto from "@/app/function/eliminarProducto";
import styles from "./ProductosAgregados.module.css";

function ProductosAgregados({ productos, setSelectedProductos, refresh }) {
  function showModal() {
    setSelectedProductos(productos);
    const modal = document.getElementById("modalEditar");

    modal.showModal();
  }

  return (
    <div>
      <table className={styles.tabla}>
        <tr className={styles.titulo1}>
          <th>Nombre</th>

          <th>Descripción</th>
          <th>Categoria</th>
          <th>Material</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th>Url</th>
        </tr>
        <tr>
          <td key={productos.id}>{productos.nombre}</td>

          <td className={styles.desc}>{productos.descripcion}</td>
          <td>{productos.categoria}</td>
          <td>{productos.material}</td>
          <td>{productos.valor}</td>
          <td>{productos.tipo}</td>

          <td>{productos.url[0]}</td>
        </tr>
      </table>

      {/* 
      <p>{productos.nombre}</p>
    <p>{productos.tipo}</p>
      <p>{productos.descripcion}</p>
      <p>{productos.categoria}</p>
      <p>{productos.material}</p>
      <p>{productos.valor}</p>
      <p>{productos.url}</p> */}

      <button onClick={showModal}>EDITAR</button>
      <button
        onClick={() =>
          eliminarProducto(productos.id).then((confirmacion) => {
            refresh();
          })
        }
      >
        ELIMINAR
      </button>
    </div>
  );
}

export default ProductosAgregados;
