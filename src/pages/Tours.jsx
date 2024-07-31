import React, { useState } from 'react'
import data from '../helper/data'
import { Tourcard } from '../components/Tourcard'

export const Tours = () => {

    const [tours,setTours] = useState(data)

  return (
    <div className='patro'>
        <div className="title">Tours</div>
        <div className='d-flex flex-wrap justify-content-center align-items-center cards container mb-4'>
        {
            tours.map((tour)=>(
                <Tourcard key={tour.id} tour={tour} ></Tourcard>
            ))
        }
        </div>
    </div>
  )
}
