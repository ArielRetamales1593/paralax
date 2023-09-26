// import styles from "../../../page.module.css";
import styles from "./Nav.module.css";
import Link from "next/link";
import "../../../../public/css/media.css";

import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export default function Nav() {
  return (
    <nav className={styles.nav1}>
      <Link href={"/"}>
        <div>
          <img
            className={styles.logo}
            src="/assets/logos/logo.svg"
            alt=""
            width={250}
          />
        </div>
      </Link>

      <ul className={`${styles.nav2} ${ptSans.className}`}>
        <Link href={"/"}>
          <li className={styles.item}>INICIO</li>
        </Link>

        <Link href={"/products"}>
          <li className={styles.item}>CATALOGO</li>
        </Link>
        <Link href={"/about"}>
          <li className={styles.item}>NOSOTROS</li>
        </Link>
        <Link href={"/contact"}>
          <li className={styles.item}>CONTACTO</li>
        </Link>
      </ul>
      <a href="./index.js">
        <button className={`${styles.cotiza} ${ptSans.className}`}>
          COTIZA AQUÍ
        </button>
      </a>
    </nav>
  );
}
