import { db } from "../Firebase/credenciales";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

export default async function editarProducto(id, data) {
  const collectionRef = collection(db, "productos");
  const docuRef = doc(collectionRef, id);
  // acá se sobresctibe la info y con el merge no se borran datos
  const result = await setDoc(docuRef, data, { merge: true });
  return result;
}
