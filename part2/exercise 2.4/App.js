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

  const total1 = props.total1.reduce((s, p) => {
    s = s + p.exercises
    return s
},0)
const total2= props.total2.reduce((s, p) => {
  s = s + p.exercises
  return s
},0)
  return (
      <>
          <h1>total of {total1 + total2} exercises</h1>
      </>
  )
}

const App = () => {
  const courses = [
    {
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
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  
 

  return (
    <div>
      <h1> Web Development Curriculum </h1>
      <Header name={courses.name} />
      <Part  p={courses[0].parts[0] } />
      <Part  p={courses[0].parts[1] } />
      <Part  p={courses[0].parts[2] } />
      <Part  p={courses[0].parts[3] } />
      <Part  p={courses[1].parts[0] } />
      <Part  p={courses[1].parts[1] } />
      <Total total1={courses[0].parts} total2={courses[1].parts}  />
      
    </div>
  )
}

export default App

