import { View, Text, Button, Image, StyleSheet } from 'react-native';
import React from 'react';

// ENUMS
import { NavigationEnum } from '../../utils/enums/navigation.enum';

// Models
import { NavigationProps } from '../../utils/interfaces/navigationProps.interface';

// Styles
import { stylesGlobal } from '../../themes/appTheme';

// Components
import Search from '../../components/Search';
import Greatings from '../../components/Greatings';

// Images
const background = require('../../assets/imgs/maps.png');

const Places = ({navigation}: NavigationProps) => {
  return (
    <View style={[stylesGlobal.globalMargin, styles.container]}>
      <Search />
      <Greatings />
      <Image style={styles.image} source={background} />
    </View>
  );
};

/*
<Button
        title='Lugar'
        onPress={() => navigation.navigate(NavigationEnum.TOP_TAP_NAVIGATOR_PLACE, {id: 1, place: 'Milenio III'})}
      />
*/

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  image: {
    zIndex: 1,
  },
});

export default Places;