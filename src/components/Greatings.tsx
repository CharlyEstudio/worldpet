import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ColorsEnum } from '../utils/enums/colors.enum';

const Greatings = () => {
  const date = new Date();

  return (
    <View style={styles.greatings}>
      <View style={styles.card}>
        <Text style={styles.date}>{date.toDateString()}</Text>
        <Text style={styles.messageDog}>Guau guau guau?!</Text>
        <Text style={styles.messageTraductor}>(A donde vamos hoy?!)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  greatings: {
    width: '100%',
    zIndex: 9,
    bottom: 0,
    marginBottom: 220,
    position: 'absolute',
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: ColorsEnum.GRAY_LIGTH_OPACITY,
  },
  date: {
    fontSize: 13,
    color: ColorsEnum.DARK,
    fontWeight: 'bold',
  },
  messageDog: {
    fontSize: 30,
    color: ColorsEnum.DARK,
    fontWeight: 'bold',
  },
  messageTraductor: {
    fontSize: 15,
    color: ColorsEnum.DARK,
  },
});

export default Greatings