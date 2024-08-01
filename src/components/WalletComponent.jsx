// import React, { useState, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import LimeCoinLogo from '../../assets/images/LimeCoinLogo.png';  
// import ChevronIcon from '../../assets/images/chevron-left.png';  

// const WalletComponent = () => {
//   return (
//     <View style={styles.walletContainer}>
//       <View style={styles.innerContainer}>
//         <View style={styles.topContainer}>
//           <Text style={styles.myWalletText}>My Wallet</Text>
//           <TouchableOpacity style={styles.detailsButton}>
//             <Text style={styles.detailsText}>Details</Text>
//             <Image source={ChevronIcon} style={styles.chevronIcon} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.divider} />
//         <View style={styles.bottomContainer}>
//           <Image source={LimeCoinLogo} style={styles.limeCoinLogo} />
//           <Text style={styles.amountText}>0</Text> 
//           <TouchableOpacity style={styles.refillButton} >
//             <Text style={styles.refillButtonText}>Refill</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   walletContainer: {
//     width: 380,
//     height: 130,
//     padding: 24,
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF26',
//     alignSelf: 'center',  // 使组件居中
//     marginTop: 20,  
//   },
//   innerContainer: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     height: 82,
//   },
//   topContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: 18,
//   },
//   myWalletText: {
//     width: 262,
//     fontSize: 14,
//     fontWeight: '700',
//     fontFamily: 'Nunito',
//     color: '#FFFFFF',
//   },
//   detailsButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: 69,
//     height: 16,
//   },
//   detailsText: {
//     width: 39,
//     fontSize: 12,
//     fontWeight: '500',
//     fontFamily: 'Nunito',
//     color: '#FFFFFFA8',
//   },
//   chevronIcon: {
//     width: 16,
//     height:16,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#FFFFFF1A',
//     marginTop: 3,
//     marginBottom: 3,
//   },
//   bottomContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 20,
//   },
//   limeCoinLogo: {
//     width: 20,
//     height: 20,
//   },
//   amountText: {
//     width: 50,
//     height: 19,
//     fontSize: 14,
//     fontWeight: '500',
//     fontFamily: 'Nunito',
//     marginLeft: -170,
//     color: '#FFFFFF',
//   },
//   refillButton: {
//     backgroundColor: '#1ED387',
//     borderRadius: 100,
//     paddingVertical: 8,
//     paddingHorizontal: 24,
//     width: 77,
//     height: 32,
//   },
//   refillButtonText: {
//     fontSize: 12,
//     fontWeight: '500',
//     fontFamily: 'Nunito',
//     color: '#070A1A',
//     textAlign: 'center',
//   },
// });

// export default WalletComponent;


import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // 导入 useNavigation 钩子
import LimeCoinLogo from '../../assets/images/LimeCoinLogo.png';
import ChevronIcon from '../../assets/images/chevron-left.png';

const WalletComponent = () => {
  const navigation = useNavigation();  // 获取 navigation 对象

  return (
    <View style={styles.walletContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.myWalletText}>My Wallet</Text>
          <TouchableOpacity 
            style={styles.detailsButton} 
            onPress={() => navigation.navigate('WalletScreen')}  // 添加跳转逻辑
          >
            <Text style={styles.detailsText}>Details</Text>
            <Image source={ChevronIcon} style={styles.chevronIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.bottomContainer}>
          <Image source={LimeCoinLogo} style={styles.limeCoinLogo} />
          <Text style={styles.amountText}>0</Text> 
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
    width: 380,
    height: 130,
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF26',
    alignSelf: 'center', 
    marginTop: 20,  
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
    width: 16,
    height: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#FFFFFF1A',
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
    width: 50,
    height: 19,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Nunito',
    marginLeft: -170,
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
