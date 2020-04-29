import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth0Provider } from './providers/Auth0';
import { ApolloProvider } from './providers/Apollo';
import { Home, Logo } from './screens/Home';

const Stack = createStackNavigator();

export const App = () => (
  <Auth0Provider>
    <ApolloProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Logo /> }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  </Auth0Provider>
);
