import * as React from "react";

const redirectToInstagram = () => {
  window.location.href = "https://www.instagram.com/tu_cuenta_de_instagram";
};

const Ig = (props) => (
  <svg
    onClick={redirectToInstagram}
    className="rs"
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#fefefe"
        d="M17.745 0h42.51C67.842.009 73.99 6.158 74 13.745v42.51C73.991 63.842 67.842 69.99 60.255 70h-42.51C10.158 69.99 4.01 63.842 4 56.255v-42.51C4.009 6.159 10.158.01 17.745 0Zm42.51 66.818c5.83-.007 10.556-4.732 10.563-10.563v-42.51c-.007-5.83-4.732-10.556-10.563-10.563h-42.51c-5.83.007-10.556 4.732-10.563 10.563v42.51c.007 5.83 4.732 10.556 10.563 10.563h42.51ZM39 18.232c9.26 0 16.768 7.507 16.768 16.768 0 9.26-7.507 16.768-16.768 16.768-9.26 0-16.768-7.507-16.768-16.768.01-9.256 7.512-16.757 16.767-16.768H39Zm0 30.354c7.504 0 13.586-6.082 13.586-13.586 0-7.504-6.082-13.586-13.586-13.586-7.503 0-13.586 6.082-13.586 13.586.009 7.5 6.086 13.577 13.585 13.586H39Zm24.277-33.313a4.55 4.55 0 1 1-9.1 0 4.55 4.55 0 0 1 9.1 0Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={78}
        height={78}
        x={0}
        y={0}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_280_119" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_280_119"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default Ig;
