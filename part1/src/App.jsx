import { useState } from "react"

const Button = ({ onClick, text }) => <button onClick={onClick} >{text}</button>

const Daily = ({ anec, vote, counter, setCounter}) => {
  const handleVote = () => {
    setCounter(counter + 1)
  }
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anec}</p>
      <p>Has {vote} votes</p>
      <Button onClick={handleVote} text={'vote'} />
      <Button onClick={handleNext} text={'next anecdote'} />
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const dep = getRandom(0, anecdotes.length - 1)
  const [selected, setSelected] = useState(dep)
  const blank = new Array(anecdotes.length).fill(0)
  const tab = [2, 3, 4, 5, 6, 7, 8]
  const [votes, setVotes] = useState(blank)
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const handleNext = () => {
    let random = getRandom(0, anecdotes.length - 1)
    setSelected(random)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button onClick={handleVote} text={'Vote'} />
      <Button onClick={handleNext} text={'Next anecdote'} />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>Has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App