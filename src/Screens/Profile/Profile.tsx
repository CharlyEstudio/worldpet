import { View, Text } from 'react-native';
import React from 'react';

// Styles
import { styles } from '../../themes/appTheme';

const Profile = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

export default Profile;