import { cn } from "@/utils/classname";
import { motion, useScroll } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollToTop({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();

  return (
    <button
      className={cn(
        "fixed outline-none bottom-8 shadow-2xl size-11 ",
        "right-4 md:right-6 lg:right-10 xl:right-20 2xl:right-[calc((100%-1536px)/2+80PX)]",
        "rounded-full flex items-center justify-center bg-background p-[2px] z-50 cursor-pointer ",
        "border border-mid-grey drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]",
        className
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className=" size-full">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#EAA315", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#335F32", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <motion.circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="300"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>

      <BsArrowUp
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5 text-primary"
        strokeWidth={0.7}
      />
    </button>
  );
}
