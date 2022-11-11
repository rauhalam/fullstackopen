const Persons = (props) => {
  return (
    props.persons.map(person =>
      <p key={person.id}>
        {person.name} {person.number}
        <button className="button" onClick={() => props.deletePerson(person.id)}>delete</button>
      </p>)
  )
}

export default Persons