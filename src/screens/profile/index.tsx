"use client";

import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/Button";
import { useScrollableContainerNavigation } from "@/hooks/useContainerScrollNavigation";
import AccountSettingsIcon from "@/svgs/AccountSettingsIcon";
import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
import CalendarIcon from "@/svgs/CalendarIcon";
import IDIcon from "@/svgs/IDIcon";
import NotificationBellIcon from "@/svgs/NotificationBellIcon";
import ReferralsIcon from "@/svgs/ReferralsIcon";
import ResetPasswordicon from "@/svgs/ResetPasswordIcon";
import ShortLetIcon from "@/svgs/ShortletIcon";
import { cn } from "@/utils/classname";
import { useMemo } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import ProfileListCard from "./ProfileListCard";
import GridDots from "./BackgroundGridDots";

const Profile = () => {
  const sections = useMemo(() => {
    return [
      {
        id: "GENERAL",
        label: "General",
        description: "General profile settings.",
        items: [
          {
            name: "Account Settings",
            description: "Your name, age, marital status, delete account, etc.",
            icon: <AccountSettingsIcon />,
            link: "/profile/account-settings",
          },
          {
            name: "Verification",
            description:
              "Verify your identity (National Identity, Bank Verification Number, International Passport).",
            icon: <IDIcon />,
            link: "/profile/verification",
          },
          {
            name: "My Referrals",
            description:
              "View your referral code and learn about the earning potential of your referral codes on Giddaa.",
            icon: <ReferralsIcon />,
            link: "/profile/referrals",
          },
          {
            name: "Reset Password",
            description: "Reset the password for your account.",
            icon: <ResetPasswordicon />,
            onClick: () => {},
          },
          {
            name: "Notifications",
            description: "Your notifications preferences.",
            icon: <NotificationBellIcon />,
            link: "/profile/notifications",
          },
        ],
      },
      {
        id: "BUY",
        label: "Buy",
        description: "Your profile for activities on the buy side of Giddaa.",
        items: [],
      },
      {
        id: "SHORTLETS",
        label: "Shortlets",
        description:
          "Your profile for activities on the short let side of Giddaa.",
        items: [
          {
            name: "Favourite Short Lets",
            description: "Short Lets you liked.",
            icon: <ShortLetIcon />,
            link: "/profile/favourite-short-lets",
          },
          {
            name: "Reservations",
            description: "Reservations you’ve made for short lets.",
            icon: <CalendarIcon color="currentColor" />,
            link: "/profile/reservations",
            requiresAction: true,
          },
        ],
      },
    ];
  }, []);

  const { activeSection, handleScroll, sectionRefs, handleClick } =
    useScrollableContainerNavigation({
      sections,
    });
  return (
    <div className=" pb-20">
      <header className="relative bg-background py-12 border border-mid-grey">
        <GridDots className="absolute top-0 left-0 pointer-events-none select-none " />
        <GridDots className="absolute left-[215px] bottom-0 pointer-events-none select-none " />
        <GridDots className="absolute top-0 right-0 pointer-events-none select-none " />
        <GridDots className="absolute bottom-0 right-[368px] pointer-events-none select-none " />

        <Container className=" relative">
          <h1 className=" text-heading-3 font-secondary text-primary pb-2 text-center">
            Your Profile
          </h1>
          <p className=" text-body-sm font-semibold text-charcoal-grey text-center">
            Information regarding your profile and general activities on Giddaa
          </p>

          <div className=" flex items-center gap-4 justify-center pt-6">
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

          <div
            className={
              " bg-background p-4 rounded-2xl border border-mid-grey space-y-4 " +
              " w-fit mx-auto mt-6 lg:mt-0 lg:absolute lg:right-10 xl:right-20 lg:top-0 "
            }>
            <div className=" flex items-start space-x-4">
              <img
                src="/images/contact_image.png"
                className=" w-14 h-16 rounded-2xl object-cover"
                alt=""
              />
              <div>
                <h3 className=" text-body-sm font-bold text-black">
                  Jonathan Anakson
                </h3>
                <p className=" text-body-subtext">Account Executive</p>
                <div className=" flex items-center space-x-4">
                  <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                    <BsTelephone className=" size-5" />
                  </button>
                  <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                    <FaWhatsapp className=" size-5" />
                  </button>
                </div>
              </div>
            </div>
            <Button size={"small"} className=" w-full">
              View Profile{" "}
              <ArrowOpenIcon className=" fill-white stroke-white" />
            </Button>
          </div>
        </Container>
      </header>

      <Container onScroll={handleScroll} className=" pt-11 space-y-10">
        {sections.map((section) => {
          if (section.items.length === 0) return null;

          return (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}>
              <h2 className=" text-body-sm font-bold uppercase text-primary mb-2">
                {section.label}
              </h2>
              <p className=" text-body-sm text-charcoal-grey mb-6">
                {section.description}
              </p>

              <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.items.map((item) => {
                  return <ProfileListCard key={item.name} {...item} />;
                })}
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Profile;
