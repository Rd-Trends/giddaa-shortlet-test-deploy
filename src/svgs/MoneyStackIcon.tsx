import * as React from "react";
import { SVGProps } from "react";

const MoneyStackIcon = ({
  color = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={27}
    viewBox="0 0 36 27"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M28.834 26.274H.75a.75.75 0 0 1-.75-.75V9.45a.75.75 0 0 1 .75-.75h28.084a.75.75 0 0 1 .75.75v16.075a.75.75 0 0 1-.75.75ZM1.5 24.774h26.584V10.2H1.5v14.575Z"
    />
    <path
      fill={color}
      d="M23.998 24.002H5.588a.75.75 0 0 1-.75-.75 1.507 1.507 0 0 0-1.506-1.505.75.75 0 0 1-.75-.75v-7.02a.75.75 0 0 1 .75-.75 1.508 1.508 0 0 0 1.506-1.505.75.75 0 0 1 .75-.75h18.41a.75.75 0 0 1 .75.75 1.507 1.507 0 0 0 1.5 1.506.75.75 0 0 1 .75.75v7.019a.75.75 0 0 1-.75.75 1.507 1.507 0 0 0-1.506 1.505.75.75 0 0 1-.744.75Zm-17.752-1.5h17.1a3.018 3.018 0 0 1 2.152-2.164v-5.706a3.016 3.016 0 0 1-2.161-2.16H6.243a3.016 3.016 0 0 1-2.161 2.16v5.706a3.017 3.017 0 0 1 2.16 2.164h.004Z"
    />
    <path
      fill={color}
      d="M14.792 21.62a4.134 4.134 0 1 1-.001-8.268 4.134 4.134 0 0 1 .001 8.268Zm0-6.767a2.633 2.633 0 1 0-.002 5.267 2.633 2.633 0 0 0 .002-5.267Z"
    />
    <path
      fill={color}
      d="M30.613 21.979a.75.75 0 0 1-.075-1.496l.865-.091-1.522-14.495L5.736 8.432a.75.75 0 0 1-.156-1.493l24.887-2.613a.75.75 0 0 1 .825.668l1.68 15.987a.749.749 0 0 1-.668.825l-1.612.17c-.027.001-.053.003-.08.003Z"
    />
    <path
      fill={color}
      d="M34.025 17.524a.75.75 0 0 1-.14-1.486l.488-.094L31.626 1.63 8.121 6.138a.751.751 0 0 1-.283-1.475L32.08.013a.75.75 0 0 1 .878.595l3.028 15.788a.75.75 0 0 1-.595.877l-1.224.235a.768.768 0 0 1-.142.016Z"
    />
  </svg>
);
export default MoneyStackIcon;