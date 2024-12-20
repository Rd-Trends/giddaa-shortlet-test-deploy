import * as React from "react";
import { SVGProps } from "react";
const PhotoIcon = ({
  color = "#335F32",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M13.437 26.873a5.319 5.319 0 0 1-5.313-5.312V3.773L2.086 5.156A2.812 2.812 0 0 0 .094 8.593l5.177 19.33A2.84 2.84 0 0 0 7.996 30c.23 0 .466-.029.698-.09l12.6-3.037h-7.857Zm2.812-15.624c1.379 0 2.5-1.121 2.5-2.5 0-1.378-1.121-2.5-2.5-2.5a2.502 2.502 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5Z"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M13.437 26.873a5.319 5.319 0 0 1-5.313-5.312V3.773L2.086 5.156A2.812 2.812 0 0 0 .094 8.593l5.177 19.33A2.84 2.84 0 0 0 7.996 30c.23 0 .466-.029.698-.09l12.6-3.037h-7.857Zm2.812-15.624c1.379 0 2.5-1.121 2.5-2.5 0-1.378-1.121-2.5-2.5-2.5a2.502 2.502 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5Z"
    />
    <path
      fill={color}
      d="M29.996 3.75A3.75 3.75 0 0 0 26.246 0H13.749a3.75 3.75 0 0 0-3.75 3.75v17.498a3.75 3.75 0 0 0 3.75 3.75h12.499a3.75 3.75 0 0 0 3.75-3.75V3.75ZM13.748 2.5h12.499a1.25 1.25 0 0 1 1.25 1.25v8.048l-.95-.95a2.192 2.192 0 0 0-3.1 0l-5.95 5.95-1.575-1.575a2.19 2.19 0 0 0-3.1 0l-.324.324V3.75a1.25 1.25 0 0 1 1.25-1.25Z"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M29.996 3.75A3.75 3.75 0 0 0 26.246 0H13.749a3.75 3.75 0 0 0-3.75 3.75v17.498a3.75 3.75 0 0 0 3.75 3.75h12.499a3.75 3.75 0 0 0 3.75-3.75V3.75ZM13.748 2.5h12.499a1.25 1.25 0 0 1 1.25 1.25v8.048l-.95-.95a2.192 2.192 0 0 0-3.1 0l-5.95 5.95-1.575-1.575a2.19 2.19 0 0 0-3.1 0l-.324.324V3.75a1.25 1.25 0 0 1 1.25-1.25Z"
    />
  </svg>
);
export default PhotoIcon;
