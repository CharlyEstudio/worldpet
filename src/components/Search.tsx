import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

// ENUMS
import { ColorsEnum } from '../utils/enums/colors.enum';
import { IconsEnum } from '../utils/enums/icons.enum';

// Utils
import { getIconCustom } from '../utils/helpers/navigation';

const Search = () => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState(null);

  const handler = () => {
    console.log(text);
  };

  return (
    <View style={styles.search}>
      <View style={[styles.card, styles.shadowProp, styles.elevation]}>
        {getIconCustom(IconsEnum.SEARCH, ColorsEnum.GRAY_LIGTH)}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          onBlur={handler}
          value={text}
          placeholder='Buscar'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    width: '100%',
    zIndex: 9,
    position: 'absolute',
  },
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
  input: {
    marginLeft: 5,
    width: '100%'
  },
});

export default Search;