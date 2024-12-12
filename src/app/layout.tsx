import type { Metadata } from "next";
import localFont from "next/font/local";
import { Red_Hat_Display } from "next/font/google";
import Providers from "./provider";
import { AuthenticationProvider } from "@/context/AuthContext";
import { getSession } from "@/server-actions/get-session";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const millik = localFont({
  src: "./fonts/Millik.otf",
  variable: "--font-millik",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Giddaa Stays",
    default: "Giddaa",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { token } = await getSession();

  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${redHatDisplay.variable} ${millik.variable}  font-sans antialiased bg-primary-gradient`}>
        <Providers>
          <AuthenticationProvider value={{ token }}>
            {children}
          </AuthenticationProvider>
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
