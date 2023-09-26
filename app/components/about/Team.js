"use client";
import React from "react";
import styles from "./Team.module.css";
import { useState } from "react";

const Team = () => {
  return (
    <div className={styles.contTeam}>
      {" "}
      <h1 className={styles.titulo}> Nosotros y Nosotras</h1>
      <div className={styles.aboutCont}>
        <img className={styles.marco} src="/assets/img/blanco222.png" />
        <p className={styles.parrafo1}>
          Despúes de años de exploración y experimentación amateur, dmTaller se
          establece formalmente en mayo del 2021, en el peor momento de la
          pandemia, con los contagios por las nubes, falta de stock y cadenas de
          abestecimiento mermadas por las cuarentenas. Emprender no fue fácil en
          ese contexto, pero el cariño del entorno y de los clientes fueron un
          calor que nos motivó a seguir adelante, pese a todo. Hoy contamos con
          un taller de 240m2, un equipo profesional de primer nivel conformado
          por arquitectos y diseñadores, herramientas de corte por Control
          Numercio Computarizado (CNC), eléctricas de todo tipo y manuales, para
          distintas soluciones que ponen a prueba nuestra creatividad y
          precisión.
          <br /> <br />
          Un mueble no es sólo una mesa o un armario: tiene un arraigo
          identitario, afectivo, y lleva consigo, literalmente, las huellas y
          manos de quienes lo hicieron. Esas huellas quedan patentes en el
          tiempo cuando son parte de una reflexión creativa, conjugando
          variables para desarrollar una propuesta integrada a su contexto e
          idónea a las necesidades implícitas o explícitas del cliente. Nos
          mueve una visión crítica hacia la industria de la inmediatez, el
          consumo y el despilfarro, donde se reproduce un modelo que degrada el
          medio ambiente y al comercio justo. Nos incomoda que los "muebles de
          moda" terminen todos en la basura, y que el trabajo reflexivo y
          artesanal sea sólo mirado bajo estándares mercantiles. En ese
          contexto, la carpintería de autor es hoy un bastión de resistencia,
          por ir en contra de la corriente de la obsolecencia y, porqué no, por
          ser una vanguardia del diseño sostenible simple y sin ostentaciones.
        </p>

        <div>
          <img
            className={styles.img}
            src="https://storage.cloud.google.com/fotos-productos/SELECCI%C3%93N%20DMTALLER/DSC_0417.JPG"
            width={550}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
