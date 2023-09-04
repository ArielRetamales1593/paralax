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

        <select
          value={productoEditar?.material}
          onChange={(e) => {
            setProductoEditar({ ...productoEditar, material: e.target.value });
          }}
          id="material"
          name="material"
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Maderas Nativas">Maderas Nativas</option>
          <option value="Tablero de pino alistonado">
            Tablero de pino alistonado
          </option>
          <option value="Tableros de terciado mueblería">
            Tableros de terciado mueblería
          </option>
          <option value="Pino seleccionado">Pino seleccionado</option>
          <option value="Acero">Acero</option>
          <option value="Bronce">Bronce</option>
        </select>

        <br />

        <br />
        <label htmlFor="tipo">Tipo:</label>
        <select
          value={productoEditar?.tipo}
          onChange={(e) => {
            setProductoEditar({ ...productoEditar, tipo: e.target.value });
          }}
          id="tipo"
          name="tipo"
          required
        >
          <option value="">Seleccione una opción</option>
          <option value="Banca">Banca</option>
          <option value="Artefactos">Artefactos</option>
          <option value="Librero">Librero</option>
          <option value="Micromueble">Micromueble</option>
          <option value="Rack">Rack</option>
          <option value="Recibidor">Recibidor</option>
          <option value="Silla">Silla</option>
        </select>

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
          <option value="Económico">Económico</option>
          <option value="Standar">Standar</option>
          <option value="Premium">Premium</option>
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
