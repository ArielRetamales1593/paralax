import { auth } from "../Firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginwithEmailAndPassword(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
