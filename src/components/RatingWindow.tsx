import { useState } from "react"

import {ReactComponent as StarIcon} from "../images/icon-star.svg"
import {ReactComponent as ThanksIcon} from "../images/illustration-thank-you.svg"

import "../css/rating-window.css"

const RatingWindow = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [selectedRating, setSelectedRating] = useState(0);
  const ratingRange = [1, 2, 3, 4, 5];
  const ratingButtons = ratingRange.map((n) => {
    return (
      <div key={n}>
        <input value={n} onClick={() => setSelectedRating(n)} id={n.toString()} name="rating" type="radio" required/>
        <label htmlFor={n.toString()}>{n}</label>
      </div>
    )
  })
  if (!hasSubmitted) {
   return (
    <div className="container">
      <div className="star-icon">
        {/* Couldn't find a better way to center the SVG than playing with viewbox */}
        <StarIcon viewBox="-16 -16 50 50"/>
      </div>
      <h2 className="heading">How did we do?</h2>
      <p className="text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <form>
        {ratingButtons}
        <input type="submit" onClick={() => selectedRating ?
          setHasSubmitted(true) : console.log('Nothing to submit')}
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
        <p className="text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
  }
}

export default RatingWindow