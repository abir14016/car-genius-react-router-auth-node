import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetai = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (
        <div>
            <h1>you are about to book :{service.name}</h1>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>proced checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetai;