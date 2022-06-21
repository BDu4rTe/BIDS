import styled from "styled-components/native"
import { Text } from "../../components/Text"

export const Container = styled.View`
    flex: 1;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.title.font};
    font-size:  ${props => props.theme.fonts.title.size};
    text-align: center;
    margin-bottom: ${props => props.theme.metrics.padding};
    color: ${props => props.theme.colors.text};
`
export const ButtonView = styled.View`
    height: 40%;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 ${props => props.theme.metrics.padding} 0 ${props => props.theme.metrics.padding};
`
export const BtView = styled.View`
    height: 50%;
    padding: 0 ${props => props.theme.metrics.padding} 0 ${props => props.theme.metrics.padding};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TopContainer = styled.View`
    height: 50%;
    padding: 0 ${props => props.theme.metrics.padding} 0 ${props => props.theme.metrics.padding};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Image = styled.Image`
    width: 100%,
    height: 100%,
    flex:1
`