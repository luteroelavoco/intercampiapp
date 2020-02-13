import React, { useState } from 'react';
import './index.css';
import logo from "../../assets/imagem.jpg";
import Carrousel from "../../components/CarrouselNews";

export default function Inicio() {
    const [news, setNews] = useState([
        {
            id: 1,
            info: "Nóticia",
            img: logo,
            day: "27",
            month: "Fev",
            title: "Novos horario para Ônibus público",
            subtitle: "Horário actualizado para periodo de Férias",
            description: "Graças ao senhor Eudásio Bezerra do setor de tráfego metropolitano da FretCar, todos horários da linha metropolitana (catraca) foram actualizados.",
            time: "10 horas",
            views: "26 visualizações",
        },
        {
            id: 2,
            info: "Nóticia",
            img: logo,
            day: "27",
            month: "Fev",
            title: "Novos horario para Ônibus público",
            subtitle: "Horário actualizado para periodo de Férias",
            description: "Graças ao senhor Eudásio Bezerra do setor de tráfego metropolitano da FretCar, todos horários da linha metropolitana (catraca) foram actualizados.",
            time: "10 horas",
            views: "26 visualizações",
        },
        {
            id: 3,
            info: "Nóticia",
            img: logo,
            day: "27",
            month: "Fev",
            title: "Novos horario para Ônibus público",
            subtitle: "Horário actualizado para periodo de Férias",
            description: "Graças ao senhor Eudásio Bezerra do setor de tráfego metropolitano da FretCar, todos horários da linha metropolitana (catraca) foram actualizados.",
            time: "10 horas",
            views: "26 visualizações",
        },
        {
            id: 4,
            info: "Nóticia",
            img: logo,
            day: "27",
            month: "Fev",
            title: "Novos horario para Ônibus público",
            subtitle: "Horário actualizado para periodo de Férias",
            description: "Graças ao senhor Eudásio Bezerra do setor de tráfego metropolitano da FretCar, todos horários da linha metropolitana (catraca) foram actualizados.",
            time: "10 horas",
            views: "26 visualizações",
        },
        {
            id: 5,
            info: "Nóticia",
            img: logo,
            day: "27",
            month: "Fev",
            title: "Novos horario para Ônibus público",
            subtitle: "Horário actualizado para periodo de Férias",
            description: "Graças ao senhor Eudásio Bezerra do setor de tráfego metropolitano da FretCar, todos horários da linha metropolitana (catraca) foram actualizados.",
            time: "10 horas",
            views: "26 visualizações",
        },
        {
            id: 6,
            info: "Nóticia",
            img: logo,
            day: "27",
            month: "Fev",
            title: "Novos horario para Ônibus público",
            subtitle: "Horário actualizado para periodo de Férias",
            description: "Graças ao senhor Eudásio Bezerra do setor de tráfego metropolitano da FretCar, todos horários da linha metropolitana (catraca) foram actualizados.",
            time: "10 horas",
            views: "26 visualizações",
        },
        {
            id: 7,
            info: "Nóticia",
            img: logo,
            day: "27",
            month: "Fev",
            title: "Novos horario para Ônibus público",
            subtitle: "Horário actualizado para periodo de Férias",
            description: "Graças ao senhor Eudásio Bezerra do setor de tráfego metropolitano da FretCar, todos horários da linha metropolitana (catraca) foram actualizados.",
            time: "10 horas",
            views: "26 visualizações",
        },
        {
            id: 8,
            info: "Nóticia",
            img: logo,
            day: "27",
            month: "Fev",
            title: "Novos horario para Ônibus público",
            subtitle: "Horário actualizado para periodo de Férias",
            description: "Graças ao senhor Eudásio Bezerra do setor de tráfego metropolitano da FretCar, todos horários da linha metropolitana (catraca) foram actualizados.",
            time: "10 horas",
            views: "26 visualizações",
        }

    ])
    
    return (
        <div className="inicio">
            <Carrousel news={news} />
        </div>
    )
}