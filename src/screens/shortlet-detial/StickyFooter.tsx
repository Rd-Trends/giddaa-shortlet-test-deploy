import ContactStaffsPopover from "@/components/shared/popovers/ContactStaffsPopover";
import { Button, buttonVariants } from "@/components/ui/Button";
import { useMediaQuery } from "@/hooks/useMediaQueries";
import TelephoneRingingIcon from "@/svgs/TelephoneRingingIcon";
import { cn } from "@/utils/classname";
import Link from "next/link";
import React from "react";
import { BiCaretDown } from "react-icons/bi";

const StickyFooter = ({ shortletId }: { shortletId: string }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className=" fixed bottom-4 md:bottom-10 left-1/2 -translate-x-1/2  mx-auto z-10 p-0.5 bg-primary-gradient rounded-full shadow-[0px_4px_4px_3px_#00000040]">
      <div className=" bg-background p-4 rounded-full flex items-center gap-4">
        <Link
          href={`/${shortletId}/booking`}
          className={cn(
            buttonVariants({ size: isMobile ? "medium" : "large" }),
            " font-bold px-8"
          )}>
          Reserve Now
        </Link>
        <ContactStaffsPopover shortLetId={shortletId}>
          <Button
            size={isMobile ? "medium" : "large"}
            variant={"outline"}
            className="gap-3 group">
            <TelephoneRingingIcon className=" size-5 lg:size-8" />{" "}
            <span>Contact Us</span>{" "}
            <BiCaretDown className="size-5 -ml-2 -mt-0.5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
          </Button>
        </ContactStaffsPopover>
      </div>
    </div>
  );
};

export default StickyFooter;
