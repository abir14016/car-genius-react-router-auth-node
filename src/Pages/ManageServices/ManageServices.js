import React from 'react';
import UseServices from '../../hooks/UseSservices'

const ManageServices = () => {
    const [services, setServices] = UseServices()

    const handleDelete = id => {
        const proced = window.confirm("Are u sure?");
        if (proced) {
            const url = `https://calm-scrubland-98189.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>
                        {service.name}
                        <button onClick={() => handleDelete(service._id)} className='btn btn-danger'>X</button>
                    </h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;