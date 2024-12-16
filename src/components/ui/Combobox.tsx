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
};

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
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(defaultValue);

    const sortedOptions = React.useMemo(() => {
      if (!sort) return options;

      if (options.length === 0) return options;
      if (options.length === 1) return options;
      return options.sort((a, b) =>
        a.label.toLowerCase().localeCompare(b.label.toLowerCase())
      );
    }, [options, sort]);

    return (
      <div className="w-full flex flex-col space-y-1.5">
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
                {
                  " hover:ring-2 ring-offset-0 ring-primary focus-visible:ring-2":
                    !error && !disabled,
                  " border-danger border-2 text-danger ": !!error,
                  "text-charcoal-grey": !value,
                }
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
            sameWidthAsTrigger
            wrapperClassName=" p-[1px] bg-mid-grey  "
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
                      onSelect={(currentValue) => {
                        const newValue =
                          currentValue === value ? "" : currentValue;
                        setValue(newValue);
                        onSelect(newValue);
                        setOpen(false);
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
