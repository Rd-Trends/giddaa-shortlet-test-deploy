"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/utils/classname";
import { IoMdClose } from "react-icons/io";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    sameWidthAsTrigger?: boolean;
    wrapperClassName?: string;
  }
>(
  (
    {
      className,
      wrapperClassName,
      align = "center",
      sideOffset = 4,
      sameWidthAsTrigger,
      children,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 rounded-2xl bg-primary-gradient p-0.5 text-charcoal-grey shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          sameWidthAsTrigger &&
            " w-full min-w-[var(--radix-popover-trigger-width)]",
          wrapperClassName
        )}
        {...props}>
        <div className={cn("bg-background p-4 rounded-[14px]", className)}>
          {children}
        </div>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cn(
      "top-full z-[50] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}>
    <div className="relative top-[20%] h-2 w-2 rotate-45 rounded-tl-sm bg-primary shadow-md" />
  </PopoverPrimitive.Arrow>
));
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;

const CustomPopoverClose = () => {
  return (
    <PopoverClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-primary hover:ring-primary hover:ring-offset-2 focus:ring-offset-2 disabled:pointer-events-none bg-white data-[state=open]:text-black p-0.5">
      <IoMdClose strokeWidth={10} className="size-4" />
      <span className="sr-only">Close</span>
    </PopoverClose>
  );
};

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
  CustomPopoverClose,
};
