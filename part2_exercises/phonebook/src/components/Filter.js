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

  export default Filter