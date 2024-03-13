import { useState } from "react"
import Header from "./Components/Layout/Header"
import data from "./data/reviewData"
import ReviewList from "./Components/ReviewList"
import ReviewStats from "./Components/ReviewStats"

function App() {
  const [review, setReview] = useState(data)
  //fuctio to delete a review
  //tis function collects a parameter called (id) filter troug te array as "item"
  const deleteReview = (id) => {
    if(window.confirm("Are you sure you want to delete this review?")) {
      setReview(review.filter((item) => item.id !== id))
  //dont display d curr item dat is passed, display d oters 
    }
  } 

  return (
    <>
      <Header text="Review Application" />

      <div className="container">
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>
     
      
    </>
  )
}

export default App
