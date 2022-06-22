import React from "react"
import { Container, Header, UserName, BtnView, ModalContainer } from "./style"
import { useSelector, useDispatch } from "react-redux"
import Button from "../../components/Buttons/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase"
import PetContainer from "../../components/PetContainer"
import Modal from "../../components/Modal"
import TextInput from "../../components/Input"
import { useState } from "react"


export default function Profile({ navigation }) {
    const { user } = useSelector((state) => state.user)

    async function handleSignOut() {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }
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
            <UserName>{user.nome}</UserName>
        </Header> 

        <BtnView>
            <PetContainer title={(user.pets.nome)} idade={(user.pets.idade)} peso={(user.pets.peso)} imc={(user.pets.imc)} />
            <Button type="secondary" title="Adicionar pets" icon="add-outline" onPress={() => setModal({ ...modal, modalVisible: true })} inverted/>
            <Button type="danger" icon="log-out-outline" title="Sair da conta" onPress={() => handleSignOut()} inverted />
            <Modal visible={modal.modalVisible} title="Adicionar Pet" size="medium" closeAction={() => setModal({ ...modal, modalVisible: false })}>
                <ModalContainer>
                <TextInput type="text" placeholder="Insira o nome do seu pet" icon="paw-outline"/>
                <TextInput type="text" placeholder="Insira a idade do seu pet" icon="calendar-outline"/>
                <TextInput type="text" placeholder="Insira o peso do seu pet" icon="clipboard-outline"/>
                <Button  title="Aicionar" icon="add" inverted />
                </ModalContainer>
            </Modal>

        </BtnView>
        </>
    )
}