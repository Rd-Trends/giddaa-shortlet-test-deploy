"use client";

import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
import Link from "next/link";
// import { SVGProps } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { Button } from "../ui/Button";
import { useJoinNewsLetter } from "@/apis/mutations/news-letter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "@/lib/toast";
import Input from "../ui/Input";
import Container from "./Container";

const Footer = () => {
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
    mode: "all",
  });

  const joinNewsLetter = useJoinNewsLetter();

  const handleSubmit = form.handleSubmit((data) => {
    joinNewsLetter.mutate(data.email, {
      onSuccess: () => {
        toast.success({
          title: "Joined Successfully",
          description: "Joined Successfully",
        });
      },
    });
  });

  return (
    <footer className="w-full bg-cover bg-center bg-no-repeat bottom-0">
      <Container className=" relative bg-[#2c4c26] pt-[65px] pb-[66px] text-white">
        {/* <SvgStrip className=" absolute bottom-0 -left-1 " /> */}

        <div className="flex md:justify-between flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-bold text-body-lg">Join Our Newsletter</h3>
            <p className="text-body-xs">
              Stay up to date with news and updates by subscribing to our
              newsletter
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 items-stretch w-full md:w-fit">
            <Input
              className="md:min-w-[334px] md:max-w-[334px] flex-1 h-[40px] rounded-full bg-white border border-[#D0D5DD] px-6 text-[#4B4B4B] giddaa-normal-text-three"
              placeholder="Enter your email address"
              {...form.register("email")}
              error={form.formState.errors.email?.message}
              type="email"
            />
            <Button
              variant="outline"
              isLoading={joinNewsLetter.isPending}
              className="bg-white text-primary text-body-xs font-bold border border-primary rounded-full px-6 w-fit">
              {joinNewsLetter?.isPending ? "Processing..." : "Submit"}
            </Button>
          </form>
        </div>
        <div className="mt-[80px] grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-8 giddaa-normal-text-two">
          {/* <div className='col-span-1'>
              <h3 className='font-bold'>ABOUT US</h3>
              <ul>
                <li className='cursor-pointer'>Our Company</li>
                <li className='cursor-pointer'>Our Team</li>
              </ul>
            </div> */}
          <div className="col-span-1">
            <h3 className=" text-body-sm font-bold">PARTNERS</h3>
            <ul>
              <li className="cursor-pointer">
                <a
                  className=" text-body-sm font-normal"
                  href={`${process.env.REACT_APP_DEVELOPER_BASE_URL}/account/signup`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Join as a Property Developer
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  className=" text-body-sm font-normal"
                  href={`${process.env.REACT_APP_BANK_BASE_URL}/account/signup`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Join as a Lender
                </a>
              </li>
              {/* <li className='cursor-pointer'>Join as an Agent</li> */}
              {/* <li className='cursor-pointer'>Sell Your House</li> */}
            </ul>
          </div>
          {/* <div className='col-span-1'>
              <h3 className='font-bold'>RESOURCES</h3>
              <ul>
                <li className='cursor-pointer'>Tutorials</li>
                <li className='cursor-pointer'>Watch the Demo</li>
                <li className='cursor-pointer'>Blog</li>
              </ul>
            </div> */}
          <div className="col-span-1">
            <h3 className="font-bold text-body-sm">CONTACT US</h3>
            <ul>
              <li className="cursor-pointer">
                <a
                  className=" text-body-sm font-normal"
                  target="_blank"
                  href="mailto:info@giddaa.com"
                  rel="noreferrer">
                  info@giddaa.com
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  className=" text-body-sm font-normal"
                  href="tel:234 809 762 1791"
                  target="_blank"
                  rel="noopener noreferrer">
                  Tel No. : +234 809 762 1791
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  className=" text-body-sm font-normal"
                  href="https://wa.me/08139145416"
                  target="_blank"
                  rel="noopener noreferrer">
                  Whatsapp Us
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  className=" text-body-sm font-normal"
                  href="https://calendly.com/info-nrx2/30min"
                  target="_blank"
                  rel="noopener noreferrer">
                  Book a Meeting
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold text-body-sm">SITE NAVIGATION</h3>
            <ul>
              <li className="cursor-pointer">
                <Link className=" text-body-sm font-normal" href="/">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link className=" text-body-sm font-normal" href="/property">
                  Properties
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  href="/developers"
                  className="my-2 text-body-sm font-normal"
                  // target="_blank"
                  rel="noopener noreferrer">
                  Developers
                </Link>
              </li>
              {/* <li className='cursor-pointer'>Sell Your House</li> */}
            </ul>
          </div>
        </div>
        <div className="mt-[44.5px] flex flex-col justify-center items-center">
          <div className="flex gap-3 items-center">
            <Link
              className=" bg-white p-2 rounded-full text-primary shrink-0"
              target="_blank"
              href="https://www.linkedin.com/company/giddaa/">
              <FaLinkedinIn className=" size-5" />
            </Link>
            <Link
              className=" bg-white p-2 rounded-full text-primary shrink-0"
              target="_blank"
              href="https://www.tiktok.com/@giddaahousing">
              <FaTiktok className=" size-5" />
            </Link>
            <Link
              className=" bg-white p-2 rounded-full text-primary shrink-0"
              target="_blank"
              href="https://web.facebook.com/profile.php?id=61550636312061">
              <FaFacebookF className=" size-5" />
            </Link>
            <Link
              className=" bg-white p-2 rounded-full text-primary shrink-0"
              target="_blank"
              href="https://twitter.com/GiddaaHousing">
              <FiTwitter className=" size-5" />
            </Link>
            {/* <Link target="_blank" href="https://www.instagram.com/giddaahousing/">
                <img
                  src="/assets/icons/instagram.svg"
                  alt=""
                  className="w-[32px] h-[32px]"
                />
              </Link> */}
          </div>
          <a
            className="mt-[25px] rounded-full bg-white h-[44px] flex items-center w-fit px-[12px] gap-[12px] cursor-pointer text-primary"
            href="https://chat.whatsapp.com/F5ZvZPLpAdCAubMCgP11Gl">
            <FaWhatsapp className=" size-6" />
            <span className="font-bold text-body-sm text-primary">
              Join Our Community
            </span>
            <ArrowOpenIcon className=" size-6" />
          </a>
        </div>
        <div className=" mt-10 pt-[16px] border-t-2 border-white w-full flex flex-wrap justify-between items-center gap-3">
          <h3 className="font-bold text-body-tiny">PROPERTY OF GIDDAA INC.</h3>
          <div className="flex gap-4 items-center giddaa-normal-text-two">
            <h4>
              <a
                className=" text-body-sm font-normal"
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer">
                Privacy Policy
              </a>
            </h4>
            <h4>
              <Link
                className=" text-body-sm font-normal"
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer">
                Terms & Conditions
              </Link>
            </h4>
          </div>
        </div>
        <div className="mt-32 md:mt-0" />
      </Container>
    </footer>
  );
};

export default Footer;

const schema = yup.object({
  email: yup.string().email().required(),
});

// const SvgStrip = (props: SVGProps<SVGSVGElement>) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={119}
//       height={535}
//       fill="none"
//       {...props}>
//       <path
//         stroke="#fff"
//         strokeWidth={30}
//         d="M4 15c47.234 0-3.869 75.126 82.66 140.021C150.9 203.199 15.97 483.811 15.97 535"
//         opacity={0.5}
//       />
//     </svg>
//   );
// };
