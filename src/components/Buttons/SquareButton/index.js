import React from "react"
import { Container, ButtonIcon, Title } from "./style"
import { Ionicons } from "@expo/vector-icons"

export default function SquareButton({...props}) {
    return (
        <Container {...props}>
            <ButtonIcon name={props.icon} />
            <Title>{props.title}</Title>
        </Container>
    )
}