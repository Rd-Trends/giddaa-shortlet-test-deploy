import { forwardRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import {
  FieldErrorText,
  FieldHelperText,
  FieldLabelText,
} from "@/components/ui/FormHelpers";
import { BiChevronDown } from "react-icons/bi";
import { cn } from "@/utils/classname";
import { PopoverContentProps } from "@radix-ui/react-popover";

type CustomPopoverAsDropdownMenuProp = {
  value?: string;
  error?: string;
  label?: string;
  hint?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  children?: React.ReactNode;
  sameWidthAsTrigger?: boolean;
  align?: PopoverContentProps["align"];
  triggerClassName?: string;
  wrapperClassName?: string;
};

const CustomPopoverAsDropdownMenu = forwardRef<
  HTMLButtonElement,
  CustomPopoverAsDropdownMenuProp
>(
  (
    {
      label,
      hint,
      error,
      placeholder = "Select...",
      disabled,
      required,
      value,
      children,
      sameWidthAsTrigger,
      align = "start",
      triggerClassName,
      wrapperClassName,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="w-fit flex flex-col space-y-1.5">
        {label && (
          <label className="text-sm font-medium text-offBlack" htmlFor={label}>
            <FieldLabelText label={label} required={required} />
          </label>
        )}
        <Popover open={open} onOpenChange={setOpen} modal>
          <PopoverTrigger asChild ref={ref}>
            <button
              id={label}
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className={cn(
                "flex items-center justify-between h-10 w-full rounded-full border border-mid-grey bg-background px-4 py-2 text-body-xs ring-offset-transaprent focus-visible:outline-none outline-none  disabled:cursor-not-allowed disabled:bg-light-grey disabled:border-mid-grey disabled:text-dark-grey disabled:placeholder:text-dark-grey text-black [&[data-state=open]>svg]:rotate-180",
                triggerClassName,
                {
                  " hover:ring-2 ring-offset-0 ring-primary focus-visible:ring-2":
                    !error && !disabled,
                  " border-danger border-2 text-danger ": !!error,
                  "text-charcoal-grey": !value,
                }
              )}>
              <span className=" line-clamp-1">{value ?? placeholder}</span>
              <BiChevronDown className=" size-5 opacity-50 shrink-0 transition-transform duration-200" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align={align}
            sameWidthAsTrigger={sameWidthAsTrigger}
            wrapperClassName={cn(
              " p-[1px] bg-mid-grey shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)]  ",
              wrapperClassName
            )}
            className=" p-0">
            {children}
          </PopoverContent>
        </Popover>

        {error && <FieldErrorText error={error} />}
        {hint && !error && <FieldHelperText hint={hint} />}
      </div>
    );
  }
);
CustomPopoverAsDropdownMenu.displayName = "CustomPopoverAsDropdownMenu";

export default CustomPopoverAsDropdownMenu;
