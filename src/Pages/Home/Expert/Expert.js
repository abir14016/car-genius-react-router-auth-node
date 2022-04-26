import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='gx-4 gy-2 col-sm-12 col-md-4 col-lg-3 card-deck'>
            <div className="card bg-dark text-white text-center expert-card">
                <div className='p-3'>
                    <img className="card-img-top rounded" src={img} alt="Card cap" />
                    <hr />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button className='explore-btn'>Explore</button>
            </div>
        </div>

    );
};

export default Expert;