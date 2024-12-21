import { useGetGMapTrafficData } from "@/apis/queries/google-maps";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import SkeletonLoader from "@/components/ui/Skeleton";
import { cn } from "@/utils/classname";
import { formatTimeTo12Hour } from "@/utils/format-time-to-12-hour";
import { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import TrafficDataIcon from "./icons/TrafficDataIcon";

const TrafficDataPopover = ({
  location,
}: {
  location?: { lat: number; lng: number };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetGMapTrafficData(location, {
    enabled: isOpen,
  });

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="group outline-none border-none text-body-subtext text-primary font-medium bg-transparent inline-flex gap-2 items-center">
        <TrafficDataIcon className=" size-6 md:size-10 " />
        View Traffic Trends Around This Area
        <BiCaretDown className="size-3.5 -ml-1 -mt-0.5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
      </PopoverTrigger>

      <PopoverContent
        align="start"
        wrapperClassName="max-w-fit"
        className="p-0">
        <table className="w-full">
          <thead>
            <tr className="whitespace-nowrap text-body-tiny uppercase text-left font-normal">
              <th className="p-4 border-l-0 border-r border-light-grey">
                TIME OF DAY
              </th>
              <th className="p-4 border-l border-[#F0F0F0]">
                AMOUNT OF TRAFFIC
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              data?.map((item, index) => {
                const isHeavyTraffic = item?.traffic === "Heavy Traffic";
                const isMediumTraffic = item?.traffic === "Medium Traffic";
                const isLightTraffic = item?.traffic === "Light Traffic";

                return (
                  <tr key={index} className="border-t text-body-xs">
                    <td className="py-3 px-4 border-l-0 border-r border-light-grey font-bold">
                      {formatTimeTo12Hour(item?.time)}
                    </td>
                    <td className="py-3 px-4 flex items-center gap-2 border-l border-light-grey">
                      <span
                        className={cn(" flex-shrink-0 size-2.5 rounded-full ", {
                          "bg-[#C90000]": isHeavyTraffic,
                          "bg-[#F7B11C]": isMediumTraffic,
                          "bg-primary": isLightTraffic,
                        })}
                      />

                      <span>{item?.traffic}</span>
                    </td>
                  </tr>
                );
              })}

            {isLoading &&
              Array.from({ length: 3 }).map((_, index) => {
                return (
                  <tr key={index}>
                    <td className=" p-2">
                      <SkeletonLoader className=" w-full rounded-lg h-4" />
                    </td>
                    <td className=" p-2">
                      <SkeletonLoader className=" w-full rounded-lg h-4" />
                    </td>
                  </tr>
                );
              })}

            {!isLoading && !data?.length && (
              <tr>
                <td colSpan={2} className="p-4 text-body-sm">
                  No Traffic Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </PopoverContent>
    </Popover>
  );
};

export default TrafficDataPopover;
