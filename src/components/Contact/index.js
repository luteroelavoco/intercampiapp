import React from 'react';
import capa from "../../assets/capa.png";
import "./index.css";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="contactar">
                <div>
                    <img src={capa} />
                </div>
                <div className="formulario">
                    <div className="top">
                        <label style={{ color: 'white' }}> <i class="fas fa-edit"></i> Entrar em contacto</label>
                    </div>
                </div>
            </div>
        </div>
    )
};