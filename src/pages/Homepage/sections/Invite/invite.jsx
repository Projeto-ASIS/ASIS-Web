import "./Invite.css"

import Button from "@/common/components/Button"

export default function Invite() {
  return (
    <section className="invite" id="invite">
      <div className="invite__wrapper">
        <h1 className="text-white invite__title">
          Não está
          <br />
          <mark className="invite__mark text-white">Convencido?</mark>
        </h1>
        <p className="invite__text">
          Experimente agora e veja como é fácil ter acesso
          <br />
          aos serviços que você precisa!</p>
        <div className="invite__call-to-actions">
          <a href="/user"><Button className="invite__btn" >Use agora os serviços</Button></a>
          <a href="/about"> <Button className="invite__btn" type="stroked">Ver nossa missão</Button> </a>
        </div>
      </div>
    </section>
  )
}