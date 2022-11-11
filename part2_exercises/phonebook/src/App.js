import { useEffect, useState } from 'react'
import dataService from './services/persons'
import Form from './components/Form'
import Persons from './components/Persons'
import Notification from './components/Notification'

const Filter = (props) => {
  return (
    <p>
      Filter shown with
      <input
        onChange={text => props.setSearch(text.target.value)}
      />
    </p>
  )
}

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)
  const [search, setSearch] = useState('')

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
      number: newNumber
    }

    dataService
      .create(personObject)
      .then(returnedData => {
        setPersons(persons.concat(returnedData))
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }).catch(error => {
        const message = JSON.stringify(error.response.data)
        setMessage(`${message}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })

  }

  const deletePerson = id => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Are you sure you want to delete ${person.name}?`) === true) {
      dataService
        .deleteObject(person.id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
          setMessage(`${person.name} deleted`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const numbersToShow = (search === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter setSearch={setSearch} />

      <h2>Add new</h2>
      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={numbersToShow} deletePerson={deletePerson} />
    </div>
  )

}

export default App