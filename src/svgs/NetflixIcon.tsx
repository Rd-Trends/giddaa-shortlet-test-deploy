import * as React from "react";
import { SVGProps } from "react";

const NetflixIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={28}
    viewBox="0 0 30 28"
    fill="none"
    {...props}>
    <path
      fill="#000"
      d="M13.372 5.758a1.037 1.037 0 0 0-1.965.464v8.296a1.037 1.037 0 1 0 2.074 0v-3.903l2.184 4.367a1.037 1.037 0 0 0 1.965-.463V6.221a1.037 1.037 0 0 0-2.074 0v3.904l-2.184-4.368Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M0 1.037C0 .464.464 0 1.037 0H28c.573 0 1.037.464 1.037 1.037v18.667c0 .572-.464 1.037-1.037 1.037H1.037A1.037 1.037 0 0 1 0 19.704V1.037Zm2.074 1.037v16.593h24.889V2.074H2.074ZM0 22.814c0-.572.464-1.036 1.037-1.036H28c.573 0 1.037.464 1.037 1.037v3.11c0 .574-.464 1.038-1.037 1.038h-1.037a1.037 1.037 0 0 1-2.074 0H4.149a1.037 1.037 0 0 1-2.075 0H1.037A1.037 1.037 0 0 1 0 25.926v-3.111Zm26.963 2.075H2.074v-1.037h24.889v1.037Z"
      clipRule="evenodd"
    />
  </svg>
);
export default NetflixIcon;
