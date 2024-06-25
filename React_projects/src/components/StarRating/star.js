import React, { useState } from "react";
import "./style.css";

const StarRating = ({ totalStars = 5, initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating) => {
    setRating(newRating);
    if (onRate) {
      onRate(newRating);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} filled={index < rating} onClick={() => handleClick(index + 1)} />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <span className={`star ${filled ? "filled" : ""}`} onClick={onClick}>
    &#9733;
  </span>
);

export default StarRating;
