import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ChevronLeftIcon from '../../assets/images/chevron-left.png';

const TransactionHistoryComponent = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>Transaction History</Text>
      <Image source={ChevronLeftIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,  
    opacity: 1,
  },
  title: {
    width: 140,
    height: 22,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: '#FFFFFF',
    fontFamily: 'Nunito',  
    opacity: 1,
    marginLeft:-10,
  },
  icon: {
    width: 24,
    height: 24,
    opacity: 1,
  }
});

export default TransactionHistoryComponent;
