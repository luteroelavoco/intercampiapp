import React from 'react';
import "./index.css";

export default function CardTime({ origem, destino }) {
    return (
        <div className="card" >
            <div className="top">
                <label style={{ color: 'black' }}> Saida : <span>{origem}</span> </label>
                <label style={{ color: 'black' }}> Destino : <span>{destino}</span> </label>
            </div>
            <hr />
            <div className="bottom">
                <label style={{ color: 'black' }}>Anterior <br /> <span>07:30</span></label>
                <label className="actual" >Proximo <br /><span>07:35</span><br /> <i class="far fa-clock"> 6 min </i></label>
                <label style={{ color: 'black' }}>Seguinte <br /> <span>07:45</span></label>
            </div>
        </div>
    )
}