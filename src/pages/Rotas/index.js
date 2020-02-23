import React, { useEffect, useState } from 'react';
import "./index.css";
import Tabela from "../../components/Tabelas";
import axios from 'axios';
export default function Rotas() {

    ///Rotas da saída Auroras e Palmares
    const[isloading , setIsloading] = useState(true);

    function Origens(rotaname, indexRota, indexSubrota){
        var horario =[];
        axios.get("https://intercampi-5823f.firebaseio.com/horarios/" + rotaname + ".json").then(
              res =>{
                  const date = res.data;
                  horario = date.split(",");
                  const element = tabs.filter(item=>{
                      if(item.id == indexRota){
                          item.subRotas[indexSubrota].origem = horario;
                      }
                      return item;
                  })
                  setTabs(element);
              }
          );   
    }
    function Destinos(rotaname, indexRota, indexSubrota){
        var horario =[];
        axios.get("https://intercampi-5823f.firebaseio.com/horarios/" + rotaname + ".json").then(
              res =>{
                  const date = res.data;
                  horario = date.split(",");
                  const element = tabs.filter(item=>{
                      if(item.id == indexRota){
                          item.subRotas[indexSubrota].destino = horario;
                      }
                      return item;
                  })
                  setTabs(element);
              }
          );   
    }

    useEffect(()=>{

        // Rotas Auroras Palmares 
        Origens("AP_sA_rA",3,0);
        Origens("AP_sA_rB",3,1);
        Origens("AP_sA_rC",3,2);
        Origens("AP_sA_rB",3,3);
        Destinos("AP_sP_rA",3,0);
        Destinos("AP_sP_rB",3,1);
        Destinos("AP_sP_rC",3,2);
        Destinos("AP_sP_rD",3,3);
        
        // Liberdade Auroras
        Origens("LA_sL_rA",2,0);
        Origens("LA_sL_rB",2,1);
        Origens("LA_sL_rC",2,2);
        Origens("LA_sL_rD",2,3);
        Destinos("LA_sA_rA",2,0);
        Destinos("LA_sA_rB",2,1);
        Destinos("LA_sA_rC",2,2);
        Destinos("LA_sA_rD",2,3);

        // Liberdade Palmares
        Origens("LP_sL_rA",1,0);
        Origens("LP_sL_rB",1,1);
        Origens("LP_sL_rC",1,2);
        Origens("LP_sL_rD",1,3);
        Destinos("LP_sP_rA",1,0);
        Destinos("LP_sP_rA",1,1);
        Destinos("LP_sP_rA",1,2);
        Destinos("LP_sP_rA",1,3);

        //
        tabes("tabsLabel_LP",1);
        tabes("tabsLabel_LA",2);
        tabes("tabsLabel_AP",3);

        // Fortaleza redenção Catraca

        OrigensPub("Rodov2_sR_diaUtil",3,0);
        DestinosPub("Rodov2_sF_diaUtil",3,0);
        OrigensPub("Rodov2_sR_Sab",3,1);
        DestinosPub("Rodov2_sF_Sab",3,1);
        OrigensPub("Rodov2_sR_Dom",3,2);
        DestinosPub("Rodov2_sF_Dom",3,2);

        // Fortaleza redenção Rodoviario

        OrigensPub("Rodov_sR_diaUtil",4,0);
        DestinosPub("Rodov_sF_diaUtil",4,0);
        OrigensPub("Rodov_sR_Sab",4,1);
        DestinosPub("Rodov_sF_Sab",4,1);
        OrigensPub("Rodov_sR_Dom",4,2);
        DestinosPub("Rodov_sF_Dom",4,2);

        
    },[])

    function tabes(label, id){
        axios.get("https://intercampi-5823f.firebaseio.com/horarios/" + label + ".json").then(
              res =>{
                  const date =  res.data;
                  var h = date.split(",");
                  const element = tabs.filter(item=>{
                      if(item.id == id){
                          item.tab = (h.length == 0) ? 1 : h.length;
                          item.class = "tabe _tab tam"+item.tab;
                      }
                      if(item.tab > 1){
                        for(var i = 0; i < item.tab; i++){
                            item.subRotas[i].class = "_tablinks";
                        }
                      }
                      return item;
                  })
                  setTabs(element);
              }
          );   
    }
    // TransportePublico
    function OrigensPub(rotaname, indexRota, indexSubrota){
        var horario =[];
        axios.get("https://intercampi-5823f.firebaseio.com/horarios/" + rotaname + ".json").then(
              res =>{
                  const date = res.data;
                  horario = date.split(",");
                  const element = tabsPub.filter(item=>{
                      if(item.id == indexRota){
                          item.subRotas[indexSubrota].origem = horario;
                      }
                      return item;
                  })
                  setTabsPub(element);
              }
          );   
    }
    function DestinosPub(rotaname, indexRota, indexSubrota){
        var horario =[];
        axios.get("https://intercampi-5823f.firebaseio.com/horarios/" + rotaname + ".json").then(
              res =>{
                  const date = res.data;
                  horario = date.split(",");
                  const element = tabsPub.filter(item=>{
                      if(item.id == indexRota){
                          item.subRotas[indexSubrota].destino = horario;
                      }
                      return item;
                  })
                  setTabsPub(element);
              }
          );   
    }

    const [tabs, setTabs] = useState([
        {
            id: 1,
            origem: "Liberdade",
            destino: "Palmares",
            ref: "Rota1",
            tab:1,
            class :"tabe _tab tam4",
            subRotas: [{
                class :"_tablinks ",
                name: "Rota A",
                ref: "Rota1A",
                origem: ["14:00", "15:10", "16:18", "17:28", "17:30", "17:35"],
                destino: ["14:00", "15:10", "16:18", "17:28", "17:30", "17:35"],
            },
            {
                class :"_tablinks invisible",
                name: "Rota B",
                ref: "Rota1B",
                origem: ["11:10", "11:40", "12:30", "14:10", "15:30"],
                destino: ["11:10", "14:40"]
            }
                ,
            {
                class :"_tablinks invisible",
                name: "Rota C",
                ref: "Rota1C",
                origem: ["11:10", "11:40", "12:30", "14:10", "15:30"],
                destino: ["11:10", "14:40"]
            }
                ,
            {
                class :"_tablinks invisible",
                name: "Rota D",
                ref: "Rota1D",
                origem: ["11:10", "11:40", "12:30", "14:10", "15:30"],
                destino: ["11:10", "14:40"]
            }
            ],

        },
        {
            id: 2,
            origem: "Liberdade",
            destino: "Auroras",
            ref: "Rota2",
            class :"tabe _tab tam4",
            tab:1,
            subRotas: [{
                class :"_tablinks",
                name: "Rota A",
                ref: "Rota2A",
                origem: [],
                destino: []
            },
            {
                class :"_tablinks invisible",
                name: "Rota B",
                ref: "Rota2B",
                origem: [],
                destino: []
            },
            {
                class :"_tablinks invisible",
                name: "Rota C",
                ref: "Rota2C",
                origem: [],
                destino: []
            },
            {
                class :"_tablinks invisible",
                name: "Rota D",
                ref: "Rota2D",
                origem: [],
                destino: []
            }
            ],
        },
        {
            id: 3,
            origem: "Auroras",
            destino: "Palmares",
            ref: "Rota3",
            class :"tabe _tab tam4",
            tab:1,
            subRotas: [{
                class :"_tablinks",
                name: "Rota A",
                ref: "Rota3A",
                origem: [],
                destino: []
            },
            {
                class :"_tablinks invisible",
                name: "Rota B",
                ref: "Rota3B",
                origem: [],
                destino:[]
            },
            {
                class :"_tablinks invisible",
                name: "Rota C",
                ref: "Rota3C",
                origem: [],
                destino:[]
            },
            {
                class :"_tablinks invisible",
                name: "Rota D",
                ref: "Rota3D",
                origem: [],
                destino: []
            }
            ],
        }
    ]);
    const [tabsPub, setTabsPub] = useState([
        {
            id: 3,
            origem: "Redenção",
            destino: "Fortaleza",
            rodoviario: "(Catraca)",
            ref: "Rota4A",
            subRotas: [{
                name: "Dia útil",
                ref: "diaA",
                origem: [],
                destino: []
            },
            {
                name: "SÁB",
                ref: "sabA",
                origem: [],
                destino: []
            },
            {
                name: "DOM.",
                ref: "domA",
                origem: [],
                destino: []
            }
            ],
        },
        {
            id: 4,
            origem: "Redenção",
            destino: "Fortaleza",
            rodoviario: "(Rodoviario)",
            ref: "Rota4B",
            subRotas: [{
                name: "Dia útil",
                ref: "diaB",
                origem: [],
                destino: []
            },
            {
                name: "SÁB",
                ref: "sabB",
                origem: [],
                destino: []
            },
            {
                name: "DOM.",
                ref: "domB",
                origem: [],
                destino: []
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