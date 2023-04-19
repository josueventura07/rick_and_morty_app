import React, { useState } from 'react'
import './styles/filterList.css'

const FilterList = ({suggestedList, lookInputSearch, setLookInputSearch, setSearchInput}) => {

const [toggle, setToggle] = useState()   

const handleClick = id => {
    setSearchInput(id)
    setLookInputSearch(!toggle)
}


  return (
    <ul className={lookInputSearch ? 'filter_list' : 'hide_menu_filter'}>
        {  
        suggestedList?.map(location => (
            <li className='menu_filter' onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
        ))
       
        }
    </ul> 
  )
  
}

export default FilterList