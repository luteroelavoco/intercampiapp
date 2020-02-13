import React from 'react';
import Inicio from "./inicio";
import Acerca from "./Acerca";
import Rotas from "./Rotas";
export default function Main(){
    return(
        <div className="content">
            <Inicio/>
            <Acerca/>
            <Rotas/>
        </div>
    )
} 