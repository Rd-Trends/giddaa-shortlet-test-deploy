import * as React from "react";
import { SVGProps } from "react";

const LocationIcon = ({
  color = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={31}
    viewBox="0 0 25 31"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M12.5 0a12.551 12.551 0 0 0-8.839 3.632A12.35 12.35 0 0 0 0 12.4c0 8.37 11.016 17.825 11.484 18.228a1.57 1.57 0 0 0 2.032 0C14.062 30.225 25 20.77 25 12.4a12.35 12.35 0 0 0-3.661-8.768A12.551 12.551 0 0 0 12.5 0Zm0 27.357c-3.328-3.1-9.375-9.78-9.375-14.957 0-2.467.988-4.832 2.746-6.576A9.414 9.414 0 0 1 12.5 3.1c2.486 0 4.871.98 6.63 2.724a9.262 9.262 0 0 1 2.745 6.576c0 5.177-6.047 11.873-9.375 14.957Zm0-21.157a6.286 6.286 0 0 0-3.472 1.045 6.211 6.211 0 0 0-2.302 2.782 6.154 6.154 0 0 0-.356 3.583 6.185 6.185 0 0 0 1.71 3.174 6.265 6.265 0 0 0 3.2 1.697 6.297 6.297 0 0 0 3.612-.353 6.24 6.24 0 0 0 2.805-2.284 6.165 6.165 0 0 0-.778-7.828A6.276 6.276 0 0 0 12.5 6.2Zm0 9.3a3.143 3.143 0 0 1-1.736-.523 3.105 3.105 0 0 1-1.151-1.39 3.077 3.077 0 0 1 .677-3.38 3.149 3.149 0 0 1 3.406-.672 3.12 3.12 0 0 1 1.402 1.143 3.082 3.082 0 0 1-.388 3.914 3.138 3.138 0 0 1-2.21.908Z"
    />
  </svg>
);
export default LocationIcon;