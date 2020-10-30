import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

import {useSelector} from 'react-redux';

const Second = (props) => {
    const userName=useSelector(state=>state.userName)
    const userSurname=useSelector(state =>state.userSurname)
    const userAge=useSelector(state =>state.userAge)
    const userEmail=useSelector(state =>state.userEmail)
  return (
    <View style={{flex: 1, backgroundColor: '#e0e0e0'}}>
      <View style={{margin:20}}>
        <Text style={[styles.text, {color:"black"}]}>Second</Text>
        <Text style={styles.text}>Name: {userName}</Text>
        <Text style={styles.text}>Surname: {userSurname}</Text>
        <Text style={styles.text}>Age: {userAge}</Text>
        <Text style={styles.text}>Email: {userEmail}</Text>
      </View>
      <View style={{margin:30}}>
        <Button title="BACK" onPress={() =>props.navigation.navigate("FirstPage")}/>
      </View>
    </View>
  );
};

export default Second;

const styles=StyleSheet.create({
  text:{
    fontSize: 30, 
    marginVertical:20,
    color:"#424242"
  }
})