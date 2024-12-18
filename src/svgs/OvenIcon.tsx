import * as React from "react";
import { SVGProps } from "react";

const OvenIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={25}
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M18.375 0H2.625A2.625 2.625 0 0 0 0 2.625v19.25A2.625 2.625 0 0 0 2.625 24.5h15.75A2.625 2.625 0 0 0 21 21.875V2.625A2.625 2.625 0 0 0 18.375 0ZM2.625 1.75h15.75a.875.875 0 0 1 .875.875V7H1.75V2.625a.875.875 0 0 1 .875-.875Zm15.75 21H2.625a.875.875 0 0 1-.875-.875V8.75h17.5v13.125a.875.875 0 0 1-.875.875Z"
    />
    <path
      fill={color}
      d="M11.375 5.25h1.75a.875.875 0 1 0 0-1.75h-1.75a.875.875 0 1 0 0 1.75Zm-7 0h3.5a.875.875 0 0 0 0-1.75h-3.5a.875.875 0 0 0 0 1.75Zm12.25 0a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Zm-.875 5.25H5.25a1.75 1.75 0 0 0-1.75 1.75v7A1.75 1.75 0 0 0 5.25 21h10.5a1.75 1.75 0 0 0 1.75-1.75v-7a1.75 1.75 0 0 0-1.75-1.75Zm0 8.75H5.25v-7h10.5v7Z"
    />
  </svg>
);
export default OvenIcon;
