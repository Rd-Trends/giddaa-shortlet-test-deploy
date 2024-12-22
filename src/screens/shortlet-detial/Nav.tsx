"use client";

import { useGetExchangeRates } from "@/apis/queries/exchange-rate";
import Container from "@/components/layouts/Container";
import SocialShareModal from "@/components/shared/modals/SocialShareModal";
import { Button } from "@/components/ui/Button";
import SkeletonLoader from "@/components/ui/Skeleton";
import ArrowShareIcon from "@/svgs/ArrowShareIcon";
import ThumbsUpIcon from "@/svgs/ThumbsUpIcon";
import { ShortLet } from "@/types/short-let";
import { formatCurrency } from "@/utils/format-currency";
import { getURL } from "@/utils/get-url";
import { displayShortLetType } from "@/utils/short-let";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { FaArrowLeftLong } from "react-icons/fa6";

const Nav = ({
  name,
  price,
  id,
  type,
  city,
}: {
  name: string;
  id: string;
  price: number;
  type: ShortLet["type"];
  city: ShortLet["city"];
}) => {
  const { data: exchangeRates, isLoading: isLoadingExchangeRates } =
    useGetExchangeRates();

  return (
    <Container className=" bg-background">
      <nav className=" px-4 md:px-6 border border-mid-grey bg-background py-1.5 rounded-2xl flex items-start md:items-center justify-between space-x-4">
        <div className=" flex items-start gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={`/?viewed=${id}`}
                className=" inline-flex items-center space-x-2 text-body-sm font-bold text-primary pb-4 pr-4  lg:pb-2">
                <FaArrowLeftLong className=" size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={-4}
              side="bottom"
              align="start"
              className="text-xs">
              Back to Short Lets
            </TooltipContent>
          </Tooltip>

          <div className=" text-black space-y-2">
            <h1 className="text-body-md md:text-heading-4 font-bold">
              {displayShortLetType(type)} in {city.name}, {city.state.name}.
            </h1>
            <div className="flex items-center text-body-sm md:text-body-md font-semibold">
              <span>{formatCurrency(price)}</span>
              {exchangeRates && (
                <span className=" ">
                  /
                  {formatCurrency(price / exchangeRates?.dollar, {
                    currency: "USD",
                  })}
                </span>
              )}
              {isLoadingExchangeRates && (
                <SkeletonLoader className=" ml-1 h-5 w-8 rounded-xl" />
              )}
              <span className="ml-1">Per Night</span>
            </div>
          </div>
        </div>

        <NavButtons title={name} />
      </nav>
    </Container>
  );
};

export default Nav;

const NavButtons = ({ title }: { title: string }) => {
  const [showShare, setShowShare] = React.useState(false);

  return (
    <>
      <div className="flex items-center space-x-2 md:hidden">
        <button className="inline-flex size-7 items-center justify-center outline-none bg-feint-grey border border-mid-grey text-primary rounded-full p-1 ">
          <ThumbsUpIcon className=" size-4" />
        </button>
        <button
          onClick={() => {
            setShowShare((prev) => !prev);
          }}
          className="inline-flex size-7 items-center justify-center outline-none bg-feint-grey border border-mid-grey text-primary rounded-full p-1 ">
          <ArrowShareIcon className=" size-4" />
        </button>
      </div>
      <div className=" hidden md:flex items-center space-x-4">
        <Button variant={"outline"} className=" leading-none">
          <ThumbsUpIcon className=" mr-1" />
          Like
        </Button>
        <Button
          onClick={() => {
            setShowShare((prev) => !prev);
          }}
          variant={"outline"} className=" leading-none">
          <ArrowShareIcon className=" mr-1" />
          Share
        </Button>
      </div>

      <SocialShareModal
        isOpen={showShare}
        setIsOpen={setShowShare}
        title={title}
        url={getURL()}
        text="Check out this shortlet"
        description={
          "Share Giddaa Short Lets with someone who you know need us, or will eventually need us."
        }
      />
    </>
  );
};
