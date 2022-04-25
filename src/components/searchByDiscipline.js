import styled from "styled-components";
import Disciplines from "./disciplines";

export default function SearchByDiscipline(test) {
    //const [testsDisciplines, setTestsDisciplines] = useState([]);
    return(
        <Container>
            <h1>{test.data.number} Periodo</h1>
            {test.data.discipline.map((test) => {
                <Disciplines data={test} key={test.id} />;
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;

    width: 100%;
    padding: 12px;

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`;