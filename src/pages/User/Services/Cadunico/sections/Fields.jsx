import { useState } from 'react';
import ContainerWithCollapse from "@/common/components/ContainerWithCollapse/ContainerWithCollapse"
import Input from '@/common/components/Input';
import { AtSignIcon } from 'lucide-react';


export default function Fields() {

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



    </section>
  )
}