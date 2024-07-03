import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, Alert, StyleSheet } from 'react-native';
import logo from '../../assets/images/logo.png';
import { registerWithEmail } from '../services/authService';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const sendVerificationEmail = async () => {
    if (email) {
      const { success, data } = await registerWithEmail(email);
      if (success) {
        navigation.navigate('VerifyScreen', { email: email });
      } else {
        Alert.alert('Error', data.message || 'Failed to send verification code.');
      }
    } else {
      Alert.alert('Error', 'Please enter a valid email address.');
    }
  };

  const emailEntered = email.length > 0;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#070A1A',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topContainer: {
      width: 390,
      height: 415,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,  
      position: 'absolute',
      top: 40,  
    },
    contentContainer: {
      width: 390,
      alignItems: 'center',
      marginBottom: 32,
    },
    headerContainer: {
      width: 185,
      alignItems: 'center',
      marginBottom: 12,
    },
    logoTitleContainer: {
      width: 185,
      alignItems: 'center',
      marginBottom: 20,
    },
    logo: {
      width: 89,
      height: 89,
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: -10,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '500',
      color: '#00FF94',
      marginBottom: 32,
    },
    signInText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#FFFFFF',
      marginBottom: 10,
      fontFamily: 'Nunito', 
    },
    input: {
      width: 297,
      height: 40,
      borderColor: '#1ED387',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
      color: '#FFFFFF',
      marginBottom: 20,
    },
    bottomContainer: {
      width: 390, 
      height: 123, 
      position: 'absolute', 
      top: 700, 
      paddingTop: 24, 
      paddingRight: 48, 
      paddingBottom: 56, 
      paddingLeft: 48, 
      marginBottom: 30, 
      opacity: 1, 
      backgroundColor: '#070A1A',
    },
    
    
    bottomContainerActive: {
      width: 390, 
      height: 123, 
      position: 'absolute', 
      top: 700, 
      paddingTop: 24, 
      paddingRight: 48, 
      paddingBottom: 56, 
      paddingLeft: 48, 
      marginBottom: 30,
      opacity: 1, 
      backgroundColor: '#070A1A',
    },
    signInButton: {
      width: 297,
      height: 43,
      backgroundColor: '#ADADAD',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    signInButtonActive: {
      width: 297,
      height: 43,
      backgroundColor: '#1ED387',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signInButtonText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#FFFFFF',
    },
    signInButtonTextActive: {
      fontSize: 14,
      fontWeight: '500',
      color: '#070A1A',
    },
  });
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.logoTitleContainer}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.title}>Lime Reels</Text>
            </View>
            <Text style={styles.subtitle}>Welcome To Lime Reels!</Text>
          </View>
          <Text style={styles.signInText}>Sign in with email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            onChangeText={handleEmailChange}
            value={email}
          />
        </View>
      </View>
      <View style={emailEntered ? styles.bottomContainerActive : styles.bottomContainer}>
        <TouchableOpacity
          style={emailEntered ? styles.signInButtonActive : styles.signInButton}
          disabled={!emailEntered}
          onPress={sendVerificationEmail}
        >
          <Text style={emailEntered ? styles.signInButtonTextActive : styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;



















