import { db } from "../Firebase/credenciales";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

export default async function buscarNombre() {
  const collectionRef = collection(db, "productos");

  // crear query
  const querydes = query(collectionRef, where("categoria", "==", string));

  const docusCifrados = await getDocs(querydes);
  const docus = docusCifrados.docs.map((d) => d.data());
  return docus;
}
