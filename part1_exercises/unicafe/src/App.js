import React from "react"
import { useState } from 'react'

const Header = ({header}) => {
  return (
    <h1>{header}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
}

const Feedback = ({name, result}) => {
  return (
    <div>
      <p>{name} {result}</p>
    </div>
  )
}

const All = ({good, neutral, bad}) => {
  return (
    <p>all {good+neutral+bad}</p>
  )
}

const Average = ({good, neutral, bad}) => {
  return (
    <p>average {(good-bad)/(good+neutral+bad)}</p>
  )
}

const Positive = ({good, neutral, bad}) => {
  return (
    <p>positive {good/(good+neutral+bad)}</p>
  )
}

const Statistics = ({handleGood, handleNeutral, handleBad, good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return (
      <div>
        <Header header='give feedback'/>
        <div>
            <Button handleClick={handleGood} text='good'/>
            <Button handleClick={handleNeutral} text='neutral'/>
            <Button handleClick={handleBad} text='bad'/>
        </div>
        <Header header='statistics'/>
        <p>No feedback given</p>
      </div>)
  } else {
    return (
      <div>
        <Header header='give feedback'/>
        <div>
            <Button handleClick={handleGood} text='good'/>
            <Button handleClick={handleNeutral} text='neutral'/>
            <Button handleClick={handleBad} text='bad'/>
        </div>
        <Header header='statistics'/>
        <Feedback name='good' result={good}/>
        <Feedback name='neutral' result={neutral}/>
        <Feedback name='bad' result={bad}/>
        <All good={good} neutral={neutral} bad={bad}/>
        <Average good={good} neutral={neutral} bad={bad}/>
        <Positive good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Statistics handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
