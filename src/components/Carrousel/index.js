import React, { useState } from 'react';
import "./index.css";

export default function Carrousel({ slades }) {

    return (
        <div className="carrousel carousel-fade">
            <input type="checkbox" id="toggle"></input>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {slades.map(item =>
                        <li key={item.id} data-target="#carouselExampleCaptions" data-slide-to={item.id} className={item.active ? "active" : ""}></li>
                    )}
                </ol>
                <div className="carousel-inner">
                    {slades.map(item =>
                        <div className={item.active ? "carousel-item active" : "carousel-item"}>
                            <img src={item.src} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Seguinte</span>
                </a>
            </div>
        </div>
    )
}