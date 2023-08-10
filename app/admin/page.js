"use client";
import Leer from "../function/read";
import React from "react";
import logOut from "../function/logOut";
// import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import ConsultaUsuarios from "../components/Consulta Usuarios/ConsultaUsuarios";
export default function Admin({}) {
  useEffect(() => {
    Leer()
      .then((consulta) => {
        setConsulta(consulta);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const [allConsulta, setConsulta] = useState(null);

  return (
    <main>
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

      {allConsulta &&
        allConsulta.map((consulta) => <ConsultaUsuarios consulta={consulta} />)}
    </main>
  );
}
