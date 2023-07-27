import React from "react";
import Nav from "../components/structure/Nav/Nav";
import Footer from "../components/structure/Footer/Footer";
import Slider from "../components/structure/Slider/Slider";
import Contenido from "../components/structure/Contenido/Contenido";

const page = () => {
  return (
    <div>
      <Nav />

      <Slider />
      <Contenido />
      <Footer />
    </div>
  );
};

export default page;
