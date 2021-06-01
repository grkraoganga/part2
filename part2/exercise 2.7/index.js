import ReactDOM from 'react-dom'
import App from './App'

const phonebook = [
  {
    id: 1,
    name: '',
   
  }
  
]

ReactDOM.render(
  <App phonebook = {phonebook} />,
  document.getElementById('root')
)

