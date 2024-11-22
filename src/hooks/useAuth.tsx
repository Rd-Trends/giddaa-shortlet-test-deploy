import AuthenticationContext from "@/context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  return useContext(AuthenticationContext);
};

export default useAuth;
