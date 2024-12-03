import { cn } from "@/utils/classname";

const SkeletonLoader = ({ className = "" }: { className?: string }) => {
  return <div className={cn("bg-gray-200 animate-pulse", className)} />;
};

export default SkeletonLoader;
