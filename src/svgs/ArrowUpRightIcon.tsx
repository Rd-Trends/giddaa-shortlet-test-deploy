import * as React from "react";
import { SVGProps } from "react";

const ArrowUpRightIcon = ({
  color = "#fff",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M3.823 1.806h2.872c.383 0 .702-.334.702-.734 0-.4-.32-.735-.702-.735H3.823c-.383 0-.702.335-.702.735 0 .4.32.734.702.734Z"
    />
    <path
      fill={color}
      d="M7.396 4.08V1.071c0-.4-.319-.735-.701-.735-.382 0-.702.334-.702.735v3.008c0 .4.32.735.702.735.382 0 .701-.335.701-.735Z"
    />
    <path
      fill={color}
      d="m2.058 6.965.878-.919 1.886-1.975a335245.535 335245.535 0 0 1 2.37-2.48.767.767 0 0 0 0-1.039.686.686 0 0 0-.992 0 43397.667 43397.667 0 0 0-2.764 2.894l-1.778 1.86-.592.62a.767.767 0 0 0 0 1.039c.27.283.722.283.992 0Z"
    />
  </svg>
);
export default ArrowUpRightIcon;
