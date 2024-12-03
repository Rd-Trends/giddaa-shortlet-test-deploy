import React, { useState, useEffect } from "react";
import { BiCopy } from "react-icons/bi";
import { BsShareFill, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaRedditAlien } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "react-toastify";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/Modal";
import { DEFAULT_IMAGES } from "@/constants/images";

interface SocialShareModalProps {
  url: string;
  title: string;
  text: string;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  description?: React.ReactNode;
  modalTitle?: string;
  children?: React.ReactNode;
}

const SocialShareModal = ({
  url,
  title,
  description,
  modalTitle = "Share With a Friend",
  text,
  isOpen,
  setIsOpen,
  children,
}: SocialShareModalProps) => {
  const [canUseWebShare, setCanUseWebShare] = useState(false);

  useEffect(() => {
    if (!navigator.canShare) {
      setCanUseWebShare(false);
    } else if (navigator.canShare({ title, text, url })) {
      setCanUseWebShare(true);
    } else {
      setCanUseWebShare(false);
    }
  }, [title, text, url]);

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnWhatsApp = () => {
    const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      text
    )} ${encodeURIComponent(url)}`;
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank", "noopener,noreferrer");
  };

  const shareOnReddit = () => {
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`;
    window.open(redditUrl, "_blank", "noopener,noreferrer");
  };

  const shareViaEmail = () => {
    const emailBody = `${text}\n\n${url}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  const share = async () => {
    if (canUseWebShare) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      return;
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      toast.success("Copied to clipboard");
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      {children && <ModalTrigger asChild>{children}</ModalTrigger>}
      <ModalContent
        className=" rounded-[20px] p-0"
        wrapperClassName="w-full max-w-[calc(100vw-2rem)] md:max-w-sm rounded-[22px]">
        <ModalHeader className="py-4 px-8">
          <img
            src={DEFAULT_IMAGES.reservation_success}
            alt="Reservation Success"
            className="size-[133px] mx-auto -mt-4"
          />
          <ModalTitle className="text-body-md font-bold text-center !-mt-5">
            {modalTitle}
          </ModalTitle>
        </ModalHeader>

        {description && (
          <ModalDescription className=" text-body-sm font-normal text-center">
            {description}
          </ModalDescription>
        )}

        <div className=" space-y-6">
          <div className=" flex items-center justify-between space-x-2 md:space-x-4 outline-none border-none overflow-x-auto">
            <button
              onClick={shareOnTwitter}
              className=" flex flex-col text-center items-center space-y-1">
              <div className=" flex items-center justify-center size-12 md:size-14 rounded-full bg-[#000000] text-white">
                <BsTwitterX className=" size-5 md:size-7" />
              </div>
              <span className=" text-xs font-medium">X</span>
            </button>

            <button
              onClick={shareOnLinkedIn}
              className=" flex flex-col text-center items-center space-y-1 outline-none border-none">
              <div className=" flex items-center justify-center size-12 md:size-14 rounded-full bg-[#0077b5] text-white">
                <FaLinkedinIn className=" size-6 md:size-8" />
              </div>
              <span className=" text-xs font-medium">LinkedIn</span>
            </button>

            <button
              onClick={shareOnWhatsApp}
              className=" flex flex-col text-center items-center space-y-1 outline-none border-none">
              <div className=" flex items-center justify-center size-12 md:size-14 rounded-full bg-[#25d366] text-white">
                <SiWhatsapp className=" size-6 md:size-8" />
              </div>
              <span className=" text-xs font-medium">WhatsApp</span>
            </button>

            <button
              onClick={shareOnFacebook}
              className=" flex flex-col text-center items-center space-y-1 outline-none border-none">
              <div className=" flex items-center justify-center size-12 md:size-14 rounded-full bg-[#0866ff] text-white">
                <FaFacebookF className=" size-6 md:size-8" />
              </div>
              <span className=" text-xs font-medium">Facebook</span>
            </button>

            <button
              onClick={shareOnReddit}
              className=" flex flex-col text-center items-center space-y-1 outline-none border-none">
              <div className=" flex items-center justify-center outline-none border-none size-12 md:size-14 rounded-full bg-[#ff4500] text-[#fefff]">
                <FaRedditAlien fill="#feffff" className=" size-6 md:size-8" />
              </div>
              <span className=" text-xs font-medium">Reddit</span>
            </button>

            <button
              onClick={shareViaEmail}
              className=" flex flex-col text-center items-center space-y-1 outline-none border-none">
              <div className=" flex items-center justify-center size-12 md:size-14 rounded-full bg-[#c2c2c2] text-white">
                <MdMail className=" size-6 md:size-8" />
              </div>
              <span className=" text-xs font-medium">Email</span>
            </button>

            {canUseWebShare && (
              <button
                onClick={share}
                className=" flex flex-col text-center items-center space-y-1 outline-none border-none">
                <div className=" flex items-center justify-center size-12 md:size-14 rounded-full bg-[#c2c2c2] text-white">
                  <BsShareFill />
                </div>
                <span className=" text-xs font-medium">Share</span>
              </button>
            )}
          </div>

          <div
            className={
              "border border-midGrey flex flex-row rounded-lg p-container w-full max-w-full space-x-4 justify-between"
            }>
            <p className="p-2 text-sm truncate text-ellipsis ">{url}</p>
            <button
              onClick={copyToClipboard}
              className="flex shrink-0 items-center space-x-2 bg-offBlack text-white p-2 rounded-lg">
              <BiCopy />
              <span className=" text-white text-sm">Copy</span>
            </button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SocialShareModal;
