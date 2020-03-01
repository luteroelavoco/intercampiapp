import React, { useEffect, useState } from 'react';
import Card from "../CardTime";
import SubTabela from "./SubTabela";
import "./index.css";

export default function Tabelas({ tabs, tabsPub }) {

    function openTabela(evt, rotaName,theme="active") {
        // Declare all variables
        var i, tabcontent, tablinks, pos;
        // Get all elements with className="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabela");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Get all elements with className="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tabelinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active1", "");
            tablinks[i].className = tablinks[i].className.replace(" active2", "");
            tablinks[i].className = tablinks[i].className.replace(" active3", "");
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            if (tablinks[i] === evt.currentTarget)
                pos = i;
        }
        // Show the current tab, and add an "active" class to the button that opened the tab

        document.getElementById(rotaName).style.display = "block";
        evt.currentTarget.className += " "+theme;
        var filho = document.getElementsByClassName("_tablinks");
        pos *= 4;
        filho[pos].click();
    }
    function openTab(evt, rotaName,theme="active") {
        // Declare all variables
        var i, tabcontent, tablinks;
        // Get all elements with className="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabelinha");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Get all elements with className="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("_tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active1", "");
            tablinks[i].className = tablinks[i].className.replace(" active2", "");
            tablinks[i].className = tablinks[i].className.replace(" active3", "");
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(rotaName).style.display = "block";
        evt.currentTarget.className += " "+theme;
        if (rotaName === "Rota4A") {
            document.getElementsByClassName("_tablinha")[0].click();
        }
        if (rotaName === "Rota4B") {
            document.getElementsByClassName("_tablinha")[3].click();
        }
    }
    function openTabP(evt, rotaName) {
        // Declare all variables
        var i, tabcontent, tablinks;
        // Get all elements with className="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabelinhaP");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Get all elements with className="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("_tablinha");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(rotaName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    function VerMais(evt) {
        var elements = document.getElementsByClassName("subtabela");
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.display === "none") {
                elements[i].style.display = "block";
                evt.currentTarget.innerHTML = "Ver menos";
            }
            else {
                elements[i].style.display = "none";
                evt.currentTarget.innerHTML = "Ver Mais";
            }
        }
        var elementsbuttons = document.getElementsByClassName("vermais");
        for (var i = 0; i < elementsbuttons.length; i++)
            elementsbuttons[i].innerHTML = evt.currentTarget.innerHTML;
    }
    useEffect(() => {
        document.getElementsByClassName("defaultOpen")[0].click();
        var elements = document.getElementsByClassName("subtabela");
        for (var i = 0; i < elements.length; i++)
            elements[i].style.display = "none";
    });
    return (
        <div className="tabelas_rotas" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="tabe">
                {tabs.map(item =>
                    <button key={item.id} className={item.id === 1 ? "tabelinks defaultOpen" : "tabelinks"} onClick={(e) => openTabela(e, item.ref,item.theme)}> {item.origem} <i className="fas fa-exchange-alt"> </i> {item.destino}</button>
                )}
                <button className="tabelinks" onClick={(e) => openTabela(e, 'Rota4')}><i className="fas fa-bus"></i> Transporte público</button>
            </div>
            {tabs.map(item =>
                <div key={item.id} id={item.ref} className="tabecontent tabela">
                    <div className={item.class}>
                        {item.subRotas.map((subitem, index) =>     
                            <button key={index} className={subitem.class} onClick={(e) => openTab(e, subitem.ref,item.theme)}>{subitem.name} </button>
                        )}
                    </div>
                    {item.subRotas.map((subitem, index) =>
                        <div key={index} id={subitem.ref} className="tabecontent tabelinha">
                            <Card origem={item.origem} destino={item.destino} horario={subitem.origem} cor={item.color} />
                            <Card origem={item.destino} destino={item.origem} horario={subitem.destino}  cor={item.color}/>
                            <div className={"mais"+item.id}>
                                <div className="subtabela">
                                    <SubTabela origem={item.origem} destino={item.destino} subRotas={subitem} />
                                </div>
                                <button className="vermais" onClick={(e) => VerMais(e)}>Ver mais</button>
                            </div>
                        </div>
                    )}

                </div>
            )}
            <div id="Rota4" className="tabecontent tabela">
                <div className="tabe _tab tam2">
                    {tabsPub.map((item) =>
                        <button key={item.id} className="_tablinks" onClick={(e) => openTab(e, item.ref)}>{item.origem}- {item.destino} {item.rodoviario} </button>
                    )}
                </div>
                {tabsPub.map(item =>
                    <div key={item.id} id={item.ref} className="tabecontent tabelinha">
                        <div className="tabe _tabelinha">
                            {item.subRotas.map((subitem, index) =>
                                <button key={index} className="_tablinha" onClick={(e) => openTabP(e, subitem.ref)}>{subitem.name} </button>
                            )}
                        </div>
                        {item.subRotas.map((subitem, index) =>
                            <div key={index} id={subitem.ref} className="tabecontent tabelinhaP">
                                <Card origem={item.destino} destino={item.origem} horario={subitem.destino} />
                                <Card origem={item.origem} destino={item.destino} horario={subitem.origem} />
                                <div className="mais">
                                    <div className="subtabela">
                                        <SubTabela origem={item.origem} destino={item.destino} subRotas={subitem} />
                                    </div>
                                    <button className="vermais" onClick={(e) => VerMais(e)}>Ver mais</button>
                                </div>
                            </div>

                        )}
                    </div>
                )}
            </div>
        </div>
    )
} 