import { useState, useEffect } from 'react'
import axios from 'axios'
import Find from './components/Find'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('Countries fetched')
      setCountries(response.data)
    })
  }, [])

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  return(
    <div>
      <Find setSearch={setSearch}/>
      <Countries countries={countriesToShow}/>
    </div>
  )
}

export default App
