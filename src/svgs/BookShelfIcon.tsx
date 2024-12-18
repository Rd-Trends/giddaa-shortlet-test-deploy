import * as React from "react";
import { SVGProps } from "react";

const BookShelfIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    viewBox="0 0 29 28"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M28.067 21.624H.933a.941.941 0 0 0-.66.269.91.91 0 0 0-.273.649v1.347L2.052 28l.009-4.111h24.878L26.95 28 29 23.889v-1.347a.904.904 0 0 0-.273-.65.933.933 0 0 0-.66-.268ZM3.575 20.572h2.752a1.41 1.41 0 0 0 .985-.403c.26-.257.408-.605.408-.968V3.195c0-.363-.147-.712-.408-.968a1.409 1.409 0 0 0-.985-.403H3.575c-.37 0-.724.145-.985.402a1.362 1.362 0 0 0-.41.969V19.2c.001.363.148.712.41.969.261.257.615.401.985.402Zm2.752-1.014H3.575a.368.368 0 0 1-.257-.104.356.356 0 0 1-.107-.253v-1.758H6.69v1.758a.355.355 0 0 1-.106.252.367.367 0 0 1-.256.105ZM3.575 2.837h2.752c.097 0 .19.038.257.105a.355.355 0 0 1 .107.253V15.46h-3.48V3.195c0-.095.039-.186.107-.253a.368.368 0 0 1 .257-.105Zm6.458 17.704h2.75c.361 0 .708-.142.963-.393.256-.252.4-.592.4-.947V1.34a1.33 1.33 0 0 0-.4-.948A1.378 1.378 0 0 0 12.783 0h-2.75c-.362 0-.708.142-.963.393-.256.252-.4.592-.4.947V19.2c0 .356.144.696.4.948.255.25.601.392.963.393Zm2.75-.951h-2.75a.4.4 0 0 1-.28-.114.386.386 0 0 1-.116-.275v-1.758h3.542v1.758a.386.386 0 0 1-.116.275.4.4 0 0 1-.28.114ZM10.033.95h2.75a.4.4 0 0 1 .28.115.386.386 0 0 1 .116.275v14.12H9.637V1.34c0-.103.042-.202.116-.275a.4.4 0 0 1 .28-.114Zm12.476 18.593c.175.32.473.559.826.664a1.42 1.42 0 0 0 1.062-.104l2.424-1.278c.325-.172.568-.465.675-.813a1.352 1.352 0 0 0-.105-1.044L19.81 3.073a1.39 1.39 0 0 0-.826-.664 1.416 1.416 0 0 0-1.062.104l-2.424 1.278a1.378 1.378 0 0 0-.675.813c-.107.348-.069.723.105 1.044l7.58 13.895Zm3.825-1.611L23.91 19.21a.37.37 0 0 1-.493-.146l-1.18-2.165 3.065-1.617 1.18 2.165a.353.353 0 0 1-.148.485ZM15.986 4.684l2.424-1.278a.366.366 0 0 1 .493.146l5.445 9.982-3.065 1.618-5.446-9.983a.353.353 0 0 1 .15-.485Z"
    />
  </svg>
);
export default BookShelfIcon;
