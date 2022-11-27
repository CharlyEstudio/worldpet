import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Utils
import { getIconTopTap } from '../utils/helpers/navigation';

// ENUMS
import { NavigationEnum } from '../utils/enums/navigation.enum';
import { TitlesScreens } from '../utils/enums/titlesScreen.enum';
import { ColorsEnum } from '../utils/enums/colors.enum';

// Screens
import Pictures from '../Screens/Pictures/Pictures';
import Comments from '../Screens/Comments/Comments';
import Information from '../Screens/Information/Information';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigatorPlace = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: ColorsEnum.GRAY_LIGTH,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: ColorsEnum.PRIMARY,
        tabBarInactiveTintColor: ColorsEnum.PRIMARY_INACTIVE,
        tabBarPressColor: ColorsEnum.PRIMARY,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: ColorsEnum.PRIMARY,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          backgroundColor: ColorsEnum.GRAY_LIGTH,
        },
        tabBarIcon: ({color}) => {
          return getIconTopTap(route.name, color);
        }
      })}
    >
      <Tab.Screen name={NavigationEnum.PLACE} options={{title: TitlesScreens.INFORMATION}} component={Information} />
      <Tab.Screen name={NavigationEnum.PICTURES} options={{title: TitlesScreens.PICTURES}} component={Pictures} />
      <Tab.Screen name={NavigationEnum.COMMENTS} options={{title: TitlesScreens.COMMENTS}} component={Comments} />
    </Tab.Navigator>
  );
}