
import "../Cadunico/Cadunico.css"
import { Header } from '@/common/components/Header';
import Userdata from '@/pages/User/Services/RegistrationUpdate/section/Userdata';
import SaveFields from '@/common/components/SaveFields/SaveFields';
import Footer from '@/common/components/Footer';

export default function RegistrationUpdate() {


  return (
    <>
      <Header />
      <section className='Cadunico__title'>
        <h1 className="title text-blue">Atualização Cadastral</h1>
        <p className='text-blue-20'>Acesse e gerencie suas informações com segurança, garantindo mais controle no uso dos serviços de assistência social</p>
      </section>
      <Userdata />
      <SaveFields text="Seus dados foram registrados com sucesso e serão protegidos de acordo com a LGPD, garantindo segurança e privacidade no seu atendimento." />
      <Footer />
    </>

  );
};

