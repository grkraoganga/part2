import React from 'react'


const Header = (props) => {
  return (
      
          <h1>  {props.name}</h1>
         
      
    )
}

const Part = (props) => {
  return (
      
          <h1>  {props.p.name} {props.p.exercises}</h1>
         
      
    )
}

const Total = (props) => {
  return (
      
          <h1> Total of : {props.total} exercises</h1>
         
      
    )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
    
      <Header name={course.name} />
      <Part  p={course.parts[0] } />
      <Part  p={course.parts[1] } />
      <Part  p={course.parts[2] } />
      <Part  p={course.parts[3] } />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises } />
      
    </div>
  )
}

export default App

