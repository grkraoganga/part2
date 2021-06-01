import React, { useState } from 'react'
import axios from 'axios'


const App = (props) => {
 
  const [persons, setPersons] = useState([])
  const [newPersonName, setNewPersonName] = useState('')
  
  const [newPersonNo, setNewPersonNo] = useState(0)

  const addPerson = event => {
    event.preventDefault()
    const personObject = {
      name: newPersonName,
      number: newPersonNo,
     
    }
  
    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewPersonName('')
        setNewPersonNo(0)
      })
  }

  const handlePersonNameChange = (event) => {
    console.log(event.target.value)
    setNewPersonName(event.target.value)
  }
  const handlePersonNoChange = (event) => {
    console.log(event.target.value)
    setNewPersonNo(event.target.value)
  }
  return (
    <div>
      <h1> PhoneBook </h1>
      <form onSubmit={addPerson}>
        <h1>
        <p>
         Name : <input
          value={newPersonName}
          onChange={handlePersonNameChange}
        />
        </p>
        <p>
  Phone No : <input
          value={newPersonNo}
          onChange={handlePersonNoChange}
        />
        </p>
        </h1>
        <button type="submit">save</button>
      </form>  

    </div>
  )
}

export default App
