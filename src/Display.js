import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {initialState, reducer} from './context';

import First from './pages/First';
import Second from './pages/Second';

const Stack =createStackNavigator()
const store = createStore(reducer, initialState);

const Display = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirstPage" component={First} options={{headerShown:false}}/>
          <Stack.Screen name="SecondPage" component={Second}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Display;
