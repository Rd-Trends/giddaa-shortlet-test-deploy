import { useGetCitiesInAState } from "@/apis/queries/location";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import SkeletonLoader from "@/components/ui/Skeleton";
import { useState, SVGProps, useMemo } from "react";
import { BiCaretDown } from "react-icons/bi";

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
            <p className=" text-body-sm">No Popular Landmark available</p>
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default LandmarksPopover;

const PopularLandmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    viewBox="0 0 39 39"
    fill="none"
    {...props}>
    <circle cx={19.5} cy={19.5} r={19} fill="#EAFFEA" />
    <circle cx={19.5} cy={19.5} r={19} stroke="#335F32" />
    <circle cx={19.5} cy={19.5} r={19} stroke="#000" strokeOpacity={0.2} />
    <path
      fill="#335F32"
      fillRule="evenodd"
      d="M13.636 25.336a1.96 1.96 0 0 1 1.946 1.955 1.96 1.96 0 0 1-1.955 1.945l-1.95-.004a1.96 1.96 0 0 1-1.945-1.955 1.96 1.96 0 0 1 1.954-1.945l1.95.004Zm-.003 1.3-1.95-.004a.635.635 0 0 0-.652.648c0 .371.278.65.649.652l1.95.004a.634.634 0 0 0 .651-.648.635.635 0 0 0-.648-.652Zm-.961-5.852a1.96 1.96 0 0 1 1.945 1.955 1.96 1.96 0 0 1-1.954 1.945 1.96 1.96 0 0 1-1.946-1.955 1.96 1.96 0 0 1 1.955-1.945Zm-.003 1.3a.64.64 0 0 0-.652.648c0 .367.282.651.649.652a.64.64 0 0 0 .651-.649.64.64 0 0 0-.648-.651Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M13.636 25.336a1.96 1.96 0 0 1 1.946 1.955 1.96 1.96 0 0 1-1.955 1.945l-1.95-.004a1.96 1.96 0 0 1-1.945-1.955 1.96 1.96 0 0 1 1.954-1.945l1.95.004Zm-.003 1.3-1.95-.004a.635.635 0 0 0-.652.648c0 .371.278.65.649.652l1.95.004a.634.634 0 0 0 .651-.648.635.635 0 0 0-.648-.652Zm-.961-5.852a1.96 1.96 0 0 1 1.945 1.955 1.96 1.96 0 0 1-1.954 1.945 1.96 1.96 0 0 1-1.946-1.955 1.96 1.96 0 0 1 1.955-1.945Zm-.003 1.3a.64.64 0 0 0-.652.648c0 .367.282.651.649.652a.64.64 0 0 0 .651-.649.64.64 0 0 0-.648-.651Z"
      clipRule="evenodd"
    />
    <path
      fill="#335F32"
      fillRule="evenodd"
      d="M21.467 12.355a.65.65 0 1 1-.003 1.3l-7.8-.019a1.94 1.94 0 0 0-1.955 1.946l-.002.65a1.94 1.94 0 0 0 1.946 1.954l11.05.026a3.91 3.91 0 0 1 3.89 3.91v.65a3.91 3.91 0 0 1-3.91 3.89l-5.572-.013.181.182a.65.65 0 1 1-.921.917l-1.297-1.303a.65.65 0 0 1 .002-.919l1.303-1.297a.65.65 0 0 1 .917.921l-.2.2 5.59.012a2.59 2.59 0 0 0 2.606-2.593l.002-.65a2.59 2.59 0 0 0-2.594-2.607l-11.05-.026a3.26 3.26 0 0 1-3.242-3.257l.001-.65a3.26 3.26 0 0 1 3.258-3.243l7.8.019Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M21.467 12.355a.65.65 0 1 1-.003 1.3l-7.8-.019a1.94 1.94 0 0 0-1.955 1.946l-.002.65a1.94 1.94 0 0 0 1.946 1.954l11.05.026a3.91 3.91 0 0 1 3.89 3.91v.65a3.91 3.91 0 0 1-3.91 3.89l-5.572-.013.181.182a.65.65 0 1 1-.921.917l-1.297-1.303a.65.65 0 0 1 .002-.919l1.303-1.297a.65.65 0 0 1 .917.921l-.2.2 5.59.012a2.59 2.59 0 0 0 2.606-2.593l.002-.65a2.59 2.59 0 0 0-2.594-2.607l-11.05-.026a3.26 3.26 0 0 1-3.242-3.257l.001-.65a3.26 3.26 0 0 1 3.258-3.243l7.8.019Z"
      clipRule="evenodd"
    />
    <path
      fill="#335F32"
      fillRule="evenodd"
      d="M28.623 9.772a.65.65 0 0 1 .648.651l-.012 5.2a.65.65 0 0 1-.651.649l-5.2-.013a.65.65 0 0 1-.649-.651l.012-5.2a.65.65 0 0 1 .652-.649l5.2.013Zm-.653 1.298-1.3-.003-.003 1.3a.65.65 0 0 1-1.3-.003l.003-1.3-1.3-.003-.01 3.9 3.9.01.01-3.9Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      fillRule="evenodd"
      d="M28.623 9.772a.65.65 0 0 1 .648.651l-.012 5.2a.65.65 0 0 1-.651.649l-5.2-.013a.65.65 0 0 1-.649-.651l.012-5.2a.65.65 0 0 1 .652-.649l5.2.013Zm-.653 1.298-1.3-.003-.003 1.3a.65.65 0 0 1-1.3-.003l.003-1.3-1.3-.003-.01 3.9 3.9.01.01-3.9Z"
      clipRule="evenodd"
    />
  </svg>
);
