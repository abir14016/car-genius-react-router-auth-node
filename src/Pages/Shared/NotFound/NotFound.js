import React from 'react';
import './NotFound.css'
import notFoundImg from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div style={{
            backgroundImage: `url(${notFoundImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh'
        }}>
            <button className='back-to-home-btn'>back to home</button>
        </div>
    );
};

export default NotFound;