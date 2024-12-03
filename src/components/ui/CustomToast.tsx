import React from "react";
import { GoX } from "react-icons/go";
import { TypeOptions } from "react-toastify";

const variants = {
  info: {
    containerClass:
      "bg-[#F1FCFF] border border-[#56CCF2] h-full p-[16px] rounded-[8px] text-black",
    iconColor: "text-[#56CCF2]",
    Icon: "/gif/Info.gif",
  },
  success: {
    containerClass:
      "bg-[#EBFFED] border border-[#005D15] h-full p-[16px] rounded-[8px] text-black",
    iconColor: "text-primary",
    Icon: "/gif/Success.gif",
  },
  error: {
    containerClass:
      "bg-[#FEF6F6] border border-[#F22424] h-full p-[16px] rounded-[8px] text-black",
    iconColor: "text-[#F22424]",
    Icon: "/gif/Error.gif",
  },
  warning: {
    containerClass:
      "bg-[#FFF8EA] border border-[#F7B11C] h-full p-[16px] rounded-[8px] text-black",
    iconColor: "text-[#F7B11C]",
    Icon: "/gif/Warning.gif",
  },
  default: {
    containerClass:
      "bg-[#F1FCFF] border border-[#56CCF2] h-full p-[16px] rounded-[8px] text-black",
    iconColor: "text-[#56CCF2]",
    Icon: "/gif/Info.gif",
  },
} as Record<TypeOptions, { containerClass: string; Icon: string }>;

const getTitle = (type: TypeOptions, title?: string) => {
  if (!!title) return title;
  switch (type) {
    case "info":
      return "Info";
    case "success":
      return "Success";
    case "error":
      return "Error";
    case "warning":
      return "Warning";
    default:
      return "Info";
  }
};

export type CustomToastProps = {
  title?: string;
  description?: string;
  type: TypeOptions;
  closeToast?: () => void;
};

const CustomToast = (props: CustomToastProps) => {
  const { containerClass, Icon } = variants[props.type as TypeOptions];

  return (
    <div
      className={`flex items-start gap-3 w-full max-w-[335px] ${containerClass}`}>
      <img
        src={Icon}
        alt=""
        className="h-[26px] max-w-[26px] w-full object-cover"
        style={{
          transition: "transform 0.5s ease-in-out",
        }}
      />
      <div className="flex-1 pb-[6px]">
        <h3 className="text-[14px] leading-6 font-bold">
          {getTitle(props.type ?? "default", props.title)}
        </h3>
        {props?.description && (
          <p className="mt-1 text-body-sm ">{props?.description}</p>
        )}
      </div>
      <div
        onClick={props.closeToast}
        className="text-[#667085] bg-[#F9FAFB] border border-[#F0F0F0] rounded-full w-[23px] h-[23px] flex justify-center items-center cursor-pointer">
        <GoX size={12} />
      </div>
    </div>
  );
};

export default CustomToast;
