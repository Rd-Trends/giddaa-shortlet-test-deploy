"use client";

import useAuth from "@/hooks/useAuth";
import React from "react";

const TopNav = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div>
      <p>isAuthenticated: {JSON.stringify(isAuthenticated)}</p>
      {isAuthenticated && <p>user: {user?.email}</p>}
    </div>
  );
};

export default TopNav;
