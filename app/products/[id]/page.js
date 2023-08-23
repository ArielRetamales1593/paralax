"use client";
import { useEffect, useState } from "react";
import LeerProductos from "@/app/function/leerProductos";

import ProductosDetalle from "@/app/components/productoDetalle/productoDetalle";

export default function Page({ params }) {
  console.log(params);

  useEffect(() => {
    LeerProductos().then((productos) => {
      const productosFiltrados = productos.filter(
        (producto) => producto.id === params.id
      );
      setidProductos(productosFiltrados);
    });
  }, [params.id]);

  const [IdProductos, setidProductos] = useState([]);

  return (
    <div>
      <div>
        {IdProductos.length > 0 ? (
          IdProductos.map((producto) => (
            <ProductosDetalle key={producto.id} productos={producto} />
          ))
        ) : (
          <p>No se encontraron productos asociados a este ID.</p>
        )}
      </div>
    </div>
  );
}
