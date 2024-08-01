import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const RefillLimeCoinsButton = ({ onPress, active }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={active ? styles.buttonActive : styles.button}
          onPress={onPress} 
        >
          <Text style={active ? styles.textActive : styles.text}>Refill Lime Coins</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    marginTop: 20,  
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 297,
    height: 43,
    backgroundColor: '#1ED387',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonActive: {
    width: 297,
    height: 43,
    backgroundColor: '#1ED387',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',  
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    width: 249,  
    height: 19,  
  },
  textActive: {
    color: '#070A1A',  
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    width: 249,  
    height: 19, 
  }
});

export default RefillLimeCoinsButton;

