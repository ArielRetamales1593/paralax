"use client";
// import styles from "../../../page.module.css";
import styles from "./Footer.module.css";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.contFooter}>
      <nav className={styles.footer}>
        <div className={styles.logo}>
          <img src="/assets/logos/logo.svg" width={250} alt="" />
        </div>

        <div>
          <ul className={`${styles.redesSociales} ${ptSans.className}`}>
            <strong className={styles.item}>CONTACTO</strong>
            <Link href={"mailto:elcorreoquequieres@correo.com"}>
              <li>Diego@dmtaller.cl</li>
            </Link>
            <li>SIERRA BELLA </li>
          </ul>
        </div>

        <div>
          <ul className={`${styles.redesSociales} ${ptSans.className}`}>
            <strong className={styles.item}>INFORMACIÓN</strong>

            <Link href={"/contact"}>
              <li>NOSOTROS</li>
            </Link>
            <li>CONSULTAS</li>
            <li>ENTREGAS</li>
          </ul>
        </div>

        <div>
          <button className={`${styles.boton} ${ptSans.className}`}>
            COTIZA AQUÍ
          </button>
        </div>
      </nav>
    </div>
  );
}
