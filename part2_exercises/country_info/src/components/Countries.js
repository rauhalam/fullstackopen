import { useState } from 'react'
import Country from './Country'

const Countries = (props) => {
  const [showCountry, setShowCountry] = useState('')
  console.log(props.countries)

  const countryNames = props.countries.map(country => 
    <li key={country.name.common}>
      {country.name.common} 
      <button onClick={() => setShowCountry(country)}>show</button>
    </li>)

  if (props.countries.length === 1) {
    return (
      <Country country={props.countries[0]} />
    )
  } else if (countryNames.length <= 10) {
    return (
      <div>
        <ul>
          {countryNames}
        </ul>
        {showCountry ? < Country country={showCountry} /> : null}
      </div>
    )
  } else if (props.countries.length < 1) {
    return (
      <p>No matches</p>
    )
  } else {
    return (
      <p>Too many matches, specify search</p>
    )
  }
}

export default Countries