import React, { useState } from 'react';
import Button from '@/common/components/Button';
import Logo from '../../../assets/LogoASISCentralizada.png'
import { Check, ChevronLeft } from 'lucide-react';
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Input from '@/common/components/Input';

// Componente para informar o email
const StepOne = ({ onNext }) => (
  <div className="form__title">
    <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
    <h1 className='text-blue'>Redefinir sua senha?</h1>
    <p className='text-blue-20'>Esqueceu sua senha? Não se preocupe, iremos te ajudar a redefini-la.</p>
    <form>
      <Input type="email" placeholder='Email' />
      <div className="btns__register">
        <Button type="default" onClick={onNext}>Enviar Email</Button>
        <Button type="stroked">
          <a href="sign-up" style={{ color: 'var(--color-blue)' }}>Não possuo uma conta</a>
        </Button>
      </div>
    </form>
  </div>
);

// Componente para confirmação que o email foi enviado
const StepTwo = ({ onNext }) => (
  <div className="form__title">
    <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
  <h1 className='text-blue'>Digite o codigo</h1>
  <p className='text-blue-20'>Enviamos ao seu email um codigo de verificação  , por favor digite-o abaixo </p>
  <form>
    <div className="otp__inputs">
      <input type="number" className='otp' name="" id="" />
      <input type="number" className='otp' name="" id="" />
      <input type="number" className='otp' name="" id="" />
      <input type="number" className='otp' name="" id="" />
      <input type="number" className='otp' name="" id="" />
    </div>
    <div className="btns__register">
      <Button type="default" onClick={onNext}>Validar código</Button>
      <Button type="stroked">
        <a href="sign-in" style={{ color: 'var(--color-blue)' }}>Voltar para login</a>
      </Button>
    </div>
  </form>
</div>
);

// Componente para inserção do cogido enviado no email
const StepThree = ({ onNext }) => (
  <div className="form__title">
    <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
  <h1 className='text-blue'>Crie sua nova senha </h1>
  <p className='text-blue-20'>Crie uma senha facil de memorizar dentro dos nossos requisitos  , para que nao esqueça novamente.</p>
  <form>
    <input type="password" name="" id=""  />
    <input type="password" name="" id=""  />
    <div className="btns__register">
      <Button type="default" onClick={onNext}>Criar senha</Button>
      <Button type="stroked">
        <a href="sign-in" style={{ color: 'var(--color-blue)' }}>Voltar para login</a>
      </Button>
    </div>
  </form>
</div>
);

// Componente final para informar que a senha foi redefinida
const StepFour = (onNext) => (
  <div className="form__title">
  <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
<h1 className='text-blue'>Senha redefinida </h1>
<p className='text-blue-20'>Sua senha foi redefinida com sucesso! Agora você pode acessar sua conta e continuar utilizando os serviços com autonomia e segurança.</p>
<form>
  <FaCheck className='icon__check' />
  <div className="btns__register">
    <Link to={{pathname:"/sign-in"}}><Button type="default">Fazer Login</Button></Link> 
  </div>
</form>
</div>
);

export default function ForgotPassword() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };
  //array para o breadcrumb ficar azul conforme o passo
  const totalSteps = 4;
  return (
    <div className="UserData">
        <Link to={{pathname:"/"}}><ChevronLeft className='back' size={80}/></Link> 
      {step === 1 && <StepOne onNext={nextStep} />}
      {step === 2 && <StepTwo onNext={nextStep} />}
      {step === 3 && <StepThree onNext={nextStep} />}
      {step === 4 && <StepFour />}
      <div className="breadcrumb">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            className='breadcrumb__step'
            key={index}
            style={{
              backgroundColor: step === index + 1 ? 'var(--color-blue)' : 'gray',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
