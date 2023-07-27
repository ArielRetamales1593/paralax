import { auth } from "../Firebase/credenciales";
import { signOut } from "firebase/auth";

export default async function logOut() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
