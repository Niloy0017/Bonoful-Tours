import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Details from '../helper/Details';
import Carousel from 'react-bootstrap/Carousel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { additem, tourdetail } from '../redux/reduxslices/cartslice';

export const TourDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartlist = useSelector(state => state.cart.cartitems);
    const userSelector = useSelector(state => state.auth.user);

    const { id } = useParams();
    let detail = Details[id];

    const submitted = cartlist.some(item => item.id === id);

    const detaildata = {
        id: id,
        image1: detail?.image1,
        name: detail?.name,
        person: 1,
        price: detail?.price,
        total: detail?.price
    };

    function clickhandler() {

        if (userSelector) {
            if (!submitted) {
                dispatch(additem(detaildata));
                toast.success('Tour added to cart!');
                navigate("/cart");
            }
            else {
                toast.info('Tour already booked!');
                navigate("/cart");
            }
        }
        else {
            toast.success('Going for Sign in!');
            var tourdetailid = `/tourdetails/${id}`
            console.log("tourDetail id at tourdetail : ", tourdetailid);
            dispatch(tourdetail(tourdetailid));
            navigate('/login');
        }
    }

    return (
        <div className='container'>

            <div className='detail-color'>
                <p className='px-3 py-4 detail-title'>
                    {detail?.name} : {detail?.tagline}
                </p>
                <div className='ps-3 pe-3 p-4 detail-inpics d-flex justify-content-center'>
                    {detail?.name} in Pictures
                </div>

                <div className='p-5'>
                    <Carousel>
                        {detail && Object.keys(detail).map((key, index) => {
                            if (key.startsWith('image')) {
                                return (
                                    <Carousel.Item key={index} interval={3000}>
                                        <img src={detail[key]} className='carousal-img' alt={`${detail.name} Image`} />
                                    </Carousel.Item>
                                );
                            }
                            return null;
                        })}
                    </Carousel>
                </div>
            </div>

            <div className='detail-color'>
                <p className='p-4 detail-inpics d-flex justify-content-center'>
                    Tour Plan Overview
                </p>
                <p className='ps-3 pe-3 textcolor'>
                    Duration : <span className='color-key'>11 Days 10 Nights</span>
                </p>
                <p className='ps-3 pe-3 textcolor'>
                    Starting Date : <span className='color-key'>10th August</span>
                </p>
                <div className='ps-3 pe-3'>
                    <div>
                        <span className='textcolor'> Day 1 : </span>
                        <span className='day-description'>{detail.day1}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 2 : </span>
                        <span className='day-description'>{detail.day2}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 3 : </span>
                        <span className='day-description'>{detail.day3}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 4 : </span>
                        <span className='day-description'>{detail.day4}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 5 : </span>
                        <span className='day-description'>{detail.day5}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 6 : </span>
                        <span className='day-description'>{detail.day6}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 7 : </span>
                        <span className='day-description'>{detail.day7}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 8 : </span>
                        <span className='day-description'>{detail.day8}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 9 : </span>
                        <span className='day-description'>{detail.day9}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 10 : </span>
                        <span className='day-description'>{detail.day10}</span>
                    </div>
                    <div>
                        <span className='textcolor'> Day 11 : </span>
                        <span className='day-description'>{detail.day11}</span>
                    </div>
                </div>
                <button className='ms-3 me-3 mb-5 mt-4' onClick={clickhandler}>
                    {submitted ? 'Already booked' : 'Proceed for booking'}
                </button>
            </div>
        </div>
    );
};





