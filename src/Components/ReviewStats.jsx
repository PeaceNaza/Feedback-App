import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"

// eslint-disable-next-line react/prop-types
function ReviewStats() {

  const {review} = useContext(ReviewContext)

//sums of the give total reviews rating and divided by the total length of the array and the output is converted to a single decimal place.
  // eslint-disable-next-line react/prop-types
  let average = (review.reduce((acc, cur) => {
    return acc + cur.rating}, 0)/review.length).toFixed(1)

  return (
    <>
      <div className="review-stats">
      <p>{review.length} reviews</p>
      
      <p>Average: {isNaN(average) ? 0 : average} </p>
      </div>
    </>
  )
}

export default ReviewStats
