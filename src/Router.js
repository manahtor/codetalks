import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import Auth from './pages/auth';
import Room from './pages/Room/Room';
import Rooms from './pages/Rooms/Rooms';
import {colorscheme} from './config/colors';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer theme={colorscheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rooms"
          component={Rooms}
          options={{
            title: 'Odalar',
            headerTitleAlign: 'center',
            headerLeft: false,
          }}
        />
        <Stack.Screen
          name="Room"
          component={Room}
          options={{
            title: 'Oda',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
