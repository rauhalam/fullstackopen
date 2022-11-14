import React from "react"
import { useState } from 'react'

const Header = ({ header }) => {
  return (
    <h1>{header}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ name, result }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{result}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, sum }) => {
  const noFeedback = (sum === 0)
  return (
    <div>
      {noFeedback ? (
        <table>
          <tbody>
            <StatisticLine name='No feedback given' result={null} />
          </tbody>
        </table>
      ) : (
        <table>
          <tbody>
            <StatisticLine name='good' result={good} />
            <StatisticLine name='neutral' result={neutral} />
            <StatisticLine name='bad' result={bad} />
            <StatisticLine name='all' result={sum} />
            <StatisticLine name='average' result={(good - bad) / sum} />
            <StatisticLine name='positive' result={good / sum} />
          </tbody>
        </table>
      )}
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setSum(good + neutral + bad + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setSum(good + neutral + bad + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setSum(good + neutral + bad + 1)
  }


  return (
    <div>
      <Header header='give feedback' />
      <div>
        <Button handleClick={handleGood} text='good' />
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />
      </div>
      <Header header='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} />
    </div>
  )
}

export default App
