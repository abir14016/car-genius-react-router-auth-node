import { useEffect, useState } from "react";

const UseServiceDetail = serviceId => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://calm-scrubland-98189.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    return [service];

}

export default UseServiceDetail;