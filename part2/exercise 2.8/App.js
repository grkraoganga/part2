import React, { useState } from 'react'
const App = (props) => {
  const [phonebook, setPhoneBook] = useState(props.phonebook)
  const [newName, setNewName] = useState(' ')
  const [newNo, setNewNo] = useState(0)  
  let x = 1
  let str = ' '
  const addPhoneBook = (event) => {
    event.preventDefault()
    const phoneBookObject = {
      Name: newName,
      No: newNo,
      Id: phonebook.length + 1,
    }
    phonebook.forEach(value => {
      if(value.name === newName){
        str = newName + '  already added to the phone book'
      alert(str)
      x=0
      }
      else{
        x=1
      }
    })
   if (x === 1){

    setPhoneBook(phonebook.concat(phoneBookObject))
    setNewName('')
    setNewNo(0)
   }
    
  }
  const handlePhoneBookNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneBookNoChange = (event) => {
    //console.log(event.target.value)
    setNewNo(event.target.value)
  }

const PhoneBook =(props) => {

  return (
    <div>  
      <p>
       <h1> Numbers </h1>  
      {props.phonebook.map(phonebook => <h1>{phonebook.Name} {phonebook.No} </h1>)}  
    </p>

    
    
    </div>




  )
}
  return (
    <div>
      <h1>Phonebook</h1>
  
      <form onSubmit={addPhoneBook}>
       Name : <input value={newName}
       onChange={handlePhoneBookNameChange}
      />
      <p>
      Phone No : <input value={newNo}
       onChange={handlePhoneBookNoChange}
      />
      </p>
        <p><button type="submit">Add</button>
      </p>
      </form> 

      <PhoneBook phonebook = {phonebook} nb = {newName}/>
    </div>
  )
}

export default App 
