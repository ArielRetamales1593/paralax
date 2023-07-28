"use client";
import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
    privacidad: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario a través de una API o realizar alguna acción con los datos.
    console.log(formData);
  };

  return (
    <>
      <div className={styles.fondoForm}>
        <div className={styles.contForm}>
          <div>
            <img src="/assets/logos/logo.svg" />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="asunto">Asunto:</label>
            <select
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="productos">Consulta sobre productos</option>
              <option value="precios">Consulta sobre precios</option>
              <option value="entrega">Consulta sobre entrega</option>
              <option value="otro">Otro</option>
            </select>
            <br />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
            <br />
            <label htmlFor="privacidad">Acepto la política de privacidad</label>
            <input
              className={styles.check}
              type="checkbox"
              id="privacidad"
              name="privacidad"
              checked={formData.privacidad}
              onChange={handleChange}
              required
            />

            <br />

            <button type="submit">Enviar consulta</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
