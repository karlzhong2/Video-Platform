import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const UsernameInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#121629"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 79,
    marginTop: 16, 
    opacity: 1,
  },
  label: {
    width: 358,
    height: 19,
    padding: 0,
    paddingHorizontal: 12,
    marginBottom: 6, // 输入框之间有间隔
    color: '#FFFFFFA8',
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: '500',
    opacity: 1,
  },
  input: {
    width: 358,
    height: 40,
    padding: 12,
    paddingLeft: 16,
    borderRadius: 100,
    borderColor: '#1ED387',
    borderWidth: 1,
    color: '#FFFFFF',
    backgroundColor: '#121629',
    opacity: 1,
  },
});

export default UsernameInput;


