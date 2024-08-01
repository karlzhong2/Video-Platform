// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import TopBar from '../components/TopBar'; // 确保组件路径正确
// import TotalCoinComponent from '../components/TotalCoinComponent';
// import RechargeComponent from '../components/RechargeComponent';
// import RefillCoin from '../components/RefillCoin';
// import { useNavigation } from '@react-navigation/native';

// const StoreScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <TopBar title="Store" onBackPress={() => navigation.goBack()} />
//       <View style={styles.totalCoinMargin}>
//         <TotalCoinComponent />
//       </View>
//       <View style={styles.sectionTitle}>
//         <Text style={styles.sectionText}>Subscribe</Text>
//       </View>
//       <RechargeComponent />
//       <View style={styles.sectionTitle}>
//         <Text style={styles.sectionText}>Refill Coins</Text>
//       </View>
//       <View style={styles.coinsContainer}>
//         <RefillCoin coins="50" bonus="5" price="6.99" popular="Popular" />
//         <RefillCoin coins="100" bonus="10" price="12.99" popular="+10%" />
//         <RefillCoin coins="200" bonus="20" price="24.99" popular="+10%" />
//         <RefillCoin coins="500" bonus="125" price="69.99" popular="+25%" />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#070A1A',
//     padding: 24,
//   },
//   totalCoinMargin: {
//     marginTop: 24
//   },
//   sectionTitle: {
//     width: 390,
//     height: 40,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     marginBottom: 7,
//     backgroundColor: '#070A1A'  // Adjust background as needed
//   },
//   sectionText: {
//     fontSize: 18,
//     fontWeight: '700',
//     lineHeight: 24,
//     color: '#FFFFFF',
//     fontFamily: 'Nunito',
//   },
//   coinsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 12
//   }
// });

// export default StoreScreen;


import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import TotalCoinComponent from '../components/TotalCoinComponent';
import RechargeComponent from '../components/RechargeComponent';
import RefillCoin from '../components/RefillCoin';
import { useNavigation } from '@react-navigation/native';

const StoreScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(null); // 管理激活的卡片索引

  const handlePress = index => {
    setActiveIndex(activeIndex === index ? null : index); // 切换激活状态或取消激活
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopBar title="Store" onBackPress={() => navigation.goBack()} />
      <View style={styles.totalCoinMargin}>
        <TotalCoinComponent />
      </View>
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionText}>Subscribe</Text>
      </View>
      <RechargeComponent />
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionText}>Refill Coins</Text>
      </View>
      <View style={styles.coinsContainer}>
        <RefillCoin coins="50" bonus="5" price="6.99" popular="Popular" active={activeIndex === 0} onPress={() => handlePress(0)} />
        <RefillCoin coins="100" bonus="10" price="12.99" popular="+10%" active={activeIndex === 1} onPress={() => handlePress(1)} />
        <RefillCoin coins="200" bonus="20" price="24.99" popular="+10%" active={activeIndex === 2} onPress={() => handlePress(2)} />
        <RefillCoin coins="500" bonus="125" price="69.99" popular="+25%" active={activeIndex === 3} onPress={() => handlePress(3)} />
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A1A',
    padding: 24,
    justifyContent: 'flex-start',
  },
  totalCoinMargin: {
    marginTop: 30
  },
  sectionTitle: {
    width: 390,
    height: 118,// 调整高度以适应增加的内边距 不然title 会被遮住
    paddingHorizontal: 16,
    paddingVertical: 30, //调整 title的上下位置
    marginBottom: -40, //调整 card 的位置
    backgroundColor: '#070A1A'
  },
  sectionText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: '#FFFFFF',
    fontFamily: 'Nunito',
  },
  coinsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',  
    justifyContent: 'space-between',  
    alignItems: 'flex-start',
    paddingHorizontal:12,  // 控制容器两侧的内间距
  },
  coinCard: {
    width: 165,  
    margin: 6,  
    marginBottom: 12,
  }
});

export default StoreScreen;
