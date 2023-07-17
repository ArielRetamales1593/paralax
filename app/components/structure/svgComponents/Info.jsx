import React from "react";
import Image from "next/image";
import Ig from "./Ig";

const Info1 = () => {
  return (
    <div className="contDis">
      <Image
        className="cblanco"
        src="/assets/img/blanco.png"
        width={250}
        height={250}
        alt="Picture of the author"
      />

      <p className="dis">
        Estamos creando cosas nuevas y pronto verás un sitio con todo el diseño
        que te mereces. <br /> Revisa nuestros proyectos aquí.
      </p>

      <a
        className="instagram"
        href="https://www.instagram.com/de_eme_taller/?hl=es/"
      >
        <img src="/assets/img/ig.svg" alt="" />
      </a>

      <div className="contLogo">
        <img width={200} src="/assets/logos/logo.svg" alt="" />
      </div>
    </div>
  );
};

export default Info1;
