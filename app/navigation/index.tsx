import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from 'app/screens/Cart';
import HomeScreen from 'app/screens/HomeScreen';
import Product from 'app/screens/ProductDetails';
import * as React from 'react';
import BottomTabs from './BottomNavigation';

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTabs'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#01031e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#01031e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Stack.Screen
        name="Categories"
        component={HomeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#01031e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Stack.Screen
        name="Favourites"
        component={HomeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#01031e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Stack.Screen
        name="More"
        component={HomeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#01031e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#01031e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#01031e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}
      />
    </Stack.Navigator>
  );
};
