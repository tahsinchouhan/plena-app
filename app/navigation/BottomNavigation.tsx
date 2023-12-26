import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CategoriesSVG, HomeSVG } from 'app/assets/svg';
import HomeScreen from 'app/screens/HomeScreen';
import React from 'react';
import { View } from 'react-native';
const Tab = createBottomTabNavigator();

const TabIcon = ({focused, icon}) => {
  return (
    <View
      className={
        focused
          ? 'bg-[#000] shadow-md shadow-[#000] p-4 rounded-full absolute bottom-5'
          : 'p-3 rounded-full '
      }>
      {icon}
    </View>
  );
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
          position: 'absolute',
          bottom: 15,
          width: '95%',
          left: 10,
          borderRadius: 20,
          //   paddingTop: 35,
          height: 60,
          //   paddingBottom: 35,
          backgroundColor: '#fff',
          shadowColor: 'black',
        },
      }}>
      <Tab.Group>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => {
              return (
                <TabIcon
                  focused={focused}
                  icon={<HomeSVG color={focused ? '#f0c537' : 'black'} />}
                />
              );
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({focused}) => {
              return (
                <TabIcon
                  focused={focused}
                  icon={<CategoriesSVG color={focused ? '#f0c537' : 'black'} />}
                />
              );
            },
          }}
          name="Categories"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Favourites',
            tabBarIcon: ({focused}) => {
              return (
                <TabIcon
                  focused={focused}
                  icon={<HomeSVG color={focused ? '#f0c537' : 'black'} />}
                />
              );
            },
          }}
          name="Favourites"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({focused}) => {
              return (
                <TabIcon
                  focused={focused}
                  icon={<CategoriesSVG color={focused ? '#f0c537' : 'black'} />}
                />
              );
            },
          }}
          name="More"
          component={HomeScreen}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default BottomTabs;
