
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image, Text, View, StyleSheet } from 'react-native';
// import ProfileScreen from '../screens/ProfileScreen'; 
// import GuestScreen from '../screens/GuestScreen'; 

// // 导入图标
// import HomeIcon from '../../assets/images/Home.png';
// import ForYouIcon from '../../assets/images/ForYou.png';
// import ProfileIcon from '../../assets/images/Profile.png';

// const Tab = createBottomTabNavigator();

// const DummyScreen = () => <View />;

// const BottomTabNavigator = ({ userLoggedIn }) => {
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
//               iconName = HomeIcon;
//               label = 'Home';
//               break;
//             case 'ForYou':
//               iconName = ForYouIcon;
//               label = 'For You';
//               break;
//             case 'Profile':
//               iconName = ProfileIcon;
//               label = 'Profile'; // 无论用户状态如何，始终显示"Profile"
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
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBar,
//       })}
//     >
//       <Tab.Screen name="Home" component={DummyScreen} />
//       <Tab.Screen name="ForYou" component={DummyScreen} />
//       <Tab.Screen name="Profile" component={userLoggedIn ? ProfileScreen : GuestScreen} options={{ headerShown: false }}/>
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     height: 78,
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     justifyContent: 'space-between',
//     backgroundColor: '#070A1A',
//     borderTopWidth: 0,
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 130,
//     height: 62,
//     paddingVertical: 4,
//     paddingHorizontal: 16,
//     marginBottom: 4,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: '#FFFFFF',
//   },
//   activeIcon: {
//     width: 24,
//     height: 24,
//     tintColor: '#1ED387',
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '700',
//     lineHeight: 14,
//     textAlign: 'center',
//     color: '#FFFFFF',
//   },
//   activeLabel: {
//     fontSize: 14,
//     fontWeight: '700',
//     lineHeight: 14,
//     textAlign: 'center',
//     color: '#1ED387',
//   },
// });

// export default BottomTabNavigator;




import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View, StyleSheet } from 'react-native';

// Screens
import ProfileScreen from '../screens/ProfileScreen';
import WalletScreen from '../screens/WalletScreen';
import GuestScreen from '../screens/GuestScreen';
import StoreScreen from '../screens/StoreScreen';
import LanguageScreen from '../screens/LanguageScreen';

// Assets
import HomeIcon from '../../assets/images/Home.png';
import ForYouIcon from '../../assets/images/ForYou.png';
import ProfileIcon from '../../assets/images/Profile.png';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

// DummyScreen as a placeholder
const DummyScreen = () => <View />;

// ProfileStack to handle both Profile and Wallet Screens
function ProfileStackScreen({ userLoggedIn }) {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileMain" component={userLoggedIn ? ProfileScreen : GuestScreen} />
      <ProfileStack.Screen name="WalletScreen" component={WalletScreen} />
      <ProfileStack.Screen name="StoreScreen" component={StoreScreen} />
      <ProfileStack.Screen name="LanguageScreen" component={LanguageScreen} />
    </ProfileStack.Navigator>
  );
}

const BottomTabNavigator = ({ userLoggedIn }) => {
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
              iconName = HomeIcon;
              label = 'Home';
              break;
            case 'ForYou':
              iconName = ForYouIcon;
              label = 'For You';
              break;
            case 'Profile':
              iconName = ProfileIcon;
              label = 'Profile'; // Always display "Profile"
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
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false  
      })}
    >
      <Tab.Screen name="Home" component={DummyScreen} />
      <Tab.Screen name="ForYou" component={DummyScreen} />
      <Tab.Screen name="Profile" children={() => <ProfileStackScreen userLoggedIn={userLoggedIn} />} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 78,
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#070A1A',
    borderTopWidth: 0,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 62,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  activeIcon: {
    width: 24,
    height: 24,
    tintColor: '#1ED387',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  activeLabel: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 14,
    textAlign: 'center',
    color: '#1ED387',
  },
});

export default BottomTabNavigator;









