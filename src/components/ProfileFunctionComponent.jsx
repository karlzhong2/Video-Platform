import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ChevronIcon from '../../assets/images/chevron-left.png'

const ProfileFunctionComponent = () => {
  const items = [
    { key: 'likes', text: 'My Likes' },
    { key: 'favourites', text: 'My Favourites' },
    { key: 'history', text: 'Purchase History' },
    { key: 'language', text: 'Language' }
  ];

  return (
    <View style={styles.container}>
      {items.map(item => (
        <TouchableOpacity key={item.key} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.text}</Text>
          <Image source={ChevronIcon} style={styles.chevronIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,  // 固定宽度
    height: 224, // 固定高度
    backgroundColor: '#070A1A',
    paddingVertical: 24, // 上下内边距
    paddingHorizontal: 12, // 左右内边距
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 390,  // 固定宽度
    height: 56,  // 动态高度
    paddingHorizontal: 24, // 左右内边距
    borderBottomWidth: 1, // 底部边框宽度
    borderColor: '#FFFFFF50', // 边框颜色
  },
  itemText: {
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21.82,
    color: '#FFFFFF',
    width: 63, // 宽度调整
    height: 22, // 高度调整
  },
  chevronIcon: {
    width: 24,  // 确保图标宽度为24px
    height: 24, // 确保图标高度为24px
    opacity: 1, // 确保图标不透明度为1
  }
});

export default ProfileFunctionComponent;
