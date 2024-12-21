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
import {
  useMarkShortLetAsFavorite,
  useRemoveShortLetFromFavorite,
} from "@/apis/mutations/short-let";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useGetFavoriteShortlets } from "@/hooks/useGetFavoriteShortlets";
import useAuth from "@/hooks/useAuth";
import { CommonModal } from "../modals/CommonModal";
import { AppRoutes } from "@/constants/routes";
import { Popover, PopoverTrigger } from "@/components/ui/Popover";
import { getShortLetDescription } from "@/utils/short-let";

const ShortLetCard = ({ shortLet }: { shortLet: ShortLet }) => {
  const { isAuthenticated } = useAuth();
  const { isFavorite } = useGetFavoriteShortlets();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showContactStaffsPopover, setShowContactStaffsPopover] =
    useState(false);

  const searchParams = useSearchParams();
  const justViewed = searchParams.get("viewed") === shortLet.id;
  const router = useRouter();

  const { data: exchangeRates, isLoading: isLoadingExchangeRates } =
    useGetExchangeRates();
  const addShortLetToFavorite = useMarkShortLetAsFavorite(shortLet);
  const removeShortLetFromFavorite = useRemoveShortLetFromFavorite(shortLet);

  useEffect(() => {
    if (justViewed && wrapperRef.current) {
      wrapperRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [justViewed]);

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }

    if (isFavorite(shortLet.id)) {
      removeShortLetFromFavorite.mutate();
      return;
    }

    addShortLetToFavorite.mutate();
  };

  return (
    <>
      <div ref={wrapperRef} className="space-y-2 relative">
        {shortLet.images.length === 1 && (
          <Link href={`/${shortLet.id}`}>
            <img
              src={shortLet.images[0].document}
              className={cn(
                " rounded-2xl border border-mid-grey h-[273px] w-full object-cover ",
                {
                  "border-[3px] shadow-2xl border-secondary": justViewed,
                }
              )}
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
                      className={cn(
                        " rounded-2xl border border-mid-grey h-[273px] w-full object-cover ",
                        {
                          "border-4 border-secondary": justViewed,
                        }
                      )}
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
          <div className=" w-fit h-fit bg-primary-gradient p-0.5 rounded-full">
            <span className=" bg-white text-body-xs font-bold text-primary px-4 py-1.5 rounded-full ">
              Recommended
            </span>
          </div>

          <button
            onClick={handleFavoriteClick}
            className={cn(
              "outline-none border-none bg-transparent text-black",
              {
                " text-primary": isFavorite(shortLet.id),
              }
            )}>
            <HeartIcon />
          </button>
        </div>

        <div className=" space-y-1">
          <h3 className=" text-body-md font-bold">
            {shortLet.city?.name}, {shortLet.city?.state?.name}
          </h3>
          <p className=" text-body-sm ">{getShortLetDescription(shortLet)}</p>
          <div className="flex items-end text-body-md  ">
            <b className=" text-primary">
              {formatCurrency(shortLet.listingPrice)}
            </b>
            {exchangeRates && (
              <b className=" text-primary">
                /
                {formatCurrency(shortLet.listingPrice / exchangeRates?.dollar, {
                  currency: "USD",
                })}
              </b>
            )}
            {isLoadingExchangeRates && (
              <SkeletonLoader className=" ml-1 h-5 w-8 rounded-xl" />
            )}
            <span className="ml-1 text-body-xs">Per Night</span>
          </div>

          <Popover
            open={showContactStaffsPopover}
            onOpenChange={setShowContactStaffsPopover}>
            <PopoverTrigger asChild>
              <button
                className={
                  " flex items-center gap-8 text-secondary py-2 px-4 " +
                  " border border-light-grey outline-none bg-transparent rounded-full "
                }>
                <BsTelephone className=" size-5" />
                <FaWhatsapp className=" size-5" />
              </button>
            </PopoverTrigger>
            <ContactStaffsPopover
              shortLetId={shortLet.id}
              isOpen={showContactStaffsPopover}
            />
          </Popover>
        </div>
      </div>

      <CommonModal
        title="You’re Not Logged In"
        subHeader="You need to be logged in to mark a shortlet as favorite"
        description="For you to mark a shortlet as favorite, you need to be logged in. Register or login to continue"
        confirmBtnText="Login"
        confirmAction={() => {
          router.push(AppRoutes.LOGIN);
        }}
        cancelBtnText="Continue as Guest"
        isOpen={showLoginModal}
        setIsOpen={setShowLoginModal}
        icon={
          <img
            src="/icons/not_logged_in_modal_icon.png"
            className=" w-[196px] h-auto mx-auto "
            alt=""
          />
        }
      />
    </>
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
