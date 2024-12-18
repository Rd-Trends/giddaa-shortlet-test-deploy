import * as React from "react";
import { SVGProps } from "react";

const MicrowaveIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={28}
    viewBox="0 0 38 28"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M34.2 0H3.8A3.8 3.8 0 0 0 0 3.8v20.267a3.8 3.8 0 0 0 3.8 3.8h30.4a3.8 3.8 0 0 0 3.8-3.8V3.8A3.8 3.8 0 0 0 34.2 0ZM2.533 24.067V3.8A1.267 1.267 0 0 1 3.8 2.533h21.533v22.8H3.8a1.266 1.266 0 0 1-1.267-1.266Zm32.934 0a1.267 1.267 0 0 1-1.267 1.266h-6.333v-22.8H34.2A1.267 1.267 0 0 1 35.467 3.8v20.267Z"
    />
    <path
      fill={color}
      d="M20.267 5.067H7.6A2.533 2.533 0 0 0 5.067 7.6v12.667A2.533 2.533 0 0 0 7.6 22.8h12.667a2.533 2.533 0 0 0 2.533-2.533V7.6a2.533 2.533 0 0 0-2.533-2.533ZM7.6 20.267V7.6h12.667v12.667H7.6Zm25.334-7.6H30.4a1.267 1.267 0 1 0 0 2.533h2.534a1.267 1.267 0 0 0 0-2.533Zm0 5.066H30.4a1.267 1.267 0 0 0 0 2.534h2.534a1.267 1.267 0 0 0 0-2.534Z"
    />
  </svg>
);
export default MicrowaveIcon;
