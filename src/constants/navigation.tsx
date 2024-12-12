import AffordableHomeIcon from "@/svgs/AffordableHomeIcon";
import BankIcon from "@/svgs/BankIcon";
import CalendarIcon from "@/svgs/CalendarIcon";
import DeveloperIcon from "@/svgs/DeveloperIcon";
import DreamHomeIcon from "@/svgs/DreamHomeIcon";
import HouseBuyIcon from "@/svgs/HouseBuyIcon";
import HouseInvestIcon from "@/svgs/HouseInvestIcon";
import HouseSellIcon from "@/svgs/HouseSellIcon";
import ManagePlaceIcon from "@/svgs/ManagePlaceIcon";
import MarketPlaceIcon from "@/svgs/MarketPlaceIcon";
import PlanIcon from "@/svgs/PlanIcon";
import PropertyIcon from "@/svgs/PropertyIcon";
import ShortLetIcon from "@/svgs/ShortletIcon";
import ThreecubeIcon from "@/svgs/ThreeCubeIcon";
import TwoMoneyNote from "@/svgs/TwoMoneyNote";

export const headerNavItems: NavItem[] = [
  {
    id: "buy",
    label: "Buy",
    icon: (
      <HouseBuyIcon color="currentColor" width={26} className=" shrink-0" />
    ),
    paths: [
      "/property",
      "/plans",
      "/developers",
      "/banks",
      "/affordable-homes",
      "/dream-home",
    ],
    dropdownItems: [
      {
        id: "properties",
        icon: <PropertyIcon height={25} />,
        title: "Properties",
        description:
          "Explore a large variety of properties available for sale.",
        path: "/property",
      },
      {
        id: "plans",
        icon: <PlanIcon height={25} />,
        title: "Plans",
        description:
          "Find different home purchase plans you can use to buy your home.",
        path: "/plans",
      },
      {
        id: "developers",
        icon: <DeveloperIcon width={22} height={25} />,
        title: "Developers",
        description: "Explore top property developers and builders.",
        path: "/developers",
      },
      {
        id: "banks",
        icon: <BankIcon height={25} />,
        title: "Banks",
        description: "Financial institutions you can get home loans from.",
        path: "/banks",
      },
      {
        id: "affordable-homes",
        icon: <AffordableHomeIcon height={25} />,
        title: "Affordable Homes",
        description:
          "View houses you can afford on at least one purchase plan, given your current income(s).",
        path: "/affordable-homes",
      },
      {
        id: "dream-home",
        icon: <DreamHomeIcon height={25} />,
        title: "Your Dream Home",
        description:
          "Save the ideal home you want to buy. We'll alert you immediately something like it is on the market.",
        path: "/dream-home",
      },
    ],
  },
  {
    id: "shortlets",
    label: "Shortlets",
    icon: (
      <ShortLetIcon width={26} color="currentColor" className=" shrink-0" />
    ),
    paths: ["/"],
    dropdownItems: [
      {
        id: "stay",
        icon: <CalendarIcon height={25} />,
        title: "Book a Stay",
        description:
          "Explore and book high quality, verified, short lets and stays.",
        path: "/home",
      },
      {
        id: "plans",
        icon: <MarketPlaceIcon height={25} />,
        title: "Market Your Place",
        description:
          "Market your short let or Airbnb on Giddaa - we’ll keep you fully booked",
        path: "/home",
      },
      {
        id: "developers",
        icon: <ManagePlaceIcon height={25} />,
        title: "Manage Your Place",
        description:
          "Earn passive income while we efficiently manage your place for you.",
        path: "/home",
      },
    ],
  },
  {
    id: "sell",
    label: "Sell",
    icon: (
      <HouseSellIcon color="currentColor" width={26} className=" shrink-0" />
    ),
    paths: ["/sell"],
    dropdownItems: [
      {
        id: "properties",
        icon: <PropertyIcon height={25} />,
        title: "Properties",
        description:
          "Explore a large variety of properties available for sale.",
        path: "/home",
      },
      {
        id: "plans",
        icon: <PlanIcon height={25} />,
        title: "Plans",
        description:
          "Find different home purchase plans you can use to buy your home.",
        path: "/home",
      },
      {
        id: "developers",
        icon: <DeveloperIcon width={22} height={25} />,
        title: "Developers",
        description: "Explore top property developers and builders.",
        path: "/home",
      },
      {
        id: "banks",
        icon: <BankIcon height={25} />,
        title: "Banks",
        description: "Financial institutions you can get home loans from.",
        path: "/home",
      },
      {
        id: "affordable-homes",
        icon: <AffordableHomeIcon height={25} />,
        title: "Affordable Homes",
        description:
          "View houses you can afford on at least one purchase plan, given your current income(s).",
        path: "/home",
      },
      {
        id: "dream-home",
        icon: <DreamHomeIcon height={25} />,
        title: "Your Dream Home",
        description:
          "Save the ideal home you want to buy. We'll alert you immediately something like it is on the market.",
        path: "/home",
      },
    ],
  },
  {
    id: "invest",
    label: "Invest",
    icon: (
      <HouseInvestIcon color="currentColor" width={26} className=" shrink-0" />
    ),
    paths: ["/invest"],
    dropdownItems: [
      {
        id: "properties",
        icon: <PropertyIcon height={25} />,
        title: "Properties",
        description:
          "Explore a large variety of properties available for sale.",
        path: "/home",
      },
      {
        id: "plans",
        icon: <PlanIcon height={25} />,
        title: "Plans",
        description:
          "Find different home purchase plans you can use to buy your home.",
        path: "/home",
      },
      {
        id: "developers",
        icon: <DeveloperIcon width={22} height={25} />,
        title: "Developers",
        description: "Explore top property developers and builders.",
        path: "/home",
      },
      {
        id: "banks",
        icon: <BankIcon height={25} />,
        title: "Banks",
        description: "Financial institutions you can get home loans from.",
        path: "/home",
      },
      {
        id: "affordable-homes",
        icon: <AffordableHomeIcon height={25} />,
        title: "Affordable Homes",
        description:
          "View houses you can afford on at least one purchase plan, given your current income(s).",
        path: "/home",
      },
      {
        id: "dream-home",
        icon: <DreamHomeIcon height={25} />,
        title: "Your Dream Home",
        description:
          "Save the ideal home you want to buy. We'll alert you immediately something like it is on the market.",
        path: "/home",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    icon: (
      <ThreecubeIcon
        color="currentColor"
        className=" shrink-0 w-[26px] h-[23px] "
      />
    ),
    paths: ["/services"],
    dropdownItems: [
      {
        id: "properties",
        icon: <PropertyIcon height={25} />,
        title: "Properties",
        description:
          "Explore a large variety of properties available for sale.",
        path: "/home",
      },
      {
        id: "plans",
        icon: <PlanIcon height={25} />,
        title: "Plans",
        description:
          "Find different home purchase plans you can use to buy your home.",
        path: "/home",
      },
      {
        id: "developers",
        icon: <DeveloperIcon width={22} height={25} />,
        title: "Developers",
        description: "Explore top property developers and builders.",
        path: "/home",
      },
      {
        id: "banks",
        icon: <BankIcon height={25} />,
        title: "Banks",
        description: "Financial institutions you can get home loans from.",
        path: "/home",
      },
      {
        id: "affordable-homes",
        icon: <AffordableHomeIcon height={25} />,
        title: "Affordable Homes",
        description:
          "View houses you can afford on at least one purchase plan, given your current income(s).",
        path: "/home",
      },
      {
        id: "dream-home",
        icon: <DreamHomeIcon height={25} />,
        title: "Your Dream Home",
        description:
          "Save the ideal home you want to buy. We'll alert you immediately something like it is on the market.",
        path: "/home",
      },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: (
      <TwoMoneyNote
        color="currentColor"
        className=" shrink-0 w-[26px] h-[18px]"
      />
    ),
    paths: ["/enterprise"],
    dropdownItems: [
      {
        id: "properties",
        icon: <PropertyIcon height={25} />,
        title: "Properties",
        description:
          "Explore a large variety of properties available for sale.",
        path: "/home",
      },
      {
        id: "plans",
        icon: <PlanIcon height={25} />,
        title: "Plans",
        description:
          "Find different home purchase plans you can use to buy your home.",
        path: "/home",
      },
      {
        id: "developers",
        icon: <DeveloperIcon width={22} height={25} />,
        title: "Developers",
        description: "Explore top property developers and builders.",
        path: "/home",
      },
      {
        id: "banks",
        icon: <BankIcon height={25} />,
        title: "Banks",
        description: "Financial institutions you can get home loans from.",
        path: "/home",
      },
      {
        id: "affordable-homes",
        icon: <AffordableHomeIcon height={25} />,
        title: "Affordable Homes",
        description:
          "View houses you can afford on at least one purchase plan, given your current income(s).",
        path: "/home",
      },
      {
        id: "dream-home",
        icon: <DreamHomeIcon height={25} />,
        title: "Your Dream Home",
        description:
          "Save the ideal home you want to buy. We'll alert you immediately something like it is on the market.",
        path: "/home",
      },
    ],
  },
];

export type NavItem = {
  id: string;
  path?: string;
  label: string;
  paths: string[];
  dropdownItems?: NavDropdownItem[];
  icon?: JSX.Element;
};

type NavDropdownItem = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  path: string;
};
