import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <Skeleton
      duration={1}
      height={50}
      width={1000}
      count={7}
      baseColor="#191b1f"
    />
  );
};
export default SkeletonCard;
