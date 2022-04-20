import React, { useState } from 'react';
import capa from "../../assets/capa.png";
import "./index.css";
import emailjs from 'emailjs-com';

export default function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();
        if (window.confirm("Tens a certeza que desejas enviar essa mensagem ?")) {
            var template_params = {
                "user_name": name,
                "user_email": email,
                "message": message
            }
            var service_id = process.env.service_id;
            var template_id = process.env.template_g2LYsXU9;
            if (validateEmail(email)) {
                emailjs.send(service_id, template_id, template_params);
                setName("");
                setEmail("");
                setMessage("");
                alert("O seu email foi enviado com sucesso.");
            }
            else{
                alert("Introduza um email válido.");
            }
        }
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    return (
        <div className="Footer">
            <div className="contactar">
                <div
                    className="imagem"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <img src={capa} />
                </div>
                <div
                    className="formulario"
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className="top">
                        <label
                            style={{ color: 'white' }}>
                             <i className="fas fa-edit">  </i> 
                              Reportar problema</label>
                    </div>
                    <div className="row">
                        <form className="col s12" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="input-field col s11">
                                    <input
                                        id="nome"
                                        type="text"
                                        className="validate"
                                        name="user_name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required />
                                    <label htmlFor="nome">Nome</label>
                                </div>

                            </div>
                            <div className="row">
                                <div className="input-field col s11">
                                    <input
                                        id="email"
                                        type="text"
                                        className="validate"
                                        name="user_email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s11">
                                    <textarea
                                        id="desc"
                                        className="materialize-textarea"
                                        name="message"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                    <label htmlFor="desc" >Descrição</label>
                                </div>
                            </div>
                            <button type="submit" value="Send"> Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};