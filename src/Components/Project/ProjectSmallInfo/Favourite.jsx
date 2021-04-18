import React, { useState } from "react";

export default function Favourite({ setFavourite }) {
  const [toggleFavourite, setToggleFavourite] = useState(false);

  const handleToggleFavourite = (e) => {
    e.preventDefault();
    setFavourite((prev) => !prev);
    setToggleFavourite(!toggleFavourite);
  };

  return (
    <svg width="19" height="18" onClick={handleToggleFavourite}>
      <path
        fill={toggleFavourite ? "wheat" : "#fdfdfd"}
        fillRule="evenodd"
        stroke="#dad8d8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.425 14.538l4.562 2.396a.576.576 0 00.835-.604l-.87-5.08 3.692-3.595a.576.576 0 00-.316-.985l-5.098-.743L9.926 1.32a.576.576 0 00-1.031 0L6.59 5.927l-5.098.743a.576.576 0 00-.316.985l3.692 3.594-.87 5.08a.576.576 0 00.835.605l4.59-2.396z"
      />
    </svg>
  );
}
