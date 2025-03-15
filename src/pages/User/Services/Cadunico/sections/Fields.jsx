import { useState } from 'react';

import Input from '@/common/components/Input';
import { AtSignIcon } from 'lucide-react';

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
          <span className='title-span'>Minhas informações</span>
          <span>{expandedSections.personalInfo ? '−' : '+'}</span>
        </button>
        <div className="content" aria-expanded={expandedSections.personalInfo}>
          <h4 className='text-blue'>Identificação</h4>
          <div className="inputGrid">

            <div className="inputGroup">

              <Input required placeholder="Nome Completo da Pessoa de Referência" hasIcon icon={AtSignIcon} />
              {/* <Input
                type="text"
                placeholder="Nome completo da Pessoa de Referência"
                className="input"
              /> */}
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Telefone primário"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Telefone secundário"
              // className="input"
              // hasIcon
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Nome da mãe"
              // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Email"
              // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Cor/Raça"
              // className="input"
              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Possui deficiência"
              // className="input"
              />
            </div>

          </div>
          <h4 className='text-blue'>Escolaridade</h4>
          <div className="inputGrid">
            <div className="inputGroup" >
              <Input
                type="text"
                placeholder="Qual o curso mais elevado que frequentou, no qual concluiu pelo menos um série?"

              />
            </div>
            <div className="inputGroup" >
              <Input
                type="number"
                placeholder="Qual o último ano/série que concluiu com aprovação nesse curso que frequentou?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Concluiu o curso que frequentou?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Sabe ler e escrever?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Frequenta escola ou creche"

              />
            </div>
          </div>
          <h4 className='text-blue'>Trabalho e renda</h4>
          <div className="inputGrid">
            <div className="inputGroup" >
              <Input
                type="text"
                placeholder="Trabalhou na semana anterior a entrevista"

              />
            </div>

            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Recebe ajuda ou doação?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Seguro-desemprego"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Remuneção de trabalho no mês anterior à entrevista"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Pensão alimnetícia"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Outras rendas"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Estava afastado (a) de um trabalho no mês anterior à entrevista "

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Aposentadoria, pensão ou BPC/LOAS"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Trabalho remunerado nos últmos 12 meses anteriores à entrevista?"

              />
            </div>

          </div>
          <h4 className='text-blue'>Documentos</h4>
          <div className="inputGrid">

            <div className="inputGroup" >
              <label htmlFor="">Carteira de Identidade</label>
              <Input
                type="file"
                placeholder=" "

              />
            </div>
            <div className="inputGroup">
              <label htmlFor="">Título de Eleitor</label>
              <Input
                type="file"
                placeholder=" "

              />
            </div>
            <div className="inputGroup">
              <label htmlFor="">Carteira de Trabalho</label>
              <Input
                type="file"
                placeholder=" "

              />
            </div>
            <div className="inputGroup">
              <label htmlFor="">Certidão de nascimento</label>
              <Input
                type="file"
                placeholder=" "

              />
            </div>
          </div>
        </div>
      </div>

      <div className="data">
        <button
          onClick={() => toggleSection('househoodInfo')}
          className="data__field "
        >
          <span className='title-span'>Endereço da familia</span>
          <span>{expandedSections.househoodInfo ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.househoodInfo && ( */}
        <div className="content" aria-expanded={expandedSections.househoodInfo}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Localidade(bairro,povoado,vila...)"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Logradouro"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Número"

              />
            </div>

            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Complemento do número"

              />

            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Referência"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Município"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Cidade"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Estado"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="CEP"

              />
            </div>
            <div className="inputGroup">
              <label htmlFor="">Comprovante de residência</label>
              <Input
                type="file"
                placeholder=" "

              />
            </div>

          </div>
          {/* )} */}
        </div>
      </div>

      <div className="data">
        <button
          onClick={() => toggleSection('expenses')}
          className="data__field"
        >
          <span className='title-span'>Dados do domicílio</span>
          <span>{expandedSections.expenses ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.expenses && ( */}
        <div className="content" aria-expanded={expandedSections.expenses}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Tamanho da propriedade"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Tipo"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Quantidade de cômodos"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Quantidade de cômodos utilizados pra dormir"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Material do piso"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Possui reboco?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Paredes externas possuem reboco?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="A residência possui água encanada?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Possui baheiro"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Quantidade de banheiros"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Possui fossa sanitária?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="O logradouro possui coleta de lixo?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="A residência possui rede elétrica?"

              />
            </div>

            <div className="inputGroup">
              <Input
                type="text"
                placeholder="O domicílio possui energia   Tem pavimentação em frente ao domicílio?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="A rua é calçada?"

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
          <span className='title-span'>Despesas mensais</span>
          <span>{expandedSections.expenses ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.expenses && ( */}
        <div className="content" aria-expanded={expandedSections.expenses}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Energia elétrica"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Gás, carvão ou lenha"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Água e esgoto"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Alimentação, higiêne e limpeza"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Transporte"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Aluguel"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Medicamentos de uso regular"

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
          <span className='title-span'>Características da família</span>
          <span>{expandedSections.familyInfo ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.familyInfo && ( */}
        <div className="content" aria-expanded={expandedSections.familyInfo}>
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Grupo populacional, tradicional ou específico (indígenas, quilombolas ou ribeirinhos)"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Quantidade de pessoas que moram no domicílio"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Quantidade de famílias que moram no domicílio?"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Algum integrante(s) dessa(s) família(s) internada(s), abrigada(s) ou privada(s) de liberdade?"

              />
            </div>                       
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Esse grupo familiar possui criança(s) e adolescente(s) de 0 a 17 anos"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Jovem(ns) e adulto(s) de 18 a 59 anos"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="number"
                placeholder="Idoso(s) de 60 anos ou mais"

              />
            </div>
            

            
        </div>
        {/* )} */}
      </div>
      </div>

      <div className="data">
        <button
          onClick={() => toggleSection('servicesPlace')}
          className="data__field"
        >
          <span className='title-span'>Unidades de atendimento</span>
          <span>{expandedSections.servicesPlace ? '−' : '+'}</span>
        </button>

        {/* {expandedSections.servicesPlace && ( */}
        <div className="content" aria-expanded={expandedSections.servicesPlace}>
          <div >
            <div className=" ">
              <Input
                type="text"
                placeholder="Unidade de saúde"

              />
            </div>
            <div >
              <Input
                type="text"
                placeholder="Unidade de assistência social(CRAS, CREAS)"

              />
            </div>
           
            </div>
        </div>
        {/* )} */}
      </div>

    </section>
  )
}