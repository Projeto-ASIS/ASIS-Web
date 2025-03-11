import "./AboutCadunico.css"

import ContainerWithCollapse from "@/common/components/ContainerWithCollapse/ContainerWithCollapse"
import Button from "@/common/components/Button"

export default function AboutCadunico() {
  return (
    <section className="about-cadunico">
      <div className="about-cadunico__title">
        <h1 className="about-cadunico__title__innerText text-blue mb-4">Visita Domiciliar</h1>
      </div>
      <div className="about-cadunico__list-of-content">
        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander>Minhas informações</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root opened>
          <ContainerWithCollapse.Expander>Como Acessar?</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content>
            <p className="data__content__explanation">
              Para acessar o serviço de atualização do Cadastro Único (CadÚnico), siga os passos abaixo:
              <ol>
                <li>
                  Faça login na plataforma com suas credenciais.
                </li>
                <li>
                  Após o login, clique no botão disponível abaixo para iniciar o processo de atualização.
                </li>
              </ol>
              <br />
              Garantimos uma experiência simples e segura para facilitar seu acesso aos serviços sociais.
            </p>
            <div className="data__content__actions">
              <Button>Acessar o Serviço</Button>
              <Button type="stroked">Fazer o Login</Button>
            </div>
          </ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander>Legislação</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>

        <ContainerWithCollapse.Root>
          <ContainerWithCollapse.Expander>Documentos Necessários</ContainerWithCollapse.Expander>
          <ContainerWithCollapse.Content></ContainerWithCollapse.Content>
        </ContainerWithCollapse.Root>
      </div>
    </section>
  )
}