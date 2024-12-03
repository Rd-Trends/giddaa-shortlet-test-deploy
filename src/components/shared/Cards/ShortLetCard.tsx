import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { ShortLet } from "@/types/short-let";
import React from "react";
import { formatCurrency } from "@/utils/format-currency";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { cn } from "@/utils/classname";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverArrow,
  CustomPopoverClose,
} from "@/components/ui/Popover";
import Link from "next/link";
import HeartIcon from "@/svgs/HeartIcon";

const ShortLetCard = ({ shortLet }: { shortLet: ShortLet }) => {
  return (
    <div className="space-y-2 relative">
      {shortLet.images.length === 1 && (
        <Link href={`/${shortLet.id}`}>
          <img
            src={shortLet.images[0].document}
            className=" rounded-2xl border border-mid-grey h-[273px] w-full object-cover "
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
        <p className=" text-body-sm ">{shortLet.description}</p>
        <p>
          <b className=" text-body-md font-bold text-primary">
            {formatCurrency(shortLet.listingPrice)}
          </b>{" "}
          <span className=" text-body-xs">Per night</span>
        </p>

        <Popover>
          <PopoverTrigger className=" flex items-center space-x-4 text-secondary pt-1">
            <BsTelephone className=" size-5" />
            <FaWhatsapp className=" size-5" />
          </PopoverTrigger>

          <PopoverContent align="start" className=" p-0">
            <div className="flex flex-col gap-4 divide-y divide-mid-grey pb-4">
              <div className=" flex items-start space-x-4 pt-4 px-4">
                <img
                  src="/images/contact_image.png"
                  className=" w-14 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h3 className=" text-body-sm font-bold text-black">
                    Jonathan Anakson
                  </h3>
                  <p className=" text-body-xs">08129293840</p>
                  <div className=" flex items-center space-x-4">
                    <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                      <BsTelephone className=" size-5 mr-2" /> Call
                    </button>
                    <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                      <FaWhatsapp className=" size-5 mr-2" /> Whatsapp
                    </button>
                  </div>
                </div>
              </div>

              <div className=" flex items-start space-x-4 pt-4 px-4">
                <img
                  src="/images/contact_image.png"
                  className=" w-14 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h3 className=" text-body-sm font-bold text-black">
                    Jimmy Bones
                  </h3>
                  <p className=" text-body-xs">08129293840</p>
                  <div className=" flex items-center space-x-4 mt-0.5">
                    <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                      <BsTelephone className=" size-5 mr-2" /> Call
                    </button>
                    <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                      <FaWhatsapp className=" size-5 mr-2" /> Whatsapp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <PopoverArrow />
            <CustomPopoverClose />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ShortLetCard;
