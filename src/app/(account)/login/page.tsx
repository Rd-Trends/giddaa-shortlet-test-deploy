import { Metadata } from "next";
import LoginForm from "./form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

const Login = () => {
  return <LoginForm />;
};

export default Login;
