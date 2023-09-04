import { db } from "../Firebase/credenciales";
import { collection, getDocs } from "firebase/firestore";

export default async function LeerCotizacion() {
  try {
    const collectionRef = collection(db, "cotizacion");
    const documentos = await getDocs(collectionRef);
    const docus = documentos.docs.map((d) => {
      return { id: d.id, ...d.data() };
    });

    return docus;
  } catch (error) {
    console.log(error);
  }
}
