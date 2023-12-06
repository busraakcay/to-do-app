import {Text as RNText} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Text = ({text, style}) => {
  return <RNText style={[styles.text, style]}>{text}</RNText>;
};

export default Text;
