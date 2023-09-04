"use client";
import React from "react";
import AgregarProducto from "@/app/function/agregarProducto";

import styles from "./AgregarProducto.module.css";

const Agregar = ({ refresh }) => {
  const [urls, setUrls] = React.useState([]); // Inicializa el estado para almacenar las URLs

  function handleAddUrl() {
    // Agrega un campo de entrada para una nueva URL
    setUrls([...urls, ""]);
  }

  function handleUrlChange(index, value) {
    // Actualiza la URL en el arreglo de acuerdo al índice
    const updatedUrls = [...urls];
    updatedUrls[index] = value;
    setUrls(updatedUrls);
  }

  function handleRemoveUrl(index) {
    // Elimina una URL del arreglo en función del índice
    const updatedUrls = [...urls];
    updatedUrls.splice(index, 1);
    setUrls(updatedUrls);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const tipo = e.target.tipo.value;
    const material = e.target.material.value;
    const materialSecundario = e.target.materialSecundario.value;
    const valor = e.target.valor.value;
    const categoria = e.target.categoria.value;
    const descripcion = e.target.descripcion.value;
    const url = urls.filter((url) => url.trim() !== "");
    const alto = e.target.alto.value;
    const ancho = e.target.ancho.value;
    const largo = e.target.largo.value;
    const volumen = ancho * largo;

    console.log("hola ", nombre, valor, tipo, url);

    const data1 = {
      nombre,
      tipo,
      material,
      materialSecundario,
      valor,
      categoria,
      descripcion,
      url: urls,
      medidas: {
        alto,
        ancho,
        largo,
      },
      volumen,
    };
    await AgregarProducto(data1);
    e.target.nombre.value =
      e.target.tipo.value =
      e.target.material.value =
      e.target.materialSecundario.value =
      e.target.valor.value =
      e.target.categoria.value =
      e.target.descripcion.value =
      e.target.alto.value =
      e.target.ancho.value =
      e.target.largo.value =
        "";
    refresh();
  }

  return (
    <>
      <div className={styles.fondoForm}>
        <div className={styles.contForm}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <br />

            <br />

            <label htmlFor="material">Material:</label>
            <select id="material" name="material" required>
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

            <label htmlFor="material">Material Secundario:</label>
            <input
              type="text"
              id="materialSecundario"
              name="materialSecundario"
            />
            <br />

            <label htmlFor="tipo">Tipo:</label>
            <select id="tipo" name="tipo" required>
              <option value="">Seleccione una opción</option>
              <option value="Banca">Banca</option>
              <option value="Artefactos">Artefactos</option>
              <option value="Librero">Librero</option>
              <option value="Micromueble">Micromueble</option>
              <option value="Rack">Rack</option>
              <option value="Recibidor">Recibidor</option>
              <option value="Silla">Silla</option>
            </select>

            <label htmlFor="categoria">Categoria:</label>
            <select id="categoria" name="categoria" required>
              <option value="">Seleccione una opción</option>
              <option value="Económico">Económico</option>
              <option value="Standar">Standar</option>
              <option value="Premiun">Premiun</option>
            </select>

            <label htmlFor="valor">Valor:</label>
            <input type="number" id="valor" name="valor" />
            <br />

            <label htmlFor="alto">Alto:</label>
            <input type="number" id="alto" name="alto" />
            <br />
            <label htmlFor="ancho">Ancho:</label>
            <input type="number" id="ancho" name="ancho" />
            <br />
            <label htmlFor="largo">Largo:</label>
            <input type="number" id="largo" name="largo" />
            <br />

            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="4"
              required
            ></textarea>
            <br />

            {urls.map((url, index) => (
              <div key={index}>
                <label htmlFor={`url${index + 1}`}>
                  Url Imagen {index + 1}:
                </label>
                <input
                  type="text"
                  id={`url${index + 1}`}
                  name={`url${index + 1}`}
                  value={url}
                  onChange={(e) => handleUrlChange(index, e.target.value)}
                />
                <button type="button" onClick={() => handleRemoveUrl(index)}>
                  Eliminar
                </button>
              </div>
            ))}

            <button type="button" onClick={handleAddUrl}>
              Agregar URL
            </button>

            <button type="submit">Enviar consulta</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Agregar;
