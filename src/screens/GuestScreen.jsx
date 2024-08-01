
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import WalletComponent from '../components/WalletComponent';
import ProfileFunctionComponent from '../components/ProfileFunctionComponent';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const GuestScreen = () => {
  const navigation = useNavigation();
  const { username, uid } = useSelector(state => state.user);  // 使用 Redux state
  const handleLanguageSelect = () => {
    navigation.navigate('LanguageScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ProfileHeader isGuest={true} username={username} uid={uid} />
        <WalletComponent />
        <ProfileFunctionComponent onLanguageSelect={handleLanguageSelect}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A1A',
    justifyContent: 'flex-start'
  },
  scrollView: {
    marginBottom: 78,  // Space for the bottom navigation
  },
});

export default GuestScreen;

