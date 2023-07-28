import React from "react";
import Form from "../components/structure/Form/Form";
import About from "../components/about/About";
import Team from "../components/about/Team";

const page = () => {
  return (
    <div>
      <About />
      <Team />
      <Form />
    </div>
  );
};

export default page;
