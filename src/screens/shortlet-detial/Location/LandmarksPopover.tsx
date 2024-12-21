import { useGetCitiesInAState } from "@/apis/queries/location";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import SkeletonLoader from "@/components/ui/Skeleton";
import { useState, useMemo } from "react";
import { BiCaretDown } from "react-icons/bi";
import PopularLandmarkIcon from "./icons/PopularLandmarkIcon";

type LandmarksPopoverProps = {
  stateId: string;
  handleSearch: (address: string) => void;
};

const LandmarksPopover = ({ stateId, handleSearch }: LandmarksPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: citiesData, isLoading: isLoadingCities } = useGetCitiesInAState(
    { stateId },
    {
      enabled: isOpen && !!stateId,
    }
  );

  const cities = useMemo(() => {
    if (!citiesData?.value) return [];

    return citiesData?.value.filter((city) => Boolean(city.popularLandMark));
  }, [citiesData]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="group outline-none border-none text-body-subtext text-primary font-medium bg-transparent inline-flex gap-2 items-center">
        <PopularLandmarkIcon className=" size-6 md:size-10 " />
        View Distance From Popular Landmarks
        <BiCaretDown className="size-3.5 -ml-1 -mt-0.5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
      </PopoverTrigger>

      <PopoverContent>
        <ul>
          {cities?.map((item) => {
            return (
              <li
                key={item.id}
                className="cursor-pointer px-5 py-3 text-black"
                onClick={() => {
                  setIsOpen(false);
                  handleSearch(item?.popularLandMark ?? "");
                }}>
                {item?.popularLandMark ?? ""}
              </li>
            );
          })}

          {isLoadingCities &&
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonLoader
                key={index}
                className=" h-4 w-full rounded-lg my-3"
              />
            ))}

          {!isLoadingCities && !cities.length && (
            <p className=" text-body-sm">No Popular Landmark Available</p>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default LandmarksPopover;
