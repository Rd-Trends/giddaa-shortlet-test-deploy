import { Button } from "@/components/ui/Button";
import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
import { ShortLet } from "@/types/short-let";
import { useMemo, useState } from "react";
import { SHORT_LET_AMENITIES_ICON_MAP } from "@/constants/shortlet-amenities-icon-map";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer";
import Container from "@/components/layouts/Container";
import { useScrollableContainerNavigation } from "@/hooks/useContainerScrollNavigation";
import { cn } from "@/utils/classname";
import { SHORT_LET_FEATURES } from "@/constants/short-let-features";
import { convertCamelCaseToTitleCase } from "@/utils/convert-camel-case-to-title-case";

const AmenitiesSection = ({ shortLet }: { shortLet: ShortLet }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const features = shortLet.features[0];
  const totalAvailableAmenities = Object.values(features).filter(
    (feature) => feature
  ).length;

  const firstTenAvailableAmenities = useMemo(() => {
    return Object.entries(features)
      .reduce((acc, [key, value]) => {
        if (value && key !== "id" && key !== "name" && key !== "icon") {
          acc.push(key);
        }
        return acc;
      }, [] as string[])
      .slice(0, 10);
  }, [features]);

  return (
    <div className=" space-y-4 md:space-y-10">
      <div className=" grid grid-cols-2 gap-4 gap-y-6 md:gap-6  md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {firstTenAvailableAmenities.map((amenity) => (
          <div key={amenity} className=" flex items-start space-x-4">
            <span className=" w-7 flex-shrink-0">
              {
                SHORT_LET_AMENITIES_ICON_MAP[
                  amenity as keyof typeof SHORT_LET_AMENITIES_ICON_MAP
                ]
              }
            </span>
            <p className=" text-body-sm md:text-body-md ">
              {convertCamelCaseToTitleCase(amenity)}
            </p>
          </div>
        ))}
      </div>

      <Button
        variant={"outline"}
        size={"large"}
        className=" text-body-sm w-full md:w-fit relative"
        onClick={() => setIsDrawerOpen(true)}>
        View All {totalAvailableAmenities} Amenities
        <ArrowOpenIcon className="w-4 h-4 ml-2 absolute right-6 md:static" />
      </Button>

      <TourASectionDrawer
        isOpen={isDrawerOpen}
        seIsOpen={setIsDrawerOpen}
        features={features}
        name={shortLet.name}
        city={shortLet.city}
      />
    </div>
  );
};

export default AmenitiesSection;

const TourASectionDrawer = ({
  isOpen,
  seIsOpen,
  features,
  name,
  city,
}: {
  isOpen: boolean;
  seIsOpen: (value: boolean) => void;
  features: ShortLet["features"][0];
  name: string;
  city: ShortLet["city"];
}) => {
  const sections = useMemo(() => {
    const amenities = {} as Record<keyof typeof SHORT_LET_FEATURES, string[]>;
    const data = Object.entries(features).reduce((acc, [key, value]) => {
      if (value && key !== "id" && key !== "name" && key !== "icon") {
        const category = Object.keys(SHORT_LET_FEATURES).find((category) =>
          SHORT_LET_FEATURES[
            category as keyof typeof SHORT_LET_FEATURES
          ].includes(key)
        ) as keyof typeof SHORT_LET_FEATURES;
        if (category) {
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(key);
        }
      }
      return acc;
    }, amenities);

    // return {title: key, amenities: value};
    return Object.entries(data)
      .map(([key, amenities]) => {
        return { id: key, label: key, amenities };
      })
      .filter((data) => data.amenities.length > 0);
  }, [features]);

  const { activeSection, sectionRefs, handleClick, handleScroll } =
    useScrollableContainerNavigation({
      sections,
    });

  return (
    <Drawer open={isOpen} onOpenChange={seIsOpen}>
      <DrawerContent
        preventAutoFocusOnOpen
        className=" flex flex-col overflow-y-auto">
        <DrawerHeader className={"border-b border-midGrey"}>
          <DrawerTitle className=" text-center text-heading-3 font-secondary text-primary">
            Amenities
          </DrawerTitle>
          <DrawerDescription className=" text-center text-body-sm text-charcoal-grey pt-1">
            Amenities at <b>{name}</b> located at{" "}
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
                {section.label.split("_").join(" ")}
              </Button>
            ))}
          </div>
        </Container>

        <Container
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto grid grid-cols-1 gap-10 xl:gap-x-20 md:grid-cols-2 md:[&>div:nth-child(even)]:pl-10 xl:[&>div:nth-child(even)]:pl-20 md:[&>div:nth-child(even)]:border-l md:[&>div:nth-child(even)]:border-mid-grey pb-8">
          {sections.map((section) => (
            <div
              id={section.id}
              key={section.id}
              className="mt-6 "
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}>
              <p className=" text-body-xl font-bold capitalize">
                {section.label.split("_").join(" ")}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {section.amenities.map((amenity) => (
                  <div key={amenity} className=" flex items-start space-x-4">
                    <span className=" w-7 flex-shrink-0">
                      {
                        SHORT_LET_AMENITIES_ICON_MAP[
                          amenity as keyof typeof SHORT_LET_AMENITIES_ICON_MAP
                        ]
                      }
                    </span>
                    <p className=" text-body-sm font-normal ">
                      {convertCamelCaseToTitleCase(amenity)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </DrawerContent>
    </Drawer>
  );
};
