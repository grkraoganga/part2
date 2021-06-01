import ReactDOM from 'react-dom'
import App from './App'

const phonebook = [
  {
    Id: 1,
    Name: 'Dr. G.Rama Koteswara Rao',
    No  : 9848463698
   
  }
  
]

ReactDOM.render(
  <App phonebook = {phonebook} />,
  document.getElementById('root')
)

