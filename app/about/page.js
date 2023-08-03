import React from "react";
import Nav from "../components/structure/Nav/Nav";
import Footer from "../components/structure/Footer/Footer";
import Slider from "../components/structure/Slider/Slider";
import Contenido from "../components/structure/Contenido/Contenido";
import Banner from "../components/Banner/Banner";
import Plan from "../components/plan/Plan";
import Pros from "../components/Pro/Pros";
const page = () => {
  return (
    <div>
      <Nav />

      <Banner />
      <Plan />
      <Contenido />

      <Slider />

      <Pros />
      <Footer />
    </div>
  );
};

export default page;
