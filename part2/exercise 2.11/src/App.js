import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = (props) => {
 
  const [notes, setNotes] = useState([])
 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])


  return (
    <div>
      <h1> PhoneBook </h1>
    </div>
  )
}

export default App
