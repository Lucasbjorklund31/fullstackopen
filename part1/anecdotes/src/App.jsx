import { useState } from 'react'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const Button = (props) => ( <button onClick={props.handleClick}> {props.text} </button> )

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const vote = () => {
    const newPoints = [...points]; 
    newPoints[selected] += 1; 
    setPoints(newPoints);
  };

  const selectNext = () => {
    const next = getRandomInt(0, anecdotes.length)
    setSelected(next)
  }

  const findMostPoints = () => {
    let maxPoints = -1; 
    let indexOfMax = -1;
  
    for (let i = 0; i < points.length; i++) {
      if (points[i] > maxPoints) {
        maxPoints = points[i];
        indexOfMax = i;
      }
    }
  
    return indexOfMax;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br></br>
      has {points[selected]} votes <br></br>
      <Button handleClick={() => vote()} text="vote" />
      <Button handleClick={() => selectNext()} text="next anecdote" />

      <h1>Anecdote with most votes</h1>
      {anecdotes[findMostPoints()]} <br></br>
      has {points[findMostPoints()]} votes
    </div>
  )
}

export default App