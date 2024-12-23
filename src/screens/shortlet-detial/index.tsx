"use client";

import { ShortLet } from "@/types/short-let";
import Nav from "./Nav";
import ScrollNavigation from "@/components/ui/ScrollNavigation";
import { useMemo } from "react";
import { useWindowScrollNavigation } from "@/hooks/useWindowScrollNavigation";
import Container from "@/components/layouts/Container";
import HighlightSection from "./HighlightSection";
import AboutSection from "./AboutSection";
import { cn } from "@/utils/classname";
import ImageSection from "./ImageSection";
import BookingPoliciesAndHouseRulesSection from "./BookingPolicies";
import SafetyAndSecuritySection from "./SafetyAndSecuritySection";
import UsesSection from "./UsesSection";
import ServicesSection from "./ServicesSection";
import ShortletsNearBy from "./ShortletsNearBy";
import Footer from "@/components/layouts/Footer";
import TakeATour from "./TakeATour";
import AmenitiesSection from "./AmenitiesSection";
import HouseLocation from "./Location";
import StickyFooter from "./StickyFooter";
import ScrollToTop from "@/components/ui/ScrollToTop";

// const dummyFeatures = {
//   id: "example_id",
//   name: "Luxurious Villa",
//   icon: "villa_icon.png",
//   hasWashingMachine: true,
//   hasPoPCeiling: true,
//   hasDryer: true,
//   hasAirConditioning: true,
//   hasHighSpeedInternet: true,
//   hasWineCeller: true,
//   hasEnsuite: true,
//   hasWifi: true,
//   hasSmartHomeTechnology: true,
//   hasPresingIron: true,
//   hasOpenFloorPlan: true,
//   hasLargeWindwos: true,
//   hasBuiltInHouseTheater: true,
//   hasTelevision: true,
//   hasPoolOrSnookerTable: true,
//   hasKettle: true,
//   hasRefrigerator: true,
//   hasGrantieCountertops: true,
//   hasBreakfastBar: true,
//   hasCookingGas: true,
//   hasMicrowave: true,
//   hasOven: true,
//   hasMarbleWalls: true,
//   hasBathtub: true,
//   hasStandingShower: true,
//   hasHeaterAndHotWater: true,
//   hasPrivateBackyard: true,
//   hasPatioOrDarkSpace: true,
//   hasLandscapedGarden: true,
//   hasSwimmingPool: true,
//   hasSnokerArea: true,
//   hasHomeOfficeSpace: true,
//   hasBuiltInShelfOrBookSpace: true,
//   hasAmpleNaturalLight: true,
//   hasCCTVSurveillanceSystem: true,
//   hasGatedCompound: true,
//   hasHighBrowArea: true,
//   hasArmedGuards: true,
//   hasBulletProofDoors: true,
//   hasBurglaryProofWindows: true,
// };

const RenderShortLetPage = ({ shortLet }: { shortLet: ShortLet }) => {
  const sections = useMemo(() => {
    return [
      {
        id: "Highlights",
        label: "Highlights",
        content: <HighlightSection shortLet={shortLet} />,
      },
      {
        id: "About",
        label: "About",
        pageTitle: "About This Place",
        content: <AboutSection description={shortLet.description} />,
      },
      {
        id: "Amenities",
        label: "Amenities",
        pageTitle: "Amenities",
        content: <AmenitiesSection shortLet={shortLet} />,
      },
      {
        id: "Take-a-Tour",
        label: "Take a Tour",
        pageTitle: "Take a Tour",
        content: (
          <TakeATour
            images={shortLet.images}
            videoUrl={shortLet.videoUrl}
            // videoUrl="https://www.youtube.com/embed/pYKAngWoyVw?si=L8dHnwrG54FIH_XZ"
            name={shortLet.name}
            city={shortLet.city}
          />
        ),
      },
      {
        id: "Location",
        label: "Location",
        pageTitle: "Where You’ll Stay",
        content: (
          <HouseLocation
            name={shortLet.name}
            city={shortLet.city}
            address={shortLet.address}
          />
        ),
      },
      {
        id: "Policies-And-House-Rules",
        label: "Policies & Rules",
        pageTitle: "Booking Policies & House Rules",
        content: <BookingPoliciesAndHouseRulesSection shortLet={shortLet} />,
      },
      {
        id: "Safety-And-Security-Features",
        label: "Safety",
        pageTitle: "Safety & Security Features",
        content: <SafetyAndSecuritySection shortLet={shortLet} />,
      },
      {
        id: "Services",
        label: "Services",
        pageTitle: "Services",
        content: <ServicesSection services={shortLet.services} />,
      },
      {
        id: "Uses",
        label: "Uses",
        pageTitle: "Uses",
        content: <UsesSection uses={shortLet.uses} />,
      },
      {
        id: "Nearby-Places",
        label: "Nearby Places",
        pageTitle: "Other Places Nearby",
        content: <ShortletsNearBy city={shortLet.city} />,
      },
    ];
  }, [shortLet]);

  const { activeSection, sectionRefs, handleClick } = useWindowScrollNavigation(
    {
      sections,
      offset: 170,
    }
  );

  return (
    <div className="container px-0 bg-background min-h-screen h-full">
      <Container className="!px-0 sticky top-0 bg-background pt-6 space-y-4 z-10">
        <Nav
          name={shortLet.name}
          id={shortLet.id}
          price={shortLet.listingPrice}
          type={shortLet.type}
          city={shortLet.city}
        />
        <ScrollNavigation
          sections={sections}
          activeSection={activeSection}
          handleClick={handleClick}
        />
      </Container>

      <ImageSection
        images={shortLet.images}
        type={shortLet.type}
        city={shortLet.city}
        // videoUrl={shortLet.videoUrl}
        videoUrl="https://www.youtube.com/embed/pYKAngWoyVw?si=L8dHnwrG54FIH_XZ"
      />

      <Container className="px-4 md:px-6 space-y-[60px] md:space-y-20 pt-20 pb-20 ">
        {sections.map((section, index) => {
          return (
            <section
              key={section.id}
              id={section.id}
              className={cn(
                "space-y-8 md:space-y-10",
                index !== 0 && "border-t border-mid-grey pt-[30px] md:pt-10"
              )}
              ref={(element) => {
                sectionRefs.current[section.id] = element;
              }}>
              <SectionTitle title={section.pageTitle ?? section.label} />
              {section.content}
            </section>
          );
        })}
      </Container>

      <StickyFooter shortletId={shortLet.id} />
      <ScrollToTop className=" bottom-24 md:bottom-8" />
      <Footer />
    </div>
  );
};

export default RenderShortLetPage;

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2
      className={
        " text-heading-4 md:text-heading-3 text-primary font-bold font-secondary relative pb-2 w-fit"
      }>
      {title}
      <span className="absolute left-0 w-[92px] max-w-[70%] h-0.5 rounded-full bg-primary bottom-0" />
    </h2>
  );
};
