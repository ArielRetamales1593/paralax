import React from "react";
import Msj from "./svgComponents/Msj";
import style from "../../page.module.css";
import Image from "next/image";
import Info1 from "./svgComponents/Info";

const Fondo1Cel = () => {
  return (
    <div className={style.cel}>
      <Info1 />
    </div>
  );
};

export default Fondo1Cel;
