import Button from '@/common/components/Button'
import './Hero.css'
export default function Hero() {
  return (
    <div className="hero" id='hero'>
      <section className='hero__content'>
        <h1 className="Hero__title">Facilitando o <span className='text-pink'>Acesso</span> aos seus direitos</h1>
        <h4 className='text-white'>Nós nos comprometemos em ajudá-lo a acessar <br></br>seus direitos de forma fácil e eficiente! </h4>
        <div className="btns__hero">
         <a href="sign-up"> <Button type='default'>Cadastrar-se</Button></a>
         <a href="sign-in"> <Button type='stroked' >Fazer login</Button></a>
        </div>
      </section>
    </div>
  )
}