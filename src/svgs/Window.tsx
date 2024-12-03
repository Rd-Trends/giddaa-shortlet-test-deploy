import * as React from "react";
import { SVGProps } from "react";

const WindowIcon = ({ color = "#000", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={29}
    viewBox="0 0 28 29"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M25.2 28.786H2.8c-.77 0-1.429-.274-1.977-.822A2.697 2.697 0 0 1 0 25.986v-22.4c0-.77.274-1.43.823-1.978A2.695 2.695 0 0 1 2.8.786h22.4a2.7 2.7 0 0 1 1.978.822A2.7 2.7 0 0 1 28 3.586v22.4a2.7 2.7 0 0 1-.822 1.978 2.7 2.7 0 0 1-1.978.822Zm-12.6-15.4v-9.8H2.8v9.8h9.8Zm0 2.8H2.8v9.8h9.8v-9.8Zm2.8 0v9.8h9.8v-9.8h-9.8Zm0-2.8h9.8v-9.8h-9.8v9.8Z"
    />
  </svg>
);
export default WindowIcon;
