import React, { useState } from 'react';
import Button from '@/common/components/Button';
import Logo from '../../../assets/LogoASISCentralizada.png'
import { Check, ChevronLeft } from 'lucide-react';
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Input from '@/common/components/Input';
import "./ForgotPassword.css"

// Componente para informar o email
const StepOne = ({ onNext }) => (
  <div className="form__title">
    <img style={{ width: '70px', height: '70px' }} src={Logo} alt="" />
    <h1 className='text-blue-80'>Redefinir sua senha?</h1>
    <p className='text-blue-40 text-semibold'>
      Esqueceu sua senha? Não se preocupe, iremos te
      <br />ajudar a redefini-la.</p>
    <form>
      <div className='sign-up__fields'>
        <Input type="email" id="recovery-email" placeholder='Email' />
      </div>
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
    <h1 className='text-blue-80'>Digite o codigo</h1>
    <p className='text-blue-40 text-semibold'>Enviamos ao seu email um codigo de verificação  , por favor digite-o abaixo </p>
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
    <h1 className='text-blue-80'>Crie sua nova senha </h1>
    <p className='text-blue-40 text-semibold'>Crie uma senha fácil de memorizar dentro dos nossos requisitos, para que não esqueça novamente.</p>
    <form>
      <div className="flex-fields">
        <Input placeholder="Digite sua senha" type="password" name="" id="" />
        <Input placeholder="Confirme sua senha" type="password" name="" id="" />
      </div>

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
    <h1 className='text-blue-80'>Senha redefinida </h1>
    <p className='text-blue-40 text-semibold'>Sua senha foi redefinida com sucesso! Agora você pode acessar sua conta e continuar utilizando os serviços com autonomia e segurança.</p>
    <form>
      <FaCheck className='icon__check' />
      <div className="btns__register">
        <Link to={{ pathname: "/sign-in" }}><Button type="default">Fazer Login</Button></Link>
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
      <Link to={{ pathname: "/" }}><ChevronLeft className='back' size={80} /></Link>
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
