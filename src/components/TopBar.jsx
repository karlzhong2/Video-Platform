import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import backIcon from '../../assets/images/back.png';

const TopBar = ({ title, onBackPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Image source={backIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />  
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    padding: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 1,
  },
  title: {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: 1,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15, // Adjust margin to properly align back icon
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  placeholder: {
    width: 24,
    height: 24,
  },
});

export default TopBar;
