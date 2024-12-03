import * as React from "react";
import { SVGProps } from "react";

const CautionIcon = ({ color = "#000", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={33}
    viewBox="0 0 38 33"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="m19 6.93 13.006 22.596H5.994L19 6.93ZM19 0 0 33h38L19 0Zm1.727 24.316h-3.454v3.474h3.454v-3.474Zm0-10.421h-3.454v6.947h3.454v-6.947Z"
    />
  </svg>
);
export default CautionIcon;
