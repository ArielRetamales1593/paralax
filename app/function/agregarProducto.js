import { db } from "../Firebase/credenciales";
import { collection, addDoc } from "firebase/firestore";

export default async function AgregarProducto(data) {
  try {
    const collectionRef = collection(db, "productos");
    const pendienteId = await addDoc(collectionRef, data);
    console.log(pendienteId);
  } catch (error) {
    console.log(error);
  }
}
