
import './Cadunico.css';
import { Header } from '@/common/components/Header';
import Fields from './sections/Fields';
import SaveFields from '@/common/components/SaveFields/SaveFields';
import Footer from '@/common/components/Footer';

export default function Cadunico() {


  return (
    <>
      <Header />
      <section className='Cadunico__title'>
        <h1 className="title">Cadúnico</h1>
        <p className='text-blue-20'>Acesse e gerencie suas informações com segurança, garantindo mais controle no uso dos serviços de assistência social</p>
      </section>
      <Fields />
      <SaveFields />
      <Footer />
    </>

  );
};

