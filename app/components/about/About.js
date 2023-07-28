import React from "react";
import "../../../public/css/media.css";

const About = () => {
  return (
    <div className="desk">
      <div className="contMsj">
        <img
          className="marco"
          width={320}
          src="/assets/img/blanco.png"
          alt=""
        />
        <a href="https://www.instagram.com/de_eme_taller/?hl=es">
          <img className="iG" src="/assets/img/ig.svg" alt="" />
        </a>

        <div className="parrafo1">
          <p>
            Estamos creando cosas nuevas y pronto verás un sitio con todo el
            diseño que te mereces. <br /> <br />
            Revisa nuestros proyectos aquí.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
