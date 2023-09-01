import React from "react";
import styles from "./productoDetalle.module.css";
import agregarCotizacion from "@/app/function/agregarCotizacion";
import Link from "next/link";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

function ProductosDetalle({ productos }) {
  async function handleSubmit(e) {
    e.preventDefault();
    const nombre = productos.nombre;
    const tipo = productos.tipo;
    const material = productos.material;
    const valor = productos.valor;
    const categoria = productos.categoria;
    const descripcion = productos.descripcion;
    const usuario = e.target.usuario.value;
    const emailUsuario = e.target.emailUsuario.value;
    const telUsuario = e.target.telUsuario.value;

    console.log("hola ", nombre, valor, tipo);

    const data1 = {
      nombre,
      tipo,
      material,
      valor,
      categoria,
      descripcion,
      usuario,
      emailUsuario,
      telUsuario,
    };
    await agregarCotizacion(data1);
    e.target.usuario.value =
      e.target.emailUsuario.value =
      e.target.telUsuario.value =
        "";
  }

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
          <h2 className={`${styles.titulo} ${ptSans.className}`}>
            {productos.nombre}
          </h2>
          <p className={styles.item}>${productos.valor}</p>
        </div>
        <div>
          <p className={styles.item}> MATERIAL: {productos.material}</p>
          <p className={styles.item}> CATEGORIA: {productos.categoria}</p>
          <p> {productos.descripcion}</p>
        </div>

        <div className={styles.contForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="correo">Nombre:</label>
            <input type="text" id="usuario" name="usuario" required />
            <br />

            <br />

            <label htmlFor="emailUsuario">Correo:</label>
            <input type="text" id="emailUsuario" name="emailUsuario" />
            <br />

            <label htmlFor="telUsuario">Celular:</label>
            <input type="text" id="telUsuario" name="telUsuario" />
            <br />

            <button type="submit" className={styles.boton}>
              Cotizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductosDetalle;
