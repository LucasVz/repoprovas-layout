import React, { useEffect, useState } from "react";
import {
    Container,
    ContainerTests,
    Tests,
    ButtonDiscipline,
    ButtonInstructor,
    Header,
    Buttons
} from "./style.js"
import {Logo} from "../../components/Form.js"
import logo from "../../assets/logo.png"
import useAuth from "../../hooks/useAuth.js";
import * as api from "../../services/api.js"
import { useNavigate } from "react-router-dom";
import SearchByDiscipline from "../../components/searchByDiscipline.js";
export default function RenderTests() {
    const { auth } = useAuth;
    const [testsTerms, setTestsTerms] = useState([]);
    //const [testsTeachers, setTestsTeachers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getData();

    }, []);

    async function getData() {
        const testsTerms = await api.getTestsByDisciplines(auth);
        const testsTeachers = await api.getTestsByTeacher(auth);
        setTestsTerms(testsTerms.data);
        //setTestsTeachers(testsTeachers.data);
    }

    return(
        <Container>
            <Header>
                <Logo src={logo} alt="logo"/>
            </Header>
            <ContainerTests>
                <Buttons>
                    <ButtonDiscipline>DISCIPLINAS</ButtonDiscipline>
                    <ButtonInstructor>PESSOA INSTRUTORA</ButtonInstructor>
                    <ButtonInstructor>ADICIONAR</ButtonInstructor>
                </Buttons>

                {testsTerms.map((test) => {
                    return <SearchByDiscipline data={test} key={test.id} />;
                })}

            </ContainerTests>
        </Container>
    )
}

