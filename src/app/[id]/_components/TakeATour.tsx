import { Button } from "@/components/ui/Button";
import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
import { ShortLet } from "@/types/short-let";
import { cn } from "@/utils/classname";
import { getImageType } from "@/utils/get-image-type";
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
import { IoMdClose } from "react-icons/io";
import Container from "@/components/layouts/Container";
import { useMemo, useState } from "react";
import { useScrollableContainerNavigation } from "@/hooks/useContainerScrollNavigation";

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
            allowFullScreen></iframe>
        )}
        <div
          className={cn("w-full flex-1 grid-cols-1", {
            "grid grid-cols-1 md:grid-cols-2 gap-4":
              hasJustTwoImages && !videoUrl,
            "grid md:grid-cols-2 lg:grid-cols-1 gap-4":
              hasJustTwoImages && videoUrl,
            "grid md:grid-cols-2 gap-4": hasJustThreeImages || hasFourImages,
            "!h-[593px]": !!videoUrl,
          })}>
          <div
            className={cn("space-y-1 h-full flex flex-col", {
              "md:col-span-2": hasJustThreeImages,
            })}>
            <img
              src={images[0].document}
              alt=""
              className={cn(
                "w-full h-auto md:h-[264px] object-cover rounded-2xl",
                {
                  "lg:h-full": images?.length === 1 && !!videoUrl,
                }
              )}
            />
            <p className=" text-body-md font-semibold capitalize">
              {getImageType(images[0].optionId)}
            </p>
          </div>

          {images.length >= 2 && (
            <div
              className={cn("space-y-1 flex flex-col", {
                "lg:col-span-2": hasJustTwoImages && !!videoUrl,
              })}>
              <img
                src={images[1].document}
                alt=""
                className={cn(
                  "w-full h-full md:h-[264px] object-cover rounded-2xl "
                )}
              />
              <p className=" text-body-md font-semibold capitalize">
                {getImageType(images[1].optionId)}
              </p>
            </div>
          )}

          {images.length >= 3 && (
            <div className="space-y-1 flex flex-col">
              <img
                src={images[2].document}
                alt=""
                className={cn(
                  "w-full h-auto md:h-[264px] object-cover rounded-2xl"
                )}
              />
              <p className=" text-body-md font-semibold capitalize">
                {getImageType(images[2].optionId)}
              </p>
            </div>
          )}

          {hasFourImages && (
            <div className="space-y-1 flex flex-col">
              <img
                src={images[3].document}
                alt=""
                className={cn(
                  "w-full h-auto md:h-[264px] object-cover rounded-2xl"
                )}
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
        className=" text-body-sm w-full md:w-fit relative"
        onClick={() => setIsDrawerOpen(true)}>
        Tour the Entire Space
        <ArrowOpenIcon className="w-4 h-4 ml-2 absolute right-6 md:static" />
      </Button>

      {isDrawerOpen && (
        <TourASectionDrawer
          isOpen={isDrawerOpen}
          seIsOpen={setIsDrawerOpen}
          images={images}
          name={name}
          city={city}
        />
      )}
    </div>
  );
};

export default TakeATour;

const TourASectionDrawer = ({
  isOpen,
  seIsOpen,
  images,
  name,
  city,
}: {
  isOpen: boolean;
  seIsOpen: (value: boolean) => void;
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

  const { activeSection, containerRef, sectionRefs, handleClick } =
    useScrollableContainerNavigation({
      sections,
      offset: 170,
    });

  return (
    <Drawer open={isOpen} onOpenChange={seIsOpen}>
      <DrawerContent className=" flex flex-col overflow-y-auto">
        <DrawerHeader className={"border-b border-midGrey"}>
          <DrawerTitle className=" text-center text-heading-3 font-secondary text-primary">
            Tour This Place
          </DrawerTitle>
          <DrawerDescription className=" text-center text-body-md text-charcoal-grey pt-1">
            Take of tour of <b>{name}</b> located at{" "}
            <b>
              {city.state?.name}, {city.name}
            </b>
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

        <Container ref={containerRef} className="flex-1 overflow-y-auto ">
          {sections.map((section) => (
            <div
              id={section.id}
              key={section.id}
              className="pt-6 md:pt-10"
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
                  <img
                    key={image.id}
                    src={image.document}
                    alt=""
                    className="w-full h-auto md:h-[393px] object-cover rounded-2xl"
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
