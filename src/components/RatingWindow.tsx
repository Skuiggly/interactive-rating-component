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
  const possibleRatings =[1, 2, 3, 4, 5];
  const ratingButtons = possibleRatings.map((n) => {
    return (
      <div key={n}>
        <input value={n} onClick={() => changeSelectedRating(n)} id={n.toString()} name="rating" type="radio" required/>
        <label htmlFor={n.toString()}>{n}</label>
      </div>
    )
  })
  if (!submitted) {
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
        <p className="text rating-text">
          You selected {selectedRating} out of 5
        </p>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
  }
}

export default RatingWindow