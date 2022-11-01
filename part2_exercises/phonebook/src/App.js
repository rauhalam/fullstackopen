import { useEffect, useState } from 'react'
import dataService from './services/persons'
import Form from './components/Form'
import Persons from './components/Persons'

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    dataService
      .getAll()
        .then(initialData => {
        setPersons(initialData)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    dataService
    .create(personObject)
    .then(returnedData => {
      setPersons(persons.concat(returnedData))
      setNewName('')
      setNewNumber('')
    })

  }

  const deletePerson = id => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Are you sure you want to remove ${person.name}?`) === true) {
      dataService
      .deleteObject(person.id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })   
    }
  } 

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} deletePerson={deletePerson}/>
    </div>
  )

}

export default App