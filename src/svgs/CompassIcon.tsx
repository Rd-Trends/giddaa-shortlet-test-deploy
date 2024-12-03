import * as React from "react";
import { SVGProps } from "react";

const CompassIcon = ({ color = "#000", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M14 28a14 14 0 1 1 14-14 14.016 14.016 0 0 1-14 14Zm0-26.25A12.25 12.25 0 1 0 26.25 14 12.263 12.263 0 0 0 14 1.75Z"
    />
    <path
      fill={color}
      d="M5.958 22.918a.875.875 0 0 1-.8-1.23l4.95-11.137a.873.873 0 0 1 .444-.444l11.137-4.95a.876.876 0 0 1 1.155 1.155l-4.95 11.137a.873.873 0 0 1-.444.444l-11.137 4.95a.88.88 0 0 1-.355.075ZM11.57 11.57l-3.89 8.75 8.75-3.89 3.89-8.75-8.75 3.89Z"
    />
    <path
      fill={color}
      d="M14 15.75a1.75 1.75 0 1 1 .002-3.5 1.75 1.75 0 0 1-.002 3.5Z"
    />
  </svg>
);
export default CompassIcon;
