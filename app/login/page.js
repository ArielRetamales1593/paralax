"use client";
import { useState } from "react";

import Login from "../components/LoginForm/LoginAndForm";
import { auth } from "../Firebase/credenciales";
import { onAuthStateChanged } from "firebase/auth";
import Admin from "../admin/page";

export default function cuenta() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  });

  return user ? <Admin user={user} /> : <Login />;
}
