import { Metadata } from "next";
import ForgotPasswordForm from "./form";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot Password",
  robots: "noindex, nofollow",
};

const ForgotPassword = () => {
  return <ForgotPasswordForm />;
};

export default ForgotPassword;
