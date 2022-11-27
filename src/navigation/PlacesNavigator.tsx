import React from 'react';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// ENUMS
import { NavigationEnum } from '../utils/enums/navigation.enum';
import { ColorsEnum } from '../utils/enums/colors.enum';
import { TitlesScreens } from '../utils/enums/titlesScreen.enum';

// Types
import { RootStackParams } from '../utils/types/rootStackPramas.type';

// Screens
import Places from '../Screens/Places/Places';
import Place from '../Screens/Place/Place';

const Stack = createStackNavigator<RootStackParams>();

export const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationEnum.PLACES}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: ColorsEnum.GRAY_LIGTH,
        }
      }}
    >
      <Stack.Screen name={NavigationEnum.PLACES} options={{title: TitlesScreens.PLACES}} component={Places} />
      <Stack.Screen name={NavigationEnum.PLACE} options={{title: TitlesScreens.PLACE}} component={Place} />
    </Stack.Navigator>
  )
};
