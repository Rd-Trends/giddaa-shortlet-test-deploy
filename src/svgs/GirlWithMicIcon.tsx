import * as React from "react";
import { SVGProps } from "react";

const GirlWithMicIcon = ({
  color = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={29}
    viewBox="0 0 30 29"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M9.801 16.522a.777.777 0 0 0 .559 1.314.786.786 0 0 0 .549-.213 1.05 1.05 0 0 1 1.478 0 .786.786 0 0 0 1.322-.556.776.776 0 0 0-.215-.546 2.622 2.622 0 0 0-3.693 0Zm6.318 0a.777.777 0 0 0 .56 1.31.789.789 0 0 0 .548-.21 1.049 1.049 0 0 1 1.478 0 .786.786 0 0 0 1.321-.555.777.777 0 0 0-.214-.546 2.622 2.622 0 0 0-3.693 0Zm13.861 4.52a.778.778 0 0 0-.366-.498c-3.139-1.837-3.64-3.857-3.64-9.401 0-2.955-1.18-5.79-3.282-7.88A11.237 11.237 0 0 0 14.769 0a11.237 11.237 0 0 0-7.924 3.264 11.112 11.112 0 0 0-3.281 7.879v.365c.005 3.298.01 7.035-3.199 9.05A.78.78 0 0 0 .1 21.594c1.811 3.24 5.015 5.026 9.043 5.056 3.096 3.158 8.72 3.126 11.782-.06a10.676 10.676 0 0 0 5.11-1.331 10.604 10.604 0 0 0 3.835-3.613.775.775 0 0 0 .111-.606Zm-7.764 3.897a8.273 8.273 0 0 0 1.2-4.286v-6.416a.777.777 0 0 0-.783-.78.777.777 0 0 0-.783.779v4.194c0 3.13-3.74 3.69-5.821 3.76-.458-.663-1.974-.655-2.526-.129a1.296 1.296 0 0 0 0 1.837c.562.533 2.093.536 2.545-.153 2.46-.073 4.389-.663 5.653-1.685-1.882 7.908-13.322 6.788-13.55-1.407v-7.881c2.67.244 6.23-.965 8.095-2.701a9.526 9.526 0 0 0 3.31 3.43.787.787 0 0 0 1.06-.284.776.776 0 0 0-.264-1.059 7.735 7.735 0 0 1-3.168-3.797.78.78 0 0 0-.665-.52.787.787 0 0 0-.752.385c-1.145 1.958-5.664 3.54-8.199 2.871a.788.788 0 0 0-.904.409.775.775 0 0 0-.08.344v8.803a8.27 8.27 0 0 0 1.238 4.35 8.243 8.243 0 0 1-3.394-1.12 8.193 8.193 0 0 1-2.594-2.448c3.308-2.546 3.302-6.785 3.297-9.929v-.363a9.54 9.54 0 0 1 .733-3.667 9.581 9.581 0 0 1 2.09-3.11 9.642 9.642 0 0 1 3.126-2.078 9.685 9.685 0 0 1 10.504 2.078 9.582 9.582 0 0 1 2.09 3.11 9.538 9.538 0 0 1 .733 3.667c0 5.613.579 8.192 3.69 10.292a8.902 8.902 0 0 1-2.589 2.336 8.95 8.95 0 0 1-3.292 1.168Z"
    />
  </svg>
);
export default GirlWithMicIcon;