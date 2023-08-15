import { db } from "../Firebase/credenciales";
import { deleteDoc, collection, doc } from "firebase/firestore";

export default async function eliminarProducto(id) {
  try {
    const collectionRef = collection(db, "productos");
    const docuRef = doc(collectionRef, id);
    await deleteDoc(docuRef);
  } catch (err) {
    console.log(err);
  }
}
