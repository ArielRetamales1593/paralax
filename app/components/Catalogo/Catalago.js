"use client";
import React, { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import styles from "./Catalogo.module.css";

import LeerProductos from "@/app/function/leerProductos";

const Catalago = () => {
  useEffect(() => {
    LeerProductos().then((productos) => {
      setAllproductos(productos);
    });
  }, []);

  const [allProductos, setAllproductos] = useState(null);

  return (
    <div className={styles.contenedor}>
      <div className={styles.filtros}>
        <nav>
          <ul className={styles.lista}>
            <h3>CATEGORIAS</h3>
            <li className={styles.item}> Sillas</li>
            <li className={styles.item}> Velador</li>
            <li className={styles.item}> Estantes</li>
            <li className={styles.item}> Rack </li>
          </ul>
        </nav>
      </div>

      <div className={styles.cont}>
        {allProductos &&
          allProductos.map((productos) => <Gallery productos={productos} />)}
      </div>
    </div>
  );
};

export default Catalago;
