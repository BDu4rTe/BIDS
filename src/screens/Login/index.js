import Button from "../../components/Buttons/Button"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"

export default function Login(){
    const [input, setInput] = useState({
        email: "teste@teste.com",
        password: "123456",
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

        <Button onPress={()=>logIn()}  title="Login" icon="log-in-outline"/>
    )
}