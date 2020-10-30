import React from 'react';
import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';

const Second = (props) => {
    const userName=useSelector(state=>state.userName)
    const userSurname=useSelector(state =>state.userSurname)
    const userAge=useSelector(state =>state.userAge)
    const userEmail=useSelector(state =>state.userEmail)
  return (
    <View style={{flex: 1, backgroundColor: '#bdbdbd'}}>
      <Text>Second</Text>
      <Text style={{fontSize: 30}}>Name: {userName}</Text>
      <Text style={{fontSize: 30}}>Surname: {userSurname}</Text>
      <Text style={{fontSize: 30}}>Age: {userAge}</Text>
      <Text style={{fontSize: 30}}>Email: {userEmail}</Text>
    </View>
  );
};

export default Second;
