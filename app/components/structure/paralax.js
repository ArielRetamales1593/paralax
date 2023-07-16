"use client";
import { useEffect, useState, useRef } from "react";

import "../../../public/css/media.css";
import styles from "../../page.module.css";
import Fondo from "./svgComponents/Fondo";
import M1 from "./svgComponents/Montana1";
import M2 from "./svgComponents/Montana2";
import M3 from "./svgComponents/Montana3";
import M4 from "./svgComponents/Montana4";
import Msj from "./svgComponents/Msj";
import Ig from "./svgComponents/Ig";
import Fondo1Cel from "./Fondo1Cel";

export default function Paralax() {
  // const [mont, setmont] = useState("");
  // const montanasRef = useRef();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const m1 = montanasRef.current;
  //     console.log(m1);
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const montanasRef = useRef(null);
  // const solRef = useRef(null);
  // const naranjoRef = useRef(null);
  // const logoRef = useRef(null);
  // const fondoRef = useRef(null);
  // const azulRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const value = window.scrollY;

  //     if (montanasRef.current) {
  //       montanasRef.current.style.transition = "margin-top 20%";
  //       montanasRef.current.style.marginTop = value * 5.8 + "px";

  //       if (value > 125) {
  //         montanasRef.current.style.display = "none";
  //       } else {
  //         montanasRef.current.style.display = "block";
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const [marginTop, setMarginTop] = useState("8%");
  // const montanasRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const m1 = montanasRef.current;
  //     const { y } = m1.getBoundingClientRect();
  //     const marginTop = y <= 100 ? "28%" : "8%";
  //     setMarginTop(marginTop);
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {};
  // }, []);

  return (
    <div className="contPaisaje">
      <Fondo />
      <M1 />
      <M2 />
      <M3 />
      <M4 />

      <div className="info">
        <Msj />
        <Ig />
      </div>
    </div>
  );
}
