const Country = (props) => {
  const languages = Object.values(props.country.languages).map(language => <li key={language}>{language}</li>)
  return (
    <div>
      <h2>{props.country.name.common}</h2>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
      <p>Languages: {languages}</p>
      <img src={props.country.flags.png} alt='flag' />
    </div>
  )
}

export default Country