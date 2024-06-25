import StarRating from "./star";

const StartRatingMain = () => {
  const handleRating = (rating) => {
    console.log(`New rating is: ${rating}`);
  };

  return (
    <div>
      <h1>Star Rating Component</h1>
      <StarRating totalStars={5} initialRating={3} onRate={handleRating} />
    </div>
  );
};

export default StartRatingMain;
