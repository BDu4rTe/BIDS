import styled from "styled-components/native"
import { Text } from "../../components/Text"

export const Container = styled.View`
    flex: 1;
    padding: 0 ${props => props.theme.metrics.padding} 0 ${props => props.theme.metrics.padding};
`

export const Header = styled.View`
    width: 100%;
    height: ${props => props.theme.metrics.headerHeight};
    padding: ${props => props.theme.metrics.headerPadding} 0 0 0;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${props => props.theme.metrics.padding};
    justify-content: space-between;
`

export const UserNameText = styled.Text`
    font-family: ${props => props.theme.fonts.subTitle.font};
    font-size: ${props => props.theme.fonts.subTitle.size};
`


