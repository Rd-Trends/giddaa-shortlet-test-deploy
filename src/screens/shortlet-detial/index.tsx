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
import { Button, buttonVariants } from "@/components/ui/Button";
import TelephoneRingingIcon from "@/svgs/TelephoneRingingIcon";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import TakeATour from "./TakeATour";
import AmenitiesSection from "./AmenitiesSection";
import ContactStaffsPopover from "@/components/shared/popovers/ContactStaffsPopover";

const dummyImages = [
  {
    id: "living-room-1",
    document: "https://picsum.photos/200/300?random=" + 1,
    optionId: "LIVING_ROOM_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "living-room-2",
    document: "https://picsum.photos/200/300?random=" + 2,
    optionId: "LIVING_ROOM_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "master-bedroom-1",
    document: "https://picsum.photos/200/300?random=" + 3,
    optionId: "MASTER_BED_ROOM_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "master-bedroom-2",
    document: "https://picsum.photos/200/300?random=" + 4,
    optionId: "MASTER_BED_ROOM_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "bedroom-1",
    document: "https://picsum.photos/200/300?random=" + 5,
    optionId: "BED_ROOM_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "bedroom-2",
    document: "https://picsum.photos/200/300?random=" + 6,
    optionId: "BED_ROOM_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "kitchen-1",
    document: "https://picsum.photos/200/300?random=" + 6,
    optionId: "KITCHEN_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "kitchen-2",
    document: "https://picsum.photos/200/300?random=" + 7,
    optionId: "KITCHEN_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "bathroom-1",
    document: "https://picsum.photos/200/300?random=" + 8,
    optionId: "BATH_ROOM_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "bathroom-2",
    document: "https://picsum.photos/200/300?random=" + 9,
    optionId: "BATH_ROOM_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "outside-1",
    document: "https://picsum.photos/200/300?random=" + 10,
    optionId: "OUTSIDE_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "outside-2",
    document: "https://picsum.photos/200/300?random=" + 11,
    optionId: "OUTSIDE_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "balcony-1",
    document: "https://picsum.photos/200/300?random=" + 12,
    optionId: "BALCONY_SHORTLET_IMAGE_TYPE",
  },
  {
    id: "balcony-2",
    document: "https://picsum.photos/200/300?random=" + 13,
    optionId: "BALCONY_SHORTLET_IMAGE_TYPE",
  },
];

const RenderShortLetPage = ({ shortLet }: { shortLet: ShortLet }) => {
  const sections = useMemo(() => {
    return [
      {
        id: "HighLight",
        label: "HighLight",
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
        id: "Take-A-Tour",
        label: "Take A Tour",
        pageTitle: "Take a Tour",
        content: (
          <TakeATour
            images={dummyImages}
            videoUrl={shortLet.videoUrl}
            // videoUrl="https://www.youtube.com/embed/pYKAngWoyVw?si=L8dHnwrG54FIH_XZ"
            name={shortLet.name}
            city={shortLet.city}
          />
        ),
      },
      // {
      //   id: "Location",
      //   label: "Location",
      //   pageTitle: "Where you will stay",
      //   content: (
      //     <HouseLocation city={shortLet.city} address={shortLet.address} />
      //   ),
      // },
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

  console.log(shortLet);

  return (
    <div className="container px-0 bg-background min-h-screen h-full">
      <Container className="!px-0 fixed left-0 right-0 top-0 w-screen bg-background pt-6 space-y-4 z-10">
        <Nav
          name={shortLet.name}
          id={shortLet.id}
          price={shortLet.listingPrice}
        />
        <ScrollNavigation
          sections={sections}
          activeSection={activeSection}
          handleClick={handleClick}
        />
      </Container>

      <ImageSection images={dummyImages} />

      <Container className="px-4 md:px-6 space-y-20 pt-20 pb-8 ">
        {sections.map((section, index) => {
          return (
            <section
              key={section.id}
              id={section.id}
              className={cn(
                "space-y-8 md:space-y-10",
                index !== 0 && "border-t border-light-grey pt-8 md:pt-10"
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

      <div className=" fixed bottom-10 left-1/2 -translate-x-1/2  mx-auto z-10 p-0.5 bg-primary-gradient rounded-full shadow-[0px_4px_4px_3px_#00000040]">
        <div className=" bg-background p-4 rounded-full flex items-center gap-4">
          <Link
            href={`/${shortLet.id}/booking`}
            className={cn(
              buttonVariants({ size: "large" }),
              " font-bold px-8"
            )}>
            Reserve Now
          </Link>
          <ContactStaffsPopover shortLetId={shortLet.id}>
            <Button size={"large"} variant={"outline"} className="gap-3 group">
              <TelephoneRingingIcon /> <span>Contact Us</span>{" "}
              <BiCaretDown className="size-5 -ml-2 -mt-0.5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
            </Button>
          </ContactStaffsPopover>
        </div>
      </div>

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
