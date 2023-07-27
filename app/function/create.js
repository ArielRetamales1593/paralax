import { db } from "../Firebase/credenciales";
import { collection, addDoc } from "firebase/firestore";

export default async function Crear(data) {
  try {
    const collectionRef = collection(db, "prueba");
    const pendienteid = await addDoc(collectionRef, data);
    console.log(pendienteid);
  } catch (error) {
    console.log(error);
  }
}
