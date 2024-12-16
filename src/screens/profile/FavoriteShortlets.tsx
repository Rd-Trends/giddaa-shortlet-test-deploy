"use client";

import Container from "@/components/layouts/Container";
import React from "react";
import ProfilePagesHeader from "./Header";
import { useGetFavoriteShortlets } from "@/hooks/useGetFavoriteShortlets";
import ShortLetCard, {
  ShortLetCardLoader,
} from "@/components/shared/Cards/ShortLetCard";

const FavouriteShortlets = () => {
  const { favoriteShortLets, isLoading } = useGetFavoriteShortlets();
  return (
    <Container className=" bg-background py-10 space-y-10  ">
      <ProfilePagesHeader title="Favourite Shortlets" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10 ">
        {!isLoading &&
          !!favoriteShortLets.length &&
          favoriteShortLets.map((shortLet) => {
            return <ShortLetCard key={shortLet.id} shortLet={shortLet} />;
          })}

        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <ShortLetCardLoader key={index} />
          ))}
      </div>
    </Container>
  );
};

export default FavouriteShortlets;
