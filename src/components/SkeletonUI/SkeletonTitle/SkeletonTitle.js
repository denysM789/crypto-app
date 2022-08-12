import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonTitle = () => {
  return (
    <Skeleton
      duration={1}
      height={70}
      width={1000}
      count={1}
      baseColor="#191b1f"
    />
  );
};
export default SkeletonTitle;
