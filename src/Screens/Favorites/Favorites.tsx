import { View, Text, Button } from 'react-native';
import React from 'react';

// Styles
import { styles } from '../../themes/appTheme';

// ENUMS
import { NavigationEnum } from '../../utils/enums/navigation.enum';

// Models
import { NavigationProps } from '../../utils/interfaces/navigationProps.interface';

const Favorites = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Favorites</Text>
      <Button
        title='Ir a Places'
        onPress={() => navigation.navigate(NavigationEnum.PLACES)}
      />
      <Button
        title='Regresar'
        onPress={() => navigation.pop()}
      />
    </View>
  );
};

export default Favorites;