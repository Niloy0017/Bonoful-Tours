import React from 'react'

export const Orderitem = ({item}) => {
    return (
        <div className='card mb-5'>
            <div className='h3 mb-3'>{item.itemname}</div>
            <img src={item.image} className="img-fluid " alt="Generic placeholder image" />

            <div className="col-12 mb-3">
                <p className="small text-muted cart-font">Name</p>
                <p className="lead fw-normal">{item.name}</p>
            </div>

            <div className="col-12 mb-3">
                <p className="small text-muted cart-font">Email</p>
                <p className="lead fw-normal">{item.email}</p>
            </div>

            <div className="col-12 mb-3">
                <p className="small text-muted cart-font">Tour Name</p>
                <p className="lead fw-normal">{item.itemname}</p>
            </div>

            <div className="col-12 mb-3">
                <p className="small text-muted cart-font">Person</p>
                <p className="lead fw-normal">{item.person}</p>
            </div>

            <div className="col-12 mb-3">
                <p className="small text-muted cart-font">Price</p>
                <p className="lead fw-normal mb-0">€{item.price}</p>
            </div>

            <div className="col-12 mb-3">
                <p className="small text-muted cart-font">Total</p>
                <p className="lead fw-normal mb-0">€{item.total}</p>
            </div>
        </div>

    )
}
