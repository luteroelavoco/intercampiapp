import React from 'react';
import './index.css';
import logo from "../../assets/imagem.jpg";
import { Button, Carousel, Row, Col } from 'react-materialize';
export default function Inicio() {
    return (
        <div className="inicio">
            <Carousel className="carousel">
                <div className="carousel item">
                    <div className="topo">
                        <div className="title">Notícia</div>
                        <img src={logo} alt="Avatar" style={{ width: '100%' }} />
                        <div className="date"><span>27 <br /> Fev</span> </div>
                    </div>
                    <div className="info">
                        <h1>Novos horario para Ônibus público</h1>
                        <h2>Periodo de Férias</h2>
                    </div>
                </div>
              

            </Carousel>
        </div>
    )
}