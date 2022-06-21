import styled from "styled-components/native"
import Text from "../../Text"
import { Ionicons } from "@expo/vector-icons"

export const Container = styled.TouchableOpacity`
    margin-top:  ${props => props.theme.metrics.padding};
    margin-bottom: ${props => props.theme.metrics.padding};
    width: ${props => props.theme.metrics.squareButton.width};
    height: ${props => props.theme.metrics.squareButton.height};
    align-items: center;
    justify-content: center;
    border-left-width: 0.1px;
    border-right-width: 0.1px;
    border-bottom-width: ${props => props.theme.metrics.squareButton.borderBottomWidth};
    border-radius: ${props => props.theme.metrics.squareButton.borderRadius};
    border-color: ${props => props.theme.colors.cardShadow};
    background-color: ${props => props.theme.colors.card};
`

export const ButtonIcon = styled(Ionicons)`
    font-size: ${props => props.theme.metrics.squareButton.iconSize};
    color: ${props => props.theme.colors.text};

`
export const Title = styled(Text)`
    color: ${props => props.theme.colors.text};
`