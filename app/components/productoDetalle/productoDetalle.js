import React from "react";
import styles from "./productoDetalle.module.css";
import agregarCotizacion from "@/app/function/agregarCotizacion";
import Link from "next/link";
import FormDialog from "../Modal/Modal,";
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
        <div className={styles.contSlider}>
          <h2 className={`${styles.titulo} ${ptSans.className}`}>
            {productos.nombre}
          </h2>
          <section className={styles.slider}>
            <img className={styles.foto} src={productos.url} alt="/" />
            <img className={styles.foto} src={productos.url} alt="/" />
            <img className={styles.foto} src={productos.url} alt="/" />
            <img className={styles.foto} src={productos.url} alt="/" />
            <img className={styles.foto} src={productos.url} alt="/" />
          </section>
        </div>
      </div>

      <div className={styles.datos}>
        <div className={styles.info1}>
          <p className={styles.item}> MATERIAL: {productos.material}</p>
          <p> ANCHO 250 cm LARGO 223 cm</p>
        </div>
        <p> {productos.descripcion}</p>

        {/* <div className={styles.contForm}>
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
        </div> */}
        <h3 className={styles.precio}> ${productos.valor}</h3>

        <FormDialog productos={productos} />
      </div>
    </div>
  );
}

export default ProductosDetalle;
