"use client";
// import styles from "../../../page.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.contFooter}>
      <nav className={styles.footer}>
        <div>
          <div>
            <img src="/assets/logos/logo.svg" width={250} alt="" />
          </div>
        </div>
        <div>
          <strong>REDES SOCIALES</strong>

          <ul className={styles.redesSociales}>
            <a>
              <li>
                <img src="/assets/logos/ig.svg" width={30} />
              </li>
            </a>
            <a>
              <li>
                <img src="/assets/logos/fb.svg" width={30} />
              </li>
            </a>
            <a>
              <li>
                {" "}
                <img src="/assets/logos/wa.svg" width={30} />
              </li>
            </a>
          </ul>
        </div>
        <div>
          <strong>DIRECCIÓN</strong>
          <ul className={styles.redesSociales}>
            <li>
              <p className={styles.ubi}> Sierra Bella 1280, Santiago</p>
            </li>
          </ul>
        </div>

        <div>
          <strong>NOSOTROS</strong>
          <ul className={styles.redesSociales}>
            <li>
              <button className={styles.boton}>Cotiza Aquí</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
