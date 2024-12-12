"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import RenderInnerHtml from "@/components/ui/RenderInnerHtml";
import { getWordCount } from "@/utils/get-word-count";
import React from "react";

const AboutSection = ({ description }: { description: string }) => {
  const [showMore, setShowMore] = React.useState(false);
  const wordCount = getWordCount(description);
  const showMoreButton = wordCount > 60;

  return (
    <div className=" space-y-4">
      <RenderInnerHtml
        html={description}
        className="!line-clamp-6 md:line-clamp-4 xl:line-clamp-3 text-black"
      />
      {showMoreButton && (
        <button
          className="text-secondary text-body-md font-bold outline-none border-none "
          onClick={() => setShowMore(true)}>
          Show More
        </button>
      )}

      <AboutShortLetModal
        isOpen={showMore}
        setIsOpen={setShowMore}
        description={description}
      />
    </div>
  );
};

export default AboutSection;

const AboutShortLetModal = ({
  isOpen,
  setIsOpen,
  description,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  description: string;
}) => {
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        className=" rounded-[20px] max-w-full p-0 flex flex-col max-h-[90vh] overflow-y-auto"
        wrapperClassName=" rounded-[22px] w-full max-w-[calc(100vw-2rem)] lg:max-w-[759px] ">
        <ModalHeader className=" p-4 items-center py-4 text-center border-b border-mid-grey">
          <ModalTitle className=" font-secondary text-heading-3 leading-tight font-bold md:text-center text-primary ">
            About This Place
          </ModalTitle>
        </ModalHeader>

        <div className=" px-4 py-6 md:py-8 space-y-6 flex-1 overflow-y-auto ">
          <RenderInnerHtml
            html={description}
            className=" text-black text-center"
          />
        </div>
      </ModalContent>
    </Modal>
  );
};
