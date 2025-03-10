import React from "react"

import { useState } from "react"

export const DateFetcher = () => {
  let [date, setDate] = useState("Unknown")

  return (
    <div className="Main">
      {/* the below is a method because it's attached to something else (new Date().getUTCDate()) */}
      <button onClick={() => setDate(new Date().getUTCDate())}>Update!</button>
      UTC Date: {date}
    </div>
  )
}
