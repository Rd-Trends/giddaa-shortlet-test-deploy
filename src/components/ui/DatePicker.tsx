"use client";

import * as React from "react";
import { format } from "date-fns";
import { PopoverTrigger, Popover, PopoverContent } from "./Popover";
import { cn } from "@/utils/classname";
import { BiCalendar } from "react-icons/bi";
import { Calendar } from "./Calendar";
import { FieldErrorText, FieldHelperText, FieldLabelText } from "./FormHelpers";
import SkeletonLoader from "./Skeleton";

type Props = {
  label?: string;
  required?: boolean;
  isLoadingFeild?: boolean;
  placeholder?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export const DatePicker = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      label,
      required,
      isLoadingFeild,
      placeholder = "Pick a date",
      error,
      hint,
      disabled,
      defaultValue,
      onValueChange,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(
      defaultValue ? new Date(defaultValue) : undefined
    );

    return (
      <div className="w-full flex flex-col items-start space-y-1">
        {label && (
          <label className="text-sm font-medium text-black" htmlFor={label}>
            <FieldLabelText label={label} required={required} />
          </label>
        )}

        {isLoadingFeild ? (
          <SkeletonLoader className="w-[7rem] h-[1.2rem] mt-1 rounded" />
        ) : (
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild ref={ref}>
              <button
                disabled={disabled}
                className={cn(
                  "flex  items-center h-10 w-full rounded-full border-2 border-midGrey hover:border-primary focus-visible:border-primary bg-border px-3 file:border-0 file:bg-transparent file:font-medium placeholder:text-[12px] text-[13px] placeholder:leading-[18px] placeholder:text-[#4B4B4B] focus-visible:outline-none outline-none  disabled:cursor-not-allowed disabled:bg-lightGrey disabled:border-midGrey disabled:text-darkGrey disabled:placeholder:text-darkGrey transition-all duration-300 ease-in-out",
                  {
                    "": !error && !disabled,
                    " !border-danger !border-2 text-danger ": !!error,
                  }
                )}>
                <BiCalendar className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "PPP")
                ) : (
                  <span className=" text-left">{placeholder}</span>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => {
                  setDate(date);
                  if (date) {
                    onValueChange?.(date.toISOString());
                  }
                  setIsOpen(false);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}

        {error && <FieldErrorText error={error} />}
        {hint && !error && <FieldHelperText hint={hint} />}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";
