import { View, Text, Button } from 'react-native';
import React from 'react';

// ENUMS
import { NavigationEnum } from '../../utils/enums/navigation.enum';

// Models
import { NavigationProps } from '../../utils/interfaces/navigationProps.interface';
import { styles } from '../../themes/appTheme';

const Places = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Places</Text>
      <Button
        title='Lugar'
        onPress={() => navigation.navigate(NavigationEnum.TOP_TAP_NAVIGATOR_PLACE, {id: 1, place: 'Milenio III'})}
      />
    </View>
  );
};

export default Places;