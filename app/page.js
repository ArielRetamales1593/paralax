"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/structure/Nav";
import Footer from "./components/structure/Footer";
import Paralax from "./components/structure/paralax";
import Info from "./components/structure/Info";
import Video from "./components/structure/Video";
import { useState, useEffect } from "react";
import Fondo1Cel from "./components/structure/Fondo1Cel";
import FondoDesk from "./components/structure/svgComponents/FondoDesk";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos o tiempo de espera antes de mostrar la página
    setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Cambia este valor al tiempo que desees que dure la animación
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Verificar el ancho de la ventana al cargar la página

    window.addEventListener("resize", handleResize); // Agregar el evento de cambio de tamaño de ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar el componente
    };
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <Video />
        ) : (<FondoDesk/>)
          }
      </div>

      {/* <Fondo1Cel />

      <div>{isLoading ? <Video /> : <div>{<Paralax />}</div>}</div> */}

      {/* <Nav /> */}
      {/* 
      <Paralax />
      <Info />
      <Footer /> */}
    </>
  );
}
