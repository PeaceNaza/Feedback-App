/* eslint-disable react/prop-types */
function ReviewStats({ reviews }) {
  let average = 0;

  if (reviews && reviews.length > 0) {
    average = (reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length).toFixed(1);
  }

  return (
    <>
      <div className="review-stats">
        <p>Reviews: {reviews ? reviews.length : 0}</p>
        <p>Average: {isNaN(average) ? 0 : average}</p>
      </div>
    </>
  );
}

export default ReviewStats;