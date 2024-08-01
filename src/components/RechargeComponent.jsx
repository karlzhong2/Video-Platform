import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RechargeComponent = () => {
  const [activeCard, setActiveCard] = useState(null);  // 管理激活卡片的状态

  // 处理卡片点击
  const handlePress = (cardType) => {
    setActiveCard(cardType);
  };

  return (
    <View style={styles.container}>
      {/* Monthly Subscription Card */}
      <TouchableOpacity style={[styles.card, activeCard === 'monthly' ? styles.cardActive : styles.cardInactive]}
        onPress={() => handlePress('monthly')}>
        <Text style={styles.title}>Monthly</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur...</Text>
        </View>
        <View style={[styles.priceContainer, activeCard === 'monthly' ? styles.priceContainerActive : styles.priceContainerInactive]}>
          <Text style={styles.price}>$35.99 / Month</Text>
        </View>
      </TouchableOpacity>

      {/* Yearly Subscription Card */}
      <TouchableOpacity style={[styles.card, activeCard === 'yearly' ? styles.cardActive : styles.cardInactive]}
        onPress={() => handlePress('yearly')}>
        <Text style={styles.title}>Yearly</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur...</Text>
        </View>
        <View style={[styles.priceContainer, activeCard === 'yearly' ? styles.priceContainerActive : styles.priceContainerInactive]}>
          <Text style={styles.price}>$249.99 / Year</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  card: {
    width: 165,
    height: 121,
    backgroundColor: '#FFFFFF26',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 0,
    alignItems: 'center',
    opacity: 1,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardActive: {
    borderColor: '#1ED387',
  },
  cardInactive: {
    borderColor: 'transparent',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  descriptionContainer: {
    width: 149,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 12,
    color: '#FFFFFFA8',
    fontFamily: 'Nunito',
    fontWeight: '500',
    lineHeight: 16.37,
    textAlign: 'left',
  },
  priceContainer: {
    width: 165,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  priceContainerActive: {
    backgroundColor: '#1ED38759',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  priceContainerInactive: {
    backgroundColor: '#FFFFFF33',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.1,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default RechargeComponent;
