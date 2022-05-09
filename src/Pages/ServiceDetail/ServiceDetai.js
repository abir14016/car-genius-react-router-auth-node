import { Link, useParams } from 'react-router-dom';
import UseServiceDetail from '../../hooks/UseServiceDetaiil';

const ServiceDetai = () => {
    const { serviceId } = useParams()
    const [service] = UseServiceDetail(serviceId);

    return (
        <div>
            <h2>you are about to book :{service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>proced checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetai;