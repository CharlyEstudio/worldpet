import { View, Text, Button } from 'react-native';
import React from 'react';

// Styles
import { styles } from '../../themes/appTheme';

// ENUMS
import { NavigationEnum } from '../../utils/enums/navigation.enum';

// Models
import { NavigationProps } from '../../utils/interfaces/navigationProps.interface';

const Rankin = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Rankin</Text>
      <Button
        title='Ir a Lugar'
        onPress={() => navigation.navigate(NavigationEnum.PLACE, {id: 3, place: 'Paseos del Bosque'})}
      />
    </View>
  );
};

export default Rankin;