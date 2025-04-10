import "./AboutService.css"

import ContainerWithCollapse from "@/common/components/ContainerWithCollapse/ContainerWithCollapse"
import Button from "@/common/components/Button"
import Breadcrumb from "@/common/components/Breadcrumb/Breadcrumb"
import HandOnApprovedIcon from "@/common/components/HandOnApprovedIcon"
import FAQIcon from "@/common/components/FaqIcon"
import { Link, useNavigate } from "react-router-dom"

export default function AboutService({ propTitle, passOne, passTwo, passThree, proplink }) {
  const navigate = useNavigate()
  
  function handleOnClickAcessService() {
    navigate(`/user/Services/${proplink}`)
  }
  function handleClickLogin() {
    navigate("/sign-in")
  }

  return (
    <section className="about">
      <Breadcrumb.Root className="about-cadunico__breadcrumb">
        <Breadcrumb.Path path="/home">Usuario</Breadcrumb.Path>
        <Breadcrumb.Path path="/user">Serviços</Breadcrumb.Path>
        <Breadcrumb.Path path="/services/cadunico/about" isActive>Cadúnico</Breadcrumb.Path>
      </Breadcrumb.Root>
      <div className="about-service__title">
        <HandOnApprovedIcon className="about__title__icon" />
        <h1 className="about__title__innerText text-blue mb-4">{propTitle}</h1>
      </div>
      <div className="about__list-of-content">
        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander className="">Minhas informações</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root opened>
          <ContainerWithCollapse.Expander className="">Como Acessar?</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content>
            <p className="data__content__explanation">
              Para acessar o serviço {propTitle} siga os passos abaixo:
              <ol>
                <li>
                  {passOne}
                </li>
                <li>
                  {passTwo}
                </li>
              </ol>
              <br />
              {passThree}
            </p>
            <div className="data__content__actions">
              <Button className="btns__actions" onClick={handleOnClickAcessService}>Acessar o Serviço</Button>
              <Button className="btns__actions" onClick={handleClickLogin} type="stroked">Fazer o Login</Button>
            </div>
          </ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander className="">Legislação</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander className="">Documentos Necessários</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>
      </div>
      <div className="about__faq">
        <div className="about__faq__title">
          <FAQIcon className="about__faq__title__icon" />
          <h1 className="text-blue">Perguntas Frequentes</h1>
        </div>
        <ContainerWithCollapse.Root className="collapse__faq">
          <ContainerWithCollapse.Expander className="expander__title__faq">Sou de área rural como posso agendar?</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>
      </div>
    </section>
  )
}