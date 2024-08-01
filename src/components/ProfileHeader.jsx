


// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import pencilIcon from '../../assets/images/pencil.png';
// import profilePic from '../../assets/images/guagua.jpg';

// const ProfileHeader = ({ isGuest = false }) => {
//   const [username, setUsername] = useState('');
//   const [uid, setUid] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     // 生成随机用户名和UID
//     const randomUsername = Math.random().toString(36).substring(2, 8);
//     const randomUid = Math.random().toString().substring(2, 12);
//     setUsername(randomUsername);
//     setUid(randomUid);
//   }, []);

//   const signInButton = (
//     <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignInScreen')}>
//       <Text style={styles.signInText}>Sign In</Text>
//     </TouchableOpacity>
//   );

//   const pencilButton = (
//     <TouchableOpacity style={styles.pencilButton} onPress={() => navigation.navigate('EditProfileScreen', { currentUsername: username })}>
//       <Image source={pencilIcon} style={styles.pencilIcon} />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.leftContainer}>
//         <Image source={profilePic} style={styles.profilePic} />
//         <View style={styles.textContainer}>
//           <Text style={styles.username}>{username}</Text>
//           <Text style={styles.uid}>{uid}</Text>
//         </View>
//       </View>
//       {isGuest ? signInButton : pencilButton}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 24,
//     paddingHorizontal: 12,
//     backgroundColor: '#FFFFFF1A',
//     height: 104,
//   },
//   leftContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profilePic: {
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//   },
//   textContainer: {
//     marginLeft: 12,
//   },
//   username: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '700',
//     fontFamily: 'Nunito',
//   },
//   uid: {
//     color: 'rgba(255, 255, 255, 0.6)',
//     fontSize: 12,
//     fontWeight: '400',
//     fontFamily: 'Nunito',
//   },
//   signInButton: {
//     backgroundColor: '#1ED387',
//     borderRadius: 100,
//     paddingVertical: 8,
//     paddingHorizontal: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   signInText: {
//     color: '#070A1A',
//     fontSize: 12,
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   pencilButton: {
//     justifyContent: 'center',
//     paddingHorizontal: 12,
//     height: 64,
//   },
//   pencilIcon: {
//     width: 24,
//     height: 24,
//   },
// });

// export default ProfileHeader;




import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import pencilIcon from '../../assets/images/pencil.png';
import profilePic from '../../assets/images/guagua.jpg';

const ProfileHeader = ({ isGuest, username, uid }) => {
  const navigation = useNavigation();

  const signInButton = (
    <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('SignInScreen')}>
      <Text style={styles.signInText}>Sign In</Text>
    </TouchableOpacity>
  );

  const pencilButton = (
    <TouchableOpacity style={styles.pencilButton} onPress={() => navigation.navigate('EditProfileScreen', { currentUsername: username })}>
      <Image source={pencilIcon} style={styles.pencilIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={profilePic} style={styles.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.uid}>{uid}</Text>
        </View>
      </View>
      {isGuest ? signInButton : pencilButton}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF1A',
    height: 104,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  textContainer: {
    marginLeft: 12,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Nunito',
  },
  uid: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Nunito',
  },
  signInButton: {
    backgroundColor: '#1ED387',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: '#070A1A',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  pencilButton: {
    justifyContent: 'center',
    paddingHorizontal: 12,
    height: 64,
  },
  pencilIcon: {
    width: 24,
    height: 24,
  },
});

export default ProfileHeader;
