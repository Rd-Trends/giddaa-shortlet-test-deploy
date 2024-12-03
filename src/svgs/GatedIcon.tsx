import * as React from "react";
import { SVGProps } from "react";

const GatedIcon = ({ color = "#000", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={34}
    viewBox="0 0 43 34"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="m23.137 6.2 1.935-1.135V3.776c0-.38.392-.687.876-.687s.877.308.877.687v.12l4.998-3.39c.16-.108.363-.167.574-.167.21 0 .413.06.573.167l6.523 4.425 2.212 1.263c.392.223.478.654.193.96-.285.307-.833.375-1.224.152l-.85-.486v7.956c0 .38-.393.688-.877.688s-.876-.308-.876-.688V5.784l-5.674-3.849-5.64 3.825a.684.684 0 0 1-.035.058v8.958c0 .38-.392.688-.876.688s-.877-.308-.877-.688V6.842l-.782.459c-.386.226-.936.166-1.227-.14-.29-.304-.21-.735.177-.962Zm-5.22 1.106-.85-.486v7.956c0 .38-.392.688-.876.688s-.876-.308-.876-.688V5.784L9.64 1.935 4 5.76a.638.638 0 0 1-.034.058v8.958c0 .38-.393.688-.877.688s-.876-.308-.876-.688V6.831l-.816.472c-.392.227-.94.159-1.226-.145-.287-.306-.204-.736.185-.961l1.96-1.134V3.776c0-.38.392-.687.876-.687s.876.308.876.687v.12L9.067.507C9.227.398 9.43.34 9.64.34c.21 0 .414.06.573.167l6.524 4.425 2.212 1.263c.391.223.478.653.193.96-.285.308-.834.375-1.225.152Zm5.22 16.768 1.935-1.134v-1.29c0-.38.392-.687.876-.687s.877.308.877.687v.12l4.998-3.39c.16-.108.363-.167.574-.167.21 0 .413.06.573.167l6.522 4.424 2.213 1.264c.392.224.478.654.193.96-.284.307-.832.376-1.224.152l-.85-.486v7.956c0 .38-.393.688-.877.688s-.876-.308-.876-.688v-8.99l-5.674-3.849-5.64 3.825a.667.667 0 0 1-.035.058v8.958c0 .38-.392.688-.876.688s-.877-.308-.877-.688v-7.934l-.782.459c-.387.226-.937.165-1.227-.14-.29-.304-.21-.735.177-.962Zm-22.78-.003 1.959-1.133V21.65c0-.38.392-.687.876-.687s.876.308.876.687v.12l4.999-3.39a1.03 1.03 0 0 1 .573-.167c.21 0 .414.06.573.167l6.523 4.424 2.213 1.264c.391.224.477.653.193.96-.285.307-.833.375-1.225.152l-.85-.486v7.956c0 .38-.392.688-.876.688s-.877-.308-.877-.688v-8.99L9.64 19.81 4 23.635a.65.65 0 0 1-.034.058v8.958c0 .38-.393.688-.877.688s-.876-.308-.876-.688v-7.945l-.816.472c-.393.227-.94.158-1.226-.145-.287-.306-.204-.736.185-.962Z"
    />
  </svg>
);
export default GatedIcon;
