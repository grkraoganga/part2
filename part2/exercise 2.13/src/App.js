import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = (props) => {
 
  const [countries, setCountries] = useState([])
  const [newFilter,setNewFilter] = useState('')
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/Country')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)
  }
//countries.forEach(value =>{return(<div><h1>{value.Name}</h1></div>)})
//countries.forEach(value =>{console.log(value.Name)})  

return (
    <div>
    
      
      Find Countries : <input value={newFilter}
     onChange={handleFilterChange}
      />

      {countries.filter(country => country.Name === newFilter).map(filteredcountry => (
        <h1>
          <p> Country :{filteredcountry.Name}</p>
         <p>     Capital : {filteredcountry.Capital}</p>
         <p> Population : {filteredcountry.Population}</p>
    <p> Languages</p>
           <p>{filteredcountry.Languages.map((number) =>
              <li>{number}</li>)}
            

          
     </p>     
          
          </h1>
          
          

        
      ))}

      

    </div>
  )
}

export default App
