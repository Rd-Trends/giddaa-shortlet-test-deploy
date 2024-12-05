import * as React from "react";
import { SVGProps } from "react";

const MailIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={24}
    viewBox="0 0 32 24"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M28 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm1.333 20A1.333 1.333 0 0 1 28 21.333H4A1.333 1.333 0 0 1 2.667 20V4A1.333 1.333 0 0 1 4 2.667h24A1.333 1.333 0 0 1 29.333 4v16Z"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M28 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm1.333 20A1.333 1.333 0 0 1 28 21.333H4A1.333 1.333 0 0 1 2.667 20V4A1.333 1.333 0 0 1 4 2.667h24A1.333 1.333 0 0 1 29.333 4v16Z"
    />
    <path
      fill={color}
      d="M24.667 5.509 16 10.464 7.333 5.509A1.336 1.336 0 1 0 6 7.824l9.333 5.333a1.378 1.378 0 0 0 1.323 0l9.333-5.333a1.333 1.333 0 1 0-1.322-2.315Z"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M24.667 5.509 16 10.464 7.333 5.509A1.336 1.336 0 1 0 6 7.824l9.333 5.333a1.378 1.378 0 0 0 1.323 0l9.333-5.333a1.333 1.333 0 1 0-1.322-2.315Z"
    />
  </svg>
);
export default MailIcon;
