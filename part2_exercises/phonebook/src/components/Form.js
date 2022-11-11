const Form = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div className="form">
        name: <input
          value={props.newName}
          onChange={props.handleNameChange} />
      </div>
      <div className="form">
        number: <input
          value={props.newNumber}
          onChange={props.handleNumberChange} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form