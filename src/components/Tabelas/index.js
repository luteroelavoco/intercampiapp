import React, { useEffect, useState } from 'react';
import { Tab } from 'react-materialize';
import "./index.css";

export default function Tabelas() {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            origem: "Liberdade",
            destino: "Palmares",
            ref: "Rota1",
            subRotas: ["Rota A", "Rota B"],
            subRef: ["Rota1A", "Rota1B"],
            RotaAOrigem:["21:10","21:40"],
            RotaBOrigem:["22:30","22:50"],
            RotaADestino:["21:15","23:40"],
            RotaBDestino:["21:10","23:06"]
        },
        {
            id: 2,
            origem: "Liberdade",
            destino: "Auroras",
            ref: "Rota2",
            subRotas: ["Rota A", "Rota B"],
            subRef: ["Rota2A", "Rota2B"]
        },
        {
            id: 3,
            origem: "Auroras",
            destino: "Palmares",
            ref: "Rota3",
            subRotas: ["Rota A", "Rota B"],
            subRef: ["Rota3A", "Rota3B"]
        }
    ]);
    const [tabsPub, setTabsPub] = useState([
        {
            id: 3,
            origem: "Redenção",
            destino: "Fortaleza",
            ref: "Rota4A",
            subRotas: ["Dia útil", "SÁB.", "DOM."],
            subRef: ["diaA", "sabA", "domA"]
        },
        {
            id: 4,
            origem: "Fortaleza",
            destino: "Redenção",
            ref: "Rota4B",
            subRotas: ["Dia útil", "SÁB.", "DOM."],
            subRef: ["diaB", "sabB", "domB"]
        }
    ])
    function openTabela(evt, rotaName) {
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
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            if (tablinks[i] === evt.currentTarget)
                pos = i;
        }
        // Show the current tab, and add an "active" class to the button that opened the tab

        document.getElementById(rotaName).style.display = "block";
        evt.currentTarget.className += " active";
        var filho = document.getElementsByClassName("_tablinks");
        pos *= 2;
        filho[pos].click();
    }
    function openTab(evt, rotaName) {
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
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(rotaName).style.display = "block";
        evt.currentTarget.className += " active";
        if(rotaName === "Rota4A"){
            document.getElementsByClassName("_tablinha")[0].click();
        }
        if(rotaName === "Rota4B"){
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
    useEffect(() => {
        document.getElementsByClassName("defaultOpen")[0].click();
    });
    return (
        <div className="rotas">
            <div className="tabe">
                {tabs.map(item =>
                    <button key={item.id} className={item.id === 1 ? "tabelinks defaultOpen" : "tabelinks"} onClick={(e) => openTabela(e, item.ref)}> {item.origem} <i class="fas fa-exchange-alt"> </i> {item.destino}</button>
                )}
                <button className="tabelinks" onClick={(e) => openTabela(e, 'Rota4')}><i class="fas fa-bus"></i> Transporte público</button>
            </div>
            {tabs.map(item =>
                <div key={item.id} id={item.ref} className="tabecontent tabela">
                    <div className="tabe _tab">
                        {item.subRotas.map((subitem, index) =>
                            <button key={index} className="_tablinks" onClick={(e) => openTab(e, item.subRef[index])}>{subitem} </button>
                        )}
                    </div>
                    {item.subRotas.map((subitem, index) =>
                        <div key={index} id={item.subRef[index]} className="tabecontent tabelinha">
                            <h3>{subitem}</h3>
                            <p> {subitem} is the capital of France.</p>
                        </div>
                    )}

                </div>
            )}
            <div id="Rota4" className="tabecontent tabela">
                <div className="tabe _tab">
                    {tabsPub.map((item) =>
                        <button key={item.id} className="_tablinks" onClick={(e) => openTab(e, item.ref)}>{item.origem}- {item.destino} </button>
                    )}
                </div>
                {tabsPub.map(item =>
                    <div key={item.id} id={item.ref} className="tabecontent tabelinha">
                        <div className="tabe _tabelinha">
                            {item.subRotas.map((subitem, index) =>
                                <button key={index} className="_tablinha" onClick={(e) => openTabP(e, item.subRef[index])}>{subitem} </button>
                            )}
                        </div>
                        {item.subRotas.map((subitem, index) =>
                            <div key={index} id={item.subRef[index]} className="tabecontent tabelinhaP">
                                <h3>{subitem}</h3>
                                <p> {subitem} is the capital of France.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
} 