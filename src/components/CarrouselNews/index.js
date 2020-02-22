import React from 'react';
import './index.css';
import { Carousel } from 'react-materialize';
export default function Card({ news }) {
    if(news.length == 0)
    return(
        <></>
    )
    return (
        <Carousel className="carousel" >
            {news.map((item, index) =>
                <div key={index} className="carousel item" >
                    <div className="topo">
                        <div className="title">{item.info}</div>
                        <img src={item.img} alt="Avatar" style={{ width: '100%' }}  />
                        <div className="date"><span>{item.day} <br /> {item.month}</span> </div>
                    </div>
                    <div className="info">
                        <h1>{item.title}</h1>
                        <h2>{item.subtitle}</h2>
                        <p>{item.description}</p>
                        <div className="baixo">
                            <label> <i className="far fa-clock"></i> {item.time} </label>
                            <label style={{ marginLeft: '20px', display:'none' }}><i className="fas fa-eye"></i> {item?.views}</label>
                        </div>
                    </div>
                </div>
            )}
        </Carousel>
    )
}