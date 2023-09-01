"use client";
import React from "react";
import agregarCotizacion from "@/app/function/agregarCotizacion";
import styles from "./agregarCotizacion.module.css";

const Agregar = ({ refresh }) => {
  async function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const tipo = e.target.tipo.value;
    const material = e.target.material.value;
    const valor = e.target.valor.value;
    const categoria = e.target.categoria.value;
    const descripcion = e.target.descripcion.value;
    const url = e.target.url.value;

    const data1 = {
      nombre,
      tipo,
      material,
      valor,
      categoria,
      descripcion,
      url,
    };
    await agregarCotizacion(data1);
    e.target.nombre.value =
      e.target.tipo.value =
      e.target.material.value =
      e.target.valor.value =
      e.target.categoria.value =
      e.target.descripcion.value =
      e.target.url.value =
        "";
    refresh();
  }

  return (
    <>
      <div className={styles.fondoForm}>
        <div className={styles.contForm}>
          <div>
            <img src="/assets/logos/logo.svg" />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <br />

            <br />

            <label htmlFor="material">Material:</label>
            <input type="text" id="material" name="material" />
            <br />

            <label htmlFor="tipo">Tipo:</label>
            <input type="text" id="tipo" name="tipo" />
            <br />

            <label htmlFor="valor">Valor:</label>
            <input type="number" id="valor" name="valor" />
            <br />

            <label htmlFor="categoria">Categoria:</label>
            <select id="categoria" name="categoria" required>
              <option value="">Seleccione una opción</option>
              <option value="Economico">Economico</option>
              <option value="Standar">Standar</option>
              <option value="Premiun">Premiun</option>
            </select>

            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="4"
              required
            ></textarea>
            <br />
            <label htmlFor="url">Url Imagen:</label>
            <input type="text" id="url" name="url" />
            <br />

            <button type="submit">Enviar consulta</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Agregar;
