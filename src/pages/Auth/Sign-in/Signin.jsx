import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cpf as cpfValidator } from "cpf-cnpj-validator"; // Biblioteca para CPF
import Logo from "../../../assets/LogoASISCentralizada.png";
import Button from "@/common/components/Button";
import "../AuthLayout.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Input from "@/common/components/Input";

export default function Signin() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [cpfError, setCpfError] = useState(false);
  const navigate = useNavigate();

  // Função para formatar CPF e validar automaticamente
  const handleCpfChange = (e) => {
    const rawCpf = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    const formattedCpf = cpfValidator.format(rawCpf); // Formata automaticamente

    setCpf(formattedCpf);
    setCpfError(!cpfValidator.isValid(rawCpf)); // Valida CPF enquanto digita
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (cpfError || cpf.length < 14) {
      alert("CPF inválido! Por favor, digite um CPF válido.");
      return;
    }

    // Mock de usuário
    const userMock = { cpf: "148.921.794-00", password: "123456", role: "user",name: "Alberto" };

    if (cpf === userMock.cpf && password === userMock.password) {
      localStorage.setItem("user", JSON.stringify(userMock));
      navigate("/user");
    } else {
      navigate("/employee");
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
            value={cpf}
            onChange={handleCpfChange}
            required
          />
         

          <Input
            type="password"
            placeholder="SENHA"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
