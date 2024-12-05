import React, { useState, useEffect } from "react";
import { BsShareFill } from "react-icons/bs";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/Modal";
import { DEFAULT_IMAGES } from "@/constants/images";
import XIcon from "@/svgs/XIcon";
import LinkedInIcon from "@/svgs/LinkedInIcon";
import WhatsappIcon from "@/svgs/WhatsAppIcon";
import FacebookIcon from "@/svgs/FacebookIcon";
import MailIcon from "@/svgs/MailIcon";
import SnapchatIcon from "@/svgs/SnapchatIcon";
import { toast } from "@/lib/toast";

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

  // const shareOnReddit = () => {
  //   const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
  //     url
  //   )}&title=${encodeURIComponent(title)}`;
  //   window.open(redditUrl, "_blank", "noopener,noreferrer");
  // };

  const shareOnSnapchat = () => {
    const snapchatUrl = `https://www.snapchat.com/share?url=${encodeURIComponent(
      url
    )}`;
    window.open(snapchatUrl, "_blank", "noopener,noreferrer");
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
      toast.success({
        // title: "Link Copied",
        description: "Link copied to clipboard",
      });
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      {children && <ModalTrigger asChild>{children}</ModalTrigger>}
      <ModalContent
        className=" rounded-[20px] p-4"
        wrapperClassName="w-full max-w-[calc(100vw-2rem)] md:max-w-[323px] rounded-[22px]">
        <ModalHeader className="py-4 px-8">
          <img
            src={DEFAULT_IMAGES.share_icon}
            alt="Reservation Success"
            className="size-[76px] mx-auto"
          />
          <ModalTitle className="text-body-md font-bold text-center ">
            {modalTitle}
          </ModalTitle>
        </ModalHeader>

        {description && (
          <ModalDescription className=" text-body-sm font-normal text-center px-4">
            {description}
          </ModalDescription>
        )}

        <div className=" mt-6 border-t border-mid-grey pt-6 mb-2 space-y-6">
          <div className=" flex items-center justify-between space-x-0 outline-none border-none overflow-x-auto">
            <button
              onClick={shareOnWhatsApp}
              className=" flex flex-col text-center items-center text-primary space-y-1 outline-none border-none">
              <WhatsappIcon />
              <span className="sr-only">Share on WhatsApp</span>
            </button>

            <button
              onClick={shareOnTwitter}
              className=" flex flex-col text-center text-primary items-center space-y-1">
              <XIcon />
              <span className="sr-only">Share on X</span>
            </button>

            <button
              onClick={shareOnFacebook}
              className=" flex flex-col text-center items-center text-primary space-y-1 outline-none border-none">
              <FacebookIcon />
              <span className="sr-only">Share on Facebook</span>
            </button>

            <button
              onClick={shareOnSnapchat}
              className=" flex flex-col text-center items-center text-primary space-y-1 outline-none border-none">
              <SnapchatIcon />
              <span className=" sr-only">Share on LinkedIn</span>
            </button>

            <button
              onClick={shareOnLinkedIn}
              className=" flex flex-col text-center items-center text-primary space-y-1 outline-none border-none">
              <LinkedInIcon />
              <span className="sr-only">Share on LinkedIn</span>
            </button>

            <button
              onClick={shareViaEmail}
              className=" flex flex-col text-center items-center text-primary space-y-1 outline-none border-none">
              <MailIcon className=" size-6 md:size-8" />
              <span className="sr-only">Share on Email</span>
            </button>

            {canUseWebShare && (
              <button
                onClick={share}
                className=" flex flex-col text-center text-primary items-center space-y-1 outline-none border-none">
                <BsShareFill />
                <span className="sr-only"> Share</span>
              </button>
            )}
          </div>

          <div
            className={
              "border-2 border-primary flex flex-row rounded-full p-container w-full max-w-full  justify-between"
            }>
            <p className="p-2 px-4 text-body-sm text-primary font-medium truncate text-ellipsis ">
              {url}
            </p>
            <button
              onClick={copyToClipboard}
              className="flex shrink-0 items-center space-x-2 bg-primary text-body-sm font-semibold text-white px-4 py-1 h-[33px] my-1 mr-1 rounded-full">
              Copy Link
            </button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SocialShareModal;
