import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import config from "../../tailwind.config";

const fontSizes = config?.theme?.extend?.fontSize;

const extTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": Object.keys(fontSizes || {}).map((key) => `text-${key}`),
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return extTwMerge(clsx(inputs));
}
