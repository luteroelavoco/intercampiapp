import React from 'react';
import logo from "../../assets/logo.png";
import "./index.css";
import Contact from "../Contact";
export default function Footer() {
    return(
        <div className="footer">
            <Contact/>
            <div className="bottom">
                <label style={{color:'black'}}>@Copyright - <a href="https://www.facebook.com/edeson.alves" target="_blank"> Edeson Bizerril</a>. Todos direitos reservados</label>
                <label style={{color:'black'}}> Desenvolvido por <a href="https://www.facebook.com/cientista1" target="_blank">Lútero Elavoco</a></label>
            </div>
        </div>
    )
};