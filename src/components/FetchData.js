import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FetchData = ({cat}) => {
    const [Data, setData] = useState("");

    const fetchData = async () => {
        await axios
            .get(
                cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=894120c305504daa85b906d828f11af6`:
                "https://newsapi.org/v2/top-headlines?country=in&apiKey=894120c305504daa85b906d828f11af6"
            )
            .then((res) => setData(res.data.articles)); 
    };
    useEffect(() => {
        fetchData();
    }, [cat])
    return (
        <div className='container my-4'>
            <h3><u>TOP HEADLINES</u></h3>
            <div className='container d-flex justify-content-center
             align-items-center flex-column my-3'>
                {Data ? Data.map((items, index) =>
                    <>
                        <div className='container my-3 p-3' style={{ width: "550px" , boxShadow:"2px 2px 10px silver", borderRadius:"10px"}}>
                            <h5 className='my-2'>{items.title}</h5>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={items.urlToImage} className="img-fluid" style={{
                                    width: "100%", height: "300px",
                                    objectFit: "cover"
                                }} alt="Image Not Found" />
                            </div>
                            <p className='my-1'>{items.content}</p>
                            <a href={items.url} target="blank">View More</a>
                        </div>
                    </>) : "Loading...."}
            </div>
        </div>
    );
};

export default FetchData;