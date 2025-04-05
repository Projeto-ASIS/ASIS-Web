import TabTitle from "@/common/components/EmployeeTabTitle/TabTitle";
import './InitialTab.css'
import { useState, useRef, useEffect } from "react";
import PsychologicalSupportIcon from "@/common/components/PsychologicalSupportIcon";
import HomevisitIcon from "@/common/components/HomevisitIcon";
import CadUnicoIcon from "@/common/components/CadUnicoIcon";
import { Link } from "react-router-dom";
export default function InitialTab() {

  const cards = [
    {title:'Atendi. Psicológico', icon:<PsychologicalSupportIcon fill="#323232" /> , styleCard:'cardYellow',amount:12},
    {title:'Visitar Domiciliar', icon:<HomevisitIcon fill="#fff" stroke="#fff" /> , styleCard:'cardBlue',amount:18},
    {title:'CadUnico', icon:<CadUnicoIcon fill="#fff" /> , styleCard:'cardPink',amount:24},
  ]


  return (
    <>

      <TabTitle titleTab="REGISTROS GERAIS" titleSpan="PAINEL DO FUNCIONÁRIO" />
      <div className="all__sections">
        <div className="top__section">

          {cards.map((card, index) => (
<Link className="link" style={{ textDecoration: 'none',color: 'in' }} to={`/employee/AppoinmentsTab`}>
            <div key={index} className={`card ${card.styleCard}`}>
              
               <div className="title__card">
              <h3>{card.title}</h3>
              <p className="icon-card" style={{scale: '0.9'}} >{card.icon}</p>
              </div>
              
              <p><h3>{card.amount}</h3> agendamentos</p>
             
             
            </div>
              </Link>
          ))}
        </div>

      </div>
    </>
  )
}