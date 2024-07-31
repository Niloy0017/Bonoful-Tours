import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cartitem from '../components/Cartitem';
import { clearcart } from '../redux/reduxslices/cartslice';

export const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartdata = useSelector(state => state.cart.cartitems);

    console.log("cartdata",cartdata);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cartdata && cartdata.length > 0) 
        {
            let sum = 0;
            for (let item of cartdata) 
            {
                let price = item.price * item.person;
                sum += price;
            }
            setTotal(sum);
        } 
        else 
        {
            setTotal(0);
        }
    }, [cartdata]);

    const handleClearCart = () => {
        dispatch(clearcart());
    }

    const handleContinue = () => {
        navigate('/tours');
    }

    return (
        <div className="my-5 d-flex flex-column flex-md-row justify-content-center">
            {cartdata && cartdata.length > 0 ? (
                <>
                    <section className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                        {cartdata.map((item) => (
                            <Cartitem key={item.id} item={item} />
                        ))}
                    </section>
                    
                    <section className="card mb-4 col-md-3 summary-cart">
                        <div className='card-title h2'>Your Cart</div>
                        <div className='card-body py-1'>
                            <p className="font-bold cart-font">Total Items: {cartdata.length}</p>
                            <p className="font-bold cart-font">Total Amount: {total}</p>
                        </div>
                        <div className="d-flex justify-content-end flex-column gap-3">
                            <button type="button" className="btn btn-info btn-lg me-2" onClick={handleClearCart}>
                                Clear Cart
                            </button>
        
                            <button type="button" className="btn btn-primary btn-lg me-2" onClick={handleContinue}>
                                Continue
                            </button>
                        </div>
                    </section>
                </>
            ) : (
                <div className="text-center">
                    <div className='h1'>Cart {cartdata && cartdata.length === 0 ? 'Empty' : 'Data Not Available'}</div>

                    {cartdata && cartdata.length === 0 && (
                        <Link to="/tours">
                            <button className="btn btn-primary">
                                Shop Now
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;





