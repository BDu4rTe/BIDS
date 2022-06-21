import styled from "styled-components/native"
import { Text } from "../../components/Text"

export const Container = styled.View`
    flex: 1;
    padding: 0 ${props => props.theme.metrics.padding} 0 ${props => props.theme.metrics.padding};
`

export const Header = styled.View`
    width: 100%;
    height: 200px;
    padding: ${props => props.theme.metrics.headerPadding} 0 0 0;
    align-items: center;
    margin-bottom: ${props => props.theme.metrics.padding};
    justify-content: space-around;
    background-color: ${props => props.theme.colors.secondary};
`

export const UserNameText = styled.Text`
    padding: 20px;
    font-family: ${props => props.theme.fonts.subTitle.font};
    font-size: ${props => props.theme.fonts.subTitle.size};
    color: ${props => props.theme.colors.textAltLight}
`
export const CustomView = styled.View`
    height: 50%;
    padding: 0 ${props => props.theme.metrics.padding} 0 ${props => props.theme.metrics.padding};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`