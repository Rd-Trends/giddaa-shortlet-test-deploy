"use client";

import { Button } from "@/components/ui/Button";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/Modal";
import {
  PopoverArrow,
  Popover,
  PopoverContent,
  PopoverTrigger,
  CustomPopoverClose,
} from "@/components/ui/Popover";
import GirlWithMicIcon from "@/svgs/GirlWithMicIcon";
import Logo from "@/svgs/Logo";
import MoneyStackIcon from "@/svgs/MoneyStackIcon";
import PropertyIcon from "@/svgs/PropertyIcon";
import TelephoneRingingIcon from "@/svgs/TelephoneRingingIcon";
import React, { useEffect, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalContent
        className=" rounded-[20px] max-w-full p-0"
        wrapperClassName=" rounded-[22px] w-full max-w-[calc(100vw-2rem)] lg:max-w-[911px] ">
        <ModalHeader className=" p-4 items-start">
          <Logo className=" h-[55.8px] w-auto" />
        </ModalHeader>

        <div className=" p-4 space-y-6 ">
          <img
            src="/images/welcome-modal-image.png"
            className=" w-full h-auto"
          />

          <ModalTitle className=" font-secondary text-heading-3 leading-tight md:text-heading-1 md:leading-[60px] font-bold md:text-center text-black max-w-[644px] mx-auto ">
            Book A Short Let For{" "}
            <span className=" text-secondary">Your Next Weekend Getaway</span>.
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

        <ModalFooter className=" p-4 border-t-2 border-mid-grey !justify-center mt-6 space-x-4">
          <Button
            size={"large"}
            className=" font-bold px-8"
            onClick={() => setIsOpen(false)}>
            Explore Stays
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                size={"large"}
                variant={"outline"}
                className="gap-3 group">
                <TelephoneRingingIcon /> <span>Contact Us</span>{" "}
                <BiCaretDown className="size-5 -ml-2 -mt-0.5 group-data-[state=open]:rotate-180 transition-transform duration-300" />
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className=" p-0">
              <div className="flex flex-col gap-4 divide-y divide-mid-grey pb-4">
                <div className=" flex items-start space-x-4 pt-4 px-4">
                  <img
                    src="/images/contact_image.png"
                    className=" w-14 h-16 rounded-2xl object-cover"
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
