import React, { useState } from 'react'
const App = (props) => {
  const [phonebook, setPhoneBook] = useState(props.phonebook)
  const [newPhoneBook, setNewPhoneBook] = useState(' ') 
  let x = 1
  let str = ' '
  const addPhoneBook = (event) => {
    event.preventDefault()
    const phoneBookObject = {
      name: newPhoneBook,
      id: phonebook.length + 1,
    }
    phonebook.forEach(value => {
      if(value.name === newPhoneBook){
        str = newPhoneBook + '  already added to the phone book'
      alert(str)
      x=0
      }
      else{
        x=1
      }
      console.log(value)
    })
   if (x === 1){

    setPhoneBook(phonebook.concat(phoneBookObject))
    setNewPhoneBook('')
   }
    
  }
  const handlePhoneBookChange = (event) => {
    //console.log(event.target.value)
    setNewPhoneBook(event.target.value)
  }
const PhoneBook =(props) => {

  return (
    <div>  
      <p>
       <h1> Numbers </h1>  
      {props.phonebook.map(phonebook => <h1>{phonebook.name}  </h1>)}  
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

      <PhoneBook phonebook = {phonebook} nb = {newPhoneBook}/>
    </div>
  )
}

export default App 
