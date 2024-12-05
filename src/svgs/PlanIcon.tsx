import * as React from "react";
import { SVGProps } from "react";

const PlanIcon = ({ color = "#335F32", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={26}
    viewBox="0 0 21 26"
    fill="none"
    {...props}>
    <path
      fill={color}
      fillRule="evenodd"
      d="M13.227 0h.02c.162.004.313.05.444.13a.92.92 0 0 1 .253.228l6.364 8.358c.023.03.044.06.062.091l.003.005c.079.136.125.295.127.463v13.94c0 .738-.287 1.447-.8 1.969a2.695 2.695 0 0 1-1.927.816H3.227a2.695 2.695 0 0 1-1.928-.816 2.813 2.813 0 0 1-.799-1.97V2.786C.5 1.247 1.72 0 3.227 0h10Zm-.909 1.857h-9.09a.92.92 0 0 0-.91.929v20.428c0 .246.096.483.267.657.17.174.401.272.642.272h14.546c.24 0 .473-.098.643-.272a.936.936 0 0 0 .266-.657v-13h-3.636c-1.507 0-2.728-1.247-2.728-2.785V1.857ZM5.045 20.43h6.91a.92.92 0 0 0 .91-.929.92.92 0 0 0-.91-.929h-6.91a.92.92 0 0 0-.909.929.92.92 0 0 0 .91.929Zm0-3.715h10.91a.92.92 0 0 0 .909-.928.92.92 0 0 0-.91-.929H5.045a.92.92 0 0 0-.909.929.92.92 0 0 0 .91.928Zm9.091-13.079V7.43a.92.92 0 0 0 .91.928h2.686l-3.596-4.722Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M13.227 0h.02c.162.004.313.05.444.13a.92.92 0 0 1 .253.228l6.364 8.358c.023.03.044.06.062.091l.003.005c.079.136.125.295.127.463v13.94c0 .738-.287 1.447-.8 1.969a2.695 2.695 0 0 1-1.927.816H3.227a2.695 2.695 0 0 1-1.928-.816 2.813 2.813 0 0 1-.799-1.97V2.786C.5 1.247 1.72 0 3.227 0h10Zm-.909 1.857h-9.09a.92.92 0 0 0-.91.929v20.428c0 .246.096.483.267.657.17.174.401.272.642.272h14.546c.24 0 .473-.098.643-.272a.936.936 0 0 0 .266-.657v-13h-3.636c-1.507 0-2.728-1.247-2.728-2.785V1.857ZM5.045 20.43h6.91a.92.92 0 0 0 .91-.929.92.92 0 0 0-.91-.929h-6.91a.92.92 0 0 0-.909.929.92.92 0 0 0 .91.929Zm0-3.715h10.91a.92.92 0 0 0 .909-.928.92.92 0 0 0-.91-.929H5.045a.92.92 0 0 0-.909.929.92.92 0 0 0 .91.928Zm9.091-13.079V7.43a.92.92 0 0 0 .91.928h2.686l-3.596-4.722Z"
      clipRule="evenodd"
    />
  </svg>
);
export default PlanIcon;