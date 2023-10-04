"use client";

import React from "react";
import Nav from "./components/structure/Nav/Nav";
import Footer from "./components/structure/Footer/Footer";

import Contenido from "./components/structure/Contenido/Contenido";
import Banner from "./components/Banner/Banner";
import Plan from "./components/plan/Plan";
import GridFotos from "./components/gridFOTOS/GridFotos";

import Pros2 from "./components/Pros2/Pros2";
import TImeLine from "./components/TimeLine/TImeLine";
import Parallax from "./components/Parallax/Parallax.1";

const page = () => {
  return (
    <div>
      <Parallax />
      <Banner />

      <Contenido />
      <GridFotos />
      <Plan />

      <Pros2 />

      <TImeLine />
    </div>
  );
};

export default page;
