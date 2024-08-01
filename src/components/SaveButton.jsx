import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SaveButton = ({ onPress, active }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={active ? styles.saveButtonActive : styles.saveButton}
        onPress={onPress}
        disabled={!active}
      >
        <Text style={active ? styles.saveButtonTextActive : styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  saveButton: {
    width: 297,
    height: 43,
    backgroundColor: '#1ED387',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonActive: {
    width: 297,
    height: 43,
    backgroundColor: '#1ED387',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  saveButtonTextActive: {
    fontSize: 14,
    fontWeight: '500',
    color: '#070A1A',
  },
});

export default SaveButton;
