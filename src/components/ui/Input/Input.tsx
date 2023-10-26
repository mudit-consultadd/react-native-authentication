import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React from 'react';

type InputProps = Omit<TextInputProps, 'onChangeText' | 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const Input = ({ value, onChange, placeholder, ...props }: InputProps) => {
  return (
    <View style={styles.root}>
      <TextInput
        {...props}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 12,
    paddingVertical: 16,
    marginVertical: 5,
  },
  input: {},
});
