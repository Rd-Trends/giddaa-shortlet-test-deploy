import { cn } from "@/utils/classname";
import React from "react";

const Loader = ({
  className,
  loadingText,
}: {
  className?: string;
  loadingText?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 justify-center",
        className
      )}>
      <div className={cn("flex items-center justify-center gap-2")}>
        <div
          className={cn(
            "size-3 bg-primary rounded-full animate-bouncing-loader"
          )}
        />
        <div
          className={cn(
            "size-3 bg-danger rounded-full animate-bouncing-loader delay-100 "
          )}
        />
        <div
          className={cn(
            "size-3 bg-info rounded-full animate-bouncing-loader delay-200"
          )}
        />
        <div
          className={cn(
            "size-3 bg-warning rounded-full animate-bouncing-loader delay-300"
          )}
        />
        <div
          className={cn(
            "size-3 bg-purple-500 rounded-full animate-bouncing-loader delay-400"
          )}
        />
      </div>
      {loadingText && (
        <p className="text-body-sm font-semibold">{loadingText}</p>
      )}
    </div>
  );
};

export default Loader;
