// import styles from "../../../page.module.css";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav1}>
      <div>
        <img src="/assets/logos/logo.svg" alt="" width={200} />
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
        <svg
          width="20"
          height="20"
          viewBox="0 0 665 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M332.146 365.403C433.048 365.403 514.847 283.605 514.847 182.701C514.847 81.7984 433.048 0 332.146 0C231.243 0 149.444 81.7984 149.444 182.701C149.444 283.605 231.243 365.403 332.146 365.403Z"
            fill="white"
          />
          <path
            d="M332.153 456.754C149.084 456.754 0 579.529 0 730.806C0 741.037 8.03886 749.076 18.2701 749.076H646.034C656.265 749.076 664.304 741.037 664.304 730.806C664.304 579.529 515.22 456.754 332.153 456.754Z"
            fill="white"
          />
        </svg>
      </a>
    </nav>
  );
}
