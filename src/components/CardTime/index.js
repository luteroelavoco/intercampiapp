import React, { useState, useEffect } from 'react';
import "./index.css";

export default function CardTime({ origem, destino, horario }) {

    const [anterior, setAnterior] = useState(0);
    const [proximo, setProximo] = useState(0);
    const [seguinte, setSeguinte] = useState(0);
    const [minuto, setMinuto] = useState(0);
    const [falta, setFalta] = useState(0);
    const [hora, sethora] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date()
            setMinuto(date.getMinutes());
            sethora(date.getHours());
            if(horario.length>0)
                Proximo();
            setTime(date);
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    }, [time]);

    function Proximo() {
        var index = 0;
        for (var i = 1; i < horario.length; i++)
            if (eProximo(horario[i])) {
                index = i;
                break;
            }
        setProximo(index);
        setFalta(getFalta(index));
        setAnterior(getAnterior(index));
        setSeguinte(getSeguinte(index));
    }

    function getFalta(index){
        var minutes = getMinutos(horario[index]) - getMinutos(hora+":"+minuto);
        if(minutes >= 0)
            return minutes;
        else{
            let actminute = horario[index].split(':')[1];
            let hour = (24 - hora) + parseInt(horario[index].split(':')[0]);
            hour *=60;
            return hour - parseInt(minuto) + parseInt(actminute);
        }
    }

    function getFaltaEmHora(a){
        if(a > 60){
            return Math.floor(a/60)+"h:"+(a%60)+" min";
        }
        if(a > 0)
            return a+" min";
        return "agora";
    }

    function eProximo(b){
        return getMinutos(b) >= getMinutos(hora+":"+minuto);
    }

    function getMinutos(b){
        return b.split(':')[0] * 60 + parseInt(b.split(':')[1]); 
    }

    function getAnterior(index){
        if(index == 0)
            return horario.length-1;
        else
            return parseInt(index)-1;
    }

    function getSeguinte(index){
        if(index == horario.length -1)
            return 0;
        else
            return parseInt(index) +1;
    }

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
                    <label style={{ color: 'black' }}>Anterior <br /> <span>{horario[anterior]}</span></label>
                    <label className="actual" >Proximo <br /><span>{horario[proximo]}</span><br /> <i className="far fa-clock"> {getFaltaEmHora(falta)}</i></label>
                    <label style={{ color: 'black' }}>Seguinte <br /> <span>{horario[seguinte]}</span></label>
                </div>
            </div>
        )
}