import React from "react";
import Nav from "../components/structure/Nav/Nav";
import Footer from "../components/structure/Footer/Footer";
import Slider from "../components/structure/Slider/Slider";
import Contenido from "../components/structure/Contenido/Contenido";
import Banner from "../components/Banner/Banner";
import Plan from "../components/plan/Plan";
import GridFotos from "../components/gridFOTOS/GridFotos";

import Pros2 from "../components/Pros2/Pros2";
import TImeLine from "../components/TimeLine/TImeLine";

const page = () => {
  return (
    <div>
      <Nav />

      <Banner />

      <Contenido />
      <GridFotos />
      <Plan />
      <Slider />

      <Pros2 />

      <TImeLine />
      <Footer />
    </div>
  );
};

export default page;
