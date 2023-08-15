import React, { useEffect, useState } from "react";
import styles from "./EditarModal.module.css";
import editarProducto from "@/app/function/editarProducto";

function EditarModal({ productos, refresh }) {
  useEffect(() => {
    setProductoEditar(productos);
  }, [productos]);

  const [productoEditar, setProductoEditar] = useState({ ...productos });

  function submitHandler(e) {
    e.preventDefault();
    editarProducto(productoEditar.id, productoEditar).then((confirmacion) => {
      const modal = document.getElementById("modalEditar");
      refresh();
      modal.close();
    });
  }
  return (
    <dialog id="modalEditar">
      <form onSubmit={submitHandler}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          value={productoEditar?.nombre}
          onChange={(e) => {
            setProductoEditar({ ...productoEditar, nombre: e.target.value });
          }}
          type="text"
          id="nombre"
          name="nombre"
          required
        />
        <br />

        <br />

        <label htmlFor="material">Material:</label>
        <input
          type="text"
          id="material"
          name="material"
          value={productoEditar?.material}
          onChange={(e) => {
            setProductoEditar({ ...productoEditar, material: e.target.value });
          }}
        />
        <br />

        <label htmlFor="tipo">Tipo:</label>
        <input
          value={productoEditar?.tipo}
          onChange={(e) => {
            setProductoEditar({ ...productoEditar, tipo: e.target.value });
          }}
          type="text"
          id="tipo"
          name="tipo"
        />
        <br />

        <label htmlFor="valor">Valor:</label>
        <input
          value={productoEditar?.valor}
          onChange={(e) => {
            setProductoEditar({ ...productoEditar, valor: e.target.value });
          }}
          type="number"
          id="valor"
          name="valor"
        />
        <br />

        <label>Categoria:</label>
        <select
          value={productoEditar?.categoria}
          onChange={(e) => {
            setProductoEditar({ ...productoEditar, categoria: e.target.value });
          }}
          id="categoria"
          name="categoria"
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="productos">Economico</option>
          <option value="precios">Standar</option>
          <option value="entrega">Premiun</option>
        </select>

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          value={productoEditar?.descripcion}
          onChange={(e) => {
            setProductoEditar({
              ...productoEditar,
              descripcion: e.target.value,
            });
          }}
          id="descripcion"
          name="descripcion"
          rows="4"
          required
        ></textarea>
        <br />
        <label htmlFor="tipo">Url Imagen:</label>
        <input
          value={productoEditar?.url}
          type="text"
          id="url"
          name="tipo"
          onChange={(e) => {
            setProductoEditar({ ...productoEditar, url: e.target.value });
          }}
        />
        <br />

        <button type="submit">Agregar</button>
      </form>
    </dialog>
  );
}

export default EditarModal;
