import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Demo from '../components/demo'

const About = () => {
  const [studentName, setStudentName] = useState("")

  const fetchStudent = async () => {
    const response = await fetch('https://dummyjson.com/users/2')
    const data = await response.text()
    setStudentName(data)
  }

  useEffect(()=>{
    fetchStudent()
  }, [])

  return (
    <>
      <Navbar data={studentName} />
      This is my About page...

      <Demo data={studentName} />
    </>
  )
}

export default About
