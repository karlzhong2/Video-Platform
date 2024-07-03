// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image, Text, View, StyleSheet } from 'react-native';
// import HomeScreen from './HomeScreen';
// import ForYouScreen from './ForYouScreen';
// import ProfileScreen from './ProfileScreen';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused }) => {
//           let iconName;
//           let label;
//           let labelStyle = focused ? styles.activeLabel : styles.label;
//           let iconStyle = focused ? styles.activeIcon : styles.icon;

//           switch (route.name) {
//             case 'Home':
//               iconName = require('./assets/images/Home.png');
//               label = 'Home';
//               break;
//             case 'ForYou':
//               iconName = require('./assets/images/ForYou.png');
//               label = 'For You';
//               break;
//             case 'Profile':
//               iconName = require('./assets/images/Profile.png');
//               label = 'Profile';
//               break;
//           }

//           return (
//             <View style={styles.buttonContainer}>
//               <Image source={iconName} style={iconStyle} />
//               <Text style={labelStyle}>{label}</Text>
//             </View>
//           );
//         },
//         tabBarActiveTintColor: '#1ED387',
//         tabBarInactiveTintColor: 'gray',
//       })}
//       tabBarOptions={{
//         showLabel: false, // 隐藏默认文字标签
//         style: styles.tabBar,
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="ForYou" component={ForYouScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     height: 78,
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     justifyContent: 'space-between',
//     backgroundColor: '#ffffff', // 根据需要调整背景色
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 130,
//     height: 62,
//     paddingVertical: 4,
//     paddingHorizontal: 16,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: '#000', // 默认颜色
//   },
//   activeIcon: {
//     width: 24,
//     height: 24,
//     tintColor: '#1ED387', // 激活颜色
//   },
//   label: {
//     width: 130,
//     fontSize: 14,
//     fontWeight: '700',
//     lineHeight: 14,
//     textAlign: 'center',
//     color: '#000', // 默认颜色
//   },
//   activeLabel: {
//     width: 130,
//     fontSize: 14,
//     fontWeight: '700',
//     lineHeight: 14,
//     textAlign: 'center',
//     color: '#1ED387', // 激活颜色
//   },
// });

// export default BottomTabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, StyleSheet } from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let label;
          let labelStyle = focused ? styles.activeLabel : styles.label;
          let iconStyle = focused ? styles.activeIcon : styles.icon;

          switch (route.name) {
            case 'Home':
              iconName = require('../../assets/images/Home.png');
              label = 'Home';
              break;
            case 'ForYou':
              iconName = require('../../assets/images/ForYou.png');
              label = 'For You';
              break;
            case 'Profile':
              iconName = require('../../assets/images/Profile.png');
              label = 'Profile';
              break;
          }

          return (
            <View style={styles.buttonContainer}>
              <Image source={iconName} style={iconStyle} />
              <Text style={labelStyle}>{label}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: '#1ED387',
        tabBarInactiveTintColor: 'gray',
        tabBarButton: (props) => (props.accessibilityState.selected ? TouchableOpacity : View) // Allow pressing only if selected
      })}
      tabBarOptions={{
        showLabel: false, // 隐藏默认文字标签
        style: styles.tabBar,
      }}
    >
      <Tab.Screen name="Home" component={View} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="ForYou" component={View} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 78,
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff', // 根据需要调整背景色
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 62,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#000', // 默认颜色
  },
  activeIcon: {
    width: 24,
    height: 24,
    tintColor: '#1ED387', // 激活颜色
  },
  label: {
    width: 130,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
    textAlign: 'center',
    color: '#000', // 默认颜色
  },
  activeLabel: {
    width: 130,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
    textAlign: 'center',
    color: '#1ED387', // 激活颜色
  },
});

export default BottomTabNavigator;
