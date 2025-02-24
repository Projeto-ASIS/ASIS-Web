import React, { useState } from 'react';

export default function Fields() {

  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    address: false,
    househoodInfo: false,
    expenses: false,
    familyInfo: false,
    servicesPlace:false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => {
      const updatedSections = {
        ...prev,
        [section]: !prev[section]
      };
      return updatedSections;
    });
  };

  return (
    <section className='container'>
      <div className="">
        <button
          onClick={() => toggleSection('personalInfo')}
          className={expandedSections.address ? "data__field" : "data__field"}
        >
          <span>Minhas informações</span>
          <span>{expandedSections.personalInfo ? '−' : '+'}</span>
        </button>

        {expandedSections.personalInfo && (
          <div className="content">
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
        )}
      </div>

      <div className="">
        <button
          onClick={() => toggleSection('address')}
          className={expandedSections.address ? "data__field " : "data__field"}
        >
          <span>Endereço da familia</span>
          <span>{expandedSections.address ? '−' : '+'}</span>
        </button>

        {expandedSections.address && (
          <div className="content">
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
        )}
      </div>

      <div className="">
        <button
          onClick={() => toggleSection('househoodInfo')}
          className={expandedSections.address ? "data__field " : "data__field"}
        >
          <span>Dados do domicilio</span>
          <span>{expandedSections.househoodInfo ? '−' : '+'}</span>
        </button>

        {expandedSections.househoodInfo && (
          <div className="content">
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
        )}
      </div>

      <div className="">
        <button
          onClick={() => toggleSection('expenses')}
          className={expandedSections.address ? "data__field " : "data__field"}
        >
          <span>Dispesas mensais</span>
          <span>{expandedSections.expenses ? '−' : '+'}</span>
        </button>

        {expandedSections.expenses && (
          <div className="content">
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
        )}
      </div>

      <div className="">
        <button
          onClick={() => toggleSection('familyInfo')}
          className={expandedSections.address ? "data__field " : "data__field"}
        >
          <span>Caracteristicas da familia</span>
          <span>{expandedSections.familyInfo ? '−' : '+'}</span>
        </button>

        {expandedSections.familyInfo && (
          <div className="content">
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
        )}
      </div>

      <div className="">
        <button
          onClick={() => toggleSection('servicesPlace')}
          className={expandedSections.address ? "data__field " : "data__field"}
        >
          <span>Unidades de atendimento</span>
          <span>{expandedSections.servicesPlace ? '−' : '+'}</span>
        </button>

        {expandedSections.servicesPlace && (
          <div className="content">
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
        )}
      </div>

    </section>
  )
}


