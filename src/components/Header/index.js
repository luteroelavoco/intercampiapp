import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo.png";
import "./index.css";

export default function Headers() {

    const [menus, setmenus] = useState([
        {
            id: 1,
            title: "Inicio",
            href: "inicio",
            active: true,
        },
        {
            id: 2,
            title: "Acerca",
            href: "acerca",
            active: false,
        },
        {
            id: 3,
            title: "Rotas",
            href: "rotas",
            active: false,
        },
        {
            id: 4,
            title: "Sobre",
            href: "sobre",
            active: false,
        },
        {
            id: 7,
            title: "Contacto",
            href: "contacto",
            active: false,
        }



    ]);

    return (
        <div className="containerHeader" style={{position:'fixed',width:'100%', zIndex:'1000'}}>
            <div className="topo_info">
                <div className="left">
                    <label style={{color:'white'}}> Segunda à sexta das 6:30 até as 22:30 </label>
                </div>
                <div className="right">
                    <label style={{color:'white'}}>  Liga para nós +55 85 9123-9876</label>
                </div>
            </div>
            <div className="Header">
                <div className="brand_header">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="name">
                        <a onClick={() => scroll.scrollToTop()}> Intercampi</a>
                    </div>
                </div>
                <div className="toggle">
                    <label for="toggle" style={{color:'#161616'}} ><span> &#9776;</span> <a style={{color:'#161616'}}>MENU</a> </label>
                </div>
                <div className="nav">
                    <input type="checkbox" id="toggle"></input>
                    <div className="menu">
                        <ul>
                            {menus.map(item =>

                                <li key={item.id}>
                                    <Link
                                        style={{color:'#161616'}}
                                        activeClass="active"
                                        to={item.href}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={600}
                                    >
                                        {item.title}
                                    </Link>

                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};