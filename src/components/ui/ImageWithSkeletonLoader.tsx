"use client";

import { useEffect, useState } from "react";
import SkeletonLoader from "./Skeleton";
import { cn } from "@/utils/classname";

function useImageLoaded(src: string) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.src = src;
    img.onload = function () {
      setLoaded(true);
    };
  }, [src]);
  return loaded;
}

const ImageWithSkeletonLoader = ({
  src,
  alt,
  className,
  wrapperClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}) => {
  const loaded = useImageLoaded(src);
  return (
    <div className={wrapperClassName}>
      {loaded && (
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover object-center", className)}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      )}
      {!loaded && <SkeletonLoader className={cn("h-full w-full", className)} />}
    </div>
  );
};

export default ImageWithSkeletonLoader;
