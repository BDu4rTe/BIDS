import { Container, Header, Title, TextView } from "./style.js"
import { Text } from "react-native"

export default function PetContainer(props) {

    return (    
    <Container>    
        <Header>
            <Title>{props.title}</Title>
        </Header>
        <TextView>
            <Title>{props.idade}</Title>
            <Title>{props.peso}</Title>
            <Title>{props.imc}</Title>
        </TextView>
        <TextView>
            <Text>idade</Text>
            <Text>peso</Text>
            <Text>imc</Text>
        </TextView>
    </Container>
     
    )
}