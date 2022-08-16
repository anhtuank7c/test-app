import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  text: String;
  color: 'red' | 'green' | 'yellow' | 'purple';
}
export const Button = ({color, style, text, ...rest}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: color}, style]}
      {...rest}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 26,
  },
  btnText: {
    fontSize: 17,
    letterSpacing: 0.2,
    alignSelf: 'center',
    color: '#fff',
  },
});
