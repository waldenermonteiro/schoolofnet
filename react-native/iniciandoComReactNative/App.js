import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
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
  const state = {
    name: 'Junior Monteiro',
  };
  const [value, onChangeText] = useState('Useless Placeholder');
  const onPressLearnMore = () => {
    alert(value);
  };
  return (
    <>
      <View style={styles.sectionContainer}>
        <Component1 name={state.name} num1={4} num2={5} />
        <TextInput style={styles.input} onChangeText={(text) => onChangeText(text)} value={value} />
        <TouchableHighlight style={styles.button} onPress={onPressLearnMore}>
          <Text style={styles.textButton}>Learn More</Text>
        </TouchableHighlight>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    color: '#fff',
  },
});
export default App;
