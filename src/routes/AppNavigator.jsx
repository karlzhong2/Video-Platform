import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import { useSelector } from 'react-redux';

import SignInScreen from '../screens/SignInScreen';
import VerifyScreen from '../screens/VerifyScreen';
import WalletScreen from '../screens/WalletScreen'; 
import BottomTabNavigator from '../components/BottomTabNavigator';
import EditProfileScreen from '../screens/EditProfileScreen';
import StoreScreen from '../screens/StoreScreen';
import LanguageScreen from '../screens/LanguageScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  let [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
  });

  const userLoggedIn = useSelector(state => state.user.loggedIn);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch((error) => {
        console.error("Failed to hide splash screen", error);
      });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;  // 在字体加载时显示空白页面
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => <BottomTabNavigator userLoggedIn={userLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
