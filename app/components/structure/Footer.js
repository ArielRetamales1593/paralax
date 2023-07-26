"use client";
import styles from "../../page.module.css";

export default function Footer() {
  return (
    <div className={styles.contFooter}>
      <nav className={styles.footer}>
        <div>
          {" "}
          <div>
            <img src="/assets/logos/logo.svg" width={250} alt="" />
          </div>
        </div>
        <div>
          <strong>REDES SOCIALES</strong>

          <ul className="redesSociales">
            <a>
              <li>
                <img src="/assets/logos/ig.svg" width={35} />
              </li>
            </a>
            <a>
              <li>
                <img src="/assets/logos/fb.svg" width={35} />
              </li>
            </a>
            <a>
              <li>
                {" "}
                <img src="/assets/logos/wa.svg" width={35} />
              </li>
            </a>
          </ul>
        </div>
        <div>
          <strong>DIRECCIÓN</strong>
          <ul className="redesSociales">
            <li>
              <p className="ubi"> Sierra Bella 1280, Santiago</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
