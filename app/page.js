"use client";

import Video from "./components/structure/Video";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import FondoDesk from "./components/structure/svgComponents/FondoDesk";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos o tiempo de espera antes de mostrar la página
    setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Cambia este valor al tiempo que desees que dure la animación
  }, []);

  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    // Cambiar el valor de showVideo después de que se complete la animación de carga
    const timeout = setTimeout(() => {
      setShowVideo(false);
    }, 1000); // Cambia este valor al tiempo que desees que dure la transición del video

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <>
      <CSSTransition
        in={showVideo && isLoading} // Mostrar el video solo si isLoading es true y showVideo es true
        timeout={10000} // El tiempo de duración de la transición del video (1 segundo en este ejemplo)
        classNames="fade"
        unmountOnExit
      >
        <div>
          <Video />
        </div>
      </CSSTransition>

      <CSSTransition
        in={!showVideo && !isLoading} // Mostrar FondoDesk solo si isLoading es false y showVideo es false
        timeout={5000} // El tiempo de duración de la transición de FondoDesk (1 segundo en este ejemplo)
        classNames="fade"
        unmountOnExit
      >
        <div>
          <FondoDesk />
        </div>
      </CSSTransition>

      {/* <div>{isLoading ? <Video /> : <FondoDesk />}</div> */}
    </>
  );
}
