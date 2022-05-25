import { useState} from "react"

import {ReactComponent as StarIcon} from "../images/icon-star.svg"
import {ReactComponent as ThanksIcon} from "../images/illustration-thank-you.svg"

const RatingWindow = () => {
  const [submitted, setSubmitted] = useState(false);
  const toggleSubmit = () => setSubmitted(!submitted);

  const [selectedRating, setSelectedRating] = useState(0);
  const changeSelectedRating = (n:number) => {
    setSelectedRating(n);
    console.log(n);
  }
  
  const ratingButtons = [1, 2, 3, 4, 5].map((n) => {
    return (
      <div key={n}>
        <input type="radio" value={n} name="rating" required onClick={() => changeSelectedRating(n)}/>
        <label>{n}</label>
      </div>
    )
  })
  if (!submitted) {
   return (
    <div>
      <StarIcon />
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <form>
        {ratingButtons}
        <input type="submit" onClick={() => {
          if (selectedRating) {
            toggleSubmit();
          }
        }}
        value="Submit"/>
        </form>
    </div>
    )
  } else {
    return (
      <div>
        <ThanksIcon />
        <span>
          <p>You selected {selectedRating} out of 5</p>
        </span>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
  }
}

export default RatingWindow