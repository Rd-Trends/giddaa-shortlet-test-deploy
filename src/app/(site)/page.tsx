import React from "react";
import AllShortLetPage from "@/screens/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Affordable Short Lets & Stays in Nigeria",
  description:
    "Looking for short stays or lets from Nigeria or abroad? Giddaa Stays offers a wide selection of fully furnished apartments, houses, and vacation rentals. Book your next short-term stay with ease and comfort.",
};

export default async function Home() {
  return <AllShortLetPage />;
}
