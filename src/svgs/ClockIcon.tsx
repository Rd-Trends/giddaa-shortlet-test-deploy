import * as React from "react";
import { SVGProps } from "react";

const ClockIcon = ({ color = "#000", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M16 0a16 16 0 1 0 16 16A16.018 16.018 0 0 0 16 0Zm0 28.8A12.8 12.8 0 1 1 28.8 16 12.815 12.815 0 0 1 16 28.8Zm3.357-16.586L17.6 13.23V8a1.6 1.6 0 0 0-3.2 0v8a1.6 1.6 0 0 0 2.4 1.386l4.157-2.4a1.6 1.6 0 1 0-1.6-2.772Z"
    />
  </svg>
);
export default ClockIcon;
