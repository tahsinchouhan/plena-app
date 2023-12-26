import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'app/screens/HomeScreen';
import { TabScreenParamList } from 'app/types/tabNavigation';
import React from 'react';
import { View } from 'react-native';
import {
  HomeIcon,
  CategoriesIcon,
  FavouritesIcon,
  MoreIcon,
} from './TabBarIcons';

const Tab = createBottomTabNavigator<TabScreenParamList>();

const FavouritesScreen = () => {
  return <View />;
};
const MoreScreen = () => {
  return <View />;
};
const CategoriesScreen = () => {
  return <View />;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior={'initialRoute'}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 30,
          //   paddingTop: 35,
          height: 90,
          //   paddingBottom: 35,
          backgroundColor: '#fff',
          shadowColor: 'black',
        },
        headerBackgroundContainerStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Group>
        <Tab.Screen
          options={{ tabBarIcon: HomeIcon }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: CategoriesIcon }}
          name="Categories"
          component={CategoriesScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: FavouritesIcon }}
          name="Favorites"
          component={FavouritesScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: MoreIcon }}
          name="More"
          component={MoreScreen}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default BottomTabs;
