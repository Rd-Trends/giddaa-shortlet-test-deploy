import * as React from "react";
import { SVGProps } from "react";

const HamburgerMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={19}
    viewBox="0 0 22 19"
    fill="none"
    {...props}>
    <rect width={22} height={2} y={0.583} fill="#4B4B4B" rx={1} />
    <rect width={22} height={2} y={8.5} fill="#4B4B4B" rx={1} />
    <rect
      width={14.548}
      height={2}
      x={7.097}
      y={16.416}
      fill="#4B4B4B"
      rx={1}
    />
  </svg>
);
export default HamburgerMenuIcon;
