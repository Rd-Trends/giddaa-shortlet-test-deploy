import * as React from "react";
import { SVGProps } from "react";

const PeopleIcon = ({ color = "#000", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={28}
    viewBox="0 0 37 28"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M12.95 17.5C8.621 17.5 0 19.84 0 24.5V28h25.9v-3.5c0-4.66-8.621-7-12.95-7ZM4.329 24c1.554-1.16 5.31-2.5 8.621-2.5 3.312 0 7.067 1.34 8.621 2.5H4.329Zm8.621-10c3.57 0 6.475-3.14 6.475-7S16.52 0 12.95 0 6.475 3.14 6.475 7s2.905 7 6.475 7Zm0-10c1.536 0 2.775 1.34 2.775 3s-1.24 3-2.775 3-2.775-1.34-2.775-3 1.24-3 2.775-3Zm13.024 13.62C28.12 19.3 29.6 21.54 29.6 24.5V28H37v-3.5c0-4.04-6.475-6.34-11.026-6.88ZM24.05 14c3.57 0 6.475-3.14 6.475-7s-2.904-7-6.475-7c-.999 0-1.924.26-2.775.7 1.166 1.78 1.85 3.96 1.85 6.3s-.684 4.52-1.85 6.3c.851.44 1.776.7 2.775.7Z"
    />
  </svg>
);
export default PeopleIcon;
