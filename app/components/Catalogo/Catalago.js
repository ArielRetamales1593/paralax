"use client";
import React, { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import styles from "./Catalogo.module.css";

import Loader1 from "../../components/structure/Loader/Loader1";

import LeerProductos from "@/app/function/leerProductos";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const Catalago = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    LeerProductos().then((productos) => {
      setAllproductos(productos);
      setLoading(false);
    });
  }, []);

  const [allProductos, setAllproductos] = useState(null);

  return (
    <>
      {/* <div className={styles.orden}>
        <label for="ordenar"> </label>
        <select className={styles.select} id="ordenar">
          <option value="precio-bajo">Organizar por</option>
          <option value="precio-bajo">Precio más bajo</option>
          <option value="popular">Popular</option>
          <option value="precio-alto">Precio más caro</option>
          <option value="nuevo">Más nuevo</option>
        </select>
      </div> */}

      <div className={styles.contenedor}>
        <div className={styles.filtros}>
          <nav>
            <ul className={styles.lista}>
              <h3 className={`${styles.categoria} ${ptSans.className}`}>
                CATEGORIAS
              </h3>

              <li
                className={styles.item}
                onClick={() => setSelectedCategory(null)}
              >
                Todos
              </li>
              <li
                className={styles.item}
                onClick={() => setSelectedCategory("Sillas")}
              >
                Sillas
              </li>

              <li
                className={styles.item}
                onClick={() => setSelectedCategory("Estantes")}
              >
                Estantes
              </li>
              <li
                className={styles.item}
                onClick={() => setSelectedCategory("Mesas")}
              >
                Mesas
              </li>
            </ul>
          </nav>
        </div>

        {/* <div className={styles.cont}>
          {allProductos &&
            allProductos.map((productos) => <Gallery productos={productos} />)}
        </div> */}

        {/* <div className={styles.cont}>
          {allProductos &&
            allProductos
              .filter((productos) => productos.nombre === "Silla Contraveta") // Filtrar por categoría
              .map((productos) => <Gallery productos={productos} />)}
        </div> */}

        {loading ? (
          // Utiliza tu componente de loader personalizado
          <div className={styles.loaderContainer}>
            <Loader1 />
          </div>
        ) : (
          <div className={styles.cont}>
            {allProductos &&
              (selectedCategory
                ? allProductos
                    .filter((productos) => productos.tipo === selectedCategory)
                    .map((productos) => <Gallery productos={productos} />)
                : allProductos.map((productos) => (
                    <Gallery productos={productos} />
                  )))}
          </div>
        )}
      </div>
    </>
  );
};

export default Catalago;
