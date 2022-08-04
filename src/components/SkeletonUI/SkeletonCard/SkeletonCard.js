import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
  return (
    <section>
      <h2 className="section-title">
        <Skeleton duration={1} height={30} width={300} />
      </h2>
    </section>
  );
};
export default SkeletonCard;
