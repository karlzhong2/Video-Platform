import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import LanguageComponent from '../components/LanguageComponent';
import { useNavigation } from '@react-navigation/native';

const LanguageScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopBar title="Language" onBackPress={() => navigation.goBack()} />
      <LanguageComponent />
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
});

export default LanguageScreen;
