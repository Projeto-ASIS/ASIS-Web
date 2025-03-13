import { ContactRound, LucideTvMinimalPlay } from "lucide-react"
import ZapIcon from "@/common/components/ZapIcon"

import "./Offers.css"

export default function Offers() {
  return (
    <section className="offers">
      <h3 className="offers__top__footnote footnote">Facilitando o acesso aos seus <br /> direitos</h3>
      <h1 className="offers__title">
        <hr className="offers__title__hr" />
        <span className="offers__title__innerText"> Tudo em um só lugar </span>
        <hr className="offers__title__hr" />
      </h1>
      <div className="wrapper">
        <div className="impacts">
          <div className="impact">
            <LucideTvMinimalPlay className="impact__icon--play icon" size={60} />
            <p>Um sistema de fácil acesso e acessível a qualquer público</p>
          </div>
          <div className="impact ">
            <ZapIcon  className="icon" height={60} />
            {/* <Zap className="impact__icon--zap" size={60} /> */}
            <p>Redução das filas e burocracia nos processos de seus direitos</p>
          </div>
          <div className="impact">
            <ContactRound className="impact__icon--contact icon" size={60} />
            <p>Focado em oferecer a melhor expériência para os usuários</p>
          </div>
        </div>
      </div>
    </section>
  )
}