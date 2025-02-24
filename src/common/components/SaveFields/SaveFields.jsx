import Button from "../Button";
import './SaveFields.css'

export default function SaveFields(){
  return(
    <section className="container">
      <p>Seus dados foram registrados com sucesso e serão protegidos de acordo com a LGPD, garantindo segurança e privacidade no seu atendimento.</p>
      <div className="btns">
        <Button type="stroked-secondary" >Sair agora</Button>
        <Button type="default-secondary">Salvar dados</Button>
      </div>
    </section>
  )
}