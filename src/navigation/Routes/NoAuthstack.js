import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../screens/Welcome"
import Login from "../../screens/Login"
import Register from "../../screens/Register"

const StackNavigator = createNativeStackNavigator()

export default function NoAuthSatck(){
    return (
        <StackNavigator.Navigator initialRouteName="Login">
            <StackNavigator.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
            <StackNavigator.Screen name="Login" component={Login} />
            <StackNavigator.Screen name="Register" component={Register} />
        </StackNavigator.Navigator>
    )
}