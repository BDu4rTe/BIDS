import { Container, UserNameText, } from "./style"
import { useSelector } from "react-redux"

export default function Home(){
    const { user } = useSelector((state) => state.user)
    //console.log(user.pets.nome)

    return (
        <Container>
            <UserNameText>Bem vindo {user.nome}</UserNameText>
        </Container>
    )
}
