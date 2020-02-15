import React, { useEffect, useState } from 'react';
import "./index.css";
import Tabela from "../../components/Tabelas";
export default function Rotas() {
    
    const [tabs, setTabs] = useState([
        {
            id: 1,
            origem: "Liberdade",
            destino: "Palmares",
            ref: "Rota1",
            subRotas: [{
                name: "Rota A",
                ref: "Rota1A",
                origem: ["21:00", "21:10","21:15","21:20","21:30","21:35","21:50"],
                destino:["21:00", "21:10","21:15","21:20","21:30","21:35","21:50"],
            },
            {
                name: "Rota B",
                ref: "Rota1B",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            }
            ],

        },
        {
            id: 2,
            origem: "Liberdade",
            destino: "Auroras",
            ref: "Rota2",
            subRotas: [{
                name: "Rota A",
                ref: "Rota2A",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            },
            {
                name: "Rota B",
                ref: "Rota2B",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            }
            ],
        },
        {
            id: 3,
            origem: "Auroras",
            destino: "Palmares",
            ref: "Rota3",
            subRotas: [{
                name: "Rota A",
                ref: "Rota3A",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            },
            {
                name: "Rota B",
                ref: "Rota3B",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            }
            ],
        }
    ]);
    const [tabsPub, setTabsPub] = useState([
        {
            id: 3,
            origem: "Redenção",
            destino: "Fortaleza",
            rodoviario:"(Catraca)",
            ref: "Rota4A",
            subRotas: [{
                name: "Dia útil",
                ref: "diaA",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            },
            {
                name: "SÁB",
                ref: "sabA",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            },
            {
                name: "DOM.",
                ref: "domA",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            }
            ],
        },
        {
            id: 4,
            origem: "Redenção",
            destino: "Fortaleza",
            rodoviario:"(Rodoviario)",
            ref: "Rota4B",
            subRotas: [{
                name: "Dia útil",
                ref: "diaB",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            },
            {
                name: "SÁB",
                ref: "sabB",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            },
            {
                name: "DOM.",
                ref: "domB",
                origem: ["21:10", "21:40"],
                destino: ["21:10", "21:40"]
            }
            ],
        }
    ])

    return (
        <div className="rotas">
            <Tabela tabs={tabs} tabsPub={tabsPub} />
        </div>
    )
} 