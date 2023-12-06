import {TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Input = ({text, setText, placeholder, style}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={setText}
      value={text}
      placeholder={placeholder}
    />
  );
};

export default Input;
