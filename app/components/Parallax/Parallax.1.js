"use client";
import { useEffect, useState } from "react";
import styles from "./Parallax.module.css";

import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export default function Parallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const startPoint = 200; // Por ejemplo, comienza a moverse después de 100 píxeles

      const logoPosition = Math.max(
        -500,
        100 + (currentScrollY - startPoint) * 0.5
      );

      setScrollY(logoPosition);
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.fondo}>
      <img className={styles.mon1} src="/assets/svg/mon1.svg"></img>
      <img className={styles.mon2} src="/assets/svg/mon2.svg"></img>
      <img className={styles.mon3} src="/assets/svg/mon3.svg"></img>
      <img className={styles.mon4} src="/assets/svg/mon4.svg"></img>
      <img className={styles.mon5} src="/assets/svg/mon5.svg"></img>

      <div className={styles.contLogo} style={{ top: `${scrollY}px` }}>
        <img className={styles.logo} src="/assets/logos/logo.svg" alt="Logo" />
      </div>
    </div>
  );
}
