import React from "react";
import styles from "./ConsultaUsuarios.module.css";

const ConsultaUsuarios = ({ consulta }) => {
  return (
    <div className={styles.cont}>
      <table className={styles.table} border="1">
        <thead>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Asunto</th>
          <th>Mensaje</th>
          <th>Estado </th>
        </thead>
        <tr>
          <td>{consulta.nombre}</td>
          <td>{consulta.email}</td>
          <td>{consulta.telefono}</td>
          <td>{consulta.asunto}</td>
          <td>{consulta.mensaje}</td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ConsultaUsuarios;
