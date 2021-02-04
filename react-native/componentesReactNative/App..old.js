/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';

import { Containers as Container } from './styles';
import { Header } from './src/components/Header';

const App = () => (
  <>
    <View style={Container.Containers.mainContainer}>
      <Header />
      <View style={Container.Containers.contentContainer}>
        <Text>View 2</Text>
      </View>
      <View style={Container.Containers.footerContainer}>
        <Text>View 3</Text>
      </View>
    </View>
  </>
);

export default App;
