import '../About.css'
export default function Article(){

  const teamMembers = [
    {
      name: 'LETICIA ALCANTARA',
      role: 'FRONT-END DEVELOPER',
      img: 'LeticiaAlcantara.jpg'
    },
    {
      name: 'HUAN VICENTE',
      role: 'FRONT-END DEVELOPER',
      img: 'Huan.png'
    },
    {
      name: 'GYLLEADHE FERREIRA',
      role: 'FRONT-END DEVELOPER',
      img: 'Gylleadhe.jpg'
    },
    {
      name: 'WEYDSON DUDA',
      role: 'FRONT-END DEVELOPER',
      img: 'Weydson.jpg'
    },
    {
      name: 'ABRIVALDO NETO',
      role: 'FRONT-END DEVELOPER',
      img: 'Abrivaldo.enc'
    }, 
    {
      name: 'GABRIEL JOSÉ',
      role: 'BACK-END DEVELOPER',
      img: 'Gabriel.png'
    },
    {
      name: 'LUCAS ROCHA',
      role: 'BACK-END DEVELOPER',
      img: 'LucasRocha.png'
    },
    {
      name: 'ALMODÁ LUZ',
      role: 'BACK-END DEVELOPER',
      img: 'Almoda.jpg'
    },
    {
      name: 'ALISSON GOMES',
      role: 'BACK-END DEVELOPER',
      img: 'Alisson.jpeg'
    }
  ];
  return(

      <>
     <section className="about__title">
        <h1 className="text-blue about__title__innerText">O que é o <span className="text-pink">asis</span> ?<br /> quem somos nós ?</h1>
        <h4 className="text-blue-20 footnote about__title__footnote">Nossa origem e como começamos a fazer esse <br></br> maravilhoso projeto para o público</h4>
      </section>
      <section >
        <video autoPlay loop muted controls width={"100%"} src="ProjetoAssis.mp4"></video>
        <article>
          <h3 className="text-blue title_02">Como tudo <span className="text-pink">começou ?</span></h3>
          <p className="text-blue-20 foot_note2">Percebemos que muitas pessoas enfrentam dificuldades para obter atendimentos sociais devido à alta demanda, burocracia e falta de um sistema integrado entre as centrais especializadas. Muitas delas ainda utilizam fichas de cadastro escritas à mão, tornando o processo mais demorado e sujeito a erros.</p>
          <p className="text-blue-20 foot_note3">Esse cenário não apenas gera desgaste social, como também impacta o meio ambiente pelo uso excessivo de papel. Nossa missão é modernizar esse sistema, oferecendo uma solução digital acessível, eficiente e humanizada. Além disso, o ASIS possibilita comunicação direta com assistentes sociais, interação com órgãos públicos e acompanhamento familiar para garantir a correta aplicação dos benefícios</p>
        </article>
      </section>
      <section>
        <article>
          <h3 className="text-blue title_03">1.nova missão</h3>
          <p className="text-blue-20 foot_note4">Percebemos que muitas pessoas enfrentam dificuldades para obter atendimentos sociais devido à alta demanda, burocracia e falta de um sistema integrado entre as centrais especializadas. Muitas delas ainda utilizam fichas de cadastro escritas à mão, tornando o processo mais demorado e sujeito a erros.</p>
          <p className="text-blue-20 foot_note5">Esse cenário não apenas gera desgaste social, como também impacta o meio ambiente pelo uso excessivo de papel. Nossa missão é modernizar esse sistema, oferecendo uma solução digital acessível, eficiente e humanizada. Além disso, o ASIS possibilita comunicação direta com assistentes sociais, interação com órgãos públicos e acompanhamento familiar para garantir a correta aplicação dos benefícios</p>
        </article>
        <img className='logo-banner' src="LogoASISLayoutHorizontalCentralizado.png" alt="" />
      </section>
      <section>
        <article>
          <h3 className="text-blue title_04">2.nossa equipe</h3>
          <p className="text-blue-20 foot_note6">Percebemos que muitas pessoas enfrentam dificuldades para obter atendimentos sociais devido à alta demanda, burocracia e falta de um sistema integrado entre as centrais especializadas. Muitas delas ainda utilizam fichas de cadastro escritas à mão, tornando o processo mais demorado e sujeito a erros.</p>
          <p className="text-blue-20 foot_note7">Esse cenário não apenas gera desgaste social, como também impacta o meio ambiente pelo uso excessivo de papel. Nossa missão é modernizar esse sistema, oferecendo uma solução digital acessível, eficiente e humanizada. Além disso, o ASIS possibilita comunicação direta com assistentes sociais, interação com órgãos públicos e acompanhamento familiar para garantir a correta aplicação dos benefícios</p>
        </article>
        <div className="team__container">
          <div className="team__flex">
            {teamMembers.map((member, index) => (
              <div key={index} className="team__member">
                <div className="member__image">
                  <img
                    src={member.img}
                    alt={member.name}
                  />
                </div>
                <h3 className="member__name">{member.name}</h3>
                <p className="member__role text-blue-20">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  </>
  )

}