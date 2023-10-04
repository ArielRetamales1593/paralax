"use client";
import styles from "./Parallax.module.css";

import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });
import Link from "next/link";

export default function Parallax() {
  return (
    <div className={styles.fondo}>
      <img className={styles.mon1} src="/assets/svg/mon1.svg"></img>
      <img className={styles.mon2} src="/assets/svg/mon2.svg"></img>
      <img className={styles.mon3} src="/assets/svg/mon3.svg"></img>
      <img className={styles.mon4} src="/assets/svg/mon4.svg"></img>
      <img className={styles.mon5} src="/assets/svg/mon5.svg"></img>
      <img className={styles.logo} src="/assets/logos/logo3.svg"></img>
    </div>
  );
}
