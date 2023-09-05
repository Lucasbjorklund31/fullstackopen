const Header = (course) => { 
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Part = (p) => {
  const { part, exercises } = p.p;

  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}

const Content = (parts) => {
  return (
    <div>
      <Part p  = {parts.parts[0]} />
      <Part p = {parts.parts[1]} />
      <Part p = {parts.parts[2]} />
    </div>
  )
}

const Total = (parts) => {
  return (
    <div>
      <p>Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
   name : 'Half Stack application development',
   parts : [
    { 
      part: 'Fundamentals of React', 
      exercises: 10 
    },
    { 
      part: 'Using props to pass data', 
      exercises: 7 
    },
    { 
      part: 'State of a component', 
      exercises: 14 
    },
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}

export default App
