import * as React from "react";
import { SVGProps } from "react";

const DeveloperIcon = ({
  color = "#335F32",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    viewBox="0 0 26 27"
    fill="none"
    {...props}>
    <g clipPath="url(#dev-icon-a)">
      <path
        fill={color}
        d="M.81 26.197a.81.81 0 0 1-.81-.809V1.123A.81.81 0 0 1 .81.314h14.764a.81.81 0 0 1 .81.81v2.911h8.807a.81.81 0 0 1 .809.809v20.544a.81.81 0 0 1-.81.81H.81ZM18.066 10.43v14.15h6.314V5.652h-7.933v3.969h.81a.81.81 0 0 1 .81.808ZM7.874 24.58h8.574V11.24H7.874v13.34Zm-6.255 0h4.636V10.43a.81.81 0 0 1 .81-.808h7.7v-7.69H1.619V24.58Z"
      />
      <path
        fill="#000"
        fillOpacity={0.2}
        d="M.81 26.197a.81.81 0 0 1-.81-.809V1.123A.81.81 0 0 1 .81.314h14.764a.81.81 0 0 1 .81.81v2.911h8.807a.81.81 0 0 1 .809.809v20.544a.81.81 0 0 1-.81.81H.81ZM18.066 10.43v14.15h6.314V5.652h-7.933v3.969h.81a.81.81 0 0 1 .81.808ZM7.874 24.58h8.574V11.24H7.874v13.34Zm-6.255 0h4.636V10.43a.81.81 0 0 1 .81-.808h7.7v-7.69H1.619V24.58Z"
      />
      <path
        fill={color}
        d="M20.172 7.593h2.59a.81.81 0 1 1 0 1.618h-2.59a.81.81 0 1 1 0-1.618Zm-7.77-2.264h-2.59a.809.809 0 1 1 0-1.618h2.59a.81.81 0 1 1 0 1.618Zm0 2.588h-2.59a.81.81 0 1 1 0-1.618h2.59a.81.81 0 1 1 0 1.618ZM6.574 5.329h-2.59a.809.809 0 1 1 0-1.618h2.59a.81.81 0 1 1 0 1.618Zm0 2.588h-2.59a.81.81 0 1 1 0-1.618h2.59a.81.81 0 1 1 0 1.618Zm6.883 7.117h-2.59a.81.81 0 1 1 0-1.617h2.59a.81.81 0 1 1 0 1.617Zm0 2.589h-2.59a.81.81 0 1 1 0-1.618h2.59a.809.809 0 1 1 0 1.618Zm0 2.588h-2.59a.81.81 0 1 1 0-1.617h2.59a.81.81 0 1 1 0 1.617Zm6.715-9.274h2.59a.81.81 0 1 1 0 1.617h-2.59a.809.809 0 1 1 0-1.617Zm0 3.343h2.59a.81.81 0 1 1 0 1.617h-2.59a.809.809 0 1 1 0-1.617Zm0 3.343h2.59a.81.81 0 1 1 0 1.618h-2.59a.81.81 0 1 1 0-1.618Z"
      />
      <path
        fill="#000"
        fillOpacity={0.2}
        d="M20.172 7.593h2.59a.81.81 0 1 1 0 1.618h-2.59a.81.81 0 1 1 0-1.618Zm-7.77-2.264h-2.59a.809.809 0 1 1 0-1.618h2.59a.81.81 0 1 1 0 1.618Zm0 2.588h-2.59a.81.81 0 1 1 0-1.618h2.59a.81.81 0 1 1 0 1.618ZM6.574 5.329h-2.59a.809.809 0 1 1 0-1.618h2.59a.81.81 0 1 1 0 1.618Zm0 2.588h-2.59a.81.81 0 1 1 0-1.618h2.59a.81.81 0 1 1 0 1.618Zm6.883 7.117h-2.59a.81.81 0 1 1 0-1.617h2.59a.81.81 0 1 1 0 1.617Zm0 2.589h-2.59a.81.81 0 1 1 0-1.618h2.59a.809.809 0 1 1 0 1.618Zm0 2.588h-2.59a.81.81 0 1 1 0-1.617h2.59a.81.81 0 1 1 0 1.617Zm6.715-9.274h2.59a.81.81 0 1 1 0 1.617h-2.59a.809.809 0 1 1 0-1.617Zm0 3.343h2.59a.81.81 0 1 1 0 1.617h-2.59a.809.809 0 1 1 0-1.617Zm0 3.343h2.59a.81.81 0 1 1 0 1.618h-2.59a.81.81 0 1 1 0-1.618Z"
      />
    </g>
    <defs>
      <clipPath id="dev-icon-a">
        <path fill="#fff" d="M26 .314H0v25.883h26z" />
      </clipPath>
    </defs>
  </svg>
);
export default DeveloperIcon;
