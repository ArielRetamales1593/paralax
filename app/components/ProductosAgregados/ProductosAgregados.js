import React from "react";
import eliminarProducto from "@/app/function/eliminarProducto";

function ProductosAgregados({ productos, setSelectedProductos, refresh }) {
  function showModal() {
    setSelectedProductos(productos);
    const modal = document.getElementById("modalEditar");

    modal.showModal();
  }

  return (
    <div>
      <p>{productos.nombre}</p>
      <p>{productos.tipo}</p>
      <p>{productos.descripcion}</p>
      <p>{productos.categoria}</p>
      <p>{productos.material}</p>
      <p>{productos.valor}</p>
      <p>{productos.url}</p>
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
