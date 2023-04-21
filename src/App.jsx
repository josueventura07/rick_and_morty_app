import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorScreen from './components/ErrorScreen'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import ResidentsCard from './components/ResidentsCard'
import getRandomNumber from './utils/getRandomNumber'

function App() {

const [location, setLocation] = useState() // para guardar una locacion
const [searchInput, setSearchInput] = useState('') // para guardar la informacion del input y hacer la peticion cuando se hace el submit
const [suggestedList, setSuggestedList] = useState() // para guardar las sugerencias de la api
const [hasError, setHasError] = useState(false) // para indicar si hay un error o no
const [lookInputSearch, setLookInputSearch] = useState(true)  

useEffect(() => {

  let id = getRandomNumber()

  if(searchInput) {
    id = searchInput
  }
    
  const URL = `https://rickandmortyapi.com/api/location/${id}`
  
  axios.get(URL)
  .then(res => {
    setHasError(false)
    setLocation(res.data)})
  .catch(err => setHasError(true))

}, [searchInput])
  
const handleSubmit = event => {
  event.preventDefault()
    setSearchInput(event.target.idLocation.value)
    setLookInputSearch(true)
  }  

 const handleChange = event => {
  if(event.target.value === '') {
      return suggestedList()
      
  }
  
  let words = event.target.value.length
  
  if(words >= 0) {
    setLookInputSearch(false)
  } 

  const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`

    axios.get(URL)
    .then(res => setSuggestedList(res.data.results))
    .catch(err => console.log(err))
 }

 return (
    <div className="App">
      <div className='bg_img-header'>
        <h1>Rick and Morty</h1>
      </div>
     <div className='nav'>
     <form onSubmit={handleSubmit}>
        <div className='inputSearch_form_container'>
        <input className='input'
          id='idLocation'
          placeholder='Enter number from 1 to 126' type="text"
          onChange={handleChange}
        />
         <FilterList 
          suggestedList={suggestedList}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          setLookInputSearch={setLookInputSearch}
          lookInputSearch={lookInputSearch}
         />
        </div>
        <button className='search_button'>Search</button>
         

      </form>
     </div>

        {
          hasError ?
          <ErrorScreen />
          :
            <div className='visual_contain'>
              <LocationInfo location={location}/>
              <div className='cards_container'>
              {
                location?.residents.map(url => (
                  <ResidentsCard 
                  key={url} 
                  url={url}
                  />
                ))
              }
              </div>
            </div>
        }
    </div>
  )
}


export default App
