import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Tourcard = (props) => {

  const { image, name, info, price , id } = props.tour;

  const navigate = useNavigate();

  function detailHandler(){
    navigate(`/tourdetails/${id}`);
  }

  return (
    <div className='card col-11 col-md-5 '>
        <img src={image} className='w-100' ></img>
        <div className='tour-name'> {name} </div>
        <div className='tour-info w-100'> {info} </div>
        <div className='tour-price'> € {price} </div>
        <button className='tour-btn' onClick={detailHandler}> View Details </button>
    </div>
  )
}



