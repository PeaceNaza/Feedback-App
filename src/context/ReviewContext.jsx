import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid"

const ReviewContext = createContext()

// eslint-disable-next-line react/prop-types
export const ReviewProvider = ({children}) => {

   const [review, setReview] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
    fetch("http://localhost:5000/review")
    .then((res) => res.json())
    .then((data) => {
     // set a delay before updating the state
     setTimeout(() => {
      setReview(data)
      setLoading(false)
    }, 3000) //delay in 3 seconds
  })
  .catch((error) => {
    console.log(error)
  })
   }, [])

    //function to add a review
    const AddReview = (newReview) => {
      newReview.id=uuid()
      setReview([newReview, ...review])
    }

   //function to delete a review
      //this function collects a parameter called (id) filter through the array as "item"
      const deleteReview = (id) => {
        if(window.confirm("Are you sure you want to delete this review?")) {
          setReview(review.filter((item) => item.id !== id))
      //don't display the curr item that is passed, display the others 
        }
      } 
   
  return <ReviewContext.Provider value={{review, AddReview,  deleteReview, loading}}>
    {children}
  </ReviewContext.Provider>
} 

export default ReviewContext