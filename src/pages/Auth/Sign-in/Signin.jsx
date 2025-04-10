import { useNavigate } from "react-router-dom";

import Logo from "../../../assets/LogoASISCentralizada.png";
import "./Signin.css"

import Button from "@/common/components/Button";
import * as BackendService from "@/common/services/BackendService"

import { useMask } from "@react-input/mask";

import "../AuthLayout.css";
import { Link } from "react-router-dom";
import { ChevronLeft, Eye } from "lucide-react";
import Input from "@/common/components/Input";

import useForm from "@/common/hooks/useForm"
import formatCPF from "@/common/utils/formatCPF";

const INITIAL_FORMDATA = {
  cpf: "",
  password: ""
}

export default function Signin() {
  const { formData, handleChange } = useForm({
    initialFormData: INITIAL_FORMDATA
  })
  const navigate = useNavigate();
  const cpfRef = useMask({
    mask: "___.___.___-__",
    replacement: { _: /\d/ }
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const user = { cpf: formatCPF(cpfRef.current.value), senha: formData.password }
      const res = await BackendService.getLogin(user)

      console.log(user)
      console.log(res)

      if (300 > res.status && res.status >= 200) {
        const jwtToken = res.data.token
        localStorage.setItem("user-package", jwtToken)

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
        <ChevronLeft className="back" size={36} color="var(--color-blue-80" />
      </Link>

      <div className="form__title">
        <h1 className="text-blue">Faça seu Login!</h1>
        <p className="text-blue-40 text-semibold text__form">
          Acesse sua conta e tenha autonomia para solicitar e acompanhar a assistência que você precisa.
        </p>
      </div>

      <form className="sign-in__forms" onSubmit={handleLogin}>
        <div className="sign-in__flex-fields">
          <Input
            type="text"
            placeholder="CPF"
            ref={cpfRef}
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
            hasIcon
            icon={Eye}
          />
        </div>
          <a href="forgot-pass" className="sign-in__forgot-pass text-blue-20">Esqueci minha senha</a>

        <div className="btns__register">
          <Button type="default">Confirmar Login</Button>
          <Button type="stroked">
            <a className="text-blue" href="sign-up" >Criar uma conta</a>
          </Button>
        </div>
      </form>
    </div>
  );
}
