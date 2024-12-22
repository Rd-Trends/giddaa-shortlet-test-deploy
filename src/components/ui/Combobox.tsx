"use client";

import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "@/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import { cn } from "@/utils/classname";
import { FieldErrorText, FieldHelperText, FieldLabelText } from "./FormHelpers";
import { PopoverContentProps } from "@radix-ui/react-popover";

type ComboboxOption = {
  label: string;
  value: string;
};

type ComboboxProps = {
  options: ComboboxOption[];
  defaultValue?: string;
  onSelect: (value: string) => void;
  error?: string;
  label?: string;
  hint?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  searchPlaceholder?: string;
  sort?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  emptyText?: string;
  triggerClassName?: string;
  wrapperClassName?: string;
  contentClassName?: string;
  align?: PopoverContentProps["align"];
} & React.ComponentPropsWithoutRef<typeof Popover>;

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      label,
      hint,
      defaultValue,
      error,
      placeholder = "Select...",
      searchPlaceholder = "Search...",
      disabled,
      options,
      onSelect,
      required,
      sort = true,
      emptyText = "No options found.",
      isLoading = false,
      loadingText = "Loading...",
      triggerClassName,
      wrapperClassName,
      contentClassName,
      align,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(defaultValue);
    const [prevDefaultValue, setPrevDefaultValue] =
      React.useState(defaultValue);

    if (prevDefaultValue !== defaultValue) {
      setValue(defaultValue);
      setPrevDefaultValue(defaultValue);
    }

    const sortedOptions = React.useMemo(() => {
      if (!sort) return options;

      if (options.length === 0) return options;
      if (options.length === 1) return options;
      return options.sort((a, b) =>
        a.label.toLowerCase().localeCompare(b.label.toLowerCase())
      );
    }, [options, sort]);

    return (
      <div className={cn("w-full flex flex-col space-y-1.5", wrapperClassName)}>
        {label && (
          <label className="text-sm font-medium text-offBlack" htmlFor={label}>
            <FieldLabelText label={label} required={required} />
          </label>
        )}

        <Popover open={open} onOpenChange={setOpen} modal {...rest}>
          <PopoverTrigger asChild ref={ref}>
            <button
              id={label}
              role="combobox"
              aria-expanded={open}
              disabled={disabled}
              className={cn(
                "flex items-center justify-between h-10 w-full rounded-full border border-mid-grey bg-background px-4 py-2 text-body-xs ring-offset-transaprent focus-visible:outline-none outline-none  disabled:cursor-not-allowed disabled:bg-light-grey disabled:border-mid-grey disabled:text-dark-grey disabled:placeholder:text-dark-grey text-black [&[data-state=open]>svg]:rotate-180",
                {
                  " hover:ring-2 ring-offset-0 ring-primary focus-visible:ring-2":
                    !error && !disabled,
                  " border-danger border-2 text-danger ": !!error,
                  "text-charcoal-grey": !value,
                },
                triggerClassName
              )}>
              <span className=" line-clamp-1">
                {value
                  ? options.find((option) => option.value === value)?.label
                  : placeholder}
              </span>
              <BiChevronDown className=" size-5 opacity-50 shrink-0 transition-transform duration-200" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align={align}
            sameWidthAsTrigger
            wrapperClassName={cn(
              " p-[1px] bg-mid-grey shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)]  ",
              contentClassName
            )}
            className=" p-0">
            <Command>
              <CommandInput placeholder={searchPlaceholder} />
              <CommandList>
                {!isLoading && <CommandEmpty>{emptyText}</CommandEmpty>}
                {isLoading && (
                  <CommandLoading>
                    <p>{loadingText}</p>
                  </CommandLoading>
                )}
                <CommandGroup className=" [&_[cmdk-item]:last-child]:rounded-b-2xl">
                  {sortedOptions.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      keywords={[option.label]}
                      onSelect={(currentValue) => {
                        const newValue =
                          currentValue === value ? "" : currentValue;
                        setValue(newValue);
                        onSelect(newValue);
                        setOpen(false);
                        rest?.onOpenChange?.(false);
                      }}>
                      {option.label}
                      <BiCheck
                        className={cn(
                          "ml-auto text-primary",
                          value === option.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {error && <FieldErrorText error={error} />}
        {hint && !error && <FieldHelperText hint={hint} />}
      </div>
    );
  }
);
Combobox.displayName = "Combobox";

export default Combobox;
