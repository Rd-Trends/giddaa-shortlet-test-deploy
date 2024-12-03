import * as React from "react";
import { SVGProps } from "react";

const MapSuperMarketIcon = ({
  color = "#000",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={47}
    height={39}
    viewBox="0 0 39 47"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M46.714 9.55a.495.495 0 0 0-.022-.058L41.8 1.27a1.456 1.456 0 0 0-1.238-.705H6.976c-.503 0-.978.273-1.237.705L.846 9.492c-.014.022-.014.036-.021.058-.007.022-.022.043-.029.065a.674.674 0 0 0-.05.244v4.289c0 .1.021.194.057.287a.128.128 0 0 0 .036.05.61.61 0 0 0 .13.18s.007.008.007.015c.453.417.957.748 1.482 1.007v21.765c0 .791.648 1.439 1.439 1.439h32.578c.396 0 .72-.324.72-.72a.722.722 0 0 0-.72-.72H21.057v-6.216a.722.722 0 0 0-.72-.719.722.722 0 0 0-.72.72v6.209h-8.856V24.307h8.857v4.05c0 .396.324.72.72.72a.722.722 0 0 0 .719-.72V24.3c0-.792-.648-1.44-1.44-1.44h-8.856c-.792 0-1.44.648-1.44 1.44v13.145H3.898V16.177a6.234 6.234 0 0 0 4.993-1.094c2.195 1.64 5.26 1.64 7.433 0 2.187 1.64 5.252 1.633 7.432 0 2.18 1.633 5.223 1.633 7.432 0a6.238 6.238 0 0 0 7.44 0 6.182 6.182 0 0 0 4.986 1.094v21.268h-4.015a.722.722 0 0 0-.72.72c0 .395.324.719.72.719h4.015c.791 0 1.439-.648 1.439-1.44v-21.75a6.146 6.146 0 0 0 1.51-1.021.718.718 0 0 0 .224-.525V9.859a.709.709 0 0 0-.05-.244.1.1 0 0 0-.022-.065ZM8.178 13.795c-1.734 1.41-4.26 1.432-5.993.022v-3.245h5.993v3.223Zm.209-4.655H2.73l4.253-7.137h3.942L8.386 9.14Zm7.223 4.648a4.765 4.765 0 0 1-5.993.007v-3.216h5.993v3.209Zm7.433.007c-1.741 1.425-4.274 1.425-5.994.007V10.58h5.994v3.216Zm0-4.655h-5.857l.417-2.36a.723.723 0 0 0-.583-.835.723.723 0 0 0-.834.583l-.468 2.612H9.905l2.54-7.137h4.54l-.324 1.841a.723.723 0 0 0 .582.835c.044.007.087.014.13.014a.71.71 0 0 0 .705-.597l.374-2.093h4.59V9.14Zm1.439-7.137h4.59l1.266 7.137h-5.856V2.003Zm6 11.785a4.746 4.746 0 0 1-5.993.007v-3.223h5.993v3.216Zm7.425.007c-1.726 1.41-4.23 1.417-5.993 0v-3.223h5.993v3.223Zm.46-6.82a.725.725 0 0 0-.92-.44.728.728 0 0 0-.44.921l.598 1.684H31.8l-1.267-7.137h4.54l.806 2.273a.725.725 0 0 0 .677.482.728.728 0 0 0 .676-.964l-.633-1.791h3.957l4.252 7.137h-5.67l-.77-2.166Zm6.987 6.849c-1.734 1.41-4.267 1.396-6.008-.022v-3.216h6.008v3.238Z"
    />
    <path
      fill={color}
      d="M36.778 22.868H29.64c-.791 0-1.439.647-1.439 1.439v7.137c0 .791.648 1.439 1.44 1.439h7.137c.791 0 1.439-.648 1.439-1.44v-7.137c0-.798-.648-1.438-1.44-1.438Zm-2.85 1.439h2.85v2.849h-2.85v-2.85Zm-1.438 7.137h-2.85v-2.85h2.85v2.85Zm0-4.288h-2.85v-2.85h2.85v2.85Zm1.439 4.288v-2.85h2.849v2.85h-2.85Z"
    />
  </svg>
);
export default MapSuperMarketIcon;
