import React, { useState } from "react"

export default function Slider() {
  const [image, setImage] = useState("1")

  function handleprevClick() {
    if (image !== '1') {
      setImage((prevImage) => (parseInt(prevImage) - 1).toString())
    }
  }

  function handlenextClick() {
    if (image !== '10') {
      setImage((nextImage) => (parseInt(nextImage) + 1).toString())
    }
  }

  return (
    <>
      <div className="img-prev">
        <img src={`${image}.jpg`} alt="image" />
      </div>

      <div className="buttons">
        <button onClick={handleprevClick}>Previous</button>

        <button onClick={handlenextClick}>Next</button>
      </div>
    </>
  )
}
