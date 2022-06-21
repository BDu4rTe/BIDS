import { Container, UserNameText, Header } from "./style"
import { useSelector } from "react-redux"
import PetContainer from "../../components/PetContainer"
import ConsultaBtn from "../../components/Buttons/ConsultaBtn"
import ModalConsultas from "../../components/Modal/ModalConsutas"
import  TextInput  from "../../components/Input"
import Text from "../../components/Text"
import { useState } from "react"

export default function Home(){
    const { user } = useSelector((state) => state.user)
    //console.log(user.pets.nome)
    const [modal, setModal] = useState({
        modalVisible: false,
        alertModalVisible: false,
        googleSignIn: false,
        facebookSignIn: false,
        alertMessage: ""
    })

    return (
        <>
        <Header>
            <UserNameText>Bem vindo {user.nome}</UserNameText>
            <UserNameText>Lorem ipsum curabitur neque faucibus tellus ut nisi odio, rutrum quis tincidunt </UserNameText>
        </Header>

        <Container>
             
            <ConsultaBtn title="Consultas" consulta="Voce nao tem consultas agendadas" onPress={() => setModal({ ...modal, modalVisible: true })} />
            <PetContainer title={(user.pets.nome)} idade={(user.pets.idade)} peso={(user.pets.peso)} imc={(user.pets.imc)} />

            <ModalConsultas visible={modal.modalVisible} title="Cadastro da Criança" size="medium" closeAction={() => setModal({ ...modal, modalVisible: false })}>
                <Text>Agendar consulta</Text>
                <TextInput />
                <TextInput />
                <TextInput />
            </ModalConsultas>

        </Container>
        </>
    )
}
