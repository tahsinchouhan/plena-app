import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from 'app/screens/Cart';
import Product from 'app/screens/ProductDetails';
import { RootStackParamList } from 'app/types/navigation';
import * as React from 'react';
import BottomTabs from './BottomNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeTabs'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};
