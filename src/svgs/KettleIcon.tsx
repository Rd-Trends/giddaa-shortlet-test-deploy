import * as React from "react";
import { SVGProps } from "react";

const KettleIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    viewBox="0 0 27 27"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M14.464 0a6.757 6.757 0 0 0-6.75 6.75v6.937l-3.86-2.277L0 13.791l3.857 7.652V27H27v-4.821a11.53 11.53 0 0 0-3.857-8.611V6.75A6.757 6.757 0 0 0 16.393 0h-1.929Zm0 1.929h1.929a4.79 4.79 0 0 1 4.821 4.821v5.416a11.49 11.49 0 0 0-3.2-1.26c.19-.384.307-.809.307-1.263A2.908 2.908 0 0 0 15.43 6.75a2.908 2.908 0 0 0-2.893 2.893c0 .465.123.899.322 1.29a11.35 11.35 0 0 0-3.215 1.354V6.75a4.79 4.79 0 0 1 4.821-4.821Zm.965 6.75a.95.95 0 0 1 .964.964.95.95 0 0 1-.964.964.95.95 0 0 1-.965-.964.95.95 0 0 1 .965-.964Zm0 3.857a9.6 9.6 0 0 1 9.642 9.643v2.893H5.786v-4.087l-3.27-6.481 1.36-.842 4.062 2.394.53-.552a9.587 9.587 0 0 1 6.96-2.968Zm0 1.928v1.929a5.78 5.78 0 0 1 5.216 3.28l1.739-.835a7.722 7.722 0 0 0-6.955-4.374Z"
    />
  </svg>
);
export default KettleIcon;
