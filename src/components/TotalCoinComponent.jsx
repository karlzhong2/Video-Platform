import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LimeCoinLogo from '../../assets/images/LimeCoinLogo.png'; 
const TotalCoinComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={LimeCoinLogo} style={styles.limeCoinLogo} />
      <Text style={styles.label}>Total Lime Coins</Text>
      <Text style={styles.amount}>0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 358,
    height: 68,
    padding: 24,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF26',
    borderRadius: 12,
    opacity: 1,
  },
  limeCoinLogo: {
    width: 20,
    height: 20,
    opacity: 1,
    marginRight: 8,
    
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.1,
    color: '#FFFFFF',
    fontFamily: 'Nunito',
    opacity: 1,
    width: 108,
    height: 19,
    textAlign: 'left',
    
    
  },
  amount: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.1,
    color: '#FFFFFF',
    fontFamily: 'Nunito',
    opacity: 1,
    width: 34,
    height: 20,
    textAlign: 'left',
    marginLeft: 8,
    flex: 1,
    
  }
});

export default TotalCoinComponent;
