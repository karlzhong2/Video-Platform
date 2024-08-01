import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar'; // Ensure path is correct
import TotalCoinComponent from '../components/TotalCoinComponent';
import RefillLimeCoinsButton from '../components/RefillLimeCoinsButton'
import TransactionHistoryComponent from '../components/TransactionHistoryComponent';
import { useNavigation } from '@react-navigation/native';

const WalletScreen = () => {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false); // Initial state for the button

  const handlePress = () => {
    setIsActive(!isActive); // Toggle the active state on button press
    navigation.navigate('StoreScreen'); // 跳转到StoreScreen
    console.log('Refill pressed');
  };

  return (
    <View style={styles.container}>
      <TopBar title="My Wallet" onBackPress={() => navigation.goBack()} />

      <TotalCoinComponent />
      <RefillLimeCoinsButton active={isActive} onPress={handlePress} />
      <TransactionHistoryComponent />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A1A',
    padding: 24,
    justifyContent: 'flex-start',
  },
  topContainer: {
    width: '100%',
    height: 114,
    borderBottomWidth: 1,
    borderColor: '#070A1A',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Nunito',
  },
});

export default WalletScreen;
