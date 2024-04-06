import { createContext, useEffect, useState } from "react";

const base_url = import.meta.env.VITE_BASE_URL
const ReviewContext = createContext()

// eslint-disable-next-line react/prop-types
export const ReviewProvider = ({children}) => {

   const [review, setReview] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
     fetch(`${base_url}/review`)
    .then((res) => res.json())
    .then((data) => {
     // set a delay before updating the state
     setTimeout(() => {
      setReview(data)
      setLoading(false)
    }, 2000) //delay in 3 seconds
  })
  .catch((error) => {
    console.log(error)
  })
   }, [])

    //function to add a review
    const AddReview = async(newReview) => {
    const res = await fetch(`${base_url}/review`,{
       method: "POST",
       headers: {
        "Content-Type": "application/Json"
       },
       body: JSON.stringify(newReview)
      })
      const data = await res.json()
      setReview([data, ...review])
    }

   //function to delete a review
      //this function collects a parameter called (id) filter through the array as "item"
      const deleteReview = async(id) => {
        if(window.confirm("Are you sure you want to delete this review?")) {
          await fetch(`${base_url}/review/${id}`, {
            method: "DELETE"
          })
          setReview(review)
      //don't display the curr item that is passed, display the others 
        }
      } 
   
  return <ReviewContext.Provider value={{review, AddReview,  deleteReview, loading}}>
    {children}
  </ReviewContext.Provider>
} 

export default ReviewContext