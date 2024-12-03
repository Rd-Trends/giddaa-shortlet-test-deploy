import * as React from "react";
import { SVGProps } from "react";

const HeartIcon = ({
  color = "#000",
  stroke = "#FAFFFA",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={20}
    fill="none"
    {...props}>
    <path
      fill={color}
      fillOpacity={0.7}
      stroke={stroke}
      strokeWidth={2}
      d="M6.815 1.448c-1.567 0-2.951.499-3.926 1.41v.001c-.963.9-1.593 2.28-1.593 4.108l5.52-5.519Zm0 0c1.397 0 2.672.899 3.769 2.017l.714.728.714-.729c1.095-1.119 2.388-2.016 3.792-2.017 1.56.001 2.924.501 3.903 1.413.97.902 1.617 2.268 1.617 4.107 0 1.73-1.234 3.467-3.306 5.438-1.344 1.28-2.912 2.534-4.54 3.835-.72.575-1.452 1.16-2.18 1.76-.733-.603-1.469-1.19-2.191-1.766-1.626-1.298-3.19-2.546-4.528-3.827M6.815 1.448 4.58 12.407m0 0c-2.06-1.974-3.282-3.728-3.283-5.44l3.283 5.44Z"
    />
  </svg>
);
export default HeartIcon;
