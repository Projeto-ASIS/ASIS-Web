import React, { useState } from 'react';

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

        <div className="content" aria-expanded={expandedSections.personalInfo}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input placeholder="Email" hasIcon/>
              {/* <input
                type="text"
                placeholder="Nome completo da Pessoa de Referência"
                className="input"
              /> */}
            </div>
            <div className="inputGroup">
              <input
                type="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <div className="inputGroup">
              <input
                type="tel"
                placeholder="Telefone"
                className="input"
              />
            </div>
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Documento"
                className="input"
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

          <div className="content" aria-expanded={expandedSections.address}>
            <div className="inputGrid">
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Documento"
                  className="input"
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
          <div className="content" aria-expanded={expandedSections.househoodInfo}>
            <div className="inputGrid">
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Documento"
                  className="input"
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
          <div className="content" aria-expanded={expandedSections.expenses}>
            <div className="inputGrid">
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Documento"
                  className="input"
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
          <div className="content" aria-expanded={expandedSections.familyInfo}>
            <div className="inputGrid">
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Documento"
                  className="input"
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
          <div className="content" aria-expanded={expandedSections.servicesPlace}>
            <div className="inputGrid">
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Documento"
                  className="input"
                />
              </div>
            </div>
          </div>
        {/* )} */}
      </div>

    </section>
  )
}