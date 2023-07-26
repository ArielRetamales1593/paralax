import React from "react";
import Nav from "../components/structure/Nav";
import Footer from "../components/structure/Footer";
import Slider from "../components/structure/svgComponents/Slider";
import Contenido from "../components/structure/Contenido";

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
