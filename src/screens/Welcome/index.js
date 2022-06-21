import  Button  from "../../components/Buttons/Button"
import { Container, Title, ButtonView, BtView, TopContainer, Image } from "./style"


export default function Welcome({ navigation }) {

    return (
        <Container>
            <Image source={require('../../../assets/logoBids.png')}/>
            <TopContainer>
                <Title>Bem-Vindo(a)!</Title>
            </TopContainer>
            
            <BtView>
                <ButtonView>
                    <Button title="Fazer Login" onPress={() => navigation.navigate("Login")} icon="log-in-outline" />
                    <Button title="Cadastrar" onPress={() => navigation.navigate("Register")} />
                </ButtonView>
            </BtView>
        </Container>
    )
}