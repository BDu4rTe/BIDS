import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${props => props.size === "medium" ? "400px" : props.size === "large" ? "500px" : "200px"};
    padding: ${props => props.theme.metrics.padding};
    border-radius: 15px;
    margin-bottom:  ${props => props.theme.metrics.padding};
    background-color: ${props => props.theme.colors.card};
`

export const Header = styled.View`
    width: 100%;
    margin-bottom: ${props => props.theme.metrics.padding};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.subTitle.font};
    font-size: ${props => props.theme.fonts.subTitle.size};
`
export const TextView = styled.View`
    margin-top:  ${props => props.theme.metrics.padding};
    flex-direction: row;
    justify-content: space-around; 
`