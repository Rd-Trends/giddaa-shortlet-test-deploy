import * as React from "react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={44}
    viewBox="0 0 96 44"
    fill="none"
    {...props}>
    <path
      fill="#335F32"
      d="M58.035 29.359a4.051 4.051 0 0 1-2.124-.545 4.346 4.346 0 0 1-1.535-1.497 4.204 4.204 0 0 1-.576-2.136c-.008-.788.168-1.5.531-2.134a4.155 4.155 0 0 1 1.517-1.528c.64-.385 1.36-.581 2.16-.59.411-.004.808.049 1.188.161.382.1.736.255 1.066.46l-.036-3.354 2.163-.386.12 11.391-2.134.023-.008-.677c-.669.531-1.446.802-2.332.812Zm.328-1.847c.4-.005.764-.072 1.09-.201.335-.14.623-.342.863-.608l-.034-3.197a2.575 2.575 0 0 0-.876-.559 2.871 2.871 0 0 0-1.094-.193 2.432 2.432 0 0 0-1.23.328c-.356.203-.638.49-.844.86-.207.36-.309.764-.303 1.216a2.332 2.332 0 0 0 1.192 2.051 2.45 2.45 0 0 0 1.236.303Zm9.65 1.741a4.044 4.044 0 0 1-2.126-.544 4.346 4.346 0 0 1-1.534-1.497 4.204 4.204 0 0 1-.577-2.136c-.008-.788.168-1.5.531-2.133a4.138 4.138 0 0 1 1.518-1.528c.639-.386 1.36-.582 2.16-.59a4.05 4.05 0 0 1 1.189.16c.38.101.736.255 1.064.462l-.036-3.357 2.163-.384.122 11.39-2.135.023-.008-.677c-.67.532-1.446.802-2.332.811Zm.328-1.846c.4-.004.762-.07 1.088-.2a2.4 2.4 0 0 0 .864-.608l-.035-3.199a2.59 2.59 0 0 0-.874-.558 2.876 2.876 0 0 0-1.094-.194 2.461 2.461 0 0 0-1.23.329c-.357.203-.64.49-.845.86-.208.359-.308.765-.304 1.216a2.346 2.346 0 0 0 1.192 2.052c.371.206.784.307 1.238.302Zm8.462 1.786c-.591.006-1.113-.093-1.569-.299a2.625 2.625 0 0 1-1.07-.886 2.305 2.305 0 0 1-.393-1.305c-.008-.787.28-1.399.867-1.837.596-.447 1.416-.676 2.459-.688a6.137 6.137 0 0 1 2.028.31l-.005-.598c-.006-.473-.158-.828-.456-1.067-.296-.239-.73-.355-1.3-.348a4.056 4.056 0 0 0-1.12.184c-.4.11-.863.283-1.388.52l-.807-1.584a11.24 11.24 0 0 1 1.86-.681 7.493 7.493 0 0 1 1.8-.239c1.108-.012 1.969.247 2.587.776.626.52.945 1.261.956 2.227l.056 5.326-2.135.022-.005-.583a3.455 3.455 0 0 1-1.086.563 4.543 4.543 0 0 1-1.279.187Zm-.976-2.558c.003.315.143.565.42.752.274.175.639.26 1.093.256.359-.004.69-.05.995-.136.305-.099.578-.238.818-.42l-.013-1.196a4.297 4.297 0 0 0-.824-.228 5.142 5.142 0 0 0-.919-.07c-.495.006-.884.105-1.167.297-.272.182-.407.43-.403.745Zm9.748 2.466c-.59.006-1.113-.093-1.569-.299a2.617 2.617 0 0 1-1.07-.886 2.285 2.285 0 0 1-.392-1.305c-.01-.788.28-1.4.865-1.837.597-.447 1.417-.676 2.461-.688a6.137 6.137 0 0 1 2.028.31l-.006-.598c-.006-.473-.157-.83-.454-1.067-.3-.239-.732-.355-1.302-.348a4.06 4.06 0 0 0-1.12.184c-.4.11-.863.283-1.386.52l-.808-1.584c.65-.3 1.27-.528 1.858-.681.6-.154 1.2-.234 1.802-.24 1.106-.011 1.968.248 2.586.777.627.518.947 1.261.956 2.227l.057 5.326-2.135.022-.006-.583a3.455 3.455 0 0 1-1.086.563 4.546 4.546 0 0 1-1.279.187Zm-.976-2.558c.003.315.143.565.42.752.274.175.64.26 1.093.256.359-.004.69-.05.995-.136.305-.099.578-.238.818-.42l-.012-1.197a4.434 4.434 0 0 0-.825-.227 5.142 5.142 0 0 0-.919-.07c-.495.006-.884.105-1.167.297-.272.182-.407.43-.403.745Z"
    />
    <mask
      id="logo_a"
      width={34}
      height={6}
      x={62}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}>
      <path fill="#fff" d="M62.62 5.277h32.813v4.785H62.62V5.277Z" />
    </mask>
    <g mask="url(#logo_a)">
      <mask
        id="logo_b"
        width={34}
        height={5}
        x={62}
        y={5}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}>
        <path
          fill="#fff"
          d="M64.625 9.924a2.716 2.716 0 0 1-1.899-.794l.406-.466c.24.235.485.41.733.523.254.114.517.17.79.17.217 0 .404-.03.564-.088a.85.85 0 0 0 .379-.265.604.604 0 0 0 .133-.384.535.535 0 0 0-.208-.454c-.14-.104-.37-.185-.69-.24l-.74-.12c-.404-.07-.709-.201-.912-.39-.197-.189-.296-.441-.296-.756 0-.253.067-.473.202-.663.134-.192.325-.341.57-.447a2.21 2.21 0 0 1 .86-.157c.32 0 .635.053.942.157.313.102.593.248.841.442l-.365.503c-.477-.36-.96-.542-1.45-.542-.194 0-.362.028-.507.083a.77.77 0 0 0-.335.232.52.52 0 0 0-.12.34c0 .182.062.321.184.417.122.093.325.16.608.202l.714.12c.469.075.812.213 1.031.409.22.197.33.468.33.813 0 .27-.075.507-.222.713-.148.202-.354.36-.62.473-.265.113-.573.17-.923.17Zm4.135-.063V6.036h-1.557V5.45h3.777v.586h-1.557v3.825h-.663Zm2.168 0 1.83-4.411h.783l1.809 4.411h-.721l-.513-1.292h-1.98l-.518 1.292h-.69Zm1.423-1.84h1.55l-.771-1.94-.779 1.94Zm4.62 1.84V8.11l-1.784-2.66h.772l1.36 2.074 1.36-2.074h.74l-1.783 2.672v1.74h-.665Zm4.95.063a2.715 2.715 0 0 1-1.899-.794l.406-.466c.24.235.484.41.733.523a1.914 1.914 0 0 0 1.353.082.862.862 0 0 0 .381-.265.61.61 0 0 0 .132-.384.535.535 0 0 0-.208-.454c-.14-.104-.37-.185-.69-.24l-.74-.12c-.405-.07-.709-.201-.91-.39-.2-.189-.298-.441-.298-.756 0-.253.066-.473.201-.663a1.32 1.32 0 0 1 .57-.447 2.21 2.21 0 0 1 .86-.157c.32 0 .636.053.943.157.312.102.593.248.841.442l-.366.503c-.477-.36-.96-.542-1.449-.542a1.41 1.41 0 0 0-.506.083.768.768 0 0 0-.336.232.52.52 0 0 0-.12.34c0 .182.061.321.184.417.122.093.325.16.608.202l.714.12c.469.075.812.213 1.03.409.221.197.33.468.33.813 0 .27-.073.507-.221.713-.148.202-.354.36-.62.473-.265.113-.574.17-.924.17Zm4.966-.063V5.45h1.918c.29 0 .544.048.76.144.214.098.381.234.499.41.117.172.177.377.177.612a.998.998 0 0 1-.164.567c-.111.164-.264.294-.462.391.248.088.442.222.582.403a.961.961 0 0 1 .215.624 1.168 1.168 0 0 1-.722 1.11c-.227.1-.496.15-.803.15h-2Zm.665-2.54h1.215c.248 0 .447-.058.594-.175a.58.58 0 0 0 .222-.48.58.58 0 0 0-.222-.479c-.147-.117-.346-.176-.594-.176h-1.215v1.31Zm0 1.98h1.284c.278 0 .499-.066.659-.195a.64.64 0 0 0 .245-.53.633.633 0 0 0-.245-.524c-.16-.133-.38-.201-.659-.201h-1.284V9.3Zm5.257.56V8.11l-1.784-2.66h.772l1.36 2.074 1.36-2.074h.74l-1.784 2.672v1.74h-.664Z"
        />
      </mask>
      <g mask="url(#logo_b)">
        <path
          fill="url(#logo_c)"
          d="M62.726 5.393v4.531h32.531V5.393h-32.53Z"
        />
      </g>
    </g>
    <mask
      id="logo_d"
      width={42}
      height={44}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}>
      <path fill="#fff" d="M.44.933h41.33V44H.44V.933Z" />
    </mask>
    <g fill="#335F32" mask="url(#logo_d)">
      <path d="M21.067 4.71a3.33 3.33 0 0 1 1.846.564l13.375 8.887a3.779 3.779 0 0 1 1.653 3.18l-.018 17.165c-.001 2.06-1.571 3.736-3.5 3.736H7.762a3.397 3.397 0 0 1-1.296-.265 3.405 3.405 0 0 1-1.092-.74 3.835 3.835 0 0 1-1.113-2.74l.018-17.172a3.766 3.766 0 0 1 .425-1.788 3.802 3.802 0 0 1 1.22-1.38l13.29-8.878a3.326 3.326 0 0 1 1.854-.569Zm0-3.777a7.123 7.123 0 0 0-3.967 1.21L3.811 11.022a7.566 7.566 0 0 0-3.325 6.3L.47 34.493C.465 38.649 3.73 44 7.761 44l26.663-3.349c4.024 0 7.287-1.993 7.291-6.141l.017-17.165a7.58 7.58 0 0 0-3.34-6.326L25.016 2.132a7.12 7.12 0 0 0-3.95-1.199Z" />
      <path d="M21.067 4.71a3.33 3.33 0 0 1 1.846.564l13.375 8.887a3.779 3.779 0 0 1 1.653 3.18l-.018 17.165c-.001 2.06-1.571 3.736-3.5 3.736H7.762a3.397 3.397 0 0 1-1.296-.265 3.405 3.405 0 0 1-1.092-.74 3.835 3.835 0 0 1-1.113-2.74l.018-17.172a3.766 3.766 0 0 1 .425-1.788 3.802 3.802 0 0 1 1.22-1.38l13.29-8.878a3.326 3.326 0 0 1 1.854-.569Zm0-3.777a7.123 7.123 0 0 0-3.967 1.21L3.811 11.022a7.566 7.566 0 0 0-3.325 6.3L.47 34.493C.465 38.649 3.73 44 7.761 44l26.663-3.349c4.024 0 7.287-1.993 7.291-6.141l.017-17.165a7.58 7.58 0 0 0-3.34-6.326L25.016 2.132a7.12 7.12 0 0 0-3.95-1.199Z" />
    </g>
    <path
      fill="#335F32"
      d="M25.245 33.236c-1.199.288-2.363.351-3.494.186a9.043 9.043 0 0 1-3.15-1.113 8.812 8.812 0 0 1-2.487-2.197 8.502 8.502 0 0 1-1.438-3.106c-.281-1.164-.33-2.295-.14-3.395a8.604 8.604 0 0 1 1.179-3.08 8.225 8.225 0 0 1 2.268-2.42 8.96 8.96 0 0 1 3.188-1.45 9.327 9.327 0 0 1 3.976-.107c1.31.235 2.464.735 3.464 1.498l-1.81 2.699a5.64 5.64 0 0 0-2.34-1.09 5.793 5.793 0 0 0-2.548.056 4.956 4.956 0 0 0-1.905.898 4.99 4.99 0 0 0-1.348 1.491 5.04 5.04 0 0 0-.68 1.915 5.767 5.767 0 0 0 .133 2.156c.181.75.482 1.416.899 1.996a5.32 5.32 0 0 0 1.49 1.415c.59.345 1.224.581 1.906.71a5.466 5.466 0 0 0 2.147-.106c.77-.184 1.427-.489 1.975-.913.545-.44.962-.962 1.255-1.568a4.163 4.163 0 0 0 .428-1.95l-4.773 1.15-.702-2.894 8.346-2.012.246 1.01c.29 1.194.35 2.347.181 3.457a8.326 8.326 0 0 1-1.046 3.025 7.965 7.965 0 0 1-2.142 2.34c-.883.651-1.91 1.117-3.078 1.399ZM8.683 32.416a.122.122 0 0 0-.144-.032c-.127.07-3.305 1.726-3.456 3.873-.066.976.501 1.895 1.684 2.727l.172-.245c-.014.056-.4 1.317-.35 1.329.053.01.115-.024.127-.072l.255-.965c1.481-.233 2.44-.799 2.866-1.703.931-1.97-1.069-4.793-1.154-4.912Z"
    />
    <path
      fill="#F7B11C"
      d="M10.425 30.685a.962.962 0 0 1-.085.399 1.055 1.055 0 0 1-.245.338 1.137 1.137 0 0 1-.364.225 1.204 1.204 0 0 1-1.226-.225 1.052 1.052 0 0 1-.243-.338.962.962 0 0 1 0-.797c.058-.128.138-.24.243-.338a1.175 1.175 0 0 1 .796-.304 1.175 1.175 0 0 1 .794.304c.106.097.187.21.245.338.057.127.085.26.085.398Z"
    />
    <path
      fill="#335F32"
      d="M11.913 33.81a.104.104 0 0 0-.119-.027c-.105.06-2.742 1.434-2.868 3.215-.056.81.414 1.572 1.397 2.263l.143-.203c-.012.046-.333 1.094-.29 1.103.043.01.095-.02.105-.06l.211-.801c1.23-.194 2.025-.664 2.378-1.413.775-1.635-.885-3.977-.957-4.077ZM13.056 32.478c0 .1-.021.196-.063.288a.752.752 0 0 1-.176.244.857.857 0 0 1-.885.163.817.817 0 0 1-.265-.163.752.752 0 0 1-.176-.244.695.695 0 0 1 0-.577.734.734 0 0 1 .176-.243.819.819 0 0 1 .265-.164.874.874 0 0 1 .622 0 .825.825 0 0 1 .263.164.734.734 0 0 1 .239.532Z"
    />
    <path
      fill="#335F32"
      d="M14.037 35.403a.08.08 0 0 0-.092-.02c-.08.045-2.1 1.097-2.197 2.462-.042.62.318 1.203 1.071 1.733l.11-.155c-.01.035-.255.836-.223.844.033.007.073-.016.081-.045l.162-.615c.941-.148 1.55-.507 1.821-1.081.593-1.253-.678-3.047-.733-3.123ZM14.922 34.5a.668.668 0 0 1-.219.49.75.75 0 0 1-.243.151.811.811 0 0 1-.574 0 .721.721 0 0 1-.406-.375.633.633 0 0 1 0-.531.723.723 0 0 1 .406-.375.803.803 0 0 1 .574 0c.091.034.172.085.243.15a.683.683 0 0 1 .22.49ZM48.011 22.26l2.822 6.898h-5.645l2.823-6.898ZM49.74 18.368a1.534 1.534 0 0 1-.085.896 1.607 1.607 0 0 1-.142.268 1.627 1.627 0 0 1-.428.428 1.534 1.534 0 0 1-1.167.237 1.578 1.578 0 0 1-.797-.42 1.55 1.55 0 0 1-.46-1.094c0-.103.008-.203.027-.303a1.59 1.59 0 0 1 .231-.56 1.552 1.552 0 0 1 2.157-.436 1.61 1.61 0 0 1 .43.426 1.566 1.566 0 0 1 .234.558Z"
    />
    <defs>
      <linearGradient
        id="logo_c"
        x1={95.257}
        x2={62.727}
        y1={7.498}
        y2={7.498}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#335F32" />
        <stop offset={0.25} stopColor="#335F32" />
        <stop offset={0.375} stopColor="#335F32" />
        <stop offset={0.379} stopColor="#356032" />
        <stop offset={0.383} stopColor="#366031" />
        <stop offset={0.387} stopColor="#376131" />
        <stop offset={0.391} stopColor="#386131" />
        <stop offset={0.395} stopColor="#3A6231" />
        <stop offset={0.398} stopColor="#3B6231" />
        <stop offset={0.402} stopColor="#3C6231" />
        <stop offset={0.406} stopColor="#3D6330" />
        <stop offset={0.41} stopColor="#3E6330" />
        <stop offset={0.414} stopColor="#3F6430" />
        <stop offset={0.418} stopColor="#406430" />
        <stop offset={0.422} stopColor="#426530" />
        <stop offset={0.426} stopColor="#43652F" />
        <stop offset={0.43} stopColor="#44652F" />
        <stop offset={0.434} stopColor="#45662F" />
        <stop offset={0.438} stopColor="#46662F" />
        <stop offset={0.441} stopColor="#47672F" />
        <stop offset={0.445} stopColor="#48672F" />
        <stop offset={0.449} stopColor="#4A672E" />
        <stop offset={0.453} stopColor="#4B682E" />
        <stop offset={0.457} stopColor="#4C682E" />
        <stop offset={0.461} stopColor="#4D692E" />
        <stop offset={0.465} stopColor="#4E692E" />
        <stop offset={0.469} stopColor="#4F6A2E" />
        <stop offset={0.473} stopColor="#506A2D" />
        <stop offset={0.477} stopColor="#516A2D" />
        <stop offset={0.48} stopColor="#536B2D" />
        <stop offset={0.484} stopColor="#546B2D" />
        <stop offset={0.488} stopColor="#556C2D" />
        <stop offset={0.492} stopColor="#566C2C" />
        <stop offset={0.496} stopColor="#576D2C" />
        <stop offset={0.5} stopColor="#586D2C" />
        <stop offset={0.504} stopColor="#596D2C" />
        <stop offset={0.508} stopColor="#5B6E2C" />
        <stop offset={0.512} stopColor="#5C6E2C" />
        <stop offset={0.516} stopColor="#5D6F2B" />
        <stop offset={0.52} stopColor="#5E6F2B" />
        <stop offset={0.523} stopColor="#5F6F2B" />
        <stop offset={0.527} stopColor="#60702B" />
        <stop offset={0.531} stopColor="#61702B" />
        <stop offset={0.535} stopColor="#62712A" />
        <stop offset={0.539} stopColor="#64712A" />
        <stop offset={0.543} stopColor="#65722A" />
        <stop offset={0.547} stopColor="#66722A" />
        <stop offset={0.551} stopColor="#67722A" />
        <stop offset={0.555} stopColor="#68732A" />
        <stop offset={0.559} stopColor="#697329" />
        <stop offset={0.563} stopColor="#6A7429" />
        <stop offset={0.566} stopColor="#6C7429" />
        <stop offset={0.57} stopColor="#6D7429" />
        <stop offset={0.574} stopColor="#6E7529" />
        <stop offset={0.578} stopColor="#6F7528" />
        <stop offset={0.582} stopColor="#707628" />
        <stop offset={0.586} stopColor="#717628" />
        <stop offset={0.59} stopColor="#727728" />
        <stop offset={0.594} stopColor="#747728" />
        <stop offset={0.598} stopColor="#757728" />
        <stop offset={0.602} stopColor="#767827" />
        <stop offset={0.605} stopColor="#777827" />
        <stop offset={0.609} stopColor="#787927" />
        <stop offset={0.613} stopColor="#797927" />
        <stop offset={0.617} stopColor="#7A7A27" />
        <stop offset={0.621} stopColor="#7B7A26" />
        <stop offset={0.625} stopColor="#7D7A26" />
        <stop offset={0.629} stopColor="#7E7B26" />
        <stop offset={0.633} stopColor="#7F7B26" />
        <stop offset={0.637} stopColor="#807C26" />
        <stop offset={0.641} stopColor="#817C26" />
        <stop offset={0.645} stopColor="#827C25" />
        <stop offset={0.648} stopColor="#837D25" />
        <stop offset={0.652} stopColor="#857D25" />
        <stop offset={0.656} stopColor="#867E25" />
        <stop offset={0.66} stopColor="#877E25" />
        <stop offset={0.664} stopColor="#887F24" />
        <stop offset={0.668} stopColor="#897F24" />
        <stop offset={0.672} stopColor="#8A7F24" />
        <stop offset={0.676} stopColor="#8B8024" />
        <stop offset={0.68} stopColor="#8D8024" />
        <stop offset={0.684} stopColor="#8E8124" />
        <stop offset={0.688} stopColor="#8F8123" />
        <stop offset={0.691} stopColor="#908223" />
        <stop offset={0.695} stopColor="#918223" />
        <stop offset={0.699} stopColor="#928223" />
        <stop offset={0.703} stopColor="#938323" />
        <stop offset={0.707} stopColor="#948323" />
        <stop offset={0.711} stopColor="#968422" />
        <stop offset={0.715} stopColor="#978422" />
        <stop offset={0.719} stopColor="#988422" />
        <stop offset={0.723} stopColor="#998522" />
        <stop offset={0.727} stopColor="#9A8522" />
        <stop offset={0.73} stopColor="#9B8621" />
        <stop offset={0.734} stopColor="#9C8621" />
        <stop offset={0.738} stopColor="#9E8721" />
        <stop offset={0.742} stopColor="#9F8721" />
        <stop offset={0.746} stopColor="#A08721" />
        <stop offset={0.75} stopColor="#A18821" />
        <stop offset={0.754} stopColor="#A28820" />
        <stop offset={0.758} stopColor="#A38920" />
        <stop offset={0.762} stopColor="#A48920" />
        <stop offset={0.766} stopColor="#A58A20" />
        <stop offset={0.77} stopColor="#A78A20" />
        <stop offset={0.773} stopColor="#A88A1F" />
        <stop offset={0.777} stopColor="#A98B1F" />
        <stop offset={0.781} stopColor="#AA8B1F" />
        <stop offset={0.785} stopColor="#AB8C1F" />
        <stop offset={0.789} stopColor="#AC8C1F" />
        <stop offset={0.793} stopColor="#AD8C1F" />
        <stop offset={0.797} stopColor="#AF8D1E" />
        <stop offset={0.801} stopColor="#B08D1E" />
        <stop offset={0.805} stopColor="#B18E1E" />
        <stop offset={0.809} stopColor="#B28E1E" />
        <stop offset={0.813} stopColor="#B38F1E" />
        <stop offset={0.816} stopColor="#B48F1D" />
        <stop offset={0.82} stopColor="#B58F1D" />
        <stop offset={0.824} stopColor="#B7901D" />
        <stop offset={0.828} stopColor="#B8901D" />
        <stop offset={0.832} stopColor="#B9911D" />
        <stop offset={0.836} stopColor="#BA911D" />
        <stop offset={0.84} stopColor="#BB921C" />
        <stop offset={0.844} stopColor="#BC921C" />
        <stop offset={0.848} stopColor="#BD921C" />
        <stop offset={0.852} stopColor="#BE931C" />
        <stop offset={0.855} stopColor="#C0931C" />
        <stop offset={0.859} stopColor="#C1941B" />
        <stop offset={0.863} stopColor="#C2941B" />
        <stop offset={0.867} stopColor="#C3941B" />
        <stop offset={0.871} stopColor="#C4951B" />
        <stop offset={0.875} stopColor="#C5951B" />
        <stop offset={0.879} stopColor="#C6961B" />
        <stop offset={0.883} stopColor="#C8961A" />
        <stop offset={0.887} stopColor="#C9971A" />
        <stop offset={0.891} stopColor="#CA971A" />
        <stop offset={0.895} stopColor="#CB971A" />
        <stop offset={0.898} stopColor="#CC981A" />
        <stop offset={0.902} stopColor="#CD9819" />
        <stop offset={0.906} stopColor="#CE9919" />
        <stop offset={0.91} stopColor="#D09919" />
        <stop offset={0.914} stopColor="#D19A19" />
        <stop offset={0.918} stopColor="#D29A19" />
        <stop offset={0.922} stopColor="#D39A19" />
        <stop offset={0.926} stopColor="#D49B18" />
        <stop offset={0.93} stopColor="#D59B18" />
        <stop offset={0.934} stopColor="#D69C18" />
        <stop offset={0.938} stopColor="#D79C18" />
        <stop offset={0.941} stopColor="#D99C18" />
        <stop offset={0.945} stopColor="#DA9D18" />
        <stop offset={0.949} stopColor="#DB9D17" />
        <stop offset={0.953} stopColor="#DC9E17" />
        <stop offset={0.957} stopColor="#DD9E17" />
        <stop offset={0.961} stopColor="#DE9F17" />
        <stop offset={0.965} stopColor="#DF9F17" />
        <stop offset={0.969} stopColor="#E19F16" />
        <stop offset={0.973} stopColor="#E2A016" />
        <stop offset={0.977} stopColor="#E3A016" />
        <stop offset={0.98} stopColor="#E4A116" />
        <stop offset={0.984} stopColor="#E5A116" />
        <stop offset={0.988} stopColor="#E6A216" />
        <stop offset={0.992} stopColor="#E7A215" />
        <stop offset={0.996} stopColor="#E8A215" />
        <stop offset={1} stopColor="#EAA315" />
      </linearGradient>
    </defs>
  </svg>
);
export default Logo;
