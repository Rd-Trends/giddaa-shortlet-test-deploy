import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import React from "react";

// CustomDialog Component
interface CommonModalProps {
  title: string;
  subHeader?: string;
  description: React.ReactNode;
  cancelBtnText?: string;
  confirmBtnText?: string;
  confirmAction: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  icon?: React.ReactNode;
}

export const CommonModal = ({
  isOpen,
  setIsOpen,
  title,
  subHeader,
  description,
  cancelBtnText = "No",
  confirmBtnText = "Yes",
  confirmAction,
  icon,
}: CommonModalProps) => {
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        preventAutoFocusOnOpen
        className=" rounded-[20px] p-0"
        wrapperClassName="w-full max-w-[calc(100vw-2rem)] md:max-w-sm rounded-[22px]">
        <ModalHeader className="py-4 border-b border-mid-grey px-4">
          <ModalTitle className=" font-secondary text-body-md font-bold text-center text-primary  ">
            {title}
          </ModalTitle>
        </ModalHeader>

        {icon}

        {subHeader && (
          <p className="text-body-xs font-bold text-center mt-[24px]">
            {subHeader}
          </p>
        )}

        <div className="px-[15px] text-center overflow-y-auto max-h-[70vh] pt-4 text-body-xs">
          {description}
        </div>

        <ModalFooter className=" p-4 border-t border-mid-grey !flex-col !justify-center !space-x-0 space-y-2 mt-6">
          {!!confirmBtnText && (
            <Button className=" w-full font-bold " onClick={confirmAction}>
              {confirmBtnText}
            </Button>
          )}
          {!!cancelBtnText && (
            <Button
              variant={"outline"}
              className="w-full font-bold"
              onClick={() => setIsOpen(false)}>
              {cancelBtnText}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
