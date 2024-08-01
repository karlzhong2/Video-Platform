
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import WalletComponent from '../components/WalletComponent';
import ProfileFunctionComponent from '../components/ProfileFunctionComponent';
import { logOut } from '../../src/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { username, uid } = useSelector(state => state.user);
  const [isActive, setIsActive] = useState(false);

  const handleSignOut = () => {
    dispatch(logOut());
    setIsActive(!isActive);  // Toggle button color
    navigation.navigate('Main', { screen: 'GuestScreen' });
    console.log("User signed out");
  };

  const handleLanguageSelect = () => {
    navigation.navigate('LanguageScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ProfileHeader isGuest={false} username={username} uid={uid} />
        <WalletComponent />
        <ProfileFunctionComponent  onLanguageSelect={handleLanguageSelect}/>
      </ScrollView>
      <TouchableOpacity 
        style={[styles.signOutButton, isActive && styles.signOutButtonActive]} 
        onPress={handleSignOut}
      >
        <Text style={[styles.signOutText, isActive && styles.signOutTextActive]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A1A',
  },
  scrollView: {
    marginBottom: 78,  // Space for bottom nav
  },
  signOutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  signOutButtonActive: {
    color: '#1ED387',
  },
  signOutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Nunito',
  },
  signOutTextActive: {
    color: '#1ED387',
  },
});

export default ProfileScreen;
