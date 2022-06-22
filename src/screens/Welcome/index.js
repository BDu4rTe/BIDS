import { Container, Title,  TopContainer, Image, CButton } from "./style"
import { View } from "react-native"


export default function Welcome({ navigation }) {

    return (
    
        <Container>
        
            <TopContainer>
                <Image source={require('../../../assets/logoBids.png')}/>
            </TopContainer>
            
           
            <View> 
            <CButton title="Fazer Login" onPress={() => navigation.navigate("Login")} icon="log-in-outline" />
            <CButton title="Cadastrar" onPress={() => navigation.navigate("Register")} />
            </View>  
           
        </Container>
      
    )
}