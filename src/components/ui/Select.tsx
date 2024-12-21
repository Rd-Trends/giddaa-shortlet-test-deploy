"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { BiCheck, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { cn } from "@/utils/classname";
import { FieldErrorText, FieldHelperText, FieldLabelText } from "./FormHelpers";

export type Option = {
  label: string;
  value: string;
  description?: string;
};

type DropdownInputProps = {
  options: Option[];
  defaultValue?: string;
  onSelect: (value: string) => void;
  error?: string;
  label?: string;
  hint?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  sort?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  emptyText?: string;
  triggerClassName?: string;
  wrapperClassName?: string;
  contentClassName?: string;
} & React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>;

const DropdownInput = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  DropdownInputProps
>(
  (
    {
      label,
      hint,
      defaultValue,
      error,
      placeholder = "Select...",
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
      ...rest
    },
    ref
  ) => {
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

        <Select
          value={value}
          onValueChange={(value) => {
            setValue(value);
            onSelect?.(value);
          }}
          disabled={disabled}
          {...rest}>
          <SelectTrigger
            id={label}
            ref={ref}
            error={error}
            disabled={disabled}
            className={triggerClassName}>
            <SelectValue placeholder={placeholder}>
              {sortedOptions.find((option) => option.value === value)?.label ??
                ""}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className={contentClassName}>
            {isLoading && (
              <div className=" px-4 py-6 text-body-sm">
                <p>{loadingText}</p>
              </div>
            )}

            {!isLoading &&
              !!sortedOptions.length &&
              sortedOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className=" flex flex-col items-start space-y-1">
                    <p
                      className={cn(
                        "text-body-sm",
                        !option.description ? "font-normal" : "font-bold"
                      )}>
                      {option.label}
                    </p>
                    {option?.description && (
                      <p className="text-body-xs">{option.description}</p>
                    )}
                  </div>
                </SelectItem>
              ))}

            {!isLoading && sortedOptions.length === 0 && (
              <div className="px-4 py-6 text-body-sm">{emptyText}</div>
            )}
          </SelectContent>
        </Select>

        {error && <FieldErrorText error={error} />}
        {hint && !error && <FieldHelperText hint={hint} />}
      </div>
    );
  }
);
DropdownInput.displayName = "DropdownInput";
export default DropdownInput;

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    error?: string;
  }
>(({ className, children, error, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      " flex items-center w-full rounded-full justify-between px-4 py-2 bg-background outline-none border border-mid-grey text-body-xs disabled:bg-light-grey disabled:border-mid-grey ring-offset-0 disabled:text-dark-grey disabled:placeholder:text-dark-grey disabled:text-opacity-90 disabled:cursor-not-allowed [&>span]:truncate",
      {
        " hover:ring-2 ring-primary focus-within:ring-2 ":
          !error && !props.disabled,
        " border-danger ring-2 ring-danger text-danger ": !!error,
      },
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <BiChevronDown size={20} color="inherit" className=" shrink-0" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}>
    <BiChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}>
    <BiChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    usePortal?: boolean;
  }
>(({ className, children, position = "popper", usePortal, ...props }, ref) => {
  const Portal = usePortal ? SelectPrimitive.Portal : React.Fragment;

  return (
    <Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] w-full overflow-hidden rounded-2xl border bg-background border-mid-grey text-black data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-2 max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)]",
          className
        )}
        position={position}
        {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={cn()}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex justify-between items-center  w-full cursor-pointer select-none py-2.5 px-4 text-body-sm outline-none focus:bg-light-grey  data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

    <SelectPrimitive.ItemIndicator>
      <BiCheck size={16} />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
