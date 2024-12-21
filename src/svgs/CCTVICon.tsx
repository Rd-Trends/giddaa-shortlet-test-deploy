import * as React from "react";
import { SVGProps } from "react";

const CCTVIcon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={33}
    viewBox="0 0 31 33"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="m28.51 6.45-2.856 2.568-2.145 1.927c-1.366 1.227-2.733 2.459-4.1 3.687l-2.572 2.313-2.78 2.499-.113.103c.321-.087.646-.17.967-.255l-1.261-.338-3.029-.81-3.67-.984c-1.046-.281-2.095-.56-3.14-.84-.497-.133-.994-.259-1.49-.398a1.08 1.08 0 0 1-.146-.05l.238.1c-.056-.023-.105-.053-.162-.083-.122-.066.1.077.093.08-.017.003-.073-.063-.083-.073-.02-.02-.04-.046-.06-.063-.066-.06.113.179.077.096-.027-.06-.066-.113-.093-.172l.1.238a1.14 1.14 0 0 1-.08-.294l.036.264a1.21 1.21 0 0 1 .004-.268c-.014.09-.024.176-.037.265.027-.162.076-.32.12-.48l.264-.99a110041.055 110041.055 0 0 0 1.96-7.324c.307-1.155.618-2.307.926-3.462.146-.546.285-1.095.44-1.638.014-.05.03-.1.05-.149l-.1.238c.024-.056.054-.106.084-.162.066-.122-.077.1-.08.093-.003-.017.063-.073.073-.083.02-.02.046-.04.063-.06.06-.066-.179.113-.096.077.06-.027.112-.067.172-.093l-.238.1c.096-.04.192-.067.294-.08l-.265.036a1.2 1.2 0 0 1 .268.004c-.089-.014-.175-.024-.264-.037.241.037.483.12.721.185.55.146 1.096.295 1.645.44l2.463.66c1.006.267 2.009.539 3.015.807l3.293.88 3.346.894 3.121.834c.877.235 1.75.47 2.628.702.632.168 1.268.337 1.9.51.298.079.596.165.897.24a.26.26 0 0 0 .04.01c.5.137 1.101-.168 1.22-.694.12-.523-.155-1.08-.694-1.221-.464-.123-.924-.249-1.387-.371-1.182-.318-2.363-.632-3.545-.95l-4.782-1.28-5.097-1.365A8414.347 8414.347 0 0 0 6.597.076a2.347 2.347 0 0 0-.983-.043c-.775.122-1.4.75-1.609 1.489-.218.761-.41 1.532-.615 2.3l-1.274 4.76-1.252 4.673c-.132.5-.268 1-.4 1.502-.083.315-.175.616-.208.94-.1.977.599 1.877 1.519 2.142.056.016.109.03.165.043.4.106.801.215 1.198.32l4.492 1.202c1.582.424 3.164.848 4.742 1.268.51.136 1.023.275 1.533.41.129.033.258.07.387.103l.08.02c.38.092.704-.02.989-.268.96-.831 1.887-1.698 2.83-2.546l1.77-1.591c1.255-1.13 2.51-2.258 3.764-3.383.996-.894 1.992-1.79 2.985-2.684.669-.603 1.337-1.202 2.006-1.804.4-.357.797-.718 1.198-1.076.387-.347.38-1.055 0-1.403-.414-.38-.99-.37-1.404 0Z"
    />
    <path
      fill={color}
      d="M28.761 10.359c-.29 1.089-.582 2.178-.873 3.263l-1.39 5.193c-.106.394-.212.788-.315 1.179l1.221-.695-3.263-.874-5.193-1.39c-.394-.106-.788-.212-1.178-.315l.437 1.658c.294-.264.589-.53.88-.794.705-.635 1.41-1.267 2.118-1.903l2.549-2.29 2.214-1.993c.357-.32.728-.635 1.076-.97a.073.073 0 0 1 .016-.013c-.32.086-.645.17-.966.255l2.942.788c.142.036.281.076.424.112.5.136 1.102-.168 1.221-.695.12-.523-.155-1.079-.695-1.221-1.066-.285-2.135-.573-3.2-.857-.053-.013-.103-.03-.156-.043-.374-.083-.695.013-.98.261l-.155.14c-.275.244-.546.492-.821.737l-2.926 2.632c-1.066.956-2.128 1.913-3.194 2.87-.572.515-1.162 1.019-1.724 1.548-.01.007-.017.017-.027.023-.562.507-.258 1.473.437 1.658l3.264.874 5.193 1.39c.393.106.787.212 1.178.315.516.139 1.082-.173 1.221-.695l.874-3.264 1.39-5.193c.106-.394.212-.787.314-1.178.136-.5-.168-1.102-.695-1.221-.52-.106-1.075.172-1.218.708ZM4.22 30.353H.993l.993.993v-8.761l-.993.993h2.876c.159 0 .324-.01.483.01-.09-.013-.175-.023-.265-.037.09.014.173.037.255.067l-.238-.1a1.7 1.7 0 0 1 .172.09c.033.016.126.092-.013-.017-.146-.112-.03-.02-.003.007.003.003.06.06.056.063-.01.01-.146-.219-.08-.1.037.063.073.123.1.192l-.1-.238c.03.083.053.166.067.255-.014-.09-.024-.175-.037-.265.027.248.01.507.01.758v5.233c0 .304.023.622-.01.927.013-.09.023-.176.037-.265-.014.09-.037.172-.067.255l.1-.239c-.027.06-.057.116-.09.172-.016.033-.092.126.017-.013.112-.145.02-.03-.007-.003-.003.003-.06.06-.063.056-.01-.01.219-.146.1-.08-.063.037-.123.073-.192.1l.238-.1c-.083.03-.165.054-.255.067.09-.013.176-.023.265-.037a.392.392 0 0 1-.13.017c-.519.01-1.015.45-.992.993.023.53.437 1.006.993.993a2.08 2.08 0 0 0 2.049-2.066c.003-.228 0-.46 0-.688v-5.937a2.148 2.148 0 0 0-.57-1.427c-.377-.407-.933-.622-1.482-.632-.11-.003-.216 0-.325 0H.993c-.536 0-.993.453-.993.993v8.761c0 .536.453.993.993.993H4.22c.52 0 1.016-.457.993-.993-.023-.533-.434-.99-.993-.99Z"
    />
    <path
      fill={color}
      d="M5.28 28.152h2.14c.467 0 .934-.024 1.387-.15a4.027 4.027 0 0 0 1.943-1.217 4.232 4.232 0 0 0 1.003-2.287c.03-.248.027-.497.027-.745v-4.498c0-.52-.457-1.016-.993-.993-.54.023-.993.437-.993.993v4.386c0 .284.01.572-.027.857.013-.09.023-.176.037-.265a3.31 3.31 0 0 1-.209.774l.1-.238a3.15 3.15 0 0 1-.269.5c-.013.02-.08.142-.099.142.023 0 .179-.222.05-.066a2.824 2.824 0 0 1-.398.397c-.062.053-.188.116.067-.05-.043.027-.083.06-.126.087a3.247 3.247 0 0 1-.52.278l.239-.1a3.117 3.117 0 0 1-.775.209c.09-.013.176-.023.265-.037-.487.063-.993.027-1.483.027H5.283c-.52 0-1.017.457-.993.993.02.55.43 1.003.99 1.003Z"
    />
  </svg>
);
export default CCTVIcon;
