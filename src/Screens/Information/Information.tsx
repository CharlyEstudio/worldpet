import { View, Text, Button } from 'react-native';
import React from 'react';

// Interfaces
import { NavigationProps } from '../../utils/interfaces/navigationProps.interface';

// Styles
import { stylesGlobal } from '../../themes/appTheme';

const Information = ({navigation, route}: NavigationProps) => {
  return (
    <View style={stylesGlobal.globalMargin}>
      <Text style={stylesGlobal.title}>Place</Text>
      <Button
        title='Regresar'
        onPress={() => navigation.pop()}
      />
    </View>
  );
};

export default Information;