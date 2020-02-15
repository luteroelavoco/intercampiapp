import React, { useState, useEffect } from 'react';
import "./index.css";

export default function CardTime({ origem, destino, horario }) {

    const [anterior, setAnterior] = useState(0);
    const [proximo, setProximo] = useState(0);
    const [Seguinte, setSeguinte] = useState(0);
    const [minuto, setMinuto] = useState(0);
    const [hora, sethora] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date()
            setMinuto(date.getMinutes());
            sethora(date.getHours());
            setTime(date);
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    }, [time]);
    
    if (horario?.length == 0)
        return (
            <></>
        );
    else
        return (
            <div className="card" >
                <div className="top">
                    <label style={{ color: 'black' }}> Saida : <span>{origem}</span> </label>
                    <label style={{ color: 'black' }}> Destino : <span>{destino}</span> </label>
                </div>
                <hr />
                <div className="bottom">
                    <label style={{ color: 'black' }}>Anterior <br /> <span>07:30</span></label>
                    <label className="actual" >Proximo <br /><span>{hora}:{minuto}</span><br /> <i className="far fa-clock"> 6 min </i></label>
                    <label style={{ color: 'black' }}>Seguinte <br /> <span>07:45</span></label>
                </div>
            </div>
        )
}