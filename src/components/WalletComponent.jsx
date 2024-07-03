import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LimeCoinLogo from '../../assets/images/LimeCoinLogo.png';  // 确保路径正确
import ChevronIcon from '../../assets/images/chevron-left.png';  // 确保路径正确

const WalletComponent = () => {
  return (
    <View style={styles.walletContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.myWalletText}>My Wallet</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsText}>Details</Text>
            <Image source={ChevronIcon} style={styles.chevronIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.bottomContainer}>
          <Image source={LimeCoinLogo} style={styles.limeCoinLogo} />
          <Text style={styles.amountText}>$500</Text> {/* 示范金额 */}
          <TouchableOpacity style={styles.refillButton}>
            <Text style={styles.refillButtonText}>Refill</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletContainer: {
    width: 358,
    height: 130,
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#070A1A',
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 82,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 18,
  },
  myWalletText: {
    width: 262,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Nunito',
    color: '#FFFFFF',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 69,
    height: 16,
  },
  detailsText: {
    width: 39,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Nunito',
    color: '#FFFFFFA8',
  },
  chevronIcon: {
    width: 24,
    height: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#FFFFFF50',
    marginTop: 3,
    marginBottom: 3,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 20,
  },
  limeCoinLogo: {
    width: 20,
    height: 20,
  },
  amountText: {
    width: 9,
    height: 19,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Nunito',
    color: '#FFFFFF',
  },
  refillButton: {
    backgroundColor: '#1ED387',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 24,
    width: 77,
    height: 32,
  },
  refillButtonText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Nunito',
    color: '#070A1A',
    textAlign: 'center',
  },
});

export default WalletComponent;
