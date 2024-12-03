import * as React from "react";
import { SVGProps } from "react";

const MenuIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={18}
    fill="none"
    {...props}>
    <rect width={22} height={2} y={0.172} fill={color} rx={1} />
    <rect width={22} height={2} y={8.089} fill={color} rx={1} />
    <rect
      width={14.548}
      height={2}
      x={7.097}
      y={16.005}
      fill={color}
      rx={1}
    />
  </svg>
);
export default MenuIcon;
