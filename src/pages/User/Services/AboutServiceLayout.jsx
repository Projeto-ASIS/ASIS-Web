import { Header } from "@/common/components/Header"
import Footer from "@/common/components/Footer"

import { Outlet } from "react-router-dom"

import "./AboutServiceLayout.css"

function ServicesHistory() {
  return (
    <section className="services-history">
      <h3 className="services-history__footnote footnote text-blue-20">
        Acompanhe seu histórico de <br />
        serviços acessados
      </h3>
      <div className="services-history__title">
        <span className="services-history__title__divider text-blue-20"></span>
        <h1 className="text-pink">Histórico de Serviços</h1>
        <span className="services-history__title__divider"></span>
      </div>
    </section>
  )
}
export default function AboutServiceLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ServicesHistory />
      <Footer />
    </>

  )
}