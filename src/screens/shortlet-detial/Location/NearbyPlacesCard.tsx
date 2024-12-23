import LocationOpeningHours from "./LocationOpeningHourse";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { BiCaretDown } from "react-icons/bi";
import StarRating2 from "@/components/ui/StarRating";
import { GooglePlaceDetails } from "@/types/google-map-api-types";
import pluralize from "pluralize";

const NearbyPlacesCard = ({ business }: { business: GooglePlaceDetails }) => {
  return (
    <div className="border border-[#D9D9D9] rounded-[16px] p-4  w-full flex flex-col justify-between">
      <div>
        <img
          src={business?.icon as string}
          alt={`${business?.name} icon`}
          className="object-cover w-[62px] h-[41px] rounded-[8px] border mb-4"
        />
        <h3 className=" font-bold mb-1 text-body-sm">
          {business?.name as string}
        </h3>
        <p className="text-body-subtext mb-2">{business?.vicinity as string}</p>
      </div>
      <div>
        {business?.rating && business?.user_ratings_total && (
          <div className="flex flex-col gap-1 items-center justify-center mb-3 border border-mid-grey rounded-full w-[127px] h-[47px] px-4 pb-2 pt-3">
            <StarRating2 rating={business?.rating} />
            <span className="font-medium text-body-subtext">
              {business?.user_ratings_total}{" "}
              {pluralize("Review", business?.user_ratings_total)}
            </span>
          </div>
        )}

        <Popover>
          <PopoverTrigger className=" outline-none border-none text-body-subtext text-primary font-medium bg-transparent inline-flex gap-2 items-center">
            View Opening Hours
            <BiCaretDown className="size-3 -ml-2 -mt-0.5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
          </PopoverTrigger>

          <PopoverContent
            align="start"
            wrapperClassName="max-w-48"
            className="p-0">
            <LocationOpeningHours placeId={business.place_id} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default NearbyPlacesCard;
