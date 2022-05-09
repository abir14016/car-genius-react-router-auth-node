// import React, { useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import UseServiceDetail from '../../../hooks/UseServiceDetaiil';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const { serviceId } = useParams();
    const [service] = UseServiceDetail(serviceId)


    const handlePlaceOrder = event => {
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        };

        axios.post('https://calm-scrubland-98189.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast("your order is booked");
                    event.target.reset();
                }
            })
        // const url = "https://calm-scrubland-98189.herokuapp.com/order"
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(order)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
        //     })
    }

    // const [user, setUser] = useState({
    //     name: 'Sharlok Homes',
    //     email: 'Sharlokhomes@gmail.com',
    //     address: 'Bekar street',
    //     phone: '+65657347'
    // });

    // const handleAddressField = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser);
    //     console.log(newUser)
    // }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name} </h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name="name" placeholder='name' id="UserName" readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={user?.email} type="email" name="email" placeholder='email' id="UserEmail" readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={service?.name} type="text" name="service" placeholder='service' id="UserService" required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' id="UserAddress" required autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' id="UserPhone" required />
                <br />
                <input className='d-block w-50 mx-auto btn btn-success' type="submit" value="Place Order" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;