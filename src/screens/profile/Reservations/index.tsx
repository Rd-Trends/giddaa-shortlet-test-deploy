"use client";

import Container from "@/components/layouts/Container";
import ProfilePagesHeader from "../Header";
import CustomSecondaryTabs from "@/components/ui/Tabs/CustomSecondaryTab";
import UpComing from "./Upcoming";
import Past from "./Past";

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
      <CustomSecondaryTabs
        tabs={tabs}
        searchParamKey="status"
        classNames={{ tabsList: "  mb-10 " }}
      />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 ">
        {!isLoading &&
          !!favoriteShortLets.length &&
          favoriteShortLets.map((shortLet) => {
            return <ShortLetCard key={shortLet.id} shortLet={shortLet} />;
          })}

        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <ShortLetCardLoader key={index} />
          ))}
      </div> */}
    </Container>
  );
};

export default Reservations;
