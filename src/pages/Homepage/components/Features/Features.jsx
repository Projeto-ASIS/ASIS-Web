import { Brain, HousePlus, UserRoundCog, UserRoundPlus } from "lucide-react";
import './Features.css'

export default function Features() {
  return (
    <section>
      <div className="title__features">
        <h3 className="text-blue">Nossas funcionalidades </h3>
        <h1 className="text-blue">O que te <span className="text-pink">Oferecemos</span></h1>
      </div>
      <div className="features__cards">
        <div className="card feature__1">
        <UserRoundCog className="feature__icon" />
        <p>Atualize seus dados do Cadunico com facilidade e eficácia sem mais perder tanto tempo, se modernize conosco</p>
        <h4>Atualização cadastral</h4>
        </div>
        <div className="card feature__2">
          <HousePlus className="feature__icon" />
          <p>Agende de maneira rápida o serviço da visita domiciliar do CRAS , nos horários disponiveis</p>
          <h4>Agendamento de visita domiciliar</h4>
        </div>
        <div className="card feature__3">
          <Brain className="feature__icon" />
          <p>Também consiga agendar o atendimento e apoio psicológico  com alguns dos profissionais da assistência social</p>
          <h4>Atendimento psicologico</h4>
        </div>
        <div className="card feature__4">
          <UserRoundPlus className="feature__icon" />
          <p>Nosso sistema também te ajuda ao invés de ir ate a central do cras para fazer seu cadunico, fazer tudo do conforto da sua casa</p>
          <h4>CADUNico</h4>
        </div>
      </div>
    </section>
  );
}