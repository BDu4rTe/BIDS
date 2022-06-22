import { Container, Header, Title, TextView } from "./style.js"
import Text from "../../Text"

export default function ConsultaBtn(props) {

    return (    
    <Container {...props}>    
        <Header>
            <Title>{props.title}</Title>
        </Header>
        <TextView>
            <Text>{props.consulta}</Text>
        </TextView>
    </Container>
     
    )
}