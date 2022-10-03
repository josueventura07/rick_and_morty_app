import React from 'react'

const LocationInfo = ({location}) => {

    

  return (
    <article className='location_info'>
        <h2>{location?.name}</h2>
        <ul className='location_list'>
            <li className='item_list1'><span>Type</span>{location?.type}</li>
            <li className='item_list2'><span>Dimension</span>{location?.dimension}</li>
            <li className='item_list3'><span>Population</span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo