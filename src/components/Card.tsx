import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// ENUMS
import { ColorsEnum } from '../utils/enums/colors.enum';

const Card = ({children, customStyles}: any) => {
  return (
    <View style={[styles.card, styles.shadowProp, styles.elevation, customStyles]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 25,
    marginHorizontal: 12,
    paddingHorizontal: 10,
    backgroundColor: ColorsEnum.WHITE,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  shadowProp: {
    shadowColor: ColorsEnum.GRAY_LIGTH_IOS,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: ColorsEnum.GRAY_LIGTH_ANDROID,
  },
});

export default Card;