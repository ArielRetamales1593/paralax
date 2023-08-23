import React from "react";
import Catalago from "../components/Catalogo/Catalago";
import Link from "next/link";

const page = (productos) => {
  return (
    <div>
      <Catalago productos={productos} />
    </div>
  );
};

export default page;
