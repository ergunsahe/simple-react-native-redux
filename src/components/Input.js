import React from 'react';
import {View, TextInput} from 'react-native';



const Input = (props) => {
  
  return (
    <View style={{margin:10, backgroundColor:"white", borderRadius:10}}>
        <TextInput placeholder={props.placeholder} keyboardType={props.keyboardType} onChangeText={value =>props.setUser(value)} />
    </View>
  );
};

export default Input;