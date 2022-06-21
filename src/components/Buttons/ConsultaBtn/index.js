import { Container, Header, Title, TextView } from "./style.js"
import Text from "../../Text"

export default function PetContainer(props) {

    return (    
    <Container>    
        <Header>
            <Title>{props.title}</Title>
        </Header>
        <TextView>
            <Text>{props.consulta}</Text>
        </TextView>
    </Container>
     
    )
}