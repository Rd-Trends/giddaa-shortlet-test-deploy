import { CommonModal } from "@/components/shared/modals/CommonModal";
import ContactStaffsPopover from "@/components/shared/popovers/ContactStaffsPopover";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Popover, PopoverTrigger } from "@/components/ui/Popover";
import { AppRoutes } from "@/constants/routes";
import useAuth from "@/hooks/useAuth";
import { useMediaQuery } from "@/hooks/useMediaQueries";
import TelephoneRingingIcon from "@/svgs/TelephoneRingingIcon";
import { cn } from "@/utils/classname";
import { PopoverAnchor } from "@radix-ui/react-popover";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiCaretDown } from "react-icons/bi";

const StickyFooter = ({ shortletId }: { shortletId: string }) => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();

  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverAnchor className=" fixed bottom-4 left-1/2 -translate-x-1/2  mx-auto z-10 p-0.5 bg-primary-gradient rounded-full shadow-[0px_4px_4px_3px_#00000040]">
          <div className=" bg-background py-4 px-[22px] md:py-6 md:px-8 rounded-full flex items-center gap-4">
            {isAuthenticated && (
              <Link
                href={AppRoutes.BOOK_SHORT_LET.replace("[id]", shortletId)}
                className={cn(
                  buttonVariants({ size: isMobile ? "medium" : "large" }),
                  " font-bold px-8"
                )}>
                Reserve Now
              </Link>
            )}
            {!isAuthenticated && (
              <Button
                size={isMobile ? "medium" : "large"}
                className=" font-bold px-8"
                onClick={() => setShowLoginModal(true)}>
                Reserve Now
              </Button>
            )}
            <PopoverTrigger asChild>
              <Button
                size={isMobile ? "medium" : "large"}
                variant={"outline"}
                className="gap-3 group">
                <TelephoneRingingIcon className=" size-5 lg:size-8" />{" "}
                <span>Contact Us</span>{" "}
                <BiCaretDown className="size-5 -ml-2 -mt-0.5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
              </Button>
            </PopoverTrigger>
          </div>
        </PopoverAnchor>
        <ContactStaffsPopover
          shortLetId={shortletId}
          isOpen={isOpen}
          sideOffset={8}
          sameWidthAsTrigger
          wrapperClassName=" md:min-w-[395px]"
          align="center"
        />
      </Popover>

      <CommonModal
        title="You’re Not Logged In"
        subHeader="Login or Continue as Guest"
        description="You can continue as a guest to make a reservation. However, you will not be able to track your reservation or access it later."
        confirmBtnText="Login"
        confirmAction={() => {
          router.push(AppRoutes.LOGIN);
        }}
        onCancel={() =>
          router.push(AppRoutes.BOOK_SHORT_LET.replace("[id]", shortletId))
        }
        cancelBtnText="Continue as Guest"
        isOpen={showLoginModal}
        setIsOpen={setShowLoginModal}
        icon={
          <img
            src="/icons/not_logged_in_modal_icon.png"
            className=" w-[196px] h-auto mx-auto "
            alt=""
          />
        }
      />
    </>
  );
};

export default StickyFooter;
