"use client";

import { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { cn } from "@/utils/classname";
import { use100vh } from "react-div-100vh";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
import { headerNavItems, NavItem } from "@/constants/navigation";
import { checkActive } from "./TopNav";
import Link from "next/link";
import Logo from "@/svgs/Logo";
import { BsCaretDownFill } from "react-icons/bs";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subNav, setSubNav] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const height = use100vh() || "100vh";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" lg:hidden">
      <div>
        <Button
          aria-label="Open Navigation Menu"
          aria-controls="tribe-mobile-menu"
          size={"icon"}
          variant={"ghost"}
          onClick={toggleMenu}
          className=" size-fit">
          <span className="sr-only">Open Navigation Menu</span>
          <FiMenu size={24} />
        </Button>
      </div>

      <div
        style={{ height }}
        id="tribe-mobile-menu"
        className={cn(
          "fixed right-0 top-0 bottom-0 w-full z-40 bg-background text-OffBlack transition-transform duration-300 !mx-0",
          {
            " translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
        ref={sidebarRef}>
        <nav className=" flex flex-col justify-between">
          <div className=" flex items-center justify-between py-2 px-4 border-b border-mid-grey">
            <Logo />
            <Button
              size={"icon"}
              variant={"ghost"}
              onClick={toggleMenu}
              className=" size-fit"
              aria-label="Close Menu">
              <span className="sr-only">Close Menu</span>
              <IoMdClose size={24} />
            </Button>
          </div>

          <ul className=" flex-1 overflow-y-auto list-none">
            {headerNavItems.map((item, index) => {
              const isActive = checkActive(pathname, item.paths);

              if (!item.dropdownItems) {
                return (
                  <SidebarItem
                    key={index}
                    item={item}
                    isActive={isActive}
                    setActiveDropdown={setSubNav}
                    closeSidebar={() => setIsOpen(false)}
                  />
                );
              }

              return (
                <SidebarGroup
                  key={index}
                  item={item}
                  isActive={isActive}
                  activeDropdown={subNav}
                  setActiveDropdown={setSubNav}
                  pathname={pathname}
                  closeSidebar={() => setIsOpen(false)}
                />
              );
            })}
          </ul>

          {/* <div className="p-4 border-t border-mid-grey flex items-center justify-between space-x-4">
            <div className="w-full flex items-center space-x-2">
              <Avatar
                src={
                  user?.profilePicture ??
                  user?.alternateProfilePicture ??
                  DefaultImages.Avatar
                }
                alt="User Avatar"
                size={"small"}
              />

              <div>
                <Typography variant={"bodySmall"} className=" font-bold">
                  {user?.name}
                </Typography>
                <Typography
                  variant={"bodySmall"}
                  className=" pt-0.5 text-primary">
                  {user?.email}
                </Typography>
              </div>
            </div>
            <button
              onClick={() => {
                removeAuthUser();
                setIsOpen(false);
              }}
              className=" text-primary bg-transparent outline-none border-none flex items-center text-xs uppercase font-bold">
              <TbLogout size={24} className="mr-1" />
              LOGOUT
            </button>
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

const SidebarItem = ({
  item,
  isActive,
  setActiveDropdown,
  closeSidebar,
}: {
  item: NavItem;
  isActive: boolean;
  setActiveDropdown: (value: string | null) => void;
  closeSidebar(): void;
}) => {
  return (
    <li>
      <Link
        href={item.path || "#"}
        onClick={() => {
          setActiveDropdown(null);
          closeSidebar();
        }}
        className={cn(
          "flex items-center px-4 py-4 text-black font-bold text-body-md",
          isActive && "text-secondary"
        )}>
        {item.icon}
        <span className={cn(" pl-4 transition-all duration-300 ease-in-out")}>
          {item.label}
        </span>
      </Link>
    </li>
  );
};

const SidebarGroup = ({
  item,
  isActive,
  pathname,
  setActiveDropdown,
  activeDropdown,
  closeSidebar,
}: {
  item: NavItem;
  isActive: boolean;
  setActiveDropdown: (value: string | null) => void;
  pathname: string;
  activeDropdown: string | null;
  closeSidebar(): void;
}) => {
  const isOpen = activeDropdown === item.id;

  return (
    <li className="py-4 border-b border-mid-grey">
      <button
        aria-expanded={isOpen}
        aria-controls={item.id}
        className={cn(
          "flex items-center justify-between px-4 space-x-2 w-full text-black",
          "rounded text-sm font-normal"
        )}
        onClick={() => setActiveDropdown(item.id)}>
        <div
          className={cn(
            "flex items-center ",
            isActive && "text-secondary font-bold"
          )}>
          {item.icon}
          <span
            className={cn(
              " pl-4 transition-all duration-300 ease-in-out text-body-md font-bold text-black",
              isActive && "text-secondary"
            )}>
            {item.label}
          </span>
        </div>
        <span className={cn(isActive && "text-secondary font-bold")}>
          <BsCaretDownFill
            className={cn(" size-3 transition-transform duration-300 ", {
              "rotate-180": isOpen,
            })}
          />
        </span>
      </button>
      <div
        id={item.id}
        className={cn(
          " ml-4 pl-10 pr-4 h-0 transition-all duration-300 space-y-3",
          {
            "mt-3 h-full": isOpen,
          }
        )}>
        {item.dropdownItems?.map((dropdownNavItem, index) => {
          const isActive = checkActive(pathname, [dropdownNavItem.path]);

          return (
            <Link
              key={index}
              href={dropdownNavItem.path}
              onClick={closeSidebar}
              className={cn(
                "flex flex-col text-black relative ",
                " rounded text-sm font-normal px-2",
                activeDropdown !== item.id && "hidden"
              )}>
              <span
                className={cn(" text-body-sm font-semibold", {
                  "text-secondary": isActive,
                })}>
                {dropdownNavItem.title}
              </span>
              <span className=" text-body-subtext">
                {dropdownNavItem.description}
              </span>
              {isActive && (
                <BsCaretDownFill className="size-2.5 -rotate-90 absolute top-1.5 -left-2 fill-secondary" />
              )}
            </Link>
          );
        })}
      </div>
    </li>
  );
};
