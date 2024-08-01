import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'; // 导入 useDispatch
import logo from '../../assets/images/logo.png';
import * as authService from '../services/authService'; 
import { logIn } from '../../src/store'; // 导入 logIn action

const VerifyScreen = ({ route }) => {
  const [code, setCode] = useState('');
  const { email } = route.params || {};
  const inputRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch(); // 使用 useDispatch 钩子获取 dispatch 函数

  const handleCodeChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '').substring(0, 6);
    setCode(numericText);
  };

  const displayValue = () => {
    let result = [];
    for (let i = 0; i < 6; i++) {
      result.push(i < code.length ? code[i] : '_');
    }
    return result.join(' ');
  };

  const handleFocus = () => {
    const endPosition = displayValue().length;
    inputRef.current.setNativeProps({ selection: { start: endPosition, end: endPosition } });
  };

  const verifyCode = async () => {
    const { success, message } = await authService.verifyCode(email, code);
    if (success) {
      // 验证成功后随机生成一个用户名
      const newUsername = `user${Math.random().toString(36).substring(2, 8)}`;
  
      alert('Verification Successful: ' + message);
      // 使用生成的用户名更新登录状态
      dispatch(logIn({ username: newUsername }));  // 传递包含用户名的对象
      navigation.navigate('Main', { screen: 'Profile' });
    } else {
      alert('Verification Failed: ' + message);
    } 
  };
  

  const codeEntered = code.length === 6;

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
            <Text style={styles.subtitle}>Welcome to Lime Reels!</Text>
          </View>
          <Text style={styles.codeText}>Please enter the 6 digit code we've sent to {email}</Text>
          <TextInput
            ref={inputRef}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={handleCodeChange}
            value={displayValue()}
            maxLength={12}
            textAlign='center'
            onFocus={handleFocus}
          />
        </View>
      </View>
      <View style={codeEntered ? styles.bottomContainerActive : styles.bottomContainer}>
        <TouchableOpacity
          style={codeEntered ? styles.verifyButtonActive : styles.verifyButton}
          onPress={verifyCode}
          disabled={!codeEntered}
        >
          <Text style={codeEntered ? styles.verifyButtonTextActive : styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  codeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 10,
    fontFamily: 'Nunito', 
    textAlign: 'center',
    width: 269,
    height: 38,
    opacity: 1,
  },
  input: {
    width: 297,
    height: 40,
    borderColor: '#1ED387',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Nunito',
    fontWeight: '500',
    lineHeight: 19,
    textAlign: 'center',
    backgroundColor: 'transparent',
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
  verifyButton: {
    width: 297,
    height: 43,
    backgroundColor: '#ADADAD',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonActive: {
    width: 297,
    height: 43,
    backgroundColor: '#1ED387',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  verifyButtonTextActive: {
    fontSize: 14,
    fontWeight: '500',
    color: '#070A1A',
  },
});

export default VerifyScreen;

















