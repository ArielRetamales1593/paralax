// import styles from "../../../page.module.css";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav1}>
      <div>
        <img
          className={styles.logo}
          src="/assets/logos/logo.svg"
          alt=""
          width={250}
        />
      </div>

      <ul className={styles.nav2}>
        <a href="">
          <li className={styles.item}>INICIO</li>
        </a>

        <a href="../cotizacion">
          <li className={styles.item}>CATALOGO</li>
        </a>
        <a href="./assets/pages/contacto.html">
          <li className={styles.item}>NOSOTROS</li>
        </a>
      </ul>
      <a href="./index.js">
        <button className={styles.cotiza}>COTIZA AQUÍ</button>
      </a>
    </nav>
  );
}
