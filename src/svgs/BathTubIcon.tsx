import * as React from "react";
import { SVGProps } from "react";

const BathTubIcon = ({ color = "#000", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={29}
    viewBox="0 0 32 29"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M30.546 14.494H5.817V6.386A2.859 2.859 0 0 1 7.33 3.834 2.909 2.909 0 0 1 9 3.501a5.05 5.05 0 0 0 1.217 5.155l1.542 1.537a1.454 1.454 0 0 0 2.058 0l5.142-5.127a1.449 1.449 0 0 0 0-2.051l-1.542-1.538A5.088 5.088 0 0 0 10.83.979a5.821 5.821 0 0 0-5.393.615A5.796 5.796 0 0 0 2.91 6.386v8.108H1.455A1.457 1.457 0 0 0 0 15.944a1.449 1.449 0 0 0 1.455 1.451h1.454v4.352a4.34 4.34 0 0 0 .805 2.503 4.356 4.356 0 0 0 2.104 1.582v1.717A1.449 1.449 0 0 0 7.273 29a1.456 1.456 0 0 0 1.454-1.45v-1.451h14.546v1.45A1.448 1.448 0 0 0 24.727 29a1.456 1.456 0 0 0 1.455-1.45v-1.718a4.356 4.356 0 0 0 2.104-1.582 4.34 4.34 0 0 0 .805-2.503v-4.352h1.454a1.448 1.448 0 1 0 0-2.901ZM12.276 3.528a2.188 2.188 0 0 1 3.084 0l.515.512-3.085 3.077-.515-.512a2.174 2.174 0 0 1 0-3.078l.001.001Zm13.906 18.22a1.449 1.449 0 0 1-1.455 1.45H7.273a1.457 1.457 0 0 1-1.455-1.45v-4.353h20.364v4.352Z"
    />
  </svg>
);
export default BathTubIcon;
