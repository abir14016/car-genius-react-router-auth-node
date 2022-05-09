import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Sevices = ({ service }) => {
    const { _id, name, img, description, price } = service;

    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className="card card-container text-center">
            <div className='p-3'>
                <img className="card-img-top" src={img} alt="Card cap" />
                <hr />
            </div>
            <div className="card-body">
                <h5 className="card-title text-white">{name}</h5>
                <p className="card-text card-description">{description}</p>
                <h6 className='text-warning fs-4'>$ {price}</h6>
            </div>
            <div className='text-center'>
                <button onClick={() => navigateToServiceDetail(_id)} className='book-now-btn'>BOOK NOW</button>
            </div>
        </div>
    );
};

export default Sevices;