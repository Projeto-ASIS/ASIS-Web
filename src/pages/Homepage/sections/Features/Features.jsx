import { Brain, HousePlus, UserRoundCog, UserRoundPlus } from "lucide-react";

import './Features.css'

export default function Features() {
  return (
    <section className="features">
      <div className="features__title">
        <h3 className="features__footnote footnote">Nossas funcionalidades </h3>
        <h1 className="text-blue">O que te <span className="text-pink">Oferecemos ?</span></h1>
      </div>
      <p className="features__description">Observe abaixo algumas das nossas funcionalidades</p>
      <div className="features__cards">
        <article className="card">
          <UserRoundCog className="features__icon" />
          <p className="features__card__description">Atualize seus dados do Cadunico com facilidade e eficácia sem mais perder tanto tempo, se modernize conosco</p>
          <h4 className="features__card__name">Atualização cadastral</h4>
        </article>
        <article className="card">
          <HousePlus className="features__icon" />
          <p className="features__card__description">Agende de maneira rápida o serviço da visita domiciliar do CRAS , nos horários disponiveis</p>
          <h4 className="features__card__name">Agendamento de visita domiciliar</h4>
        </article>
        <article className="card">
          <Brain className="features__icon" />
          <p className="features__card__description">Também consiga agendar o atendimento e apoio psicológico  com alguns dos profissionais da assistência social</p>
          <h4 className="features__card__name">Atendimento psicologico</h4>
        </article>
        <article className="card">
          <UserRoundPlus className="features__icon" />
          <p className="features__card__description">Nosso sistema também te ajuda ao invés de ir ate a central do cras para fazer seu cadunico, fazer tudo do conforto da sua casa</p>
          <h4 className="features__card__name">CADUNico</h4>
        </article>
      </div>
    </section>
  );
}