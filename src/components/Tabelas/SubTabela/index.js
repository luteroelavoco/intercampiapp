import React, { useEffect, useState } from 'react';
import "./index.css";

export default function SubTabelas() {
    return (
        <div className="card">
            <div className="tophorarios">
                <label style={{ color: 'black' }}> <span>Nº</span></label>
                <label style={{ color: 'black' }}><span>Saida:</span> Liberdade</label>
                <label style={{ color: 'black' }}><span>Saida:</span> Palmares</label>
            </div>
            <div className="tabehorarios">
                <div className="linha">
                    <label> 1 </label>
                    <label> 07:35</label>
                    <label> 07:20</label>
                </div>
                <hr />
                <div className="linha">
                    <label> 2 </label>
                    <label> 07:35</label>
                    <label> 07:20</label>
                </div>
                <hr />
                <div className="linha">
                    <label> 3 </label>
                    <label> 07:35</label>
                    <label> 07:20</label>
                </div>
                <hr />
                <div className="linha">
                    <label> 4 </label>
                    <label> 07:35</label>
                    <label> 07:20</label>
                </div>

            </div>
        </div>
    )
}
