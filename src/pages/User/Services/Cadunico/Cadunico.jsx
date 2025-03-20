
import './Cadunico.css';
import { Header } from '@/common/components/Header';
import Fields from './sections/Fields';
import SaveFields from '@/common/components/SaveFields/SaveFields';
import Footer from '@/common/components/Footer';
import { useParams } from 'react-router-dom';

export default function Cadunico() {
  const {id} = useParams();


  return (
    <>
      <Header />
      <section className='Cadunico__title'>
        <h1 className="title text-blue">Cadúnico</h1>
        <p className='text-blue-20'>Acesse e gerencie suas informações com segurança, garantindo mais controle no uso dos serviços de assistência social</p>
      </section>
      <Fields />
      <SaveFields text="Seus dados foram registrados com sucesso e serão protegidos de acordo com a LGPD, garantindo segurança e privacidade no seu atendimento." />
      <Footer />
    </>

  );
};

