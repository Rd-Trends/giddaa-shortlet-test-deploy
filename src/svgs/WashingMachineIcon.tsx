import * as React from "react";
import { SVGProps } from "react";

const WashingMachineIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={34}
    viewBox="0 0 30 34"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M25.5 0H3.643A3.643 3.643 0 0 0 0 3.643v26.714A3.643 3.643 0 0 0 3.643 34H25.5a3.643 3.643 0 0 0 3.643-3.643V3.643A3.643 3.643 0 0 0 25.5 0ZM3.643 2.429H25.5a1.214 1.214 0 0 1 1.214 1.214v6.071H2.43V3.643a1.214 1.214 0 0 1 1.214-1.214ZM25.5 31.57H3.643a1.214 1.214 0 0 1-1.214-1.214V12.143h24.285v18.214a1.214 1.214 0 0 1-1.214 1.214Z"
    />
    <path
      fill={color}
      d="M14.572 14.572a7.287 7.287 0 1 0 0 14.573 7.287 7.287 0 0 0 0-14.573Zm0 12.142a4.856 4.856 0 1 1-.001-9.712 4.856 4.856 0 0 1 0 9.712Zm6.07-19.428h2.43a1.214 1.214 0 0 0 0-2.429h-2.43a1.214 1.214 0 1 0 0 2.429Zm-14.57 0H8.5a1.214 1.214 0 1 0 0-2.429H6.071a1.214 1.214 0 0 0 0 2.429Z"
    />
  </svg>
);
export default WashingMachineIcon;
