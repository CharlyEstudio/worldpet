import { View, Text, Button } from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

// Styles
import { styles } from '../../themes/appTheme';

// Types
import { RootStackParams } from '../../utils/types/rootStackPramas.type';

// ENUMS
import { NavigationEnum } from '../../utils/enums/navigation.enum';

export interface CustomNavigationProps extends StackScreenProps<RootStackParams, NavigationEnum.PLACE>{};

const Place = ({navigation, route}: CustomNavigationProps) => {
  const params = route.params;
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{params.place}</Text>
      <Button
        title='Regresar'
        onPress={() => navigation.pop()}
      />
    </View>
  );
};

export default Place;