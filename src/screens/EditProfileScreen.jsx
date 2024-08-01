// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import SaveButton from '../components/SaveButton';
// import UsernameInput from '../components/UsernameInput';
// import backIcon from '../../assets/images/back.png';

// const EditProfileScreen = () => {
//   const route = useRoute();
//   const { currentUsername } = route.params;
//   const [username, setUsername] = useState(currentUsername || '');
//   const navigation = useNavigation();

//   const handleSave = () => {
//     navigation.navigate('Profile', { updatedUsername: username });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Image source={backIcon} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.title}>Edit Profile</Text>
//         <View style={styles.placeholder} />
//       </View>
//       <Text style={styles.label}>Username</Text>
//       <UsernameInput
//         value={username}
//         onChangeText={setUsername}
//         placeholder="Enter your username"
//       />
//       <SaveButton onPress={handleSave} active={!!username} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#070A1A',
//     padding: 24,
//     justifyContent: 'flex-start',
//   },
//   header: {
//     width: '100%',
//     height: 60,
//     padding: 8,
//     paddingHorizontal: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     opacity: 1,
    
//   },
//   title: {
//     fontFamily: 'Nunito',
//     fontSize: 18,
//     fontWeight: '500',
//     lineHeight: 24,
//     textAlign: 'center',
//     color: '#FFFFFF',
//     opacity: 1,
//   },
//   backButton: {
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: -15, // 添加距离
    
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//   },
//   placeholder: {
//     width: 24,
//     height: 24,
//   },
//   label: {
//     color: '#FFFFFF',
//     fontFamily: 'Nunito',
//     fontSize: 14,
//     fontWeight: '700',
//     marginBottom: 12,
//   },
// });

// export default EditProfileScreen;




import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import SaveButton from '../components/SaveButton';
import UsernameInput from '../components/UsernameInput';
import backIcon from '../../assets/images/back.png';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../src/store'; // 导入 updateUsername action

const EditProfileScreen = () => {
  const route = useRoute();
  const { currentUsername } = route.params;
  const [username, setUsername] = useState(currentUsername || '');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateUsername({ username })); // 使用 Redux 更新用户名
    navigation.navigate('Profile'); // 返回 Profile 屏幕
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.placeholder} />
      </View>
      <UsernameInput
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <SaveButton onPress={handleSave} active={!!username} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A1A',
    padding: 24,
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 60,
    padding: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 1,
  },
  title: {
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: '#FFFFFF',
    opacity: 1,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15, // 添加距离
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  placeholder: {
    width: 24,
    height: 24,
  },
});

export default EditProfileScreen;

