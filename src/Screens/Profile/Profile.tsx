import { View, Text, SectionList, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

// Styles
import { stylesGlobal } from '../../themes/appTheme';
import { ColorsEnum } from '../../utils/enums/colors.enum';
import { getIconCustom } from '../../utils/helpers/navigation';
import { IconsEnum } from '../../utils/enums/icons.enum';

const account = [
  {
    title: "Cuenta",
    data: ["Cambiar Password", "Notificaciones", "Configuracion de Privacidad", "Cerrar Sesion"]
  },
  {
    title: "Direccion",
    data: ["Av Circuito Andamaxei", "Cambiar domicilio"]
  },
  {
    title: "Mas Opciones",
    data: ["Configuracion de Navegacion"]
  },
];

const Item = ({ title }: any) => (
  <View style={styles.item}>
    <View style={styles.icon}>
      {getIconCustom(IconsEnum.LOCK, ColorsEnum.WHITE, 10)}
    </View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Profile = () => {
  return (
    <View style={[stylesGlobal.globalMargin, styles.container]}>
      <Text style={styles.principal}>Perfil</Text>
      <SectionList
        sections={account}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: ColorsEnum.WHITE,
  },
  principal: {
    fontSize: 25,
    color: ColorsEnum.DARK,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 15,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: ColorsEnum.DARK,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 2,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: ColorsEnum.GRAY_LIGTH,
  },
  icon: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: ColorsEnum.BLUE,
  },
  title: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export default Profile;