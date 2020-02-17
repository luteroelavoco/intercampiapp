import React from 'react';
import "./index.css";
export default function Acerca() {

    return (
        <div className="acerca">
            <div className="item">
                <i className="fas fa-question"></i>
                <h3>O que é o intercampi?</h3>
                <p>
                    intercampi é uma aplicação disponivel na Play Store que ajuda os alunos da  Unilab a terem informções relativas ao horário do ônibus.
                 </p>
            </div>
            <div className="item">
                <i className="fab fa-angellist"></i>
                <h3>Facilidade</h3>
                <p>
                    O intercampi trata a responsablidade do controle do horário com muito facilidade, dentro do aplicativo tens acesso aos horários em poucos cliques.
                 </p>
            </div>
            <div className="item">
                <i className="far fa-bell"></i>
                <h3>Pontualidade</h3>
                <p>
                    Saia de casa sabendo o horário certo que o Ônibus passa, o intercampi evita que tu percas o seu tempo na parada. Chega na hora e no momento certo.
                 </p>
            </div>

        </div>
    )
} 