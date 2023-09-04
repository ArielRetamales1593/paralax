"use client";
import Leer from "../function/read";
import React from "react";
import logOut from "../function/logOut";
// import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import ConsultaUsuarios from "../components/Consulta Usuarios/ConsultaUsuarios";
import Agregar from "../components/agregarProducto/AgregarProducto";
import ProductosAgregados from "../components/ProductosAgregados/ProductosAgregados";
import LeerProductos from "../function/leerProductos";
import editarProducto from "../function/editarProducto";
import EditarModal from "../components/EditarModal/EditarModal";
import LeerCotizacion from "../function/leerCotizacion";
import ProductosCotizados from "../components/productosCotizados/ProductosCotizados";

export default function Admin({}) {
  function refresh() {
    LeerProductos()
      .then((productos) => {
        setAllproductos(productos);
      })
      .catch((err) => {
        alert(err);
      });
  }

  LeerCotizacion()
    .then((productos) => {
      setAllCotizacion(productos);
    })
    .catch((err) => {
      alert(err);
    });

  useEffect(() => {
    Leer()
      .then((consulta) => {
        setConsulta(consulta);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    refresh();
  }, []);

  const [allProductos, setAllproductos] = useState(null);
  const [allConsulta, setConsulta] = useState(null);
  const [selectedProductos, setSelectedProductos] = useState(null);
  const [allCotizacion, setAllCotizacion] = useState(null);
  return (
    <>
      {/* <Nav usuario={user.email} /> */}
      <h1>hola</h1>

      <p>Este es el sitio privado, para el admin</p>
      <button onClick={logOut} className="bt1">
        logout
      </button>

      {/* <AgregarProducto /> */}
      {/* <button onClick={logOut} className="bt1">
        logout
      </button> */}

      <EditarModal productos={selectedProductos} refresh={refresh} />
      <h2>Consulta Usuarios</h2>
      {allConsulta &&
        allConsulta.map((consulta) => <ConsultaUsuarios consulta={consulta} />)}
      <h2> Agregar Productos</h2>
      <Agregar refresh={refresh} />

      <h2>Productos Agregados</h2>
      {allProductos &&
        allProductos.map((productos) => (
          <ProductosAgregados
            productos={productos}
            setSelectedProductos={setSelectedProductos}
            refresh={refresh}
          />
        ))}
      <h2>Productos Cotizados </h2>
      {allCotizacion &&
        allCotizacion.map((productos) => (
          <ProductosCotizados productos={productos} />
        ))}
    </>
  );
}
