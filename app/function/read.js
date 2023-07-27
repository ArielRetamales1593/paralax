import { db } from "@/firebase/credenciales";
import { collection, getDocs } from "firebase/firestore";

export default async function Leer() {
  try {
    const collectionRef = collection(db, "prueba");
    const documentos = await getDocs(collectionRef);
    const docus = documentos.docs.map((d) => d.data());
    console.log(docus);
  } catch (error) {
    console.log(error);
  }
}
