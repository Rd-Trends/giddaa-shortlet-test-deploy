"use client";

import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { ShortLet } from "@/types/short-let";
import { formatCurrency } from "@/utils/format-currency";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { cn } from "@/utils/classname";
import Link from "next/link";
import HeartIcon from "@/svgs/HeartIcon";
import SkeletonLoader from "@/components/ui/Skeleton";
import { useGetExchangeRates } from "@/apis/queries/exchange-rate";
import ContactStaffsPopover from "../popovers/ContactStaffsPopover";

const ShortLetCard = ({ shortLet }: { shortLet: ShortLet }) => {
  const { data: exchangeRates, isLoading: isLoadingExchangeRates } =
    useGetExchangeRates();

  return (
    <div className="space-y-2 relative">
      {shortLet.images.length === 1 && (
        <Link href={`/${shortLet.id}`}>
          <img
            src={shortLet.images[0].document}
            className=" rounded-2xl border border-mid-grey h-[273px] w-full object-cover "
            alt={shortLet.name}
          />
        </Link>
      )}
      {shortLet.images.length > 1 && (
        <Carousel opts={{ loop: true }} className="w-full group ">
          <CarouselContent className=" -ml-1">
            {shortLet.images.map((image, index) => (
              <CarouselItem key={index} className=" pl-1  basis-[100%]">
                <Link href={`/${shortLet.id}`}>
                  <img
                    src={image.document}
                    className=" rounded-2xl border border-mid-grey h-[273px] w-full object-cover "
                    alt={shortLet.name}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDotButtons
            wrapperClassName=" w-fit bottom-2 items-center justify-center gap-1.5 bg-black/50 px-4 py-1.5 rounded-full absolute left-1/2 -translate-x-1/2  space-x-0"
            dotClassName="size-1.5 bg-white/50 border-none hover:!bg-white"
            dotActiveClassName="bg-white border-none"
          />

          <CarouselNext className=" hidden group-hover:flex absolute right-4 top-1/2 -translate-y-1/2 size-5 md:size-5 " />
          <CarouselPrevious className=" hidden group-hover:flex absolute left-4 top-1/2 -translate-y-1/2 size-5 md:size-5 " />
        </Carousel>
      )}

      <div className=" absolute top-0 w-full p-2 right-0 left-0 flex justify-between items-center">
        <div className=" w-fit bg-primary-gradient p-0.5 rounded-full">
          <span className=" bg-white text-body-xs font-bold text-primary px-4 py-1.5 rounded-full ">
            Recommended
          </span>
        </div>

        <button className={cn("outline-none border-none bg-transparent")}>
          <HeartIcon />
        </button>
      </div>

      <div className=" space-y-1">
        <h3 className=" text-body-md font-bold">
          {shortLet.name}, {shortLet.city?.state?.name}
        </h3>
        <p className=" text-body-sm ">Book the entire 2 bedroom apartment</p>
        <p>
          <b className=" text-body-md font-bold text-primary">
            {formatCurrency(shortLet.listingPrice)}
          </b>{" "}
          <span className=" text-body-xs">Per night</span>
        </p>
        {isLoadingExchangeRates && (
          <SkeletonLoader className=" h-4 w-12 rounded-md" />
        )}
        {exchangeRates && (
          <p className=" text-body-sm font-semibold">
            {formatCurrency(shortLet.listingPrice / exchangeRates.dollar, {
              currency: "USD",
            })}
          </p>
        )}

        <ContactStaffsPopover shortLetId={shortLet.id}>
          <button className=" border-none outline-none bg-transparent flex items-center space-x-4 text-secondary pt-1">
            <BsTelephone className=" size-5" />
            <FaWhatsapp className=" size-5" />
          </button>
        </ContactStaffsPopover>
      </div>
    </div>
  );
};

export default ShortLetCard;

export const ShortLetCardLoader = () => {
  return (
    <div className="space-y-2 relative">
      <SkeletonLoader className="h-[273px] w-full rounded-2xl border border-mid-grey" />
      <div className=" animate-pulse space-y-2">
        <SkeletonLoader className="h-4 w-full rounded-lg" />
        <SkeletonLoader className="h-3 w-full rounded-md" />
        <SkeletonLoader className="h-3 w-3/4 rounded-md" />
        <SkeletonLoader className="h-5 w-1/4 rounded-md" />
      </div>
    </div>
  );
};
