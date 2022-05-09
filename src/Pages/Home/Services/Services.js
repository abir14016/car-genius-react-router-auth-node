import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("https://calm-scrubland-98189.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services'>
            <h1 className='text-center text-primary'>Our Services: {services.length}</h1>
            <div className=" container services-container card-deck">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;