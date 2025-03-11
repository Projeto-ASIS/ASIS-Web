import Button from "../Button";
import './SaveFields.css'
import { Modal } from '../Modals/Modal';
import { useState } from "react";
import { FaCheck } from "react-icons/fa";


export default function SaveFields(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSaveClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsConfirmed(false);
  };

  return (
    <>
      <section className="container">
        <p>Seus dados foram registrados com sucesso e serão protegidos de acordo com a LGPD, garantindo segurança e privacidade no seu atendimento.</p>
        <div className="btns">
          <Button type="stroked-secondary">Sair agora</Button>
          <Button type="default-secondary" onClick={handleSaveClick}>Salvar dados</Button>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleClose}>
        {!isConfirmed ? (
          <>
            <div className="ilustration text-pink">!?</div>
            <h3 className="text-pink">Os registros serão avaliados!</h3>
            <p>Seus dados agora serão enviados apra a nossa central e avaliados por um dos nossos profissionais</p>
            <div className="modal-buttons">
              <Button type="stroked-secondary" onClick={handleClose}>Cancelar</Button>
              <Button type="default-secondary" onClick={handleConfirm}>Confirmar</Button>
            </div>
          </>
        ) : (
          <>
             <div className="ilustration text-blue"><FaCheck /></div>
            <h3 className="text-blue">Registros enviados com sucesso !</h3>
            <p>Tudo deu certo ! , seu dadso foram enviados , voce pode fechar esse aviso e esperar nosso contato</p>
            <Button type="default" onClick={handleClose}>Fechar</Button>
          </>
        )}
      </Modal>
    </>
  );
}