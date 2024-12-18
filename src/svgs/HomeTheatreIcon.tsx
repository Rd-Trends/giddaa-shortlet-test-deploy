import * as React from "react";
import { SVGProps } from "react";

const HomeTheatreIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={30}
    viewBox="0 0 24 30"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M12 13.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0 7.5a5.25 5.25 0 1 0 0 10.5A5.25 5.25 0 0 0 12 15Zm0 7.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
    />
    <path
      fill={color}
      d="M19.5 0h-15A4.5 4.5 0 0 0 0 4.5v21A4.5 4.5 0 0 0 4.5 30h15a4.5 4.5 0 0 0 4.5-4.5v-21A4.5 4.5 0 0 0 19.5 0ZM21 25.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 25.5v-21A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v21Z"
    />
  </svg>
);
export default HomeTheatreIcon;
