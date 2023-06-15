import * as React from "react";
import { useEffect, useState, useRef } from "react";
function Montana2(props) {
  const [marginTop, setMarginTop] = useState("19%");
  const montanasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const m1 = montanasRef.current;
      const { y } = m1.getBoundingClientRect();
      const marginTop = y <= 200 ? "35%" : "21%";

      setMarginTop(marginTop);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {};
  }, []);

  return (
    <svg
      style={{ marginTop, transition: "margin-top 1s ease" }}
      ref={montanasRef}
      className="montana2"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Capa 2"
      viewBox="0 0 1920 526.18"
    >
      <path
        d="m0 194.16 60.7-50.48 31.07-28.15 21.35-30.1 20.39-42.71 51.45-31.07L211.18 0l49.51 15.53 60.19 29.13 30.09 23.3 47.57 26.02 100 37.08 143.68 59.22 137.85 54.36 97.08 10.68 73.79-18.44 37.86-1.94 47.57-21.36v27.18l24.27.97 41.74-15.53 28.16-.97 25.24.97 14.56 6.79h24.27l15.53-4.85 19.42-.97 15.53-11.65 26.21-14.56 20.39 4.85-8.74 26.21 107.76-37.86 59.22-25.24 29.13-18.44-21.36 27.18-17.48 22.33-13.59 28.15 47.57-25.24 19.42-5.83-8.74 21.36 20.39-12.62v15.54l-14.56 16.5 39.8-14.56 20.39-17.48 20.38-6.79-8.73 18.44-11.65 37.86 27.18-29.12 27.18-12.62v33.98l25.24-18.45 24.27-21.36 10.68-1.94 25.24-17.47 10.68-17.48 19.42-11.65 26.21 7.77 11.65 23.3 16.51 38.83 25.24-14.56 23.3-27.18 26.21-3.89 35.92 41.75 34.17-19.42v320.37L0 513.56v-319.4z"
        data-name="Capa 1"
        style={{
          fill: "#101623",
          opacity: 0.5,
        }}
      />
    </svg>
  );
}
export default Montana2;
