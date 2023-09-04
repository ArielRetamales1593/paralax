import React from "react";
import styles from "./Contenido.module.css";
import { PT_Sans } from "next/font/google";
const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const titleStyle = {
  fontFamily: ptSans.family, // Utiliza la fuente de Google para el título
  // Ejemplo de tamaño de fuente
};

import localFont from "next/font/local";

const myFont = localFont({ src: "../../../font/state.otf" });

function Contenido() {
  const customStyle = {
    fontFamily: myFont.family,
    fontSize: "12px",
    // Aquí puedes agregar más estilos según tus necesidades
  };
  return (
    <div className={styles.contenido}>
      <h1 className={`${styles.titulo} ${ptSans.className}`}>
        {" "}
        ¡Bienvenido a dmTaller!
      </h1>
      <h2 className={`${styles.titulo2} ${myFont.className}`}>
        Carpintería de Autor en Muebles a Medida{" "}
      </h2>
      <div className={styles.bienvenida}>
        <div className={styles.contMsj}>
          <img
            className="marco"
            width={520}
            height={370}
            src="/assets/img/blanco222.png"
            alt=""
          />

          <div className={`${styles.parrafo1} ${myFont.className}`}>
            <p>
              DmTaller es un emprendimiento creativo que consiste en la
              fabricación de proyectos de carpintería de autor, diseñados para
              transformar y potenciar tu hogar de forma integral y a la medida,
              escuchando tus necesidades, sueños y anhelos, interpretándolos en
              una propuesta de diseño personalizado.
              <br /> <br />
              Ofrecemos un trabajo original, de diseño simple y práctico.
              Nuestro trabajo lo ejercemos con el cariño y con el rigor de un
              equipo de arquitectos dedicado al diseño y fabricación de muebles.
            </p>
          </div>
        </div>

        <img
          className={styles.foto}
          width={550}
          src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Sillas%20Pilar%20(115).JPG"
        ></img>
      </div>
    </div>
  );
}

export default Contenido;
