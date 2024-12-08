"use client";

import { BiLogIn } from "react-icons/bi";
import { IoCaretDownSharp, IoLogOutOutline } from "react-icons/io5";
import useAuth from "@/hooks/useAuth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./NavigationMenu";
import Link from "next/link";
import { cn } from "@/utils/classname";
import { headerNavItems } from "@/constants/navigation";
import ArrowOpenIcon from "@/svgs/ArrowOpenIcon";
import { usePathname } from "next/navigation";
import Input from "../ui/Input";
import Logo from "@/svgs/Logo";
import LogoIcon from "@/svgs/LogoIcon";
import Container from "./Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { BsEye } from "react-icons/bs";
import { useLogout } from "@/apis/mutations/accout";
import { DEFAULT_IMAGES } from "@/constants/images";
import { buttonVariants } from "../ui/Button";
import MobileMenu from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  return (
    // <Container>
    <div className="block fixed left-0 top-0 z-50 w-full">
      {/* Generic Navbar === Note bring the other classNmae from above div to nav when removing banner of diaspora */}
      <Container className="bg-background border-b border-mid-grey ">
        <nav className="   py-4 flex items-center justify-between gap-[32px]">
          <Link href="/">
            <Logo className="hidden lg:block" />
            <LogoIcon className=" lg:hidden" />
          </Link>

          {/* Search Bar */}
          <div className="flex-grow max-w-[357px] h-[39px] relative">
            <Input
              placeholder="Search for short lets locations"
              type="search"
              className="bg-white"
            />
          </div>

          <MobileMenu />

          <NavigationMenu className=" hidden lg:block">
            <NavigationMenuList>
              {headerNavItems.map((navItem) => {
                const isActive = checkActive(pathname, navItem.paths);

                if (!navItem.dropdownItems) {
                  return (
                    <NavigationMenuItem key={navItem.id}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={navItem?.path ?? ""}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "px-1.5 hover:font-bold",
                            isActive && "text-primary font-bold"
                          )}>
                          {navItem.label}
                          <div
                            className={cn(
                              "absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full w-5 h-1 bg-primary transition-all",
                              isActive && "opacity-100 z-10 scale-100",
                              !isActive && "opacity-0 z-0 scale-95"
                            )}
                          />
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={navItem.id}>
                    <NavigationMenuTrigger
                      isActive={isActive}
                      className={cn(isActive && "text-primary font-bold")}>
                      {navItem.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className=" bg-primary-gradient p-0.5 rounded-[24px]">
                        <div className="p-6 bg-background grid grid-cols-3 gap-x-[9.5px] gap-y-[32px] w-[660px] rounded-[22px] ">
                          {navItem.dropdownItems.map((dropItem) => (
                            <Link
                              key={dropItem.id}
                              href={dropItem.path}
                              className={`flex flex-col items-start p-4 rounded-[16px] border-2 border-transparent group hover:bg-white hover:border-2 hover:border-primary transition-colors text-charcoal-grey`}>
                              <div className="flex justify-between items-start w-full">
                                <div className="flex-shrink-0">
                                  {dropItem.icon}
                                </div>

                                <ArrowOpenIcon className=" hidden group-hover:block" />
                              </div>
                              <h3 className="font-bold text-body-md mt-3 mb-2 ">
                                {dropItem.title}
                              </h3>
                              <p className="text-body-sm">
                                {dropItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
              <NavigationMenuIndicator />
            </NavigationMenuList>
          </NavigationMenu>

          {/* Earn with Us */}
          <div className="hidden lg:flex items-center gap-[32px] cursor-pointer">
            <div className="h-[25px] w-[1px] bg-[#D9D9D9]" />
            <h4 className="text-body-xs font-medium text-primary whitespace-nowrap">
              Earn With Us
            </h4>
            <div className="h-[25px] w-[1px] bg-mid-grey" />
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-[24px]">
            {/* Currency Selector */}
            <button className="h-[31px] flex items-center gap-[9px] text-sm font-bold text-black rounded-full border border-[#D9D9D9] bg-[#FAFFFA] p-[8px] flex-1">
              <img
                src={undefined}
                alt="USD flag"
                className="w-[16px] h-[16px] rounded-full"
              />
              USD
              <IoCaretDownSharp size={10} />
            </button>

            {/* User Profile */}
            {isAuthenticated && <UserDropdown />}
            {!isAuthenticated && (
              <Link
                href="/login"
                className={cn(buttonVariants({ variant: "filled" }))}>
                <BiLogIn size={18} />
                Login
              </Link>
            )}
          </div>
        </nav>
      </Container>

      {/* {pathname !== "/plans/diaspora" && (
          <div className="w-full bg-[#F5F5DE] min-h-[43px] py-[8px] flex justify-center items-center">
            <div className="max-w-[1500px] mx-auto md:px-[5rem] px-[1rem] ">
              <h3 className=" text-body-xs font-semibold text-primary text-center">
                Live abroad or know someone who does? Express interest in our
                upcoming diaspora plan; earn up to N9 Million annually.{" "}
                <span
                  className="font-bold underline cursor-pointer"
                  onClick={() => navigate("/plans/diaspora")}>
                  Learn More{" "}
                  <IoArrowForwardOutline className="text-primary inline" />
                </span>
              </h3>
            </div>
          </div>
        )} */}
    </div>
    // </Container>
  );
};

export default Navbar;

export const checkActive = (pathname: string, paths: string[]) => {
  if (paths) {
    return paths.some((path) => pathname.startsWith(path));
  }
  return false;
};

const UserDropdown = () => {
  const { user } = useAuth();
  const logout = useLogout();

  const userAvatar = user?.profilePicture || DEFAULT_IMAGES.avatar;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" outline-none border-none">
        {!!userAvatar && (
          <img
            src={userAvatar}
            alt={user?.name}
            className="rounded-full size-9 shrink-0 object-cover object-center"
          />
        )}

        {/* {!userAvatar && (
          <div className="rounded-full bg-primary text-white size-9 shrink-0 flex items-center justify-center">
            {getInitials(user?.name ?? "")}
          </div>
        )} */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link
            href="/account/profile"
            className=" flex items-center space-x-2 text-xs font-bold">
            <BsEye />
            <span>View Details</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className=" flex items-center space-x-2 text-danger text-xs font-bold"
          onClick={() => logout.mutate()}>
          <IoLogOutOutline size={20} />
          <span>{logout.isPending ? "Logging out..." : "Logout"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
