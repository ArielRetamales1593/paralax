import React from "react";
import Msj from "./svgComponents/Msj";
import style from "../../page.module.css";
import Image from "next/image";

const Fondo1Cel = () => {
  return (
    <div className={style.cel}>
      <Image
        src="/assets/img/blanco.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />

      <p>sss</p>
    </div>
  );
};

export default Fondo1Cel;
