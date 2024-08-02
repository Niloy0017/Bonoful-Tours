import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addorder } from '../redux/reduxslices/orderslice';

export const Booking = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userSelector = useSelector(state => state.auth.user);
    const bookingSelector = useSelector(state => state.cart.booking);

    const [email, setEmail] = useState(userSelector.email);
    const [name, setName] = useState(`${userSelector.firstName} ${userSelector.lastName}`)

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function cancelhandler() {
        navigate("/cart")
    }

    function handleBuy() 
    {
        if(name && email)
        {
            var orderdata = {
                image: bookingSelector.image1,
                itemname: bookingSelector.name,
                name: name,
                email: email,
                person: bookingSelector.person,
                price: bookingSelector.price,
                total: bookingSelector.total  
            }
            console.log("in booking handlebuy")
            dispatch(addorder(orderdata))
            navigate("/order"); 
        }
    }

    return (
        <div className="card mb-4 ">
            <div className="card-body py-4 col-12 col-sm-10 col-md-8">
                <div className='h1 mb-3 text-center'>Booking</div>

                <img src={bookingSelector.image1} className="img-fluid" alt="Generic placeholder image" />

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Name</p>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Email</p>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Name</p>
                    <p className="lead fw-normal">{bookingSelector.name}</p>
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Person</p>
                    <p className="lead fw-normal">{bookingSelector.person}</p>
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Price</p>
                    <p className="lead fw-normal mb-0">€{bookingSelector.price}</p>
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Total</p>
                    <p className="lead fw-normal mb-0">€{bookingSelector.total}</p>
                </div>

                <button type="button" className="btn btn-primary btn-lg me-2 mb-2" onClick={handleBuy}>
                    Buy
                </button>
                <button type="button" className="btn btn-primary btn-lg mb-2" onClick={cancelhandler}>
                    Cancel
                </button>

            </div>
        </div>
    )
}

