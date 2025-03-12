import "./AboutCadunico.css"

import ContainerWithCollapse from "@/common/components/ContainerWithCollapse/ContainerWithCollapse"
import Button from "@/common/components/Button"
import Breadcrumb from "@/common/components/Breadcrumb/Breadcrumb"
import HandOnApprovedIcon from "@/common/components/HandOnApprovedIcon"
import FAQIcon from "@/common/components/FaqIcon"

export default function AboutCadunico() {
  return (
    <section className="about-cadunico">
      <Breadcrumb.Root className="about-cadunico__breadcrumb">
        <Breadcrumb.Path path="/home">Usuario</Breadcrumb.Path>
        <Breadcrumb.Path path="/user">Serviços</Breadcrumb.Path>
        <Breadcrumb.Path path="/services/cadunico/about" isActive>Cadúnico</Breadcrumb.Path>
      </Breadcrumb.Root>
      <div className="about-cadunico__title">
        <HandOnApprovedIcon className="about-cadunico__title__icon" />
        <h1 className="about-cadunico__title__innerText text-blue mb-4">Cadúnico</h1>
      </div>
      <div className="about-cadunico__list-of-content">
        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander>Minhas informações</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root opened>
          <ContainerWithCollapse.Expander>Como Acessar?</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content>
            <p className="data__content__explanation">
              Para acessar o serviço de atualização do Cadastro Único (CadÚnico), siga os passos abaixo:
              <ol>
                <li>
                  Faça login na plataforma com suas credenciais.
                </li>
                <li>
                  Após o login, clique no botão disponível abaixo para iniciar o processo de atualização.
                </li>
              </ol>
              <br />
              Garantimos uma experiência simples e segura para facilitar seu acesso aos serviços sociais.
            </p>
            <div className="data__content__actions">
              <Button>Acessar o Serviço</Button>
              <Button type="stroked">Fazer o Login</Button>
            </div>
          </ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander>Legislação</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander>Documentos Necessários</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>
      </div>
      <section className="about-cadunico__faq">
        <div className="about-cadunico__faq__title">
          <FAQIcon className="about-cadunico__faq__title__icon"/>
          <h1 className="text-blue">Perguntas Frequentes</h1>
        </div>
        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander>Sou de área rural como posso agendar?</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>
      </section>
    </section>
  )
}