import * as React from "react";
import { SVGProps } from "react";

const MoneyReverseIcon = ({
  color = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <path
      d="M24 12c0 6.617-5.401 12-12.041 12C5.89 24 .752 19.485.008 13.499a1.03 1.03 0 0 1 .897-1.148 1.03 1.03 0 0 1 1.15.894c.619 4.96 4.875 8.698 9.904 8.698 5.502 0 9.977-4.46 9.977-9.943s-4.476-9.943-9.977-9.943c-2.275 0-4.43.759-6.166 2.126h1.3c.57 0 1.032.46 1.032 1.028A1.03 1.03 0 0 1 7.092 6.24H3.201a1.03 1.03 0 0 1-1.032-1.029v-3.88A1.03 1.03 0 0 1 3.2.304c.57 0 1.032.46 1.032 1.029v1.48A11.965 11.965 0 0 1 11.959 0C18.599 0 24 5.383 24 12ZM12.041 5.486c-.57 0-1.032.46-1.032 1.028v.38c-1.647.185-2.912 1.646-2.736 3.371.164 1.606 1.643 2.764 3.263 2.764h1.193c.57 0 1.032.462 1.032 1.028 0 .566-.462 1.029-1.032 1.029h-2.407c-.57 0-1.032.46-1.032 1.028a1.03 1.03 0 0 0 1.032 1.029h.687v.343a1.03 1.03 0 0 0 1.032 1.028c.57 0 1.032-.46 1.032-1.028v-.39c1.401-.22 2.59-1.287 2.736-2.717a3.093 3.093 0 0 0-3.08-3.408h-1.376a1.03 1.03 0 0 1-1.032-1.028 1.03 1.03 0 0 1 1.032-1.029h2.414c.57 0 1.032-.46 1.032-1.028a1.03 1.03 0 0 0-1.032-1.029h-.694v-.343a1.03 1.03 0 0 0-1.032-1.028Z"
      fill={color}
    />
  </svg>
);
export default MoneyReverseIcon;