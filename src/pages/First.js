import React, {useState} from 'react';
import {View, Text, Button, TextInput, ScrollView} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import Input from '../components/Input';

const First = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#e0e0e0'}}>
      <Text style={{fontSize:25, margin:20}}>First</Text>

      <Input placeholder="enter name.." setUser={(value) => setName(value)} />
      <Input
        placeholder="enter surname.."
        setUser={(value) => setSurname(value)}
      />
      <Input placeholder="enter age.." setUser={(value) => setAge(value)} />
      <Input
        placeholder="enter email.."
        setUser={(value) => setEmail(value)}
        keyboardType={'email-address'}
      />

      <View style={{marginVertical: 20, marginHorizontal: 50}}>
        <Button
          title="ADD!"
          onPress={() => {
            props.navigation.navigate('SecondPage');
            dispatch({
              type: 'ADD_USER',
              payLoad: {
                newName: name,
                newSurname: surname,
                newAge: age,
                newEmail: email,
              },
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default First;
