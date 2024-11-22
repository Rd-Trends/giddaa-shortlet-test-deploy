"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { cn } from "@/utils/classname";
import { BiSearch } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FieldErrorText, FieldHelperText, FieldLabelText } from "./FormHelpers";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
  info?: string;
  showErrorText?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      error,
      leftIcon,
      rightIcon,
      label,
      hint,
      className,
      type = "text",
      required,
      info,
      wrapperClassName,
      showErrorText = true,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={cn(" space-y-1", wrapperClassName)}>
        <label className=" space-y-1">
          {label && (
            <FieldLabelText label={label} info={info} required={required} />
          )}

          <div className={" relative flex items-center w-full"}>
            {!!leftIcon && type !== "search" && (
              <span
                className={clsx(" absolute left-4", {
                  " text-black": !error && !rest.disabled,
                  " opacity-50": rest.disabled,
                  " text-danger": error,
                })}
                role="icon">
                {leftIcon}
              </span>
            )}

            {type === "search" && (
              <span
                className={clsx(" absolute left-4", {
                  " text-black": !error && !rest.disabled,
                  " opacity-50": rest.disabled,
                  " text-danger": error,
                })}
                role="icon">
                <BiSearch size={16} color="inherit" />
              </span>
            )}

            <input
              ref={ref}
              type={getInputType(type, showPassword)}
              className={cn(
                "flex h-10 w-full rounded-full border border-mid-grey bg-transparent px-4 py-[10px] text-xs ring-offset-transaprent file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-charcoal-grey placeholder:text-xs text-black  outline-none ring-offset-0  disabled:cursor-not-allowed disabled:bg-feint-grey disabled:border-mid-grey disabled:text-dark-grey disabled:placeholder:text-dark-grey",
                {
                  "focus:ring-2 hover:ring-2 ring-primary":
                    !error && !rest.disabled,
                  "ring-danger focus:ring-[1px] hover:ring-[1px] border-danger text-danger ":
                    !!error,
                  " pl-10": !!leftIcon || type === "search",
                  " pr-10":
                    !!rightIcon || type === "password" || type === "search",
                },
                className
              )}
              {...rest}
            />

            {rightIcon && type !== "password" && type !== "search" && (
              <span
                className={clsx(" absolute right-4", {
                  " text-offBlack": !error && !rest.disabled,
                  " opacity-50": rest.disabled,
                  " text-danger": error,
                })}
                role="icon">
                {rightIcon}
              </span>
            )}

            {type === "password" && (
              <button
                type="button"
                className={cn(
                  " absolute right-4 border-none outline-none py-2",
                  {
                    " opacity-50": rest.disabled,
                    " text-danger": error,
                  }
                )}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowPassword((prev) => !prev);
                }}>
                {showPassword ? (
                  <BsEyeSlash size={20} color="inherit" />
                ) : (
                  <BsEye size={20} color="inherit" />
                )}
              </button>
            )}

            {/* {type === "search" && (
              <button
                type="button"
                className={cn(
                  " absolute right-4 border-none outline-none py-2",
                  {
                    " opacity-50": rest.disabled,
                    " text-danger": error,
                  }
                )}
                onClick={handleClearSearch}>
                <IoMdClose size={16} strokeWidth={10} color="inherit" />
              </button>
            )} */}
          </div>
        </label>
        {error && showErrorText && <FieldErrorText error={error} />}
        {hint && !error && <FieldHelperText hint={hint} />}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

const getInputType = (type: string, showPassword: boolean) => {
  switch (type) {
    case "password":
      return showPassword ? "text" : "password";
    default:
      return type;
  }
};
