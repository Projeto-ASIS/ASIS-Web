import "./Invite.css"

export default function Invite() {
  return (
    <section className="invite">
      <div className="invite__wrapper">
        <h1 className="text-white">
          Não está
          <br />
          <mark className="invite__mark text-white">Convencido?</mark>
        </h1>
        <p>Experimente agora e veja como é fácil ter acesso aos serviços que você precisa!</p>
        <div className="invite__call-to-actions">
          <button>Use agora os serviços</button>
          <button>Ver nossa missão</button>
          </div>
      </div>
    </section>
  )
}