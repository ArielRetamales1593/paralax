"use client";
import React, { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";

import LeerProductos from "@/app/function/leerProductos";

const Catalago = () => {
  useEffect(() => {
    LeerProductos().then((productos) => {
      setAllproductos(productos);
    });
  }, []);

  const [allProductos, setAllproductos] = useState(null);

  return (
    <div>
      {allProductos &&
        allProductos.map((productos) => <Gallery productos={productos} />)}
    </div>
  );
};

export default Catalago;
