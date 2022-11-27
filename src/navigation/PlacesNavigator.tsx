import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Navigation
import { TopTabNavigatorPlace } from './TopTapNavigationPlace';

// ENUMS
import { NavigationEnum } from '../utils/enums/navigation.enum';
import { ColorsEnum } from '../utils/enums/colors.enum';
import { TitlesScreens } from '../utils/enums/titlesScreen.enum';

// Types
import { RootStackParams } from '../utils/types/rootStackPramas.type';

// Screens
import Places from '../Screens/Places/Places';

const Stack = createStackNavigator<RootStackParams>();

export const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationEnum.PLACE}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: ColorsEnum.GRAY_LIGTH,
        }
      }}
    >
      <Stack.Screen name={NavigationEnum.PLACES} options={{title: TitlesScreens.PLACES}} component={Places} />
      <Stack.Screen name={NavigationEnum.TOP_TAP_NAVIGATOR_PLACE} options={{title: TitlesScreens.PLACE}} component={TopTabNavigatorPlace} />
    </Stack.Navigator>
  )
};
