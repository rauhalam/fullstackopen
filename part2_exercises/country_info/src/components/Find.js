const Find = (props) => {
    return (
      <div>
        <p>
          Find countries <input onChange={text => props.setSearch(text.target.value)}
        />
        </p>
      </div>
    )
  }

  export default Find