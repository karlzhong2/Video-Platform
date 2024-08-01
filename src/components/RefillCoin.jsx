import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RefillCoin = ({ coins, bonus, price, popular, active, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, active ? styles.cardActive : styles.cardInactive]} 
      onPress={onPress}
    >
      {popular && <View style={styles.popularBadge}><Text style={styles.popularText}>{popular}</Text></View>}
      <View style={styles.contentContainer}>
        <Text style={styles.coins}>{coins} Coins</Text>
        <Text style={styles.bonus}>+{bonus} Bonus</Text>
        <View style={[styles.priceContainer, active ? styles.priceContainerActive : styles.priceContainerInactive]}>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 87,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF26',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent', 
    marginBottom: 12,
  },
  cardActive: {
    borderColor: '#1ED387', // 激活时显示绿色边框
  },
  cardInactive: {
    borderColor: 'transparent', // 非激活时保持透明边框
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coins: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  bonus: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFFA8',
    marginVertical: 4,
  },
  priceContainer: {
    width: 165,
    height: 35,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  priceContainerActive: {
    backgroundColor: '#1ED38759',
  },
  priceContainerInactive: {
    backgroundColor: '#FFFFFF33',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  popularBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#070A1A',
    borderRadius: 12,
    paddingHorizontal: 6,
  },
  popularText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#FFFFFF',
  }
});

export default RefillCoin;

