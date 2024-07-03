import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import WalletComponent from '../components/WalletComponent';
import ProfileHeader from '../components/ProfileHeader';
import ProfileFunctionComponent from '../components/ProfileFunctionComponent';
import BottomTabNavigator from '../components/BottomTabNavigator';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ProfileHeader />
        <WalletComponent />
        <ProfileFunctionComponent />
      </ScrollView>
      <BottomTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A1A',
  },
  scrollView: {
    marginBottom: 78  // 留出底部导航栏的空间
  }
});

export default ProfileScreen;
