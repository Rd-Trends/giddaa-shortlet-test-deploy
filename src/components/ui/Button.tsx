"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { TbLoader3 } from "react-icons/tb";
import { cn } from "@/utils/classname";

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center rounded-full gap-4",
  {
    variants: {
      variant: {
        filled:
          "bg-[#346633] hover:bg-primary text-white w-fit hover:shadow-[0px_1px_2px_0px_#10182808]",
        outline:
          "bg-transparent border-2 border-[#346633] text-[#346633] hover:border-primary hover:text-primary hover:shadow-[0px_4px_4px_0px_#335F3240] w-fit",
      },
      size: {
        small: "h-[30px] px-4 py-[10px] body-sm font-bold",
        medium: "h-[40px] px-4 py-[10px] body-sm font-semibold",
        large: "h-[50px] py-[10px] px-[18px] body-md font-semibold",
        xLarge: "h-[60px] py-[10px] px-[18px] body-md font-semibold",
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

type ButtonVariant =
  | "googleSocial"
  | "loginHandler"
  | "facebookSocial"
  | "registerHandler";
type ButtonVariation = "filled" | "outline";
type ButtonSize = "small" | "medium" | "large" | "xLarge";

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
        {isLoading && <TbLoader3 className="animate-spin size-5" aria-hidden="true" />}
      </button>
    );
  }
);

Button.displayName = "Button";

// Constant for variant options (useful for form libraries or prop validation)
export const BUTTON_VARIANTS = {
  variants: [
    "googleSocial",
    "loginHandler",
    "facebookSocial",
    "registerHandler",
  ],
  variations: ["filled", "outline"],
  sizes: ["small", "medium", "large", "xLarge"],
} as const;

// Type helper for external usage
export type { ButtonProps, ButtonVariant, ButtonVariation, ButtonSize };
