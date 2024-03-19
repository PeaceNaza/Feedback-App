import { useState } from "react" 
import Button from "./Layout/Button"
import Rating from "./Rating"

const spanStyle = {
  display: "block",
  fontStyle: "italic",
  marginTop: "10px"
} 

// eslint-disable-next-line react/prop-types
function ReviewForm({handleAdd}) {
  //state for input text
  const [text, setText] = useState("")

  //state for button (disable)
  const [btnDisabled, setBtnDisabled] = useState(true)

  //state for validation (charaters)
  const [msg, setMsg] = useState("")

  //state to handle ratings from users
  const [rating, setRating] = useState(7)

//function to update the text state (to store users input value) and also to validate the text characters to be above 20 before button will be enabled
  const textHandler = (e) => {
    if(text === ""){
      setBtnDisabled(true)//disable button
      setMsg(null)//do not display message
    } else if(text !== "" && text.trim().length <= 20) {
      setMsg("Your review must be above 20 characters")//display message
      setBtnDisabled(true)//disable button
    } else {
      setMsg(null)//do not display message
      setBtnDisabled(false)//enable button
    } 

    setText(e.target.value)
  }

  //function to submit a review
  const formSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 20){
      const newReview = {
        text,
        rating
      }
      
      handleAdd(newReview)
      setText("")
    }
  } 


  return (
    <>
    <div className="container">
      <div className="card">
        <form onSubmit={formSubmit}>
         <h3>Kindly drop a review for our service you just experienced.</h3>
         <Rating ratingState={(rating) => setRating(rating)} />
         <br /><br />
           <div className="input-group">
            {/*writing data into the state and updating the value of the state*/}
            <input type="text" value={text} placeholder="write your review here" onChange={textHandler} />

          <Button type="submit" variant="secondary" isDisabled={btnDisabled}>
              Submit
          </Button>
           </div>
           {msg && <span className="message" style={spanStyle}>{msg}</span>}
        </form>
      </div>
    </div>
    </>

  )
}

export default ReviewForm


