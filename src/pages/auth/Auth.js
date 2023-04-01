import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Login from './Login';
import Sign from './Sign';

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
}
