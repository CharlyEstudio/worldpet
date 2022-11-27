import { View, Text, Button } from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

// Styles
import { stylesGlobal } from '../../themes/appTheme';

// Types
import { RootStackParams } from '../../utils/types/rootStackPramas.type';

// ENUMS
import { NavigationEnum } from '../../utils/enums/navigation.enum';

export interface CustomNavigationProps extends StackScreenProps<RootStackParams, NavigationEnum.PLACE>{};

const Place = ({navigation, route}: CustomNavigationProps) => {
  const params = route.params;
  
  return (
    <View style={stylesGlobal.globalMargin}>
      <Text>Hola</Text>
      <Text style={stylesGlobal.title}>{params.place}</Text>
      <Button
        title='Regresar'
        onPress={() => navigation.pop()}
      />
    </View>
  );
};

export default Place;