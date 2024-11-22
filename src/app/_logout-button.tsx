"use client";

import { useLogout } from "@/apis/mutations/accout";

export default function LogoutButton() {
  const logoutMutation = useLogout();

  return (
    <button
      onClick={() => {
        logoutMutation.mutate();
      }}>
      {logoutMutation.isPending ? "Logging out..." : "Logout"}
    </button>
  );
}
