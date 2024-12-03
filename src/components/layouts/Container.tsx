import React from "react";
import { cn } from "../../utils/classname";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20",
          className
        )}
        {...rest}>
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export default Container;
