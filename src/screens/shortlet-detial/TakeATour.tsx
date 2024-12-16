import { Button } from "@/components/ui/Button";
import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
import { ShortLet } from "@/types/short-let";
import { cn } from "@/utils/classname";
import { getImageType } from "@/utils/get-image-type";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import Container from "@/components/layouts/Container";
import { useMemo, useState } from "react";
import { useScrollableContainerNavigation } from "@/hooks/useContainerScrollNavigation";
import ImageWithSkeletonLoader from "@/components/ui/ImageWithSkeletonLoader";

type TakeATourProps = {
  images: ShortLet["images"];
  videoUrl: ShortLet["videoUrl"];
  name: string;
  city: ShortLet["city"];
};

const TakeATour = ({ images, videoUrl, name, city }: TakeATourProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const hasJustTwoImages = images.length === 2;
  const hasJustThreeImages = images.length === 3;
  const hasFourImages = images.length >= 4;

  return (
    <div className=" space-y-4 md:space-y-10">
      <div className="w-full flex flex-col items-start lg:flex-row gap-4 xl:gap-10">
        {!!videoUrl && (
          <iframe
            className="w-full h-[345px] md:h-[420px] lg:h-[593px] lg:w-[calc(50%-40px)] rounded-2xl"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
        <div
          className={cn("w-full flex-1 grid grid-cols-1 md:h-[593px]", {
            "md:grid-cols-2 gap-4": images.length > 1,
            "md:grid-cols-4 gap-4":
              !videoUrl && (hasFourImages || hasJustThreeImages),
          })}>
          <div
            className={cn("space-y-1 h-full w-full flex flex-col", {
              "md:col-span-2":
                !!videoUrl && (hasJustTwoImages || hasJustThreeImages),
              "md:row-span-2 md:col-span-2":
                !videoUrl && (hasFourImages || hasJustThreeImages),
            })}>
            <ImageWithSkeletonLoader
              src={images[0].document}
              alt=""
              wrapperClassName={cn(
                "w-full h-[264px] object-cover rounded-2xl",
                {
                  "md:h-[573px]": !videoUrl,
                }
              )}
              className=" rounded-2xl"
            />
            <p className=" text-body-md font-semibold capitalize">
              {getImageType(images[0].optionId)}
            </p>
          </div>

          {images.length >= 2 && (
            <div
              className={cn("space-y-1", {
                "md:col-span-2 ": !!videoUrl && hasJustTwoImages,
                " md:col-span-2":
                  !videoUrl && (hasFourImages || hasJustThreeImages),
              })}>
              <ImageWithSkeletonLoader
                src={images[1].document}
                alt=""
                wrapperClassName={cn(
                  "w-full h-[264px] object-cover rounded-2xl",
                  {
                    "md:h-[573px]": !videoUrl && hasJustTwoImages,
                  }
                )}
                className=" rounded-2xl"
              />
              <p className=" text-body-md font-semibold capitalize">
                {getImageType(images[1].optionId)}
              </p>
            </div>
          )}

          {images.length >= 3 && (
            <div
              className={cn("space-y-1 flex flex-col", {
                "md:col-span-2": hasJustThreeImages && !videoUrl,
              })}>
              <ImageWithSkeletonLoader
                src={images[2].document}
                alt=""
                wrapperClassName={cn(
                  "w-full h-[264px] object-cover rounded-2xl"
                )}
                className=" rounded-2xl"
              />
              <p className=" text-body-md font-semibold capitalize">
                {getImageType(images[2].optionId)}
              </p>
            </div>
          )}

          {hasFourImages && (
            <div className="space-y-1 flex flex-col">
              <ImageWithSkeletonLoader
                src={images[3].document}
                alt=""
                wrapperClassName={cn(
                  "w-full h-[264px] object-cover rounded-2xl"
                )}
                className=" rounded-2xl"
              />
              <p className=" text-body-md font-semibold capitalize">
                {getImageType(images[3].optionId)}
              </p>
            </div>
          )}
        </div>
      </div>

      <Button
        variant={"outline"}
        size={"large"}
        className=" text-body-sm w-full md:w-fit relative font-bold"
        onClick={() => setIsDrawerOpen(true)}>
        Tour the Entire Space
        <ArrowOpenIcon className="w-4 h-4 ml-2 absolute right-6 md:static" />
      </Button>

      <TourASectionDrawer
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        images={images}
        name={name}
        city={city}
      />
    </div>
  );
};

export default TakeATour;

const TourASectionDrawer = ({
  isOpen,
  setIsOpen,
  images,
  name,
  city,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  images: ShortLet["images"];
  name: string;
  city: ShortLet["city"];
}) => {
  // group images by type
  const groupedImages = useMemo(() => {
    return images.reduce((acc, image) => {
      const type = image.optionId;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(image);
      return acc;
    }, {} as Record<string, ShortLet["images"]>);
  }, [images]);

  const sections = useMemo(() => {
    return Object.keys(groupedImages).map((key) => ({
      id: key,
      label: getImageType(key),
      images: groupedImages[key],
    }));
  }, [groupedImages]);

  const { activeSection, handleScroll, sectionRefs, handleClick } =
    useScrollableContainerNavigation({
      sections,
    });

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent
        preventAutoFocusOnOpen
        className=" flex flex-col overflow-y-auto">
        <DrawerHeader className={"border-b border-midGrey"}>
          <DrawerTitle className=" text-center text-heading-3 font-secondary text-primary">
            Tour This Place
          </DrawerTitle>
          <DrawerDescription className=" text-center text-body-sm text-charcoal-grey pt-1">
            Take a tour of <b>{name}</b> located at{" "}
            <b>
              {city.state?.name}, {city.name}
            </b>
          </DrawerDescription>
        </DrawerHeader>
        <Container className="border-b border-mid-grey !px-0 ">
          <div className="flex md:justify-center space-x-4 overflow-x-auto p-4">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "filled" : "outline"}
                size="small"
                className={cn("text-body-tiny uppercase font-semibold")}
                onClick={() => handleClick(section.id)}>
                {section.label}
              </Button>
            ))}
          </div>
        </Container>

        <Container onScroll={handleScroll} className="flex-1 overflow-y-auto ">
          {sections.map((section) => (
            <div
              id={section.id}
              key={section.id}
              className="pt-6 md:pt-10 text-black"
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}>
              <p className=" text-heading-4 font-bold mb-2 capitalize">
                {section.label}
              </p>
              <p className=" text-body-md">
                The kitchen area. This is where you can make your meals.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 flex-auto overflow-y-auto pb-4">
                {section.images.map((image) => (
                  <ImageWithSkeletonLoader
                    key={image.id}
                    src={image.document}
                    alt=""
                    wrapperClassName="w-full h-[264px] md:h-[393px] object-cover rounded-2xl"
                    className=" rounded-2xl"
                  />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </DrawerContent>
    </Drawer>
  );
};
