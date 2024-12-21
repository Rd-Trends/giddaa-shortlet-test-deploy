import * as React from "react";
import { SVGProps } from "react";

const VerificationIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    viewBox="0 0 33 32"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="m11.4 32-2.85-4.876-5.4-1.22.525-5.637L0 16l3.675-4.267-.525-5.638 5.4-1.219L11.4 0l5.1 2.21L21.6 0l2.85 4.876 5.4 1.22-.525 5.637L33 16l-3.675 4.267.525 5.638-5.4 1.219L21.6 32l-5.1-2.21L11.4 32Zm1.275-3.886 3.825-1.676 3.9 1.676 2.1-3.657 4.125-.99-.375-4.267 2.775-3.2-2.775-3.276.375-4.267-4.125-.914-2.175-3.657L16.5 5.562l-3.9-1.676-2.1 3.657-4.125.914.375 4.267L3.975 16l2.775 3.2-.375 4.343 4.125.914 2.175 3.657Zm2.25-6.704L23.4 12.8l-2.1-2.21-6.375 6.477-3.225-3.2L9.6 16l5.325 5.41Z"
    />
  </svg>
);
export default VerificationIcon;
