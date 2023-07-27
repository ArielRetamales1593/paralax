"use client";

import React from "react";
import logOut from "../function/logOut";
// import Nav from "../components/Nav";
import { useEffect } from "react";

export default function Admin({}) {
  // useEffect(() => {
  //   Leer();
  // }, []);

  return (
    <main>
      {/* <Nav usuario={user.email} /> */}
      <h1>hola</h1>

      <p> hola </p>
      <button onClick={logOut} className="bt1">
        logout
      </button>

      {/* <AgregarProducto /> */}
      {/* <button onClick={logOut} className="bt1">
        logout
      </button> */}
    </main>
  );
}
