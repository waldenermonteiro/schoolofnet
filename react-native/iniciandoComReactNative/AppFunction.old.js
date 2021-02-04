import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function Component1(props) {
  const { name, num1, num2 } = props;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{num1 + num2}</Text>
    </View>
  );
}
const App = () => {
  const { name } = this.state;
  return (
    <>
      <View style={styles.sectionContainer}>
        <Component1 name={name} num1={4} num2={5} />
        <TextInput placeholder="My Placeholder" value={name} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});
export default App;
