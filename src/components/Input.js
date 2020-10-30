import React from 'react';
import {View, TextInput} from 'react-native';

const Input = (props) => {
  
  return (
    <View
      style={{
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 20,
      }}>
      <TextInput
        value={props.inputValue}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        onChangeText={(val) =>props.setUser(val)}
        
        
        
      />
    </View>
  );
};

export default Input;
