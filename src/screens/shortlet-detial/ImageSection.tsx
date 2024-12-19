"use client";

import Container from "@/components/layouts/Container";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import { ShortLet } from "@/types/short-let";
import { cn } from "@/utils/classname";
import React from "react";
import PhotoIcon from "@/svgs/PhotoIcon";
import { getImageType } from "@/utils/get-image-type";
import ArrowUpRightIcon from "@/svgs/ArrowUpRightIcon";
import { BiCaretRight } from "react-icons/bi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import { displayShortLetType } from "@/utils/short-let";
import ImageWithSkeletonLoader from "@/components/ui/ImageWithSkeletonLoader";

const ImageSection = ({
  images,

  city,
  videoUrl = "",
  type,
}: Pick<ShortLet, "images" | "city" | "videoUrl" | "type">) => {
  const [showImageGallery, setShowImageGallery] = React.useState(false);
  const [showVideoModal, setShowVideoModal] = React.useState(false);

  const hasTwoImages = images.length >= 2;
  const hasThreeImages = images.length === 3;
  const hasFourImages = images.length >= 4;

  return (
    <Container className="px-0 pt-[147px] md:pt-44">
      <div className="flex gap-4 md:h-[498px] relative">
        <ImageWithSkeletonLoader
          src={images[0].document}
          alt=""
          wrapperClassName={cn(
            "w-full h-[235px] md:h-full object-cover md:rounded-2xl",
            {
              "md:w-[60%]": hasTwoImages,
              "md:w-[45%]": hasThreeImages || hasFourImages,
            }
          )}
          className="md:rounded-2xl"
        />

        {hasTwoImages && (
          <ImageWithSkeletonLoader
            src={images[1].document}
            alt=""
            wrapperClassName={cn(
              "w-full h-full object-cover hidden md:block rounded-2xl md:w-[40%]",
              {
                "md:w-[30%]": hasThreeImages || hasFourImages,
              }
            )}
            className="md:rounded-2xl"
          />
        )}

        {hasThreeImages && (
          <ImageWithSkeletonLoader
            src={images[1].document}
            alt=""
            wrapperClassName={cn(
              "hidden md:block w-full h-full object-cover rounded-2xl md:w-[25%]"
            )}
            className=" rounded-2xl"
          />
        )}

        {hasFourImages && (
          <div
            className={cn(
              " w-full md:w-[25%] h-full hidden md:flex flex-col gap-4 justify-between"
            )}>
            <ImageWithSkeletonLoader
              src={images[2].document}
              alt=""
              wrapperClassName="w-full h-auto md:h-[240px] object-cover rounded-2xl"
              className=" rounded-2xl"
            />
            <ImageWithSkeletonLoader
              src={images[3].document}
              alt=""
              wrapperClassName="w-full h-auto md:h-[240px] object-cover rounded-2xl"
              className=" rounded-2xl"
            />
          </div>
        )}

        {videoUrl && (
          <button
            onClick={() => setShowVideoModal(true)}
            className={cn(
              " bg-black/50 text-white md:text-primary md:bg-background",
              "border border-white md:border-2 md:border-primary px-2 md:px-4",
              "inline-flex items-center h-9 md:h-[50px] rounded-full absolute bottom-4 left-4",
              " text-body-xs md:text-body-md font-bold gap-2 md:gap-3"
            )}>
            <span className=" bg-white md:bg-transparent border-[3px] border-white md:border-primary size-6 md:size-fit inline-flex items-center justify-center rounded-full">
              <BiCaretRight className="size-5 fill-primary" />
            </span>
            Play Video
          </button>
        )}

        <button
          onClick={() => setShowImageGallery(true)}
          className={cn(
            " bg-black/50 text-white md:text-primary md:bg-background",
            "border border-white md:border-2 md:border-primary px-2",
            "inline-flex items-center h-9 md:h-[50px] rounded-full absolute bottom-4 right-4",
            " text-body-xs md:text-body-md font-bold gap-2 md:gap-3"
          )}>
          <span className=" bg-white md:bg-transparent size-6 md:size-fit inline-flex items-center justify-center rounded-full">
            <PhotoIcon className="size-4 md:size-7" />
          </span>
          {images?.length > 1
            ? `View all ${images.length} photos`
            : "View photo"}

          <ArrowUpRightIcon className=" size-2 md:hidden" />
        </button>
      </div>

      <ImageGalleryDrawer
        isOpen={showImageGallery}
        seIsOpen={setShowImageGallery}
        images={images}
        type={type}
        city={city}
      />

      {videoUrl && (
        <VideoModal
          videoUrl={videoUrl}
          isOpen={showVideoModal}
          setIsOpen={setShowVideoModal}
        />
      )}
    </Container>
  );
};

export default ImageSection;

const ImageGalleryDrawer = ({
  isOpen,
  seIsOpen,
  images,
  city,
  type,
}: {
  isOpen: boolean;
  seIsOpen: (value: boolean) => void;
} & Pick<ShortLet, "images" | "type" | "city">) => {
  return (
    <Drawer open={isOpen} onOpenChange={seIsOpen}>
      <DrawerContent
        preventAutoFocusOnOpen
        className=" flex flex-col overflow-y-auto">
        <DrawerHeader className={"border-b border-mid-grey"}>
          <DrawerTitle className=" text-center text-heading-3 font-secondary text-primary">
            Photos
          </DrawerTitle>
          <DrawerDescription className=" text-center text-body-sm text-charcoal-grey pt-1">
            Photos of the {displayShortLetType(type)} located in{" "}
            <b>
              {city.name}, {city.state?.name}
            </b>
          </DrawerDescription>
        </DrawerHeader>

        <Container className=" pt-6 px-4 grid grid-cols-1 gap-4 md:grid-cols-2 flex-auto overflow-y-auto pb-4">
          {images.map((image) => (
            <div key={image.id} className=" relative">
              <ImageWithSkeletonLoader
                src={image.document}
                alt=""
                wrapperClassName="w-full h-[264px] md:h-[393px] object-cover rounded-2xl"
                className=" rounded-2xl"
              />
              <div className=" absolute bottom-4 left-4 bg-cream border border-primary rounded-full text-primary text-body-xs capitalize font-bold px-4 py-1 min-h-[30px] inline-flex items-center">
                {getImageType(image.optionId)}
              </div>
            </div>
          ))}
        </Container>
      </DrawerContent>
    </Drawer>
  );
};

const VideoModal = ({
  videoUrl,
  isOpen,
  setIsOpen,
}: {
  videoUrl: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        className=" rounded-[20px] max-w-full p-0 flex flex-col max-h-[90vh] overflow-y-auto"
        wrapperClassName=" rounded-[22px] w-full max-w-[calc(100vw-2rem)] lg:max-w-[759px] ">
        <ModalHeader className=" p-4 items-center py-4 text-center border-b border-mid-grey">
          <ModalTitle className=" font-secondary text-heading-3 leading-tight font-bold md:text-center text-primary ">
            Video
          </ModalTitle>
        </ModalHeader>
        <div className=" px-0 py-0 space-y-6 ">
          <iframe
            className="w-full h-[345px] md:h-[420px] lg:h-[593px]] rounded-b-2xl"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </ModalContent>
    </Modal>
  );
};
