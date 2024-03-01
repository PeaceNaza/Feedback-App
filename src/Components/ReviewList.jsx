import ReviewItem from "./ReviewItem"
//looping through each item from data on app component "review"

function ReviewList({reviews}) {
  return (
    <>
       <div>
        {/**looping through the array of data */}
        {reviews.map((review) => (
          <div key={review.id}>
            <ReviewItem review={review} />
          </div>
        ))}
      
       </div>
    </>
  )
}

export default ReviewList 