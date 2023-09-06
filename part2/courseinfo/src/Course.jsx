/* eslint-disable react/prop-types */

const Header = ({ header }) => <h1>{header}</h1>

const Total = ({ sum }) => <b>total of {sum} exercises</b>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}  
  </>

const Course = ({ course }) => {
  const parts = course.parts
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <div>
      <Header header={course.name} />
      <Content parts={parts}/>
      <Total sum={total}/>
    </div>
  );
};

export default Course;