import { stayTypes } from "@/constants/short-let-stay-types";

export const displayShortLetType = (type: string) => {
  return stayTypes.find((stayType) => stayType.id === type)?.name ?? "";
};
