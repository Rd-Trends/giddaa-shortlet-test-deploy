import * as React from "react";
import { SVGProps } from "react";

const HouseInvestIcon = ({
  color = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M22.895 22.784h-1.816V11.245c.763.28 1.658.012 2.124-.693a1.841 1.841 0 0 0-.502-2.518l-1.622-1.101V1.495a.608.608 0 0 0-.605-.608h-3.027a.609.609 0 0 0-.605.608V4.05L12.34.99a.6.6 0 0 0-.678 0L1.3 8.034a1.842 1.842 0 0 0-.502 2.518 1.81 1.81 0 0 0 1.5.815c.219 0 .424-.049.624-.122v11.539H1.105a.609.609 0 0 0 0 1.216h21.79a.609.609 0 0 0 0-1.216Zm-4.842-20.68h1.815v4.008l-1.815-1.235V2.103Zm1.815 20.68H4.132V10.49L12 5.138l7.868 5.353v12.293Zm-7.53-18.88a.6.6 0 0 0-.677 0l-9.043 6.143a.585.585 0 0 1-.81-.164.626.626 0 0 1 .169-.84L12 2.231c.83.566 1.665 1.131 2.494 1.697a2144.472 2144.472 0 0 1 6.615 4.495c.381.255 1.223.65 1.174 1.18a.584.584 0 0 1-.901.444c-.013-.006-9.043-6.143-9.043-6.143Z"
    />
    <path
      fill={color}
      d="M18.053 17.918h-1.21v-5.83l.177.177a.608.608 0 0 0 .855 0 .61.61 0 0 0 0-.86l-1.21-1.216a.603.603 0 0 0-.856 0l-1.21 1.216a.61.61 0 0 0 0 .86c.236.238.619.238.855 0l.178-.178v5.83h-3.027v-4.005l.178.178a.608.608 0 0 0 .856-.86l-1.21-1.217a.603.603 0 0 0-.857 0l-1.21 1.217a.61.61 0 0 0 0 .86c.236.238.62.238.856 0l.177-.178v4.006H8.369v-2.181l.177.178a.61.61 0 0 0 .856 0 .61.61 0 0 0 0-.86l-1.21-1.217a.603.603 0 0 0-.857 0l-1.21 1.217a.61.61 0 0 0 0 .86c.236.237.62.237.856 0l.177-.178v2.18h-1.21a.607.607 0 0 0-.606.609v2.433c0 .336.271.608.606.608h12.105a.607.607 0 0 0 .605-.608v-2.433a.607.607 0 0 0-.605-.608Zm-.605 2.433H6.553v-1.217h10.895v1.217Z"
    />
  </svg>
);
export default HouseInvestIcon;