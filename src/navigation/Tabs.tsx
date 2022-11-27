import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ENUMS
import { NavigationEnum } from '../utils/enums/navigation.enum';
import { TitlesScreens } from '../utils/enums/titlesScreen.enum';
import { ColorsEnum } from '../utils/enums/colors.enum';

// Stack Navigator
import { PlacesNavigator } from './PlacesNavigator';
import { FavoritesNavigator } from './FavoritesNavigator';
import { RankinNavigator } from './RankinNavigator';

// Components
import Profile from '../Screens/Profile/Profile';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: ColorsEnum.WHITE,
      }}
      initialRouteName={NavigationEnum.NAVIGATION_PLACES}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ColorsEnum.PRIMARY,
        tabBarInactiveTintColor: ColorsEnum.PRIMARY_INACTIVE,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        }
      }}
    >
      <Tab.Screen name={NavigationEnum.NAVIGATION_PLACES} options={{ title: TitlesScreens.PLACES }} component={PlacesNavigator} />
      <Tab.Screen name={NavigationEnum.NAVIGATION_FAVORITES} options={{ title: TitlesScreens.FAVORITES }} component={FavoritesNavigator} />
      <Tab.Screen name={NavigationEnum.NAVIGATION_RANKIN} options={{ title: TitlesScreens.RANKIN }} component={RankinNavigator} />
      <Tab.Screen name={NavigationEnum.PROFILE} options={{ title: TitlesScreens.PROFILE }} component={Profile} />
    </Tab.Navigator>
  );
};