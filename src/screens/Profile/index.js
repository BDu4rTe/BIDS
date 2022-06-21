import React from "react"
import { View } from "react-native"
import { CoverContainer, InfoContainer, UserName } from "./style"
import { useSelector, useDispatch } from "react-redux"
import Button from "../../components/Buttons/Button"
import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase"

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
        <View>
            <CoverContainer>
            </CoverContainer>
            <InfoContainer>
                <UserName>{user.nome}</UserName>
            </InfoContainer>
            <Button type="danger" icon="log-out-outline" title="Sair da conta" onPress={() => handleSignOut()} />
        </View>
    )
}