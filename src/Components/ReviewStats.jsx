

// eslint-disable-next-line react/prop-types
function ReviewStats({reviews}) {
//sums of the give total reviews rating and divided by the total length of the array and the output is converted to a single decimal place.
  // eslint-disable-next-line react/prop-types
  let average = (reviews.reduce((acc, cur) => {
    return acc + cur.rating}, 0)/reviews.length).toFixed(1)

  return (
    <>
      <div className="review-stats">
      <p>{reviews.length} reviews</p>
      
      <p>Average: {isNaN(average) ? 0 : average} </p>
      </div>
    </>
  )
}

export default ReviewStats
