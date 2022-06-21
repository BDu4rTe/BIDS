import styled from "styled-components/native"

export const Container = styled.KeyboardAvoidingView.attrs(() => ({
    contentContainerStyle: {
        alignItems: "center",
    }
}))`
    flex: 1;
    width: 100%;
    padding: ${props => props.theme.metrics.padding};
    justify-content: center;
`

export const Form = styled.View`
    width: 100%;
    align-items: center;
`

export const Image = styled.Image`
    height: 40%;
`