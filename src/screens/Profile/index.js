import React from "react"
import { Container, Header, UserName, BtnView } from "./style"
import { useSelector, useDispatch } from "react-redux"
import Button from "../../components/Buttons/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase"
import PetContainer from "../../components/PetContainer"


export default function Profile({ navigation }) {
    const { user } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    async function handleSignOut() {
        try {
            await signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <Header>
            <UserName>{user.nome}</UserName>
        </Header> 

        <BtnView>
             <PetContainer title={(user.pets.nome)} idade={(user.pets.idade)} peso={(user.pets.peso)} imc={(user.pets.imc)} />
            <Button type="secondary" title="Adicionar pets" icon="add-outline"/>
            <Button type="danger" icon="log-out-outline" title="Sair da conta" onPress={() => handleSignOut()} />
        </BtnView>
        </>
    )
}