import * as React from "react";
import { SVGProps } from "react";

const ArrowOpenIcon = ({
  color = "#335F32",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 16 16"
    fill="none"
    {...props}>
    <circle cx={7.947} cy={7.947} r={7.947} fill={color} />
    <circle cx={7.947} cy={7.947} r={7.947} fill="#000" fillOpacity={0.2} />
    <path
      fill="#fff"
      d="M7.648 5.878h3.221a.787.787 0 0 0 .786-.773.787.787 0 0 0-.787-.774H7.648a.787.787 0 0 0-.786.774c0 .421.358.773.786.773Z"
    />
    <path
      fill="#fff"
      d="M11.654 8.272V5.105a.787.787 0 0 0-1.572 0V8.272a.787.787 0 0 0 1.572 0Z"
    />
    <path
      fill="#fff"
      d="m5.67 11.312.984-.967 2.115-2.08 1.992-1.96.664-.654a.772.772 0 0 0 0-1.094.803.803 0 0 0-1.112 0l-.984.968-2.115 2.08-1.992 1.96-.664.653a.772.772 0 0 0 0 1.094.804.804 0 0 0 1.112 0Z"
    />
  </svg>
);
export default ArrowOpenIcon;
