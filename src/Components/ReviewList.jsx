import ReviewItem from "./ReviewItem"
//looping through each item from data on app component "review"

function ReviewList({reviews, deleteReview}) { 

  if (!reviews || reviews.length === 0) {
    return <div className="container">
              <p>No review yet!</p>
          </div>
  }
  return (
    <>
       <div>
        {/**looping through the array of data */}
        {reviews.map((item) => (
          <div key={item.id}>
            <ReviewItem review={item} deleteReview={deleteReview} />
          </div>
        ))}
      
       </div>
    </>
  )
}

export default ReviewList 