import { Metadata } from "next";
import ResetPasswordForm from "./form";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset Password",
  robots: "noindex, nofollow",
};

const ResetPassword = () => {
  return <ResetPasswordForm />;
};

export default ResetPassword;
