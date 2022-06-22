import styled from "styled-components/native"
import { Text } from "../../components/Text"

export const Container = styled.View`
    flex: 1;
    margin-top: ${props => props.theme.metrics.padding};
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

export const UserName = styled.Text`
    font-family: ${props => props.theme.fonts.subTitle.font};
    font-size: ${props => props.theme.fonts.subTitle.size};
    color: ${props => props.theme.colors.textAltLight};
`

export const BtnView = styled.View`
    height: 50%;
    margin-top: ${props => props.theme.metrics.padding};
    padding: 0 ${props => props.theme.metrics.padding} 0 ${props => props.theme.metrics.padding};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ModalContainer = styled(Container)`
    padding: 0;
    align-items: center;
    justify-content: space-evenly;
`