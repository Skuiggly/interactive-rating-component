import { useState} from "react"

import {ReactComponent as StarIcon} from "../images/icon-star.svg"
import {ReactComponent as ThanksIcon} from "../images/illustration-thank-you.svg"

import "../css/rating-window.css"

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
      <label key={n}>
        <input type="radio" value={n} name="rating" required onClick={() => changeSelectedRating(n)}/>
        <span>{n}</span>
      </label>
    )
  })
  if (!submitted) {
   return (
    <div className="container">
      <div className="star-icon">
        {/* Couldn't find a better way to center the SVG than playing with viewbox */}
        <StarIcon viewBox="-16 -16 50 50"/>
      </div>
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <form>
        {ratingButtons}
        <input type="submit" onClick={() => {
          if (selectedRating) {
            toggleSubmit();
          }
        }}
        value="SUBMIT"/>
        </form>
    </div>
    )
  } else {
    return (
      <div className="container thanks">
        <ThanksIcon />
        <p className="rating-text">
          You selected {selectedRating} out of 5
        </p>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
  }
}

export default RatingWindow