import { View, Text } from 'react-native';
import React from 'react';

// Styles
import { stylesGlobal } from '../../themes/appTheme';

const Profile = () => {
  return (
    <View style={stylesGlobal.globalMargin}>
      <Text style={stylesGlobal.title}>Profile</Text>
    </View>
  );
};

export default Profile;