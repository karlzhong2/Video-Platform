import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import pencilIcon from '../../assets/images/pencil.png';  

const ProfileHeader = ({ username, uid, profilePicUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: profilePicUrl }} style={styles.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.uid}>{uid}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.pencilButton}>
        <Image source={pencilIcon} style={styles.pencilIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 'auto',
    paddingVertical: 24,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
  },
  profilePic: {
    width: 64,
    height: 64,
    borderRadius: 32,  
  },
  textContainer: {
    marginLeft: 12,
    height: 39,
  },
  username: {
    color: '#FFFFFF',
    fontFamily: 'Nunito',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
    textAlign: 'center',
  },
  uid: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: 'Nunito',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'center',
  },
  pencilButton: {
    paddingVertical: 0,
    paddingHorizontal: 12,
    height: 64,
    justifyContent: 'center',
  },
  pencilIcon: {
    width: 24,
    height: 24,
  },
});

export default ProfileHeader;
