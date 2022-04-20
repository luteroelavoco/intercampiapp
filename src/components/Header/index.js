import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo.png";
import "./index.css";

export default function Headers() {

    const [menus, setmenus] = useState([
       
        {
            id: 1,
            title: "Notícia",
            href: "inicio",
            active: false,
            offset: -260,
        },
        {
            id: 2,
            title: "Acerca",
            href: "acerca",
            active: false,
            offset: -260,
        },
        {
            id: 2,
            title: "Horário",
            href: "rotas",
            active: false,
            offset: -260,
        },
        {
            id: 3,
            title: "Contatar",
            href: "contactar",
            active: false,
            offset: -260,
        },




    ]);

    useEffect(() => {
        window.onscroll = function () { myFunction() };
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    })

    function handleSetActive(id) {
        if (id === 1) {
            var element = document.querySelector(".inicio");
           
        }
    }

    return (
        <div className="containerHeader" style={{paddingBottom:'0px', zIndex:'1000'}}>
            <div className="topo_info ">
                <div className="left" data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <label style={{ color: 'white' }}> Segunda à sexta das 6:30 até as 22:30 </label>
                </div>
                <div className="right" data-aos="fade-left"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
                    <label style={{ color: 'white' }}>  Contatar em luteroelavoco90@gmail.com</label>
                </div>
            </div>
            <div className="header" id="myHeader">
                <div className="brand_header">
                    <div className="logo">
                        <img src={logo} alt="logo" style={{ cursor: 'pointer' }} onClick={() => scroll.scrollToTop()} />
                    </div>
                    <div className="name">
                        <a onClick={() => scroll.scrollToTop()}> Intercampi</a>
                    </div>
                </div>
                <div className="toggle">
                    <label htmlFor="toggle" style={{ color: '#161616' }} ><span> &#9776;</span> <a style={{ color: '#161616' }}>MENU</a> </label>
                </div>
                <div className="nave">
                    <input type="checkbox" id="toggle"></input>
                    <div className="menu">
                        <ul>
                            {menus.map((item,index) =>

                                <li key={index}>
                                    <Link
                                        style={{ color: '#161616' }}
                                        activeClass="active"
                                        to={item.href}
                                        spy={true}
                                        smooth={true}
                                        offset={item.offset}
                                        isDynamic={true}
                                        duration={600}
                                        ignoreCancelEvents={false}
                                        onSetActive={() => handleSetActive(item.id)}
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