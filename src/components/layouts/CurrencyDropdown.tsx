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
      <DropdownMenuContent sameWidthAsTrigger={sameWidthAsTrigger} align="end">
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
