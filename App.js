import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from "./src/navigation"
import Theme from "./src/theme"
import { Provider } from 'react-redux';
import { store } from "./src/redux"
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native';


export default function App() {
  let [fontsLoaded] = useFonts({
    "regular": Poppins_400Regular,
    "medium": Poppins_500Medium,
    "bold": Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer theme={Theme()}>

          <ThemeProvider theme={Theme()}>
            <Routes />
          </ThemeProvider>

        </NavigationContainer>
      </Provider>
    );
  }
}
