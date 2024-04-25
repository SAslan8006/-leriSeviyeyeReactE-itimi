import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Home1 = () => {
    const navigate = useNavigate();
    const [alldata, setAllData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setAllData(data)
            setLoading(false);
        }
        getData();
    }, [])

    return (
        loading ? <div>Loading...</div> :
            <div>
                {alldata?.map((data, i) => (
                    <div onClick={() => navigate(`detail/${data?.id}`)} style={{ marginBottom: "30px", cursor: 'pointer' }} key={i} >
                        <div >
                            <div>{data?.title}</div>
                            <img style={{ width: "100px" }} src={data?.image} alt="" />
                        </div>
                    </div>
                ))
                }
            </div >
    )
}

export default Home1
