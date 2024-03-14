import { useState } from "react"
import Header from "./Components/Layout/Header"
import data from "./data/reviewData"
import ReviewList from "./Components/ReviewList"
import ReviewStats from "./Components/ReviewStats"
import ReviewForm from "./Components/ReviewForm"

function App() {
  const [review, setReview] = useState(data)
  //function to delete a review
  //this function collects a parameter called (id) filter through the array as "item"
  const deleteReview = (id) => {
    if(window.confirm("Are you sure you want to delete this review?")) {
      setReview(review.filter((item) => item.id !== id))
  //don't display the curr item that is passed, display the others 
    }
  } 

  return (
    <>
      <Header text="Review Application" />
      <ReviewForm />

      <div className="container">
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>
     
      
    </>
  )
}

export default App
