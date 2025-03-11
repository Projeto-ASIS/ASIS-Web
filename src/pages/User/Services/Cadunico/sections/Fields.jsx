import  { useState } from 'react';
import {AtSignIcon} from "lucide-react"


import Input from '@/common/components/Input';

export default function Fields() {

  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    address: false,
    househoodInfo: false,
    expenses: false,
    familyInfo: false,
    servicesPlace: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section className='container'>
      <div className="data">
        <button
          onClick={() => toggleSection('personalInfo')}
          className="data__field"
        >
          <span>Minhas informações</span>
          <span>{expandedSections.personalInfo ? '−' : '+'}</span>
        </button>

        <div className="data__data__content" aria-expanded={expandedSections.personalInfo}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input required placeholder="Email" hasIcon icon={AtSignIcon} />
              {/* <Input
                type="text"
                placeholder="Nome completo da Pessoa de Referência"
                className="input"
              /> */}
            </div>
            <div className="inputGroup">
              <Input
                type="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="tel"
                placeholder="Telefone"
                // className="input"
                // hasIcon
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Documento"
                // className="input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="data">
        <button
          onClick={() => toggleSection('address')}
          className="data__field"
        >
          <span>Endereço da familia</span>
          <span>{expandedSections.address ? '−' : '+'}</span>
        </button>

        <div className="data__content" aria-expanded={expandedSections.address}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Nome completo"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="email"
                placeholder="Email"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="tel"
                placeholder="Telefone"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Documento"
                // className="input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="data">
        <button
          onClick={() => toggleSection('househoodInfo')}
          className="data__field"
        >
          <span>Dados do domicilio</span>
          <span>{expandedSections.househoodInfo ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.househoodInfo && ( */}
        <div className="data__content" aria-expanded={expandedSections.househoodInfo}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Nome completo"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="email"
                placeholder="Email"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="tel"
                placeholder="Telefone"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Documento"
                // className="input"
              />
            </div>
          </div>
        </div>
        {/* )} */}
      </div>

      <div className="data">
        <button
          onClick={() => toggleSection('expenses')}
          className="data__field"
        >
          <span>Dispesas mensais</span>
          <span>{expandedSections.expenses ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.expenses && ( */}
        <div className="data__content" aria-expanded={expandedSections.expenses}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Nome completo"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="email"
                placeholder="Email"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="tel"
                placeholder="Telefone"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Documento"
                // className="input"
              />
            </div>
          </div>
        </div>
        {/* )} */}
      </div>

      <div className="data">
        <button
          onClick={() => toggleSection('familyInfo')}
          className="data__field"
        >
          <span>Caracteristicas da familia</span>
          <span>{expandedSections.familyInfo ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.familyInfo && ( */}
        <div className="data__content" aria-expanded={expandedSections.familyInfo}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Nome completo"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="email"
                placeholder="Email"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="tel"
                placeholder="Telefone"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Documento"
                // className="input"
              />
            </div>
          </div>
        </div>
        {/* )} */}
      </div>

      <div className="data">
        <button
          onClick={() => toggleSection('servicesPlace')}
          className="data__field"
        >
          <span>Unidades de atendimento</span>
          <span>{expandedSections.servicesPlace ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.servicesPlace && ( */}
        <div className="data__content" aria-expanded={expandedSections.servicesPlace}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Nome completo"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="email"
                placeholder="Email"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="tel"
                placeholder="Telefone"
                // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Documento"
                // className="input"
              />
            </div>
          </div>
        </div>
        {/* )} */}
      </div>

    </section>
  )
}