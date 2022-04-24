import React, { useEffect, useState } from "react";
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
import useAuth from "../../hooks/useAuth";
import { ThreeDots } from "react-loader-spinner";
import useUser from "../../hooks/useUser";
import logo from "../../assets/logo.png"

export default function SignIn() {
  const navigate = useNavigate();
  const { auth, signin } = useAuth();
  const { setUser } = useUser();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (auth) {
      navigate("/timeline");
    } //eslint-disable-next-line
  }, [auth]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const user = { ...formData };

    try {
      const { data } = await api.signin(user);
      signin(data.token);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/timeline");
    } catch (error) {
      console.log(error);
      setLoading(false);

      if (error.response.status === 401) {
        Swal.fire({
          title: "Oops :(",
          text: "Inavid e-mail address or password",
          background: "#d66767",
          confirmButtonColor: "#9f9adb",
          color: "#fff",
        });
      } else {
        Swal.fire({
          title: "Oops :(",
          text: "Something went wrong, Try again!",
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
          placeholder="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />

        <div>
          <StyledLink to="/signup">Cadastrar</StyledLink>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <ThreeDots color="#FFFFFF" height={13} width={100} />
            ) : (
              "ENTRAR"
            )}
          </Button>
        </div>
      </Form>
    </Container>
  );
}
