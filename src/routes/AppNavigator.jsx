import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';

import SignInScreen from '../screens/SignInScreen';
import VerifyScreen from '../screens/VerifyScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  let [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
        SplashScreen.hideAsync().catch((error) => {
            console.error("Failed to hide splash screen", error);
        });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;  // Return null or some loading indicator while fonts are loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;



