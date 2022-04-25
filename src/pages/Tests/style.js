import styled from "styled-components";

const Container = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  height: 100vh;

  flex-direction: column;
`;

const ContainerTests = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    justify-content: center;
`;

const ButtonDiscipline = styled.button`

`;

const ButtonInstructor = styled.button`

`;

const Tests = styled.div`

`;

const Header = styled.div`
    width: 100%;
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 55px;
`;
export{
    Container,
    ContainerTests,
    Tests,
    ButtonDiscipline,
    ButtonInstructor,
    Header,
    Buttons
}