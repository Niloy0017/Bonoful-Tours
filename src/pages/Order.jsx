import React from 'react'
import { useSelector } from 'react-redux';
import { Orderitem } from '../components/Orderitem';

const Order = () => {

    const orderSelector = useSelector(state => state.orde.orderitems);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <div className='my-1 mt-5 h2'>Order History</div>
            {
                orderSelector.length > 0 ?
                    (
                        <section className='col-12 col-sm-10 col-md-8'>
                            {orderSelector.map((item, index) => (
                                <Orderitem key={index} item={item} />
                            ))}
                        </section>
                    )
                    :
                    (
                        <div className="text-center h1">Empty</div>
                    )
            }
        </div>
    )
}

export default Order;
