import React from "react";
import styles from "./Contenido.module.css";

function Contenido() {
  return (
    <div className={styles.contenido}>
      <h1 className={styles.titulo}> ¡Bienvenido a DM Taller!</h1>
      <div className={styles.bienvenida}>
        <p className={styles.parrafo}>
          Nos apasiona crear piezas de mobiliario excepcionales que complementen
          tu estilo de vida y realcen la belleza de tu hogar. Nuestro equipo de
          artesanos y diseñadores altamente capacitados trabajan con dedicación
          y atención al detalle para ofrecerte muebles de la más alta calidad.
          En DM Taller encontrarás una amplia selección de muebles para cada
          espacio de tu Hogar
          {/* tu hogar. Nos enorgullece utilizar materiales duraderos y sostenibles en
        la fabricación de nuestros muebles. Cada pieza es cuidadosamente
        elaborada para garantizar su resistencia y longevidad, mientras que
        nuestro compromiso con la sostenibilidad nos impulsa a minimizar nuestro
        impacto en el medio ambiente. En DM Taller, comprendemos que cada
        cliente tiene necesidades y gustos únicos. Por eso, ofrecemos opciones
        personalizadas para adaptar nuestros muebles a tus preferencias. Ya sea
        nuestro equipo estará encantado de ayudarte a crear la pieza de tus
        sueños. Navega por nuestra página web y descubre nuestro catálogo
        deasdas muebles impresionantes. Estamos seguros de que encontrarás esa
        pieza perfecta que elevará la estética de tu hogar. Además, nuestro
        equipo de atención al cliente estará encantado de asistirte en todas tus
        consultas y asegurarse de que tengas una experiencia de compra
        excepcional. En DM Taller, creemos que los muebles son más que simples
        objetos. Son expresiones de estilo, comodidad y personalidad. Permítenos
        ayudarte a transformar tu hogar en un espacio que refleje tu esencia y
        te haga sentir verdaderamente en casa. ¡Explora nuestro mundo de muebles
        en DM Taller y déjanos ser parte de tu historia de diseño! */}
        </p>

        <img
          className={styles.foto}
          width={500}
          src="/assets/img/captura.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Contenido;