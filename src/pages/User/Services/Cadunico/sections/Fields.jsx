import React, { useState } from 'react';

export default function Fields() {

  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    address: false,
    household: false,
    expenses: false,
    services: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section className='container'>
      <div className="">
        <button
          onClick={() => toggleSection('personalInfo')}
          className="data__field"
        >
          <span>Informações Pessoais</span>
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
        <button className="data__field"
          onClick={() => toggleSection('address')}

        >
          <span>Endereço da Família</span>
          <span>{expandedSections.address ? '−' : '+'}</span>
        </button>

        {expandedSections.address && (
          <div className="content">
            <div className="inputGrid">
              <div className="inputFull">
                <input
                  type="text"
                  placeholder="Endereço"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Estado"
                  className="input"
                />
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="">
        <button
          onClick={() => toggleSection('household')}
          className="data__field"
        >
          <span>Características da Família</span>
          <span>{expandedSections.household ? '−' : '+'}</span>
        </button>

        {expandedSections.household && (
          <div className="content">
            <div className="inputGrid">
              <div className="inputFull">
                <textarea
                  placeholder="Descreva as características da família"
                  className="textarea"
                />
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="">
        <button
          onClick={() => toggleSection('expenses')}
          className="data__field"
        >
          <span>Despesas Mensais</span>
          <span>{expandedSections.expenses ? '−' : '+'}</span>
        </button>

        {expandedSections.expenses && (
          <div className="content">
            <div className="inputGrid">
              <div className="inputGroup">
                <input
                  type="number"
                  placeholder="Aluguel"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="number"
                  placeholder="Alimentação"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="number"
                  placeholder="Transporte"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="number"
                  placeholder="Outros"
                  className="input"
                />
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="">
        <button
          onClick={() => toggleSection('services')}
          className="data__field"
        >
          <span>Unidades de Atendimento</span>
          <span>{expandedSections.services ? '−' : '+'}</span>
        </button>

        {expandedSections.services && (
          <div className="content">
            <div className="inputGrid">
              <div className="inputFull">
                <select className="input">
                  <option value="">Selecione uma unidade</option>
                  <option value="1">Unidade 1</option>
                  <option value="2">Unidade 2</option>
                  <option value="3">Unidade 3</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>    <div className="">
        <button
          onClick={() => toggleSection('personalInfo')}
          className="data__field"
        >
          <span>Informações Pessoais</span>
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
        <button className="data__field"
          onClick={() => toggleSection('address')}

        >
          <span>Endereço da Família</span>
          <span>{expandedSections.address ? '−' : '+'}</span>
        </button>

        {expandedSections.address && (
          <div className="content">
            <div className="inputGrid">
              <div className="inputFull">
                <input
                  type="text"
                  placeholder="Endereço"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Estado"
                  className="input"
                />
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="">
        <button
          onClick={() => toggleSection('household')}
          className="data__field"
        >
          <span>Características da Família</span>
          <span>{expandedSections.household ? '−' : '+'}</span>
        </button>

        {expandedSections.household && (
          <div className="content">
            <div className="inputGrid">
              <div className="inputFull">
                <textarea
                  placeholder="Descreva as características da família"
                  className="textarea"
                />
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="">
        <button
          onClick={() => toggleSection('expenses')}
          className="data__field"
        >
          <span>Despesas Mensais</span>
          <span>{expandedSections.expenses ? '−' : '+'}</span>
        </button>

        {expandedSections.expenses && (
          <div className="content">
            <div className="inputGrid">
              <div className="inputGroup">
                <input
                  type="number"
                  placeholder="Aluguel"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="number"
                  placeholder="Alimentação"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="number"
                  placeholder="Transporte"
                  className="input"
                />
              </div>
              <div className="inputGroup">
                <input
                  type="number"
                  placeholder="Outros"
                  className="input"
                />
              </div>
            </div>
          </div>
        )}
      </div>


      <div className="">
        <button
          onClick={() => toggleSection('services')}
          className="data__field"
        >
          <span>Unidades de Atendimento</span>
          <span>{expandedSections.services ? '−' : '+'}</span>
        </button>

        {expandedSections.services && (
          <div className="content">
            <div className="inputGrid">
              <div className="inputFull">
                <select className="input">
                  <option value="">Selecione uma unidade</option>
                  <option value="1">Unidade 1</option>
                  <option value="2">Unidade 2</option>
                  <option value="3">Unidade 3</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}