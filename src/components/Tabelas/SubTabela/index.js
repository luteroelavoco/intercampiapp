import React, { useEffect, useState } from 'react';
import "./index.css";

export default function SubTabelas({ origem, destino, subRotas }) {
    return (
        <div className="card">
            <div className="tophorarios">
                <label style={{ color: 'black' }}> <span>Nº</span></label>
                <label style={{ color: 'black' }}><span>Saida:</span> {origem}</label>
                <label style={{ color: 'black' }}><span>Saida:</span> {destino}</label>
            </div>
            <div className="tabehorarios">
                {subRotas.origem.map((item, index) =>
                    <div key={index}>
                        <div className="linha">
                            <label style={{ color: 'black' }}> {index+1} </label>
                            <label style={{ color: 'black' }}> {item}</label>
                            <label style={{ color: 'black' }}> {subRotas.destino[index]}</label>
                        </div>
                        <hr />
                    </div>
                )}
            </div>
        </div>
    )
}
