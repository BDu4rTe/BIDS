import { Container, UserNameText, Header, ModalContainer } from "./style"
import { useSelector } from "react-redux"
import PetContainer from "../../components/PetContainer"
import ConsultaBtn from "../../components/Buttons/ConsultaBtn"
import Modal from "../../components/Modal"
import  TextInput  from "../../components/Input"
import Text from "../../components/Text"
import { useState } from "react"



export default function Home(){
    const { user } = useSelector((state) => state.user)
    //console.log(user.pets.nome)
    const [modal, setModal] = useState({
        modalVisible: false,
        alertMessage: ""
    })
    const [input, setInput] = useState({
        nome: "",
        idade: "",
        peso: "",
    })

    return (
        <>
        <Header>
            <UserNameText>Bem vindo {user.nome}</UserNameText>
            <UserNameText>Lorem ipsum curabitur neque faucibus tellus ut nisi odio, rutrum quis tincidunt</UserNameText>
        </Header>

        <Container>
             
            <ConsultaBtn title="Consultas" consulta="Voce não tem consultas agendadas" onPress={() => setModal({ ...modal, modalVisible: true })} />
            <PetContainer title={(user.pets.nome)} idade={(user.pets.idade)} peso={(user.pets.peso)} imc={(user.pets.imc)} />
            <Modal visible={modal.modalVisible} title="Consultas" size="medium" closeAction={() => setModal({ ...modal, modalVisible: false })}>
                <ModalContainer>
                    <Text>Voce nao possui consultas agendadas</Text>
                </ModalContainer>
            </Modal>

        </Container>
        </>
    )
}
