/*eslint-disable react/prop-types */
//handling the card display
import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"
import { FaTimes } from "react-icons/fa"


// eslint-disable-next-line react/prop-types
function ReviewItem({review}) { 
  
  const {deleteReview} = useContext(ReviewContext)

  return (
    <>
    <div className="container">
    <div className="card2">
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