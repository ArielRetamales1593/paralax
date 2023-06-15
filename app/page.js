import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/structure/Nav";
import Footer from "./components/structure/Footer";
import Paralax from "./components/structure/paralax";
import Info from "./components/structure/Info";

export default function Home() {
  return (
    <>
      <Nav />

      <Paralax />
      <Info />
      <Footer />
    </>
  );
}
