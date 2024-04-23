import React from 'react'
import { useNavigate } from 'react-router-dom'

export const data = [
    {
        id: 0,
        name: "React",
        description: "React Açıklaması"
    },
    {
        id: 1,
        name: "React Native",
        description: "React Native Açıklaması 1"
    },
    {
        id: 2,
        name: "Vue",
        description: "Vue Açıklaması"
    }
]
const Home1 = () => {
    const navigate = useNavigate();

    return (
        <div>
            {data.map((dt, i) => (
                <div onClick={() => navigate(`/detail/${dt.id}`)} style={{ cursor: "pointer", marginBottom: '30px' }} key={i}>
                    <div >{dt.name}</div>
                    <div>{dt.description}</div>
                    <hr />
                </div>))}
        </div>
    )
}

export default Home1
