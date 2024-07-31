import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookingcart, deleteitem, multiplequantity } from '../redux/reduxslices/cartslice';
import { Navigate, useNavigate } from 'react-router-dom';


const Cartitem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [person, setPerson] = useState(item.person);
    const [total, setTotal] = useState(item.person * item.price);

    function handleBuy() {
        dispatch(bookingcart({
            id: item.id,
            name: item.name,
            image1: item.image1,
            person: item.person,
            price: item.price,
            total: item.total
        }))
        var cancelitem = {
            id: item.id,
        }
        dispatch(deleteitem(cancelitem));
        navigate('/booking');
    }

    function increment() {
        const newPerson = person + 1;
        setPerson(newPerson);
        var multiquan = {
            id: item.id,
            person: newPerson
        }
        dispatch(multiplequantity(multiquan));
    }

    function decrement() {
        if (person > 1) {
            const newPerson = person - 1;
            setPerson(newPerson);
            var multiquan = {
                id: item.id,
                person: newPerson
            }
            dispatch(multiplequantity(multiquan));
        }
    }

    function personhandler(event) {
        const newPerson = parseInt(event.target.value, 10);

        if (!isNaN(newPerson)) {
            setPerson(newPerson);
            var multiquan = {
                id: item.id,
                person: newPerson
            }
            dispatch(multiplequantity(multiquan));
        }
    }

    function cancelhandler() {
        var cancelitem = {
            id: item.id,
        }
        dispatch(deleteitem(cancelitem));
    }

    useEffect(() => {
        setTotal(person * item.price);
    }, [person]);

    return (
        <div className="card mb-4">
            <div className="card-body p-4 row">
                <div className='col-12 col-sm-6'>
                    <div className="col-12">
                        <img src={item.image1} className="img-fluid" alt="Generic placeholder image" />
                    </div>
                    <div className="col-12 d-flex flex-column justify-content-center mb-3">
                        <p className="small text-muted cart-font">Name</p>
                        <p className="lead fw-normal">{item.name}</p>
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <div className="col-12 d-flex flex-column justify-content-center mb-3">
                        <p className="small text-muted cart-font">Person</p>

                        <div className="input-group col-12">
                            <button className="btn btn-outline-secondary col-12 col-md-3" onClick={decrement}>-</button>
                            <input type="number" className="text-center col-12 col-md-6" value={person} onChange={personhandler} />
                            <button className="btn btn-outline-secondary col-12 col-md-3" onClick={increment}>+</button>
                        </div>

                    </div>
                    <div className="col-12 mb-3">
                        <p className="small text-muted cart-font">Price</p>
                        <p className="lead fw-normal mb-0">€{item.price}</p>
                    </div>
                    <div className="col-12 mb-3">
                        <p className="small text-muted cart-font">Total</p>
                        <p className="lead fw-normal mb-0">€{total}</p>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg me-2 mb-2" onClick={handleBuy}>
                Buy
            </button>
            <button type="button" className="btn btn-primary btn-lg" onClick={cancelhandler}>
                Cancel
            </button>
        </div>
    );
};

export default Cartitem;
