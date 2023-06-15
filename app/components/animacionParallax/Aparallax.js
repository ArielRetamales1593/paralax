// import { useEffect, useRef } from "react";
// export const ParallaxComponent = () => {
//   const montanasRef = useRef(null);
//   const solRef = useRef(null);
//   const naranjoRef = useRef(null);
//   const logoRef = useRef(null);
//   const fondoRef = useRef(null);
//   const azulRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const value = window.scrollY;
//       //

//       montanasRef.current.style.transition = "margin-top 0.5s";
//       montanasRef.current.style.marginTop = value * 5.8 + "px";

//       if (value > 125) {
//         montanasRef.current.style.display = "none";
//       } else {
//         montanasRef.current.style.display = "block";
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return {
//     montanasRef,
//     solRef,
//     naranjoRef,
//     logoRef,
//     fondoRef,
//     azulRef,
//   };
// };

// export default ParallaxComponent;
