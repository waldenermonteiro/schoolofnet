import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Inputs as Input } from './styles';
function HomeScreen({ navigation }) {
  const [textValue, onChangeText] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput style={Input.Inputs.basicInput} value={textValue} onChangeText={(value) => onChangeText(value)} />
      <Button title="Go to details screen" onPress={() => navigation.navigate('Details', { textValue })} />
    </View>
  );
}
function DetailsScreen({ route, navigation }) {
  const { textValue } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{textValue}</Text>
    </View>
  );
}
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
