import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"
import ReviewItem from "./ReviewItem"
import Spinner from "./Layout/Spinner"

//looping through each item from data on app component "review"

// eslint-disable-next-line react/prop-types
function ReviewList() { 
  const {review, loading} = useContext(ReviewContext)

  if (!loading && (!review || review.length === 0)) {
    return <div className="container">
              <p>No review yet!</p>
          </div>
  }
  return loading ? <Spinner /> : (
    <>
       <div>
        {/**looping through the array of data */}
        {review.map((item) => (
          <div key={item.id}>
            <ReviewItem review={item} />
          </div>
        ))}
      
       </div>
    </>
  )
}

export default ReviewList 