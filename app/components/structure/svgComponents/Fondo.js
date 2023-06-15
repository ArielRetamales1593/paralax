import * as React from "react";
import Logo from "./logo";
function Fondo(props) {
  return (
    <svg
      className="fondo"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 2"
      viewBox="0 0 1924.56 1006.63"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1={962.28}
          x2={962.28}
          y1={1006.63}
          y2={0}
          data-name="Degradado sin nombre 168"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e98e2d" />
          <stop offset={0.05} stopColor="#ea9336" />
          <stop offset={0.13} stopColor="#eea44f" />
          <stop offset={0.23} stopColor="#f4be79" />
          <stop offset={0.35} stopColor="#fde2b2" />
          <stop offset={0.38} stopColor="#ffebbf" />
          <stop offset={0.82} stopColor="#d7d6ff" />
          <stop offset={0.99} stopColor="#cad6ff" />
        </linearGradient>
      </defs>
      <path
        d="M0 0h1924.56v1006.63H0z"
        data-name="Capa 1"
        style={{
          fill: "url(#a)",
        }}
      />
    </svg>
  );
}
export default Fondo;
