"use client";

import { useGetContactAgentsForShortLet } from "@/apis/queries/short-lets";
import { PopoverContent, CustomPopoverClose } from "@/components/ui/Popover";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import SkeletonLoader from "@/components/ui/Skeleton";

type ContactStaffsPopoverProps = {
  shortLetId: string;
  isOpen?: boolean;
} & React.ComponentPropsWithoutRef<typeof PopoverContent>;

const ContactStaffsPopover = ({
  shortLetId,
  isOpen = false,
  ...props
}: ContactStaffsPopoverProps) => {
  const { data: contactAgentsData, isLoading: isLoadingContactStaffs } =
    useGetContactAgentsForShortLet(
      {
        pageNumber: 1,
        pageSize: 10,
        search: "",
        id: shortLetId,
      },
      { enabled: isOpen && !!shortLetId }
    );

  const chatWhatsApp = (phoneNumber: string) => {
    const message = "Hello! I have a question."; // Optional message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handlePhoneClick = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  return (
    <>
      <PopoverContent align="start" className=" p-0" {...props}>
        <div className="flex flex-col divide-y divide-mid-grey max-h-[199px] overflow-y-auto">
          {isLoadingContactStaffs && (
            <SkeletonLoader className="h-16 rounded-xl m-4" />
          )}
          {!isLoadingContactStaffs &&
            contactAgentsData?.value.map((agent) => {
              return (
                <div
                  key={agent.id}
                  className=" flex items-start space-x-4 py-4 px-4">
                  <img
                    src="/images/contact_image.png"
                    className=" w-14 h-16 rounded-2xl object-cover"
                    alt={agent.name}
                  />
                  <div>
                    <h3 className=" text-body-sm font-bold text-black">
                      {agent.name}
                    </h3>
                    <p className=" text-body-xs">{agent.phoneNumber}</p>
                    <div className=" flex items-center space-x-4">
                      <button
                        onClick={() => handlePhoneClick(agent.phoneNumber)}
                        className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                        <BsTelephone className=" size-5 mr-2" /> Call
                      </button>
                      <button
                        onClick={() => chatWhatsApp(agent.phoneNumber)}
                        className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                        <FaWhatsapp className=" size-5 mr-2" /> Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <CustomPopoverClose />
      </PopoverContent>

      {/* <CommonModal
        title="You’re Not Logged In"
        subHeader="Register or Login to Contact to a Staff"
        description="You need to be logged in to contact a staff, register or login to continue"
        confirmBtnText="Login"
        confirmAction={() => {
          router.push(AppRoutes.LOGIN);
        }}
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
      /> */}
    </>
  );
};

export default ContactStaffsPopover;
