import React, { useEffect, useState } from 'react'
import './styles/filterList.css'

const FilterList = ({suggestedList, setSearchInput}) => {

  const [toggle, setToggle] = useState(false)   



const handleClick = id => setSearchInput(id)


const handleToggle = () => {
  setToggle(!toggle)
}

  return (
    <ul onClick={handleToggle} className={toggle ? 'filter_list' : 'hide_menu_filter'}>
        {
        suggestedList?.map(location => (
            <li className='menu_filter' onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
        ))
        }
    </ul>
  )
}

export default FilterList