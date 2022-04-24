import React, { useState } from "react";
import {
  Container,
  Form,
  Input,
  Button,
  Logo,
  Title,
  GHbutton,
  StyledLink
} from "../../components/Form";
import api from "../../services/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/logo.png"


export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const user = { ...formData };

    if (
      user.email === "" ||
      user.password === ""
    ) {
      Swal.fire({
        title: "Oops :(",
        text: "Todos os campos devem ser preenchidos",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
      });
      return;
    }
    console.log(user.password)
    console.log(user.confirmPassword)
    if(user.password !== user.confirmPassword){
      Swal.fire({
        title: "Oops :(",
        text: "Sua senha precisa ser igual a confirmação de de senha",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
      });
      return;
    }

    try {
      await api.createUser(user);

      navigate("/");
    } catch (error) {
      setLoading(false);

      if (error.response.status === 409) {
        Swal.fire({
          title: "Oops :(",
          text: "Email já está em uso",
          background: "#d66767",
          confirmButtonColor: "#9f9adb",
          color: "#fff",
        });
      } else {
        Swal.fire({
          title: "Oops :(",
          text: "algo deu errado, tente novamente",
          background: "#d66767",
          confirmButtonColor: "#9f9adb",
          color: "#fff",
        });
      }
    }
  }
  return (
    <Container>
      <Logo src={logo} alt="logo"></Logo>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Title>cadastro</Title>
        <GHbutton>Entrar com o GITHUB</GHbutton>
        <Input
          type="email"
          placeholder="e-mail"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          onChange={(e) => handleChange(e)}
          name="confirmPassword"
          value={formData.confirmPassword}
          required
        />
        <div>
          <StyledLink to="/">Já possuo cadastro</StyledLink>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <ThreeDots color="#FFFFFF" height={13} width={100} />
            ) : (
              "CADASTRAR"
            )}
          </Button>
        </div>
      </Form>
    </Container>
  );
}
