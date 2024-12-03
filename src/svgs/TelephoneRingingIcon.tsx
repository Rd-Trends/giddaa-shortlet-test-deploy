import * as React from "react";
import { SVGProps } from "react";

const TelephoneRingingIcon = ({
  color = "#335F32",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={30}
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M23.482 19.924a3 3 0 0 0-4.25 0l-1.45 1.45a26.62 26.62 0 0 1-8.13-8.13l1.45-1.45a3 3 0 0 0 0-4.25l-2.83-2.82a2.93 2.93 0 0 0-2.11-.88 3 3 0 0 0-2.13.88l-1.36 1.35a6.37 6.37 0 0 0-1.64 5.25c.32 3.75 2.78 8.26 6.57 12.06 3.79 3.8 8.35 6.25 12.1 6.61.28.015.56.015.84 0a6.069 6.069 0 0 0 4.41-1.64l1.35-1.36a3 3 0 0 0 .88-2.13 2.932 2.932 0 0 0-.88-2.11l-2.82-2.83Zm1.41 5.66-1.36 1.35a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6-3.42-3.42-5.72-7.53-6.03-10.78a4.53 4.53 0 0 1 1-3.66l1.41-1.36a1 1 0 0 1 .71-.29 1 1 0 0 1 .71.29l2.83 2.86a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.492 27.492 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83a1 1 0 0 1 .29.71 1 1 0 0 1-.29.68Zm1.74-21.2a14.92 14.92 0 0 0-10.6-4.39 1 1 0 1 0 0 2 13 13 0 0 1 13 13.11 1 1 0 1 0 2 0 14.91 14.91 0 0 0-4.4-10.72Z"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M23.482 19.924a3 3 0 0 0-4.25 0l-1.45 1.45a26.62 26.62 0 0 1-8.13-8.13l1.45-1.45a3 3 0 0 0 0-4.25l-2.83-2.82a2.93 2.93 0 0 0-2.11-.88 3 3 0 0 0-2.13.88l-1.36 1.35a6.37 6.37 0 0 0-1.64 5.25c.32 3.75 2.78 8.26 6.57 12.06 3.79 3.8 8.35 6.25 12.1 6.61.28.015.56.015.84 0a6.069 6.069 0 0 0 4.41-1.64l1.35-1.36a3 3 0 0 0 .88-2.13 2.932 2.932 0 0 0-.88-2.11l-2.82-2.83Zm1.41 5.66-1.36 1.35a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6-3.42-3.42-5.72-7.53-6.03-10.78a4.53 4.53 0 0 1 1-3.66l1.41-1.36a1 1 0 0 1 .71-.29 1 1 0 0 1 .71.29l2.83 2.86a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.492 27.492 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83a1 1 0 0 1 .29.71 1 1 0 0 1-.29.68Zm1.74-21.2a14.92 14.92 0 0 0-10.6-4.39 1 1 0 1 0 0 2 13 13 0 0 1 13 13.11 1 1 0 1 0 2 0 14.91 14.91 0 0 0-4.4-10.72Z"
    />
    <path
      fill={color}
      d="M20.943 10.104a5.998 5.998 0 0 1 1.77 4.31 1 1 0 1 0 2 0 8 8 0 0 0-8-8.1 1 1 0 1 0 0 2 6 6 0 0 1 4.23 1.79Z"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M20.943 10.104a5.998 5.998 0 0 1 1.77 4.31 1 1 0 1 0 2 0 8 8 0 0 0-8-8.1 1 1 0 1 0 0 2 6 6 0 0 1 4.23 1.79Z"
    />
  </svg>
);
export default TelephoneRingingIcon;
