import * as React from "react";
import { SVGProps } from "react";

const ShootingStarIcon = ({
  color = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={36}
    viewBox="0 0 44 36"
    fill="none"
    {...props}>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m29.532 1.339 4.158 8.26 9.31 1.33-6.734 6.44 1.582 9.086-8.316-4.284-8.317 4.284 1.582-9.086-6.72-6.44 9.296-1.33 4.159-8.26ZM5.27 9.403A29.063 29.063 0 0 0 1 12.498M22.406 5.58c-3.682-.252-8.414.014-13.286 1.946M6.39 18.182a28.343 28.343 0 0 0-4.592 5.124m11.256-9.409a28.173 28.173 0 0 0-3.122 1.667M6.81 32.014a25.065 25.065 0 0 0-1.218 2.772M18.066 20.38c-3.122 1.778-6.454 4.382-9.142 8.148"
    />
  </svg>
);
export default ShootingStarIcon;
