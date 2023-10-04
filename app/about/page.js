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
import Team from "../components/about/Team";
import Parallax from "../components/Parallax/Parallax.1";

const page = () => {
  return (
    <div>
      <Team />
      <Parallax />
    </div>
  );
};

export default page;
