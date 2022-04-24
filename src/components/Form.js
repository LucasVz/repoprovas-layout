import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100vh;

  flex-direction: column;

`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 400px;

  margin-bottom: 20px;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

  }
`;
const Input = styled.input`
  all: unset;
  width: 100%;

  padding: 12px 0 12px 6px;
  margin-bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 6px;
  background-color: white;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);

  cursor: text;
`;
const Button = styled.button`
  all: unset;

  width: 116px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1976D2;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  color: #FFFFFF;

  border-radius: 6px;

  cursor: pointer;
`;
const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;

  text-decoration-line: underline;

  color: rgba(70, 115, 202, 0.8);

  font-weight: 400;
  font-size: 20px;

  font-family: "Lato", sans-serif;

  text-decoration: underline;

  @media (max-width: 1300px) {
    font-size: 16px;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 292px;
  height: auto;
  margin-bottom: 70px;
  margin-top: 45px;
`
const Title = styled.h1`
font-family: 'Poppins';
font-weight: 500;
font-size: 24px;
line-height: 24px;

letter-spacing: 0.15px;

color: rgba(0, 0, 0, 0.8);
`

const GHbutton = styled.button`
width: 100%;
height: 36px;

margin: 30px 0;


border: none;

background: #424445;

box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
border-radius: 4px;

font-family: 'Roboto';
font-weight: 500;
font-size: 14px;
line-height: 24px;

letter-spacing: 0.4px;
text-transform: uppercase;

color: #FFFFFF;
`

export { Container, Form, Input, Button, StyledLink, Logo, Title, GHbutton };
