//handling the card display
import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"
import { FaTimes } from "react-icons/fa"


function ReviewItem({review}) { 
  
  const {deleteReview} = useContext(ReviewContext)

  return (
    <>
    <div className="container1">
    <div className="card">
        <div className="num-display">{review.rating}</div>
        <div>{review.text}</div>
        <button className="close" onClick={()=> deleteReview(review.id)}>
          <FaTimes />
        </button>
     </div>

    </div>
     
    </> 
  )
}

export default ReviewItem 