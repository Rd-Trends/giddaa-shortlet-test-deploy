import * as React from "react";
import { SVGProps } from "react";

const FilterIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    viewBox="0 0 16 15"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M.533 2.678H.61c.116.46.382.867.755 1.158a2.117 2.117 0 0 0 3.36-1.158h10.743A.532.532 0 0 0 16 2.143a.537.537 0 0 0-.533-.536H4.724A2.134 2.134 0 0 0 3.97.449 2.117 2.117 0 0 0 .61 1.607H.532A.532.532 0 0 0 0 2.143a.537.537 0 0 0 .533.535Zm2.134-1.607a1.063 1.063 0 0 1 .985.661A1.076 1.076 0 0 1 3.421 2.9 1.065 1.065 0 0 1 1.6 2.143 1.064 1.064 0 0 1 2.667 1.07Zm12.8 5.893h-.076a2.134 2.134 0 0 0-.755-1.158 2.117 2.117 0 0 0-2.606 0 2.134 2.134 0 0 0-.754 1.158H.533A.532.532 0 0 0 0 7.5a.537.537 0 0 0 .533.536h10.743c.116.46.382.867.754 1.158a2.117 2.117 0 0 0 3.36-1.158h.077A.532.532 0 0 0 16 7.5a.537.537 0 0 0-.533-.536Zm-2.134 1.607a1.063 1.063 0 0 1-.985-.661 1.075 1.075 0 0 1 .777-1.46 1.062 1.062 0 0 1 1.095.455 1.075 1.075 0 0 1-.132 1.353c-.2.2-.472.314-.755.314Zm2.134 3.75h-5.41a2.134 2.134 0 0 0-.754-1.157 2.117 2.117 0 0 0-3.36 1.158H.532a.532.532 0 0 0-.533.536.537.537 0 0 0 .533.535h5.41c.116.46.381.867.754 1.158a2.117 2.117 0 0 0 3.36-1.158h5.41a.532.532 0 0 0 .533-.536.537.537 0 0 0-.533-.535ZM8 13.93a1.063 1.063 0 0 1-.985-.662 1.076 1.076 0 0 1 .23-1.167 1.065 1.065 0 0 1 1.822.758A1.074 1.074 0 0 1 8 13.93Z"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M.533 2.678H.61c.116.46.382.867.755 1.158a2.117 2.117 0 0 0 3.36-1.158h10.743A.532.532 0 0 0 16 2.143a.537.537 0 0 0-.533-.536H4.724A2.134 2.134 0 0 0 3.97.449 2.117 2.117 0 0 0 .61 1.607H.532A.532.532 0 0 0 0 2.143a.537.537 0 0 0 .533.535Zm2.134-1.607a1.063 1.063 0 0 1 .985.661A1.076 1.076 0 0 1 3.421 2.9 1.065 1.065 0 0 1 1.6 2.143 1.064 1.064 0 0 1 2.667 1.07Zm12.8 5.893h-.076a2.134 2.134 0 0 0-.755-1.158 2.117 2.117 0 0 0-2.606 0 2.134 2.134 0 0 0-.754 1.158H.533A.532.532 0 0 0 0 7.5a.537.537 0 0 0 .533.536h10.743c.116.46.382.867.754 1.158a2.117 2.117 0 0 0 3.36-1.158h.077A.532.532 0 0 0 16 7.5a.537.537 0 0 0-.533-.536Zm-2.134 1.607a1.063 1.063 0 0 1-.985-.661 1.075 1.075 0 0 1 .777-1.46 1.062 1.062 0 0 1 1.095.455 1.075 1.075 0 0 1-.132 1.353c-.2.2-.472.314-.755.314Zm2.134 3.75h-5.41a2.134 2.134 0 0 0-.754-1.157 2.117 2.117 0 0 0-3.36 1.158H.532a.532.532 0 0 0-.533.536.537.537 0 0 0 .533.535h5.41c.116.46.381.867.754 1.158a2.117 2.117 0 0 0 3.36-1.158h5.41a.532.532 0 0 0 .533-.536.537.537 0 0 0-.533-.535ZM8 13.93a1.063 1.063 0 0 1-.985-.662 1.076 1.076 0 0 1 .23-1.167 1.065 1.065 0 0 1 1.822.758A1.074 1.074 0 0 1 8 13.93Z"
    />
  </svg>
);
export default FilterIcon;
