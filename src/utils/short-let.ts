import { SHORT_LET_STAY_TYPES } from "@/constants/short-let-stay-types";
import { ShortLet } from "@/types/short-let";
import pluralize from "pluralize";

export const displayShortLetType = (type: string) => {
  return (
    SHORT_LET_STAY_TYPES.find((stayType) => stayType.id === type)?.name ?? ""
  );
};

// 2. ⁠When stay type is entire place/entire home: Book the entire [number of beds] bed [building type]
// 3. ⁠When stay type is room in a home: Book a room in a[number of beds] bed [building type].
// 4. ⁠When stay type is ground floor/first floor/second floor/third floor: Book the entire ground floor/first floor/second floor/third floor in a [number of beds] bed [building type].
// 5. ⁠When stay type is studio room: Book a [number of beds] bed studio.
export const getShortLetDescription = (shortLet: ShortLet) => {
  if (shortLet.type === "ENTIRE_PLACE") {
    return `Book the entire ${shortLet.numberOfBedroom} ${pluralize(
      "bed",
      shortLet.numberOfBedroom
    )} ${shortLet.buildingType.toLowerCase()}`;
  }

  if (shortLet.type === "ROOM_IN_A_HOUSE") {
    return `Book a room in a ${shortLet.numberOfBedroom} ${pluralize(
      "bed",
      shortLet.numberOfBedroom
    )} ${shortLet.buildingType.toLowerCase()}`;
  }

  // could be GROUND_FLOOR_IN_A_MULTI_STORY_BUILDING, SECOND_FLOOR_IN_A_MULTI_STORY_BUILDING, TOP_FLOOR_IN_A_MULTI_STORY_BUILDING
  if (shortLet.type.includes("FLOOR_IN_A_MULTI_STORY_BUILDING")) {
    const floorNumber = shortLet.type.split("_")[0].toLowerCase();
    return `Book the entire ${floorNumber} floor in a ${
      shortLet.numberOfBedroom
    } ${pluralize(
      "bed",
      shortLet.numberOfBedroom
    )} ${shortLet.buildingType.toLowerCase()}`;
  }

  if (shortLet.type === "STUDIO_ROOM") {
    return `Book a ${shortLet.numberOfBedroom} ${pluralize(
      "bed",
      shortLet.numberOfBedroom
    )} bed studio`;
  }

  return "No type found";
};
