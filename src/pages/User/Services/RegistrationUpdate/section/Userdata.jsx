import { useState } from 'react';
import ContainerWithCollapse from "@/common/components/ContainerWithCollapse/ContainerWithCollapse"
import Input from '@/common/components/Input';
import { AtSignIcon } from 'lucide-react';


export default function Useraata() {

  return (
    <section className='container'>

      {/* //sessão de Minhas informações */}
      <ContainerWithCollapse.Root>
        <ContainerWithCollapse.Expander>Minhas informações</ContainerWithCollapse.Expander>
        <ContainerWithCollapse.Content>
          <div className="content">
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
        </ContainerWithCollapse.Content>
      </ContainerWithCollapse.Root>


      {/* //sessão de endereço da familia */}
      <ContainerWithCollapse.Root>
        <ContainerWithCollapse.Expander>Endereço da familia</ContainerWithCollapse.Expander>
        <ContainerWithCollapse.Content> <div className="content" >
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
        </div></ContainerWithCollapse.Content>
      </ContainerWithCollapse.Root>


      {/* //sessão de dados do domicilio */}
      <ContainerWithCollapse.Root>
        <ContainerWithCollapse.Expander>Dados do domicilio</ContainerWithCollapse.Expander>
        <ContainerWithCollapse.Content>        <div className="content" >
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
        </div></ContainerWithCollapse.Content>
      </ContainerWithCollapse.Root>


      {/* //sessão de despesas mensais */}
      <ContainerWithCollapse.Root>
        <ContainerWithCollapse.Expander>Despesas mensais</ContainerWithCollapse.Expander>
        <ContainerWithCollapse.Content>  <div className="content" >
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
        </div></ContainerWithCollapse.Content>
      </ContainerWithCollapse.Root>


      {/* //sessão de características da familia */}
      <ContainerWithCollapse.Root>
        <ContainerWithCollapse.Expander>Características da familia</ContainerWithCollapse.Expander>
        <ContainerWithCollapse.Content> <div className="content" >
          <div className="inputGrid">
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Nome completo"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="email"
                placeholder="Email"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="tel"
                placeholder="Telefone"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Documento"

              />
            </div>
          </div>
        </div></ContainerWithCollapse.Content>
      </ContainerWithCollapse.Root>


      {/* //sessão de unidades de atendimento */}
      <ContainerWithCollapse.Root>
        <ContainerWithCollapse.Expander>unidades de atendimento</ContainerWithCollapse.Expander>
        <ContainerWithCollapse.Content> <div className="content" >
          <div >
            <div className=" ">
              <Input
                type="text"
                placeholder="Nome completo"

              />
            </div>
            <div >
              <Input
                type="email"
                placeholder="Email"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="tel"
                placeholder="Telefone"

              />
            </div>
            <div className="inputGroup">
              <Input
                type="text"
                placeholder="Documento"

              />
            </div>
          </div>
        </div></ContainerWithCollapse.Content>
      </ContainerWithCollapse.Root>

    </section>
  )
}