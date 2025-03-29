import TabTitle from "@/common/components/EmployeeTabTitle/TabTitle";
import './InitialTab.css'
import Calendar from '../AppoinmentsTab/sections/Calendar/Calendar';
import { useState, useRef, useEffect } from "react";
export default function InitialTab() {
 
  return (
    <>
      <TabTitle titleTab="REGISTROS GERAIS" titleSpan="ACOMPANHE SEU HISTÓRICO DE SERVIÇOS ACESSADOS" />
      <div className="all__sections">
        <div className="top__section">
         <Calendar />
         <div className="records-section">
        <h3>ACOMPANHAR AS FAMÍLIAS CADASTRADAS NA UNIDADE</h3>
        <h4>FAMÍLIAS</h4>
        
        <table className="records-table">
          <thead>
            <tr>
              <th>NOME DO RESPONSÁVEL</th>
              <th>DESCRIÇÃO</th>
              <th>NOME DO TÉCNICO RESPONSÁVEL</th>
              <th>CÓDIGO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Luiz Roberto Lima</td>
              <td>Falta de saniamento e alimentação básica</td>
              <td>Huam Vicente</td>
              <td>14/02/2015</td>
            </tr>
            <tr>
              <td>Luiz Roberto Lima</td>
              <td>Falta de saniamento e alimentação básica</td>
              <td>Huam Vicente</td>
              <td>14/02/2015</td>
            </tr>
            <tr>
              <td>Luiz Roberto Lima</td>
              <td>Falta de saniamento e alimentação básica</td>
              <td>Huam Vicente</td>
              <td>14/02/2015</td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>

      </div>
    </>
  )
}