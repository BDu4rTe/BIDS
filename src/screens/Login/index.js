import { Container, Form, Image, } from "./style"
import Button from "../../components/Buttons/Button"
import TextInput from "../../components/Input"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"

export default function Login(){
    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    async function logIn() {
        if (input.email === "" || input.password === "") {
            console.log("Nenhum campo pode estar vazio!")
        } else if (input.password.length < 6) {
            console.log("A senha deve conter pelo menos 08 caracteres!")
        } else {
            try {
                await signInWithEmailAndPassword(auth, input.email, input.password)
            } catch (error) {
                if (error.code === "auth/invalid-email") {
                    console.log( "Email inválido. Verifique e tente novamente!")
                } else if (error.code === "auth/user-not-found") {
                    console.log("Este email não está cadastrado. Tente novamente!")
                } else if (error.code === "auth/wrong-password") {
                    console.log("Senha incorreta. Tente novamente!")

                } else {
                   console.log(error)
                }
            }
        }
    }

    return (
        <Container>

            <Form>
                <TextInput type="email" icon="mail-outline" placeholder="Insira seu email" returnKeyType="next" value={input.email} onChangeText={text => setInput({ ...input, email: text })} />
                <TextInput type="password" icon="lock-closed-outline" placeholder="Insira sua senha" returnKeyType="done" value={input.password} onChangeText={text => setInput({ ...input, password: text })} />

                <Button onPress={()=>logIn()}  title="Login" icon="log-in-outline"/>
            </Form>
        
        </Container>
    )
}