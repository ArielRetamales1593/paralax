"use client";
import { useState } from "react";
import React from "react";
import loginwithEmailAndPassword from "../../function/loginEmail";
import registerUser from "../../function/register";
import loginGoogle from "../../function/loginGoogle";
import style from "./loginAndForm.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggin, setIsLoggin] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    // Aquí puedes agregar la lógica para procesar los datos del formulario, como enviar una solicitud al servidor para verificar las credenciales, almacenar datos de sesión, etc.

    if (isLoggin) {
      await loginwithEmailAndPassword(email, password);
    } else {
      await registerUser(email, password);
    }
  }

  return (
    <>
      <div className={style.fondoLogin}>
        <div className={style.contLogin}>
          <div>
            <img src="/assets/logos/logo.svg"></img>
          </div>

          <div>
            <h2>{isLoggin ? "inicia sesion" : "Registrate"}</h2>
            <form onSubmit={handleSubmit} className={style.form}>
              <label htmlFor="email">Correo electrónico:</label>
              <br />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <br />
              <label htmlFor="password">Contraseña:</label>
              <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />
              <br />
              <input
                className={style.formBtn}
                type="submit"
                value="Iniciar sesión"
              />
            </form>

            <button
              className={style.formBtn}
              onClick={() => setIsLoggin(!isLoggin)}
            >
              {isLoggin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
            </button>

            <button className={style.formBtn} onClick={loginGoogle}>
              Accede con google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
