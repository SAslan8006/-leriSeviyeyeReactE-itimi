import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams();
    const [singledata, setSingleData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setSingleData(data)
            setLoading(false);
        }
        getData();
    }, [id])

    return (
        loading ? <div>Loading...</div> :
            <div>
                <div>{singledata?.title}</div>
                <img style={{ width: "100px" }} src={singledata?.image} alt="" />
            </div>


    )
}

export default Detail