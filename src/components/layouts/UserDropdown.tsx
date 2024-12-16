import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { BsEye } from "react-icons/bs";
import { useLogout } from "@/apis/mutations/accout";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { AppRoutes } from "@/constants/routes";
import { IoLogOutOutline } from "react-icons/io5";

const UserDropdown = ({
  children,
  sameWidthAsTrigger,
}: {
  children: React.ReactNode;
  sameWidthAsTrigger?: boolean;
}) => {
  const logout = useLogout();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent sameWidthAsTrigger={sameWidthAsTrigger} align="end">
        <DropdownMenuItem asChild>
          <Link
            href={AppRoutes.PROFILE}
            className=" flex items-center space-x-2 text-xs font-bold">
            <BsEye size={20} />
            <span>View Details</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className=" flex items-center space-x-2 text-danger text-xs font-bold"
          onClick={() => {
            logout.mutate(void 0, {
              onSuccess: () => {
                if (pathname?.startsWith("/profile")) {
                  router.push("/");
                }
              },
            });
          }}>
          <IoLogOutOutline size={20} />
          <span>{logout.isPending ? "Logging out..." : "Logout"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
