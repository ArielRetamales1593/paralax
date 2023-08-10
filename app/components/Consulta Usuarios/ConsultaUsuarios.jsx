import React from "react";
import styles from "./ConsultaUsuarios.module.css";

const ConsultaUsuarios = ({ consulta }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.card}>
        <h2>Nombre: {consulta.nombre}</h2>
        <p>{consulta.email}</p>
        <p>{consulta.telefono}</p>
        <p>{consulta.asunto}</p>
        <p>{consulta.mensaje}</p>
      </div>
    </div>
  );
};

export default ConsultaUsuarios;
