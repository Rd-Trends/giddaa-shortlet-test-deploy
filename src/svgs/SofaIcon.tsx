import * as React from "react";
import { SVGProps } from "react";

const SofaIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 42.795 24.623"
    {...props}>
    <g data-name="Group 2720" transform="translate(0 -5)">
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.397 20.037V8.226A2.726 2.726 0 0 0 18.671 5.5H6.86a2.726 2.726 0 0 0-2.726 2.726v2.884"
        data-name="Path 3028"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M38.66 11.11V8.226A2.726 2.726 0 0 0 35.934 5.5H24.123a2.726 2.726 0 0 0-2.726 2.726v11.811"
        data-name="Path 3029"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M39.569 10.952a2.726 2.726 0 0 0-2.726 2.726v6.36H5.952v-6.36a2.726 2.726 0 0 0-5.452 0v9.086a2.726 2.726 0 0 0 2.726 2.726h36.343a2.726 2.726 0 0 0 2.726-2.726v-9.086a2.726 2.726 0 0 0-2.726-2.726Z"
        data-name="Path 3030"
      />
      <circle
        cx={0.909}
        cy={0.909}
        r={0.909}
        data-name="Ellipse 393"
        transform="translate(12.312 11.86)"
      />
      <circle
        cx={0.909}
        cy={0.909}
        r={0.909}
        data-name="Ellipse 394"
        transform="translate(28.666 11.86)"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.317 25.333v3.786h5.452v-3.63"
        data-name="Path 3031"
      />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M35.026 25.489v3.634h5.452v-3.792"
        data-name="Path 3032"
      />
    </g>
  </svg>
);
export default SofaIcon;
