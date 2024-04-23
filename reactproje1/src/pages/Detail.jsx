import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { data } from './Home1';
import { useEffect, useState } from 'react';

const Detail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [getData, setGetData] = useState(null);

    useEffect(() => {
        if (id)
            setGetData(data.find(dt => dt.id == id));
    }, [id])

    return (
        <div onClick={() => navigate("/")} style={{ cursor: "pointer", marginBottom: '30px' }}>
            <div > {getData?.name}</div >
            <div>{getData?.description}</div>
            <hr />
        </div >
    )
}

export default Detail
