// mport { Hand, HomeIcon } from "lucide-react"

import ServicesIcon from "@/common/components/ServicesIcon"

import PropTypes from "prop-types"

import { Header } from "@/common/components/Header"

import "./User.css"

import Footer from "@/common/components/Footer"
import CadUnicoIcon from "@/common/components/CadUnicoIcon"

ServiceCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.node,
}

function ServiceCard({
  name,
  icon: Icon,
}) {
  return (
    <article className="service-card">
      <Icon color={`var(--color-blue)`} height={110} width={110} />
      <p className="service-card__title">{name}</p>
    </article>
  )
}

const services = [
  { name: "Cadastro Único", icon: CadUnicoIcon },
  // { name: "Visita Domiciliar", iconUrl: "" },
  // { name: "Bolsa Familia", iconUrl: "" },
  // { name: "INSS", iconUrl: "" },
  // { name: "Atualização \n Cadastral", iconUrl: "" },
  // { name: "Agendamentos", iconUrl: "" },
  // { name: "Atendimento \n Psicológico", iconUrl: "" },
]

export default function User() {
  return (
    <>
      <Header />
      <section className="services">
        <div className="services__top text-blue">
          <ServicesIcon className="services__top__footnote__icon" />
          <h1 className="services__top__title">Serviços que oferecemos</h1>
        </div>
        <div className="services__content">
          {services.map((x, index) => <ServiceCard key={`ServiceCard_${index}`} {...x} />)}
        </div>
      </section>
      <section className="services-history">
        <div className="services-history__top">
          <h3 className="services-history__top__footnote footnote">
            Acompanhe seu histórico de <br /> serviços acessados
          </h3>
          <h1 className="services-history__top__title text-pink">
            <hr className="services-history__top__title__hr" />
            <span className="services-history__top__title__innerText">histórico de serviços </span>
            <hr className="services-history__top__title__hr" />
          </h1>
        </div>
        <div className="services-history__wrapper">
          <ServiceCard name={services[0].name} icon={services[0].icon} />
        </div>
      </section>
      <Footer />
    </>
  )
}