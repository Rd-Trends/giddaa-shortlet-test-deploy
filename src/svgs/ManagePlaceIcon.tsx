import * as React from "react";
import { SVGProps } from "react";

const ManagePlaceIcon = ({
  color = "#335F32",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={23}
    viewBox="0 0 18 23"
    fill="none"
    {...props}>
    <path
      fill={color}
      fillRule="evenodd"
      d="M3 22.355c-1.657 0-3-1.358-3-3.033V9.21c0-.034.002-.068.005-.101H0c0-.582.229-1.141.636-1.553L6.88 1.244a2.977 2.977 0 0 1 4.242 0l6.243 6.312c.407.412.636.97.636 1.553h-.005c.003.033.005.067.005.101v10.112c0 1.675-1.343 3.034-3 3.034H3ZM9.707 2.674 16 9.037v10.285c0 .558-.448 1.011-1 1.011h-3v-5.056c0-1.675-1.343-3.033-3-3.033s-3 1.358-3 3.033v5.056H3c-.552 0-1-.453-1-1.011V9.037l6.293-6.363a.992.992 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M3 22.355c-1.657 0-3-1.358-3-3.033V9.21c0-.034.002-.068.005-.101H0c0-.582.229-1.141.636-1.553L6.88 1.244a2.977 2.977 0 0 1 4.242 0l6.243 6.312c.407.412.636.97.636 1.553h-.005c.003.033.005.067.005.101v10.112c0 1.675-1.343 3.034-3 3.034H3ZM9.707 2.674 16 9.037v10.285c0 .558-.448 1.011-1 1.011h-3v-5.056c0-1.675-1.343-3.033-3-3.033s-3 1.358-3 3.033v5.056H3c-.552 0-1-.453-1-1.011V9.037l6.293-6.363a.992.992 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <path
      stroke="#000"
      d="M3 22.355c-1.657 0-3-1.358-3-3.033V9.21c0-.034.002-.068.005-.101H0c0-.582.229-1.141.636-1.553L6.88 1.244a2.977 2.977 0 0 1 4.242 0l6.243 6.312c.407.412.636.97.636 1.553h-.005c.003.033.005.067.005.101v10.112c0 1.675-1.343 3.034-3 3.034H3ZM9.707 2.674 16 9.037v10.285c0 .558-.448 1.011-1 1.011h-3v-5.056c0-1.675-1.343-3.033-3-3.033s-3 1.358-3 3.033v5.056H3c-.552 0-1-.453-1-1.011V9.037l6.293-6.363a.992.992 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ManagePlaceIcon;