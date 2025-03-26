import { useNavigate } from "react-router-dom";

import { cpf as cpfValidator } from "cpf-cnpj-validator"; // Biblioteca para CPF

import Logo from "../../../assets/LogoASISCentralizada.png";

import Button from "@/common/components/Button";
import * as BackendService from "@/common/services/BackendService"


import "../AuthLayout.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Input from "@/common/components/Input";

import useForm from "@/common/hooks/useForm"

const INITIAL_FORMDATA = {
  cpf: "",
  password: ""
}

export default function Signin() {
  const { formData, handleChange } = useForm({
    initialFormData: INITIAL_FORMDATA
  })
  const navigate = useNavigate();

  // Função para formatar CPF e validar automaticamente
  const handleCpfChange = (e) => {
    const rawCpf = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    const formattedCpf = cpfValidator.format(rawCpf); // Formata automaticamente

    setCpf(formattedCpf);
    setCpfError(!cpfValidator.isValid(rawCpf)); // Valida CPF enquanto digita
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const user = { cpf: formData.cpf, senha: formData.password }
      const res = await BackendService.getLogin(user)
      console.log(res)
      console.log(res.status)

      if (300 > res.status && res.status >= 200) {
        navigate("/user")
      }

    } catch (error) {

      if (error.status === 403) {
        alert("Usuário não existente")
      }

      console.error(error)
    }
  };

  return (
    <div className="UserData">
      <Link to="/">
        <ChevronLeft className="back" size={60} />
      </Link>

      <div className="form__title">
        <img style={{ width: "70px", height: "70px" }} src={Logo} alt="" />
        <h1 className="text-blue">Faça seu Login!</h1>
        <p className="text-blue-20 text__form">
          Acesse sua conta e tenha autonomia para solicitar e acompanhar a assistência que você precisa.
        </p>
      </div>

      <form onSubmit={handleLogin}>
        <div className="flex-fields">
          <Input
            type="text"
            placeholder="CPF"
            value={formData.cpf}
            id="cpf"
            onChange={handleChange}
            required
          />


          <Input
            type="password"
            placeholder="Senha"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <a href="forgot-pass" className="text-blue-20">Esqueci minha senha</a>

        <div className="btns__register">
          <Button type="default">Confirmar Login</Button>
          <Button type="stroked">
            <a href="sign-up" style={{ color: "var(--color-blue)" }}>Criar uma conta</a>
          </Button>
        </div>
      </form>
    </div>
  );
}
