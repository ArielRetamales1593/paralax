"use client";
import React from "react";
import createContacto from "@/app/function/createContacto";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

import styles from "./Form.module.css";

import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const Form = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const telefono = e.target.telefono.value;
    const asunto = e.target.asunto.value;
    const mensaje = e.target.mensaje.value;

    console.log("hola ", nombre, telefono);

    const data = { nombre, email, telefono, asunto, mensaje };
    await createContacto(data);
    e.target.nombre.value =
      e.target.email.value =
      e.target.telefono.value =
      e.target.nombre.value =
      e.target.mensaje.value =
        "";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Nos comunicaremos contigo dentro de las proximas 48 hrs",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  return (
    <>
      <div className={styles.fondoForm}>
        <div className={styles.contMsj}>
          <h1 className={styles.contactenos}> CONTÁCTANOS</h1>
          <img className={styles.marco} src="/assets/img/blanco.png"></img>
        </div>

        <div className={styles.contForm}>
          <div className={styles.logo}>
            <img
              className={styles.foto}
              src="https://storage.cloud.google.com/fotos-productos/SELECCI%C3%93N%20DMTALLER/sillas%20patagonia/sillas%20patagonia%2004.JPG"
            />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <br />

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
            <br />

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" />
            <br />

            <label htmlFor="asunto">Asunto:</label>
            <select id="asunto" name="asunto" required>
              <option value="">Seleccione una opción</option>
              <option value="productos">Consulta sobre productos</option>
              <option value="precios">Consulta sobre precios</option>
              <option value="entrega">Consulta sobre entrega</option>
              <option value="otro">Otro</option>
            </select>
            <br />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            <br />

            <button
              className={`${styles.boton} ${ptSans.className}`}
              type="submit"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
