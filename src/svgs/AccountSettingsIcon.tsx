import * as React from "react";
import { SVGProps } from "react";

const AccountSettingsIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={26}
    viewBox="0 0 27 26"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M10.9 9.63a5.5 5.5 0 0 0 2.889-.812 4.916 4.916 0 0 0 1.915-2.16c.394-.88.497-1.849.296-2.783a4.716 4.716 0 0 0-1.423-2.465A5.341 5.341 0 0 0 11.915.093 5.588 5.588 0 0 0 8.91.367 5.135 5.135 0 0 0 6.576 2.14 4.565 4.565 0 0 0 5.7 4.815c.002 1.276.55 2.5 1.525 3.403C8.2 9.12 9.52 9.628 10.9 9.63Zm0-7.704a3.3 3.3 0 0 1 1.733.487c.514.317.913.768 1.15 1.296a2.69 2.69 0 0 1 .177 1.67 2.83 2.83 0 0 1-.854 1.479 3.198 3.198 0 0 1-1.597.79 3.353 3.353 0 0 1-1.803-.164 3.08 3.08 0 0 1-1.4-1.064 2.74 2.74 0 0 1-.526-1.605c0-.766.329-1.501.914-2.043a3.251 3.251 0 0 1 2.206-.846Zm14.56 17.333h-.104a4.594 4.594 0 0 0-.761-1.688l.079-.073a.965.965 0 0 0 .233-.313.902.902 0 0 0 .007-.744.961.961 0 0 0-.227-.317 1.049 1.049 0 0 0-.342-.21 1.114 1.114 0 0 0-.804.007c-.127.05-.242.123-.338.215l-.079.074a5.39 5.39 0 0 0-1.824-.706v-.097c0-.255-.11-.5-.305-.68a1.084 1.084 0 0 0-1.166-.19 1.013 1.013 0 0 0-.349.251 9.44 9.44 0 0 0-1.228-1.368c-1.454-1.346-3.307-2.262-5.323-2.634a11.174 11.174 0 0 0-6.006.547c-1.9.728-3.524 1.961-4.667 3.543A9.131 9.131 0 0 0 .5 20.222c.002 1.532.66 3 1.83 4.084C3.5 25.389 5.085 25.998 6.74 26h8.32a6.524 6.524 0 0 0 3.744-1.18c.141.038.276.096.421.12v.097c0 .255.11.5.305.681.195.18.46.282.735.282.276 0 .54-.102.736-.282a.929.929 0 0 0 .304-.681v-.096a5.39 5.39 0 0 0 1.823-.705l.08.073c.095.092.21.165.337.216a1.111 1.111 0 0 0 1.146-.204.961.961 0 0 0 .227-.316.9.9 0 0 0-.007-.745.965.965 0 0 0-.233-.313l-.08-.073a4.591 4.591 0 0 0 .758-1.689h.104c.276 0 .54-.101.735-.282a.928.928 0 0 0 .305-.68.93.93 0 0 0-.305-.682 1.084 1.084 0 0 0-.735-.282Zm-5.2 3.852a3.32 3.32 0 0 1-1.198-.223c-.02-.009-.039-.019-.06-.026a3.005 3.005 0 0 1-1.576-1.461 2.683 2.683 0 0 1-.115-2.063 2.937 2.937 0 0 1 1.406-1.603 3.327 3.327 0 0 1 2.203-.32 3.14 3.14 0 0 1 1.869 1.127c.45.577.655 1.288.573 1.996a2.815 2.815 0 0 1-1.018 1.838 3.257 3.257 0 0 1-2.084.735Zm-13.52.963a4.335 4.335 0 0 1-2.942-1.128c-.78-.723-1.218-1.702-1.218-2.724a7.3 7.3 0 0 1 1.401-4.281c.915-1.268 2.215-2.255 3.736-2.838a8.935 8.935 0 0 1 4.81-.434 8.537 8.537 0 0 1 4.257 2.114 7.56 7.56 0 0 1 1.047 1.209c-.146.071-.298.134-.434.218l-.08-.074a1.044 1.044 0 0 0-.337-.215 1.111 1.111 0 0 0-1.146.203.961.961 0 0 0-.227.317.901.901 0 0 0 .007.744.964.964 0 0 0 .233.313l.08.073a4.593 4.593 0 0 0-.763 1.688h-.104c-.276 0-.54.102-.735.282a.928.928 0 0 0-.305.681c0 .256.11.5.305.681.195.18.46.282.735.282h.104c.134.603.392 1.176.761 1.688l-.079.073a.936.936 0 0 0-.287.509.894.894 0 0 0 .08.569c-.192.03-.385.046-.579.05H6.74Z"
    />
  </svg>
);
export default AccountSettingsIcon;