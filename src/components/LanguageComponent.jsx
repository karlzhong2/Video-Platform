import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import RadioButtonImage from '../../assets/images/RadioButton.png';
import ActiveRadioButtonImage from '../../assets/images/ActiveRadioButton.png';
import { setLanguage } from '../store'; 

const LanguageComponent = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(state => state.language.language); // 获取当前语言状态
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage); // 初始化本地状态

  useEffect(() => {
    //本地状态总是反映 Redux Store 的状态
    setSelectedLanguage(currentLanguage);
  }, [currentLanguage]);

  const handleSelectLanguage = (language) => {
    if (selectedLanguage !== language) {
      setSelectedLanguage(language);
      dispatch(setLanguage(language)); // 更新全局语言状态
    }
  };

  return (
    <View style={styles.container}>
      {/* Chinese Container */}
      <TouchableOpacity 
        style={styles.languageOption} 
        onPress={() => handleSelectLanguage('zh')}
      >
        <Text style={styles.languageText}>简体中文</Text>
        <Image 
          source={selectedLanguage === 'zh' ? ActiveRadioButtonImage : RadioButtonImage} 
          style={styles.radioButton} 
        />
      </TouchableOpacity>
      
      {/* English Container */}
      <TouchableOpacity 
        style={styles.languageOption} 
        onPress={() => handleSelectLanguage('en')}
      >
        <Text style={styles.languageText}>English</Text>
        <Image 
          source={selectedLanguage === 'en' ? ActiveRadioButtonImage : RadioButtonImage} 
          style={styles.radioButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390, 
    height: 112, 
    backgroundColor: '#070A1A',
    opacity: 1, 
  },
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 390,  
    height: 56,  
    paddingVertical: 16, 
    paddingHorizontal: 24, 
    borderBottomWidth: 1, 
    borderColor: '#070A1A', 
  },
  languageText: {
    fontFamily: 'Nunito', 
    fontSize: 16, 
    fontWeight: '400', 
    lineHeight: 19.36, 
    color: '#FFFFFF', 
    textAlign: 'left',
    marginLeft: -12, // Adjust as needed
  },
  radioButton: {
    width: 24, 
    height: 24, 
    borderRadius: 12, 
    opacity: 1, 
  }
});

export default LanguageComponent;


