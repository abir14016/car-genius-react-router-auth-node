import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetai = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>service detail for :{serviceId}</h1>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>proced checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetai;