import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'

const Features = () => {

  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount(count + 1)
    console.log("count", count);
  }

  useEffect(() => {
    console.log("first useEffect");
  }, [])

  useEffect(() => {
    console.log("second useEffect");
  }, [])

  useEffect(() => {
    console.log("third useEffect");
  }, [])

  useEffect(() => {
    console.log("fourth called, (count inside the deps. array)");
  }, [count])

  return (
    <div>
      <Navbar />
      <button onClick={handleClickButton}>click me ({count})</button>
    </div>
  )
}

export default Features
