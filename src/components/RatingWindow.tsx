import { useState } from "react"

import {ReactComponent as StarIcon} from "../images/icon-star.svg"
import {ReactComponent as ThanksIcon} from "../images/illustration-thank-you.svg"

const RatingWindow = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  
  const ratingButtons = [1, 2, 3, 4, 5].map((n) => {
    return (
      <>
        <input type="radio" value={n} name="rating"/>
        <label>{n}</label>
      </>
    )
  })
  if (!submitted) {
   return (
    <div>
      <StarIcon />
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ul>
        {ratingButtons}
      </ul>
      <button type="submit">Submit</button>
    </div>
    )
  } else {
    return (
      <div>
        <ThanksIcon />
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
  }
}

export default RatingWindow