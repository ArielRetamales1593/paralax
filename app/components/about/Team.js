"use client";
import React from "react";
import styles from "./Team.module.css";
import { useState } from "react";
import Link from "next/link";

import { PT_Sans } from "next/font/google";
const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const Team = () => {
  return (
    <div>
      <div className={styles.containerImg}>
        <div className={styles.boxImg}>
          <figure className={styles.figura}>
            <h2 className={styles.titulo}>NOSOTROS Y NOSOTRAS</h2>
            <p className={styles.info}>
              Despúes de años de exploración y experimentación amateur, dmTaller
              se establece formalmente en mayo del 2021, en el peor momento de
              la pandemia, con los contagios por las nubes, falta de stock y
              cadenas de abestecimiento mermadas por las cuarentenas.
            </p>
            <img
              className={styles.img}
              src="https://storage.cloud.google.com/fotos-productos/SELECCI%C3%93N%20DMTALLER/DSC_0417.JPG"
              alt=""
            />
          </figure>
        </div>

        {/* ... Repite el mismo patrón para las demás imágenes ... */}

        <div className={styles.boxImg}>
          <Link href={"/products/ug8imGU48b0Y1MbBkkcf"}>
            <figure className={styles.figura}>
              <p className={styles.info1}>
                {" "}
                Emprender no fue fácil en ese contexto, pero el cariño del
                entorno y de los clientes fueron un calor que nos motivó a
                seguir adelante, pese a todo.
              </p>
              <img
                className={styles.img}
                src="https://storage.cloud.google.com/fotos-productos/SELECCI%C3%93N%20DMTALLER/hogar%20profundo/hogar%20profundo%2010.JPG"
                alt=""
              />
            </figure>
          </Link>
        </div>
        <div className={styles.boxImg}>
          <Link href={"/products/ug8imGU48b0Y1MbBkkcf"}>
            <h2 className={styles.titulo4}>NUESTRO TALLER</h2>
            <p className={styles.info3}>
              Hoy contamos con un taller de 240m2, un equipo profesional de
              primer nivel conformado por arquitectos y diseñadores,
              herramientas de corte por Control Numercio Computarizado (CNC),
              eléctricas de todo tipo y manuales, para distintas soluciones que
              ponen a prueba nuestra creatividad y precisión.
            </p>
            <figure className={styles.figura}>
              <img
                className={styles.img}
                src="https://storage.cloud.google.com/fotos-productos/SELECCI%C3%93N%20DMTALLER/ping%C3%BCinos/ping%C3%BCinos%2007.JPEG"
                alt=""
              />
            </figure>
          </Link>
        </div>
      </div>

      <div className={styles.contInfoCel}>
        <p className={styles.infoCel}>
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
        </p>
      </div>
    </div>
  );
};

export default Team;
