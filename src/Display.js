import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {initialState, reducer} from './context';

import First from './pages/First';
import Second from './pages/Second';

const store = createStore(reducer, initialState);

const Display = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <First />
        <Second />
      </View>
    </Provider>
  );
};

export default Display;
