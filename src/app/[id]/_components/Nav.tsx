"use client";

import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/Button";
import ArrowShareIcon from "@/svgs/ArrowShareIcon";
import ThumbsUpIcon from "@/svgs/ThumbsUpIcon";
import { formatCurrency } from "@/utils/format-currency";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Nav = ({ name, price }: { name: string; id: string; price: number }) => {
  return (
    <Container className=" bg-background">
      <nav className=" px-4 md:px-6 border border-light-grey bg-white py-1.5 rounded-full flex items-center justify-between space-x-4">
        <Link
          href={"/"}
          className=" inline-flex items-center space-x-2 text-body-sm font-bold text-primary">
          <FaArrowLeftLong className=" size-5" />
          <span className="hidden md:block">Back to Short Lets</span>
        </Link>

        <div className=" text-black space-y-2 text-center">
          <h1 className="text-body-sm md:text-body-lg font-medium">{name}</h1>
          <p className=" text-body-sm md:text-body-md font-bold">
            {formatCurrency(price)}
          </p>
        </div>

        <NavButtons />
      </nav>
    </Container>
  );
};

export default Nav;

const NavButtons = () => {
  const [showShare, setShowShare] = React.useState(false);

  console.log(showShare);

  return (
    <>
      <div className="flex items-center space-x-2 md:hidden">
        <button className=" outline-none border-none bg-feint-grey border border-light-grey rounded-full p-1 ">
          <ThumbsUpIcon className=" size-4 mr-1" />
        </button>
        <button
          onClick={() => {
            setShowShare((prev) => !prev);
          }}
          className=" outline-none border-none bg-feint-grey border border-light-grey rounded-full p-1 ">
          <ArrowShareIcon className=" size-4 mr-1" />
        </button>
      </div>
      <div className=" hidden md:flex items-center space-x-4">
        <Button variant={"outline"}>
          <ThumbsUpIcon className=" mr-1" />
          Like
        </Button>
        <Button
          onClick={() => {
            setShowShare((prev) => !prev);
          }}
          variant={"outline"}>
          <ArrowShareIcon className=" mr-1" />
          Share
        </Button>
      </div>
    </>
  );
};
