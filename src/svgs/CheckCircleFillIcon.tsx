import * as React from "react";
import { SVGProps } from "react";

const CheckCircleFillIcon = ({
  color = "#fff",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
    {...props}>
    <circle cx={6.5} cy={6.5} r={6.5} fill="#4B4B4B" />
    <path
      fill={color}
      d="M4.735 8.32 3.266 6.69a.393.393 0 0 0-.596 0 .505.505 0 0 0 0 .663l1.769 1.964a.393.393 0 0 0 .596 0l4.478-4.972a.505.505 0 0 0 0-.662.393.393 0 0 0-.597 0L4.735 8.32Z"
    />
  </svg>
);
export default CheckCircleFillIcon;
