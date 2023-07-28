import React from "react";
import Nav from "../components/structure/Nav/Nav";
import Footer from "../components/structure/Footer/Footer";
import Slider from "../components/structure/Slider/Slider";
import Contenido from "../components/structure/Contenido/Contenido";
import Banner from "../components/Banner/Banner";
import Store from "../components/Cards/Cards";
const page = () => {
  return (
    <div>
      <Nav />

      <Banner />

      <Contenido />

      <Slider />
      <Store />

      <Footer />
    </div>
  );
};

export default page;
