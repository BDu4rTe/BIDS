export const Header = styled.View`
    width: 100%;
    height: 200px;
    padding: ${props => props.theme.metrics.headerPadding} 0 0 0;
    align-items: center;
    margin-bottom: ${props => props.theme.metrics.padding};
    justify-content: space-around;
    background-color: ${props => props.theme.colors.secondary};
`