/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Display from './src/Display';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Display);
