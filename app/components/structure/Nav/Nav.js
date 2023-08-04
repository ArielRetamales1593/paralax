// import styles from "../../../page.module.css";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav1}>
      <div>
        <img src="/assets/logos/logo.svg" alt="" width={150} />
      </div>

      <ul className={styles.nav2}>
        <a href="">
          <li>INICIO</li>
        </a>
        <a href="../cotizacion">
          <li>MUEBLES</li>
        </a>
        <a href="../cotizacion">
          <li>CATALOGO</li>
        </a>
        <a href="./assets/pages/contacto.html">
          <li>NOSOTROS</li>
        </a>
      </ul>
      <a href="./index.js">
        <p>Cotiza aquí</p>
      </a>
    </nav>
  );
}
