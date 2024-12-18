import PaymentDetails from "@/components/shared/PaymentDetails";
import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import { useMediaQuery } from "@/hooks/useMediaQueries";
import { ShortLetBooking } from "@/types/short-let";
import { use100vh } from "react-div-100vh";

const PaymentDetailsModal = ({
  booking,
  isOpen,
  setIsOpen,
  showSelectPaymentMethodModal,
}: {
  booking: ShortLetBooking;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  showSelectPaymentMethodModal: (value: boolean) => void;
}) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const maxHeight = use100vh() || "700";

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        style={{ maxHeight: `calc(${maxHeight}px - 2rem)` }}
        className=" rounded-[20px] max-w-full p-0 flex flex-col overflow-y-auto flex-1"
        wrapperClassName=" rounded-[22px] w-full max-w-[calc(100vw-2rem)] lg:max-w-[911px] flex flex-col overflow-y-auto ">
        <ModalHeader className=" border-b border-mid-grey text-center p-4">
          <ModalTitle className=" font-secondary text-heading-4 text-primary text-center">
            {booking.shortlet.name} Payment Link
          </ModalTitle>
          <ModalDescription className=" text-body-sm font-normal text-center pt-1">
            Make your payment to confirm the reservation for your stay.
          </ModalDescription>
        </ModalHeader>
        <div className=" flex-1 space-y-4 overflow-y-auto p-4 relative z-0 px-4 xl:px-10 ">
          <PaymentDetails booking={booking} />
        </div>

        <ModalFooter className=" p-4 border-t flex flex-row items-center border-mid-grey !justify-center mt-8 space-x-4">
          <Button
            size={isMobile ? "medium" : "large"}
            variant="outline-danger"
            // onClick={() => changeStep(0)}
            className=" font-bold px-10 md:px-14"
            type="button">
            Cancel
          </Button>
          <Button
            size={isMobile ? "medium" : "large"}
            variant="filled"
            className=" font-bold px-10 md:px-14"
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => {
                showSelectPaymentMethodModal(true);
              }, 150);
            }}>
            Pay Now
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentDetailsModal;
