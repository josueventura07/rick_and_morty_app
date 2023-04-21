import React, { useState } from 'react'
import './styles/filterList.css'
import App from '../App'

const FilterList = ({suggestedList, lookInputSearch, setLookInputSearch, setSearchInput}) => {

const [toggle, setToggle] = useState()   

const handleClick = id => {
    setSearchInput(id)
    setLookInputSearch(!toggle)
}


  return (
    <ul id='list'  className={lookInputSearch ? 'filter_list' : 'hide_menu_filter'}>
        {  
        suggestedList?.map(location => (
            <li className='menu_filter' onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
        ))
       
        }
    </ul> 
   
  )
  
}
 
window.addEventListener('click', e => {
  const list_body = document.querySelector('#list')
  const list = document.querySelector('.menu_filter').classList.value
  const inputSearch = document.querySelector('.input').classList.value
    
  if(e.target.className !== list) {
    
    list_body.classList.remove('hide_menu_filter')
    list_body.classList.add('filter_list')
  } 

  if(e.target.className === inputSearch) {
    
    list_body.classList.add('hide_menu_filter')
    
  } 

}) 
 
export default FilterList