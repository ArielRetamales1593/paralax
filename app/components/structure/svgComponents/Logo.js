import * as React from "react";
import { useState, useEffect, useRef } from "react";

function Logo(props) {
  const [marginTop, setMarginTop] = useState("8%");
  const montanasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const m1 = montanasRef.current;
      const { y } = m1.getBoundingClientRect();
      const marginTop = y <= 0 ? "40%" : "8%";
      setMarginTop(marginTop);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {};
  }, []);

  return (
    <svg
      style={{ marginTop, transition: "margin-top 1s ease," }}
      ref={montanasRef}
      xmlns="http://www.w3.org/2000/svg"
      width={500}
      height={678}
      fill="none"
      {...props}
    >
      <g fill="#FFF9F6" filter="url(#a)">
        <path d="M104.76 750.48v59.63c0 6.85-5.58 12.43-12.43 12.43s-12.43-5.58-12.43-12.43 5.58-12.43 12.43-12.43H98.13v-6.63h-6.4v.02c-10.23.32-18.46 8.73-18.46 19.04 0 10.31 8.55 19.06 19.06 19.06 10.51 0 19.06-8.55 19.06-19.06v-59.63h-6.63ZM415.33 793.4c3.54 0 6.41 2.88 6.41 6.41v59.89h7.63v-59.89c0-7.75-6.3-14.05-14.05-14.05-3.72 0-7.23 1.44-9.88 4.06l-.35.35-.35-.35a13.952 13.952 0 0 0-9.88-4.06c-3.73 0-7.23 1.44-9.88 4.06l-.35.35-.35-.35a13.97 13.97 0 0 0-9.88-4.06h-6.25v7.63h6.25a6.4 6.4 0 0 1 4.95 2.33 6.376 6.376 0 0 1 1.46 4.08v30.28h7.63V799.8c0-3.54 2.88-6.41 6.41-6.41 3.53 0 6.41 2.88 6.41 6.41v30.28h7.63V799.8c0-3.54 2.88-6.41 6.41-6.41l.03.01Z" />
        <path
          stroke="#FFF9F6"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M124.11 774.3c0 .77-.69 1.46-1.39 1.46-.92 0-1.54-.69-1.54-1.46 0-.85.62-1.46 1.54-1.46.69 0 1.39.62 1.39 1.46Zm-.69 52.87h-1.69v-40.41h1.69v40.41ZM159.28 817.71c0 6.62-5 10.31-12.55 10.31-5.23 0-9.16-1.77-12.39-4.31l.85-1.23c3.16 2.39 6.77 4.08 11.54 4.08 6.85 0 10.93-3.23 10.93-8.85 0-4.85-2.23-7.23-10.7-10.77-8.54-3.54-11.39-5.85-11.39-11.78 0-5.16 4.08-9.24 11.16-9.24 5.62 0 9.31 1.69 11.78 3.69l-.92 1.23c-2.46-2-5.93-3.46-10.93-3.46-5.93 0-9.47 3.54-9.47 7.7 0 5 2.39 6.93 10.54 10.39 8.77 3.77 11.54 6.08 11.54 12.24h.01ZM199.61 806.39c0 .31 0 .54-.08.85h-30.09c.15 12.39 6.31 19.32 14.39 19.32 5.7 0 9.08-1.31 12.78-3.46l.69 1.23c-3.93 2.31-7.62 3.69-13.62 3.69-8.31 0-15.85-7-15.85-21.09s7.16-21.01 16.01-21.01c8.85 0 15.78 7.39 15.78 20.47h-.01Zm-1.62-.54c-.23-12.01-6-18.47-14.16-18.47s-14.08 6.46-14.39 18.47h28.55ZM241.55 827.17h-1.69v-24.63c0-10.7-5.08-15.16-13.08-15.16-6.23 0-13.7 3.39-13.7 15.08v24.7h-1.69v-40.41h1.69v8.77c1.54-6.39 7.16-9.62 14.01-9.62 8.62 0 14.47 4.69 14.47 16.32v24.94l-.01.01Zm-3.23-55.49c-.38 4.39-2.85 6.62-6.23 6.62-2.23 0-3.93-1.23-5.77-2.54-2.23-1.62-3.69-2.85-5.77-2.85-2.62 0-4.31 1.62-4.85 5.23h-1.39c.38-4.39 2.85-6.62 6.23-6.62 2.23 0 4 1.23 5.77 2.54 2.23 1.62 3.69 2.85 5.77 2.85 2.62 0 4.31-1.69 4.85-5.23h1.39ZM287.19 806.93c0 13.62-7.7 21.09-17.32 21.09-9.62 0-17.32-7.47-17.32-21.09 0-13.62 7.7-21.01 17.32-21.01 9.62 0 17.32 7.54 17.32 21.01Zm-1.69 0c0-12.7-6.85-19.55-15.62-19.55s-15.62 6.85-15.62 19.55c0 12.7 6.85 19.63 15.62 19.63s15.62-6.93 15.62-19.63ZM328.97 827.02l-14.85-40.25h1.69l14.01 38.1 14.08-38.1h1.69l-20.24 54.64h-1.69l5.31-14.39ZM437.48 786.77h1.69v24.63c0 10.7 5.08 15.16 13.08 15.16 6.23 0 13.7-3.39 13.7-15.08v-24.7h1.69v40.41h-1.69v-8.77c-1.54 6.39-7.16 9.62-14.01 9.62-8.62 0-14.47-4.69-14.47-16.32v-24.94l.01-.01ZM510.75 806.39c0 .31 0 .54-.08.85h-30.09c.15 12.39 6.31 19.32 14.39 19.32 5.7 0 9.08-1.31 12.78-3.46l.69 1.23c-3.93 2.31-7.62 3.69-13.62 3.69-8.31 0-15.85-7-15.85-21.09s7.16-21.01 16.01-21.01c8.85 0 15.78 7.39 15.78 20.47h-.01Zm-1.62-.54c-.23-12.01-6-18.47-14.16-18.47s-14.08 6.46-14.39 18.47h28.55ZM522.52 771.99l1.69-.92v22.7c3.31-4.46 8-7.85 14.01-7.85 9 0 15.24 6.16 15.24 20.86s-6.31 21.24-15.39 21.24c-5.77 0-10.54-3.23-13.85-7.7v6.85h-1.69v-55.18h-.01Zm1.69 23.94v22.01c3.08 4.93 8.16 8.62 13.7 8.62 8.62 0 13.85-6.08 13.85-19.78 0-13.7-5.39-19.39-13.85-19.39-5.46 0-10.47 3.54-13.7 8.54ZM566.85 827.17h-1.69v-55.18l1.69-.92v56.11-.01ZM610.33 806.39c0 .31 0 .54-.08.85h-30.09c.15 12.39 6.31 19.32 14.39 19.32 5.7 0 9.08-1.31 12.78-3.46l.69 1.23c-3.93 2.31-7.62 3.69-13.62 3.69-8.31 0-15.85-7-15.85-21.09s7.16-21.01 16.01-21.01c8.85 0 15.78 7.39 15.78 20.47h-.01Zm-1.62-.54c-.23-12.01-6-18.47-14.16-18.47s-14.08 6.46-14.39 18.47h28.55ZM643.26 817.71c0 6.62-5 10.31-12.55 10.31-5.23 0-9.16-1.77-12.39-4.31l.85-1.23c3.16 2.39 6.77 4.08 11.54 4.08 6.85 0 10.93-3.23 10.93-8.85 0-4.85-2.23-7.23-10.7-10.77-8.54-3.54-11.39-5.85-11.39-11.78 0-5.16 4.08-9.24 11.16-9.24 5.62 0 9.31 1.69 11.78 3.69l-.92 1.23c-2.46-2-5.93-3.46-10.93-3.46-5.93 0-9.47 3.54-9.47 7.7 0 5 2.39 6.93 10.54 10.39 8.77 3.77 11.54 6.08 11.54 12.24h.01Z"
        />
        <path d="m207.51 520.65-1.52 1.32c-3.85 3.35-8.75 5.2-13.81 5.2-11.61 0-21.05-9.45-21.05-21.06v-34.77h-8.4v-10.63h8.4v-16.23h10.62v16.23h9.17v10.63h-9.17v34.77c0 5.75 4.68 10.43 10.43 10.43 2.49 0 4.91-.92 6.82-2.58l1.5-1.31 7.01 8ZM315.53 444.49h-10.62v80.66h10.62v-80.66ZM255.83 457.99c-9.47 0-17.55 6.38-20.15 15.05l10.01 3.6c1.1-4.58 5.26-8.02 10.14-8.02 5.61 0 10.28 4.57 10.41 10.15v.55h.07l-.07 19.71v7.08c0 5.75-4.68 10.43-10.43 10.43s-10.42-4.68-10.42-10.43 4.65-10.4 10.37-10.43h5.18l.04-10.63-5.85.02c-11.22.43-20.36 9.86-20.37 21.04 0 5.56 2.19 10.83 6.17 14.83 4 4.02 9.28 6.23 14.88 6.23 11.61 0 21.06-9.45 21.06-21.06v-27.38c-.17-11.44-9.6-20.75-21.04-20.75v.01ZM354.19 444.48h-10.63v80.66h10.63v-80.66ZM488.77 463.49l-7 8-1.51-1.31c-1.9-1.66-4.32-2.57-6.81-2.57-5.75 0-10.43 4.67-10.43 10.42v47.14h-10.63v-47.14c0-11.61 9.45-21.05 21.06-21.05 5.06 0 9.97 1.84 13.81 5.2l1.51 1.31ZM403.29 516.55c-5.62 0-10.29-4.58-10.42-10.2v-.11c0-.39.01-.68.01-1.04l-.02-5.1V479.05c0-5.75 4.68-10.43 10.43-10.43s10.43 4.68 10.43 10.43-4.68 10.43-10.43 10.43h-5.12v10.62h5.12c11.61 0 21.06-9.44 21.06-21.05 0-11.61-9.45-21.06-21.06-21.06s-20.68 8.96-21.04 20.46l-.02 28c.16 11.43 9.61 20.73 21.06 20.73 10.57 0 19.42-7.96 20.83-18.21l-10.44-2.34c-.27 5.49-4.87 9.91-10.39 9.91v.01Z" />
        <path d="M506.84 274.09c-12.96 0-24.69 5.22-33.23 13.67-8.54-8.45-20.27-13.67-33.23-13.67-12.96 0-24.69 5.22-33.23 13.67-8.54-8.45-20.27-13.67-33.23-13.67H352v28.05h21.92c5.22 0 9.96 2.08 13.42 5.46.5.48.96.99 1.4 1.53a19.104 19.104 0 0 1 4.39 12.22v99.99h28.05v-99.99c0-10.61 8.6-19.21 19.21-19.21 10.61 0 19.21 8.6 19.21 19.21v99.99h28.05v-99.99c0-10.61 8.6-19.21 19.21-19.21 10.61 0 19.21 8.6 19.21 19.21v313.07c-50.15 30.21-107.72 46.36-167.77 46.36-87.09 0-168.97-33.92-230.55-95.5-61.58-61.58-95.5-143.46-95.5-230.55s33.92-168.97 95.5-230.55c39.64-39.64 87.69-67.79 140.13-82.84l-7.65-27.27c-59.97 15.73-107.3 45.28-152.3 90.28C41.05 171.23 4.22 260.15 4.22 354.73c0 94.58 36.83 183.5 103.71 250.38s155.8 103.71 250.38 103.71c70.72 0 138.28-20.6 195.82-58.95V321.35c0-26.1-21.16-47.25-47.25-47.25l-.04-.01Z" />
        <path d="M608.65 104.34C541.77 37.46 452.85.63 358.27.63c-21.14 0-41.99 1.85-62.38 5.46v348.64c0 29-23.59 52.59-52.59 52.59-29 0-52.59-23.59-52.59-52.59 0-29 23.59-52.59 52.59-52.59.22 0 .43.02.65.02v-.02h23.9v-28.05h-27.09v.07c-43.29 1.35-78.1 36.96-78.1 80.57 0 43.61 36.17 80.64 80.64 80.64s80.63-36.17 80.63-80.64V30.48a331.28 331.28 0 0 1 34.33-1.8c87.09 0 168.97 33.92 230.55 95.5 61.58 61.58 95.5 143.46 95.5 230.55s-33.91 168.97-95.5 230.55c-2.2 2.2-4.43 4.35-6.68 6.48l18.02 21.84 8.49-8.49c66.88-66.88 103.71-155.8 103.71-250.38 0-94.58-36.83-183.5-103.71-250.38l.01-.01Z" />
      </g>
      <defs>
        <filter
          id="a"
          width={500}
          height={678}
          x={0.22}
          y={0.63}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_238_204"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_238_204"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export default Logo;
