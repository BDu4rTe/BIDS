import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home"
import Profile from "../../screens/Profile"
import Camera from "../../screens/Camera"
import {Ionicons} from "@expo/vector-icons"


// const HomeStack = createNativeStackNavigator()
// function HomeStackScreen(){
//     return (
//         <HomeStack.Navigator>
//             <HomeStack.Screen name="Home" component={Home}/>
//             <HomeStack.Screen name="Camera" component={Camera}/>
//             <HomeStack.Screen name="Profile" component={Profile}/>
//         </HomeStack.Navigator>
//     )
// }

// const ProfileStack = createNativeStackNavigator()
// function ProfileStackScreen(){
//     return (
//         <HomeStack.Navigator>
//             <HomeStack.Screen name="Home" component={Home}/>
//             <HomeStack.Screen name="Camera" component={Camera}/>
//             <HomeStack.Screen name="Profile" component={Profile}/>
//         </HomeStack.Navigator>
//     )
// }
// ^ quando for usar uma stack dentro da propria tela


const TabNavigator = createBottomTabNavigator()
// caso fosse usar as stack`s o componente seria a func acima
export default function AuthStack (){
    return (
        <TabNavigator.Navigator initialRouteName="Home" 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'Camera') {
                iconName = focused ? 'ios-camera' : 'ios-camera-outline';
              }
              else if( route.name === 'Profile'){
                iconName = focused ? 'ios-paw' : 'ios-paw-outline'
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          })}
        >
            <TabNavigator.Screen name="Camera" component={Camera} options={{headerShown:false}}/> 
            <TabNavigator.Screen name="Home" component={Home} options={{headerShown:false}}/> 
            <TabNavigator.Screen name="Profile" component={Profile} options={{headerShown:false}}/>  
        </TabNavigator.Navigator>
    )
}