import { useState } from "react"
import Header from "./Components/Layout/Header"
import data from "./data/reviewData"
import ReviewList from './Components/ReviewList'

function App() {
  const [review, setReview] = useState(data)

  return (
    <>
      <Header text="Review Application" />

      <div className="container">
        <ReviewList reviews={review} />
     
      </div>
      
    </>
  )
}

export default App
