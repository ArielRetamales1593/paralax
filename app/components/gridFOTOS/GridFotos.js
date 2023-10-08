import React from "react";
import styles from "./GridFotos.module.css";
import Link from "next/link";

import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const GridFotos = () => {
  return (
    <div>
      <h2 className={`${styles.titulo0} ${ptSans.className}`}>
        NUESTROS PRODUCTOS
      </h2>

      <div className={styles.containerImg}>
        <div className={styles.boxImg}>
          <Link href={"/products/ug8imGU48b0Y1MbBkkcf"}>
            <figure className={styles.figura}>
              <h2 className={styles.titulo}>CONTRAVETA</h2>
              <p className={styles.info}>
                Tipo de silla diseñada con una técnica de ensamblaje que
                involucra uniones diagonales en sus patas traseras, brindándole
                mayor estabilidad y resistencia.
              </p>
              <img
                className={styles.img}
                src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Silla%20contraveta%20(21).JPG"
                alt=""
              />
            </figure>
          </Link>
        </div>

        {/* ... Repite el mismo patrón para las demás imágenes ... */}

        <div className={styles.boxImg}>
          <Link href={"/products/ug8imGU48b0Y1MbBkkcf"}>
            <figure className={styles.figura}>
              <img
                className={styles.img}
                src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Silla%20contraveta%20(26).JPG"
                alt=""
              />
            </figure>
          </Link>
        </div>

        <div className={styles.boxImg}>
          <Link href={"/products/ug8imGU48b0Y1MbBkkcf"}>
            <figure className={styles.figura}>
              <img
                className={styles.img}
                src="https://storage.cloud.google.com/fotosdmt/mockup_pag%20web_dmtaller/Silla%20contraveta%20(27).JPG"
                alt=""
              />
            </figure>
          </Link>
        </div>
        <div className={styles.boxImg}>
          <Link href={"/products/ug8imGU48b0Y1MbBkkcf"}>
            <h2 className={styles.titulo2}>MICROMUEBLES</h2>
            <p className={styles.info2}>
              Muebles tamaño menores y especiales para ese lugar especial,
              creaciones en serie, o colecciones de objetos de deseo.
            </p>
            <figure className={styles.figura}>
              <img
                className={styles.img}
                src="https://storage.cloud.google.com/fotos-productos/SELECCI%C3%93N%20DMTALLER/micromuebles/3af54162-f1aa-419f-8d6b-f41eb2f58f95.jpg"
                alt=""
              />
            </figure>
          </Link>
        </div>

        <div className={styles.boxImg}>
          <p className={styles.info3}>
            Rack para TV de 50” fabricado íntegramente en tableros secos,
            cepillados y pulidos de lenga de tierra del fuego (cerezo
            patagónico)
          </p>
          <figure className={styles.figura}>
            <img
              className={styles.img}
              src="https://storage.cloud.google.com/fotos-productos/SELECCI%C3%93N%20DMTALLER/rack%20patagonia/rack%20patagonia%2016.jpg"
              alt=""
            />
          </figure>
        </div>

        <div className={styles.boxImg}>
          <h2 className={styles.titulo3}>RACK PATAGONIA </h2>

          <figure className={styles.figura}>
            <img
              className={styles.img}
              src="https://storage.cloud.google.com/fotos-productos/SELECCI%C3%93N%20DMTALLER/rack%20patagonia/rack%20patagonia%2010.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className={styles.contbtn}>
        <button className={`${styles.boton1} ${ptSans.className}`}>
          VER PRODUCTOS{" "}
        </button>
      </div>
    </div>
  );
};

export default GridFotos;
