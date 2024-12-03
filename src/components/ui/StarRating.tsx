import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating2 = ({ rating }: { rating: number }) => {
  const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="w-[16px] h-[15px] text-secondary" />
        ))}
        {halfStar && (
          <FaStarHalfAlt
            style={{ color: "#0A7E32", width: "16px", height: "15px" }}
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="w-[16px] h-[15px]" />
        ))}
      </>
    );
  };

  return <div className="flex">{getStars(rating)}</div>;
};

export default StarRating2;
