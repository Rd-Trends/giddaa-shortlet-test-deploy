import { Metadata } from "next";
import SignUpForm from "./form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
}

const SignUp = () => {
  return <SignUpForm />;
};

export default SignUp;
