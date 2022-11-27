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
import Favorites from '../Screens/Favorites/Favorites';
import Place from '../Screens/Place/Place';

const Stack = createStackNavigator<RootStackParams>();

export const FavoritesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationEnum.FAVORITES}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: ColorsEnum.GRAY_LIGTH,
        }
      }}
    >
      <Stack.Screen name={NavigationEnum.FAVORITES} options={{title: TitlesScreens.FAVORITES}} component={Favorites} />
      <Stack.Screen name={NavigationEnum.PLACE} options={{title: TitlesScreens.PLACE}} component={Place} />
    </Stack.Navigator>
  )
};
