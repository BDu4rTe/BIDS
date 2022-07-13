import { Container, UserNameText, Header, CustomView } from "./style"
import SquareButton from "../../components/Buttons/SquareButton"
import Button from "../../components/Buttons/Button"


export default function Camera(){

    return (
        <><Header>
        <UserNameText>Pet Scan</UserNameText>
        <UserNameText>Basta clicar nos botões abaixo para tirar as fotos do seu pet ou ver as fotos tiradas anteriormente</UserNameText>
        </Header>
        <Container>

            <CustomView>
            <SquareButton title="Abrir Camera" icon="ios-camera" />
            <Button title="Galeria" icon="aperture-outline" type="secondary"/>
            </CustomView>

        </Container>
        </>
        
    )
}