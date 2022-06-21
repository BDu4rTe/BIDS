import React, { useState, useEffect } from "react"

import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithCredential, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import  TextInput  from "../../components/Input"
import  Button  from "../../components/Buttons/Button"

import { Container, Form } from "./style"


export default function Register() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    async function signInWithEmailAndPass() {
        if (input.name === "" || input.email === "" || input.password === "" || input.confirmPassword === "") {
            console.log("Nenhum campo pode estar vazio!")
        } else if (input.password.length < 8) {
            console.log("A senha deve conter pelo menos 08 caracteres!")
        } else if (input.password != input.confirmPassword) {
            console.log("Senhas não conferem. Verifique e tente novamente!")
        } else {
            try {
                await createUserWithEmailAndPassword(auth, input.email, input.password).then(async (res) => {
                    await saveUserData(res)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <Container keyboardVerticalOffset={-160}>
            
            <Form>
                <TextInput type="text" icon="person-outline" placeholder="Insira seu nome completo" autoComplete="name" autoCapitalize="words" returnKeyType="next" value={input.name} onChangeText={text => setInput({ ...input, name: text })} />
                <TextInput type="email" icon="mail-outline" placeholder="Insira seu email" returnKeyType="next" value={input.email} onChangeText={text => setInput({ ...input, email: text })} />
                <TextInput type="password" icon="lock-closed-outline" placeholder="Insira sua senha" returnKeyType="next" value={input.password} onChangeText={text => setInput({ ...input, password: text })} />
                <TextInput type="password" icon="lock-closed-outline" placeholder="Confirme sua senha" returnKeyType="done" value={input.confirmPassword} onChangeText={text => setInput({ ...input, confirmPassword: text })} />

                <Button icon="arrow-forward" title="Cadastrar" inverted onPress = {()=> signInWithEmailAndPass() }/>
            </Form>
        </Container>
    )
}