import { ContactRound, LucideTvMinimalPlay, Zap } from "lucide-react"
import "./Offers.css"
export default function Offers() {
  return (
    <section className="offers">
      <h3 className="offers__upper__description footnote">Facilitando o acesso aos seus <br /> direitos</h3>
      <h1 className="title">Tudo em um só lugar</h1>
      <div className="wrapper">
        <div className="item">
          <img className="icon" src="" alt="" />
          <p className="offer__item__description"></p>
        </div>
        <div className="impactos">
          <div className="impacto">
            <LucideTvMinimalPlay className="icon" size={60} />
            <p>Um sistema de fácil acesso e acessível a qualquer público</p>
          </div>
          <div className="impacto">
            <Zap className="icon" size={60} />
            <p>Redução das filas e burocracia nos processos de seus direitos</p>
          </div>
          <div className="impacto">
            <ContactRound className="icon" size={60} />
            <p>Focado em oferecer a melhor expériência para os usuários</p>
          </div>

        </div>
      </div>
    </section>
  )
}