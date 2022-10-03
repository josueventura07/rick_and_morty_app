import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/residentsCard.css'


const ResidentsCard = ({url}) => {

const [resident, setResident] = useState()

useEffect(() => {
    
axios.get(url)
.then(res => setResident(res.data))
.catch(err => console.log(err))

}, [])

console.log(resident)

  return (
    <article className='card'>
        <header className='card_header'>
            <img className='card_img' src={resident?.image} alt="img" />
            <div className='card_status-container'>
                <div className={`circle ${resident?.status}`}></div>
                <span className='card_status'>{resident?.status}</span>
            </div>
        </header>
        <section className='card_body'>
            <h3 className='card_name'>{resident?.name}</h3>
            <ul className='card_list'>
                <li className='card_items-title'><span className='card_items-data'>Species</span>{resident?.species}</li>
                <li className='card_items-title'><span className='card_items-data'>Gender</span>{resident?.gender}</li>
                <li className='card_items-title'><span className='card_items-data'>Origin</span>{resident?.type}</li>
                <li className='card_items-title'><span className='card_items-data'>Episodes where appears</span>{resident?.episode.length}</li>
                
            </ul>
        </section>
    </article>
  )
}

export default ResidentsCard