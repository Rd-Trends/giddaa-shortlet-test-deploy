"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { TbLoader3 } from "react-icons/tb";
import { cn } from "@/utils/classname";

export const buttonVariants = cva(
  // Base styles
  "inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-full transition-colors duration-200 ease-in-out focus-visible:outline-none outline-none font-bold ",
  {
    variants: {
      variant: {
        filled:
          "bg-primary hover:opacity-90 text-white w-fit hover:shadow-[0px_1px_2px_0px_#10182808]",
        outline:
          "bg-transparent border-2 border-primary text-primary hover:border-primary hover:text-primary hover:shadow-[0px_4px_4px_0px_#335F3240] w-fit",
        ghost: "hover:bg-light-grey hover:text-deep-black",
        "outline-danger":
          "bg-transparent border-2 border-danger text-danger hover:border-danger hover:text-danger hover:shadow-[0px_4px_4px_0px_#335F3240] w-fit",
      },
      size: {
        small: "h-[30px] px-4 py-[10px] text-body-sm font-bold",
        medium: "h-[40px] px-4 py-[10px] text-body-sm font-bold",
        large: "h-[50px] py-[10px] px-[18px] text-body-md font-bold",
        xLarge: "h-[60px] py-[10px] px-[18px] text-body-md font-bold",
        icon: "size-10 rounded-sm",
      },
      disabled: {
        true: "cursor-not-allowed",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        disabled: true,
        className: "bg-light-grey text-charcoal-grey",
      },
      {
        variant: "outline",
        disabled: true,
        className: "border-mid-grey text-[#B0B0B0] text-charcoal-grey",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "medium",
    },
  }
);

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: JSX.Element;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      disabled,
      isLoading = false,
      icon,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          buttonVariants({
            variant,
            size,
            disabled,
            className,
          })
        )}
        {...props}>
        {icon && icon}
        {children}
        {isLoading && (
          <TbLoader3 className="animate-spin size-5" aria-hidden="true" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
