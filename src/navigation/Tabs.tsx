import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';

// Utils
import { getIcon } from '../utils/helpers/navigation';

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

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      initialRouteName={NavigationEnum.NAVIGATION_PLACES}
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: ColorsEnum.GRAY_LIGTH,
      }}
      activeColor={ColorsEnum.PRIMARY}
      inactiveColor={ColorsEnum.PRIMARY_INACTIVE}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          return getIcon(route.name, color);
        }
      })}
    >
      <BottomTabAndroid.Screen name={NavigationEnum.NAVIGATION_PLACES} options={{ title: TitlesScreens.PLACES,  }} component={PlacesNavigator} />
      <BottomTabAndroid.Screen name={NavigationEnum.NAVIGATION_FAVORITES} options={{ title: TitlesScreens.FAVORITES }} component={FavoritesNavigator} />
      <BottomTabAndroid.Screen name={NavigationEnum.NAVIGATION_RANKIN} options={{ title: TitlesScreens.RANKIN }} component={RankinNavigator} />
      <BottomTabAndroid.Screen name={NavigationEnum.PROFILE} options={{ title: TitlesScreens.PROFILE }} component={Profile} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: ColorsEnum.GRAY_LIGTH,
      }}
      initialRouteName={NavigationEnum.NAVIGATION_PLACES}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: ColorsEnum.PRIMARY,
        tabBarInactiveTintColor: ColorsEnum.PRIMARY_INACTIVE,
        tabBarLabelStyle: {
          fontSize: 11,
        },
        tabBarIconStyle: {
          fontSize: 20,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: ColorsEnum.GRAY_LIGTH,
        },
        tabBarIcon: ({color, size}) => {
          return getIcon(route.name, color, size);
        }
      })}
    >
      <BottomTabIOS.Screen name={NavigationEnum.NAVIGATION_PLACES} options={{ title: TitlesScreens.PLACES }} component={PlacesNavigator} />
      <BottomTabIOS.Screen name={NavigationEnum.NAVIGATION_FAVORITES} options={{ title: TitlesScreens.FAVORITES }} component={FavoritesNavigator} />
      <BottomTabIOS.Screen name={NavigationEnum.NAVIGATION_RANKIN} options={{ title: TitlesScreens.RANKIN }} component={RankinNavigator} />
      <BottomTabIOS.Screen name={NavigationEnum.PROFILE} options={{ title: TitlesScreens.PROFILE }} component={Profile} />
    </BottomTabIOS.Navigator>
  );
};