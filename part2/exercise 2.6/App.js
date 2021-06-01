import React, { useState } from 'react'
const App = (props) => {
  const [phonebook, setPhoneBook] = useState(props.phonebook)
  const [newPhoneBook, setNewPhoneBook] = useState(' ') 
  const addPhoneBook = (event) => {
    event.preventDefault()
    const phoneBookObject = {
      name: newPhoneBook,
      id: phonebook.length + 1,
    }
    setPhoneBook(phonebook.concat(phoneBookObject))
    setNewPhoneBook('')
  }
  const handlePhoneBookChange = (event) => {
    console.log(event.target.value)
    setNewPhoneBook(event.target.value)
  }
const PhoneBook =(props) => {

  return (
    <div>  
      <p>
       <h1> Numbers </h1>  
      {props.phonebook.map(phonebook => <h1>{phonebook.name}</h1>)}  
    </p>
    </div>
  )
}
  return (
    <div>
      <h1>Phonebook</h1>
  
      <form onSubmit={addPhoneBook}>
      <input value={newPhoneBook}
       onChange={handlePhoneBookChange}
      />
        <p><button type="submit">Add</button>
      </p>
      </form> 

      <PhoneBook phonebook = {phonebook} />
    </div>
  )
}

export default App 
