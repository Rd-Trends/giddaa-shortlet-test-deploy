import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classname";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-body-tiny font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        success:
          "border-primary bg-accent-green text-primary hover:bg-accent-green/80",
        warning:
          "border-warning bg-warning-light text-warning hover:bg-warning-light/80",
        danger:
          "border-danger bg-danger-light text-danger hover:bg-danger-light/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
