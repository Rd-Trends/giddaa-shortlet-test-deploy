"use client";

import Container from "@/components/layouts/Container";
import ProfilePagesHeader from "../Header";
import UpComing from "./Upcoming";
import Past from "./Past";
import CustomAlternateTab from "@/components/ui/Tabs/CustomAlternateTab";

const tabs = [
  {
    label: "Upcoming",
    value: "upcoming",
    content: <UpComing />,
  },
  {
    label: "Past",
    value: "past",
    content: <Past />,
  },
];

const Reservations = () => {
  return (
    <Container className=" bg-background py-10 space-y-6  ">
      <ProfilePagesHeader title="Reservations" />
      <CustomAlternateTab
        tabs={tabs}
        searchParamKey="status"
        classNames={{ tabsList: " mx-auto  mb-4 " }}
      />
    </Container>
  );
};

export default Reservations;
