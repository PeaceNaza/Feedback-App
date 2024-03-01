//handling the card display

function ReviewItem({review}) {
  

  return (
    <>
     <div className="card">
        <div className="num-display">{review.rating}</div>
        <div>{review.text}</div>
     </div>
    </>
  )
}

export default ReviewItem