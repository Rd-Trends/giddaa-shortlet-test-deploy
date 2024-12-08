"use client";

import Container from "@/components/layouts/Container";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { ShortLet } from "@/types/short-let";
import { cn } from "@/utils/classname";
import React from "react";
import { IoMdClose } from "react-icons/io";
import PhotoIcon from "@/svgs/PhotoIcon";
import { getImageType } from "@/utils/get-image-type";

const ImageSection = ({
  images,
  name,
  city,
}: Pick<ShortLet, "images" | "name" | "city">) => {
  const [showImageGallery, setShowImageGallery] = React.useState(false);
  const hasTwoImages = images.length >= 2;
  const hasThreeImages = images.length === 3;
  const hasFourImages = images.length >= 4;

  return (
    <Container className="px-0  pt-44">
      <div className="flex gap-4 md:h-[498px] relative">
        <img
          src={images[0].document}
          alt=""
          className={cn(
            "w-full h-[235px] md:h-full object-cover md:rounded-2xl",
            {
              "md:w-[60%]": hasTwoImages,
              "md:w-[45%]": hasThreeImages || hasFourImages,
            }
          )}
        />

        {hasTwoImages && (
          <img
            src={images[1].document}
            alt=""
            className={cn(
              "w-full h-full object-cover hidden md:block rounded-2xl md:w-[40%]",
              {
                "md:w-[30%]": hasThreeImages || hasFourImages,
              }
            )}
          />
        )}

        {hasThreeImages && (
          <img
            src={images[1].document}
            alt=""
            className={cn(
              "hidden md:block w-full h-full object-cover rounded-2xl md:w-[25%]"
            )}
          />
        )}

        {hasFourImages && (
          <div
            className={cn(
              " w-full md:w-[25%] h-full hidden md:flex flex-col gap-4 justify-between"
            )}>
            <img
              src={images[2].document}
              alt=""
              className="w-full h-auto md:h-[240px] object-cover rounded-2xl"
            />
            <img
              src={images[3].document}
              alt=""
              className="w-full h-auto md:h-[240px] object-cover rounded-2xl"
            />
          </div>
        )}

        <button
          onClick={() => setShowImageGallery(true)}
          className=" text-primary bg-background px-4 inline-flex items-center text-body-md font-bold h-[50px] border-2 border-primary rounded-full absolute bottom-4 right-4">
          <PhotoIcon className=" mr-3 size-6" />
          {images?.length > 1
            ? `View all ${images.length} photos`
            : "View photo"}
        </button>
      </div>

      <ImageGalleryDrawer
        isOpen={showImageGallery}
        seIsOpen={setShowImageGallery}
        images={images}
        name={name}
        city={city}
      />
    </Container>
  );
};

export default ImageSection;

const ImageGalleryDrawer = ({
  isOpen,
  seIsOpen,
  images,
  city,
  name,
}: {
  isOpen: boolean;
  seIsOpen: (value: boolean) => void;
} & Pick<ShortLet, "images" | "name" | "city">) => {
  return (
    <Drawer open={isOpen} onOpenChange={seIsOpen}>
      <DrawerContent
        preventAutoFocusOnOPen
        className=" flex flex-col overflow-y-auto">
        <DrawerHeader className={"border-b border-midGrey"}>
          <DrawerTitle className=" text-center text-heading-3 font-secondary text-primary">
            Photos
          </DrawerTitle>
          <DrawerDescription className=" text-center text-body-md text-charcoal-grey pt-1">
            Photos of the {name} located in {city.name} and {city.state?.name}
          </DrawerDescription>

          <Tooltip>
            <TooltipTrigger asChild>
              <DrawerClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none hover:ring-2 focus:ring-2 focus:ring-primary hover:ring-primary hover:ring-offset-2 focus:ring-offset-2 disabled:pointer-events-none bg-white data-[state=open]:text-black p-0.5">
                <IoMdClose strokeWidth={10} className="size-4" />
                <span className="sr-only">Close</span>
              </DrawerClose>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={8}
              side="bottom"
              align="end"
              className="text-xs">
              Close
            </TooltipContent>
          </Tooltip>
        </DrawerHeader>

        <Container className=" pt-6 px-4 grid grid-cols-1 gap-4 md:grid-cols-2 flex-auto overflow-y-auto pb-4">
          {images.map((image) => (
            <div key={image.id} className=" relative">
              <img
                src={image.document}
                alt=""
                className="w-full h-auto md:h-[393px] object-cover rounded-2xl"
              />
              <div className=" absolute bottom-4 left-4 bg-cream border border-r-primary rounded-full text-primary text-body-xs capitalize font-bold px-4 py-1 min-h-[30px] inline-flex items-center">
                {getImageType(image.optionId)}
              </div>
            </div>
          ))}
        </Container>
      </DrawerContent>
    </Drawer>
  );
};
