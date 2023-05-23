import React from "react";
import { useState } from "react";

export const Counter = () => {
  let [counter, setCounter] = useState(0)

  const handleOnClick = () => {
    if (counter === 10) {
      setCounter(0)
    } else {
      setCounter(++counter)
    }
  }

  return (
    <div className="Main">
      <button className= "Carisma" onClick={handleOnClick}>Counter</button>
      Counter: {counter}
    </div>
  )
}
