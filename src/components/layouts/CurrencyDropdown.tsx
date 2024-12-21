import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";

const CurrencyDropdown = ({
  children,
  sameWidthAsTrigger,
}: {
  children: React.ReactNode;
  sameWidthAsTrigger?: boolean;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        wrapperClassName=" rounded-2xl w-[150px]"
        className=" rounded-[14px]"
        sameWidthAsTrigger={sameWidthAsTrigger}
        align="start">
        <DropdownMenuItem>Naira</DropdownMenuItem>
        <DropdownMenuItem>USD</DropdownMenuItem>
        <DropdownMenuItem>Euro</DropdownMenuItem>
        <DropdownMenuItem>Yen</DropdownMenuItem>
        <DropdownMenuItem>Pound</DropdownMenuItem>
        <DropdownMenuItem>CAD</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencyDropdown;
