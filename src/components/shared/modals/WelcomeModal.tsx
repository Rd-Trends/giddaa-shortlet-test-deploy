"use client";

import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle,
} from "@/components/ui/Modal";
import {
  PopoverArrow,
  Popover,
  PopoverContent,
  PopoverTrigger,
  CustomPopoverClose,
} from "@/components/ui/Popover";
import { StorageKeys } from "@/constants/storage-keys";
import { useMediaQuery } from "@/hooks/useMediaQueries";
import GirlWithMicIcon from "@/svgs/GirlWithMicIcon";
import Logo from "@/svgs/Logo";
import MoneyStackIcon from "@/svgs/MoneyStackIcon";
import PropertyIcon from "@/svgs/PropertyIcon";
import TelephoneRingingIcon from "@/svgs/TelephoneRingingIcon";
import React, { useEffect, useState } from "react";
import { use100vh } from "react-div-100vh";
import { BiCaretDown } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

const tags = [
  "Your Next Weekend Getaway",
  "Your Next Staycation",
  // "Your Next Special Event",
  "your bridal shower, and other wedding preparations",
  "Your Next Business Trip",
];

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTag, setActiveTag] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const ssShowModal = sessionStorage.getItem(StorageKeys.SHOW_WELCOME_MODAL);
    if (ssShowModal === null) {
      setIsOpen(true);
      sessionStorage.setItem(
        StorageKeys.SHOW_WELCOME_MODAL,
        JSON.stringify({ show: false })
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % tags.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const maxHeight = use100vh() || "700";

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        preventAutoFocusOnOpen
        style={{ maxHeight: `calc(${maxHeight}px - 2rem)` }}
        className=" rounded-[20px] max-w-full p-0 flex flex-col overflow-y-auto flex-1"
        wrapperClassName=" rounded-[22px] w-full max-w-[calc(100vw-2rem)] lg:max-w-[911px] flex flex-col overflow-y-auto ">
        <div className=" flex-1 overflow-y-auto p-4 relative z-0">
          <span className="absolute top-8 left-8 bg-background p-2 rounded-md">
            <Logo className=" h-[30px] md:h-[55.8px] w-auto " />
          </span>
          <img
            src="/images/welcome-modal-image.png"
            className=" w-full min-h-[150px] h-auto object-cover object-center rounded-2xl"
            alt=""
          />

          <ModalTitle className=" py-6 font-secondary text-heading-3 leading-tight md:text-heading-1 md:leading-[60px] font-bold md:text-center text-black max-w-[644px] mx-auto ">
            Book A Short Let For{" "}
            <span className=" text-secondary">{tags[activeTag]}</span>.
          </ModalTitle>

          <div className=" flex flex-wrap justify-between space-y-4 md:space-y-0">
            <div className=" space-y-2 md:w-[calc(28%-1rem)]">
              <MoneyStackIcon />
              <div className="pb-4 border-b md:pb-0 md:border-b-0 md:pr-4 md:border-r border-mid-grey ">
                <h3 className=" text-body-xl font-bold">Save Money</h3>
                <p className=" text-body-sm">
                  Avoid Airbnb’s roughly 14% Service Charge.
                </p>
              </div>
            </div>

            <div className=" space-y-2 md:w-[calc(32%-1rem)]">
              <GirlWithMicIcon />
              <div className="pb-4 border-b md:pb-0 md:border-b-0 md:pr-4 md:border-r border-mid-grey ">
                <h3 className=" text-body-xl font-bold">Get Support</h3>
                <p className=" text-body-sm">
                  Call or chat, ask as many questions as you want. Get Instant
                  Support.
                </p>
              </div>
            </div>
            <div className="space-y-2 md:w-[calc(35%-0rem)]">
              <PropertyIcon color="#000" />
              <h3 className=" text-body-xl font-bold">
                Unique & Verified Stays
              </h3>
              <p className=" text-body-sm">
                Find a variety of verified short lets for getaways, content
                creation, and more.
              </p>
            </div>
          </div>
        </div>

        <ModalFooter className=" p-4 border-t-2 flex flex-row items-center border-mid-grey !justify-center mt-6 space-x-4">
          <Button
            size={isMobile ? "medium" : "large"}
            className=" font-bold md:px-8"
            onClick={() => setIsOpen(false)}>
            Explore Stays
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                size={isMobile ? "medium" : "large"}
                variant={"outline"}
                className="gap-3 group">
                <TelephoneRingingIcon className=" size-6 md:szie-8" />{" "}
                <span>Contact Us</span>{" "}
                <BiCaretDown className="size-5 -ml-2 -mt-0.5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className=" p-0">
              <div className="flex flex-col gap-4 divide-y divide-mid-grey pb-4">
                <div className=" flex items-start space-x-4 pt-4 px-4">
                  <img
                    src="/images/contact_image.png"
                    className=" w-14 h-16 rounded-2xl object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className=" text-body-sm font-bold text-black">
                      Jonathan Anakson
                    </h3>
                    <p className=" text-body-xs">08129293840</p>
                    <div className=" flex items-center space-x-4">
                      <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                        <BsTelephone className=" size-5 mr-2" /> Call
                      </button>
                      <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                        <FaWhatsapp className=" size-5 mr-2" /> Whatsapp
                      </button>
                    </div>
                  </div>
                </div>

                <div className=" flex items-start space-x-4 pt-4 px-4">
                  <img
                    src="/images/contact_image.png"
                    className=" w-14 h-16 rounded-2xl object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className=" text-body-sm font-bold text-black">
                      Jimmy Bones
                    </h3>
                    <p className=" text-body-xs">08129293840</p>
                    <div className=" flex items-center space-x-4 mt-0.5">
                      <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                        <BsTelephone className=" size-5 mr-2" /> Call
                      </button>
                      <button className="inline-flex items-center text-xs outline-none border-none text-primary font-bold">
                        <FaWhatsapp className=" size-5 mr-2" /> Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <PopoverArrow />
              <CustomPopoverClose />
            </PopoverContent>
          </Popover>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;
