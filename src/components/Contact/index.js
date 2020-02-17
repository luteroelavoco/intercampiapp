import React from 'react';
import capa from "../../assets/capa.png";
import "./index.css";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="contactar">
                <div className="imagem">
                    <img src={capa} />
                </div>
                <div className="formulario">
                    <div className="top">
                        <label style={{ color: 'white' }}> <i className="fas fa-edit"></i> Entrar em contacto</label>
                    </div>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s11">
                                    <input id="nome" type="text" className="validate" />
                                    <label htmlFor="nome">Nome</label>
                                </div>

                            </div>
                            <div className="row">
                                <div className="input-field col s11">
                                    <input id="email" type="text" className="validate" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s11">
                                    <textarea id="desc" className="materialize-textarea"></textarea>
                                    <label htmlFor="desc">Descrição</label>
                                </div>
                            </div>
                            <button> Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};