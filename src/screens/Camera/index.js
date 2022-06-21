import { Container, UserNameText, Header, CustomView } from "./style"
import SquareButton from "../../components/Buttons/SquareButton"
import Button from "../../components/Buttons/Button"


export default function Camera(){

    return (
        <><Header>
        <UserNameText>Pet Scan</UserNameText>
        <UserNameText>Lorem ipsum curabitur neque faucibus tellus ut nisi odio, rutrum quis tincidunt</UserNameText>
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