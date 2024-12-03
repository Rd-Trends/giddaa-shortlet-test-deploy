import * as React from "react";
import { SVGProps } from "react";

const ArrowShareIcon = ({
  color = "#335F32",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={18}
    viewBox="0 0 23 18"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M.863 18a.8.8 0 0 1-.66-.338.765.765 0 0 1-.141-.48c0-.118.825-11.441 12.489-12.33V.78c0-.155.047-.307.136-.436a.797.797 0 0 1 .362-.287.822.822 0 0 1 .876.177l7.906 7.86a.77.77 0 0 1 0 1.092l-7.906 7.862a.821.821 0 0 1-.876.177.797.797 0 0 1-.362-.288.765.765 0 0 1-.136-.435V12.51c-7.787.288-10.98 5.069-11.011 5.127a.793.793 0 0 1-.291.266.819.819 0 0 1-.386.097Zm13.29-15.309v2.89c0 .202-.08.396-.225.542a.811.811 0 0 1-.548.237c-7.547.27-10.246 5.163-11.216 8.31 2.003-1.684 5.572-3.743 11.14-3.743h.036c.212 0 .416.082.566.228a.77.77 0 0 1 .235.552v2.889l6.008-5.95-5.996-5.955Z"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M.863 18a.8.8 0 0 1-.66-.338.765.765 0 0 1-.141-.48c0-.118.825-11.441 12.489-12.33V.78c0-.155.047-.307.136-.436a.797.797 0 0 1 .362-.287.822.822 0 0 1 .876.177l7.906 7.86a.77.77 0 0 1 0 1.092l-7.906 7.862a.821.821 0 0 1-.876.177.797.797 0 0 1-.362-.288.765.765 0 0 1-.136-.435V12.51c-7.787.288-10.98 5.069-11.011 5.127a.793.793 0 0 1-.291.266.819.819 0 0 1-.386.097Zm13.29-15.309v2.89c0 .202-.08.396-.225.542a.811.811 0 0 1-.548.237c-7.547.27-10.246 5.163-11.216 8.31 2.003-1.684 5.572-3.743 11.14-3.743h.036c.212 0 .416.082.566.228a.77.77 0 0 1 .235.552v2.889l6.008-5.95-5.996-5.955Z"
    />
  </svg>
);
export default ArrowShareIcon;
