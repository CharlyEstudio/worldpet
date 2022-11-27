import React from 'react';
import { Text } from 'react-native';

// ENUMS
import { NavigationEnum } from "../enums/navigation.enum";

export const getIcon = (name: string, color: string, size: number = 10) => {
  let iconName: string;

  switch(name) {
    case NavigationEnum.NAVIGATION_PLACES:
      iconName = 'T1';
      break;
    case NavigationEnum.NAVIGATION_FAVORITES:
      iconName = 'T2';
      break;
    case NavigationEnum.NAVIGATION_RANKIN:
      iconName = 'T3';
      break;
    case NavigationEnum.PROFILE:
      iconName = 'T4';
      break;
    default:
      iconName = 'T1';
  }

  return <Text style={{color: color}}>{iconName}</Text>;
};

export const getIconTopTap = (name: string, color: string, size: number = 10) => {
  let iconName: string;

  switch(name) {
    case NavigationEnum.PLACE:
      iconName = 'In';
      break;
    case NavigationEnum.PICTURES:
      iconName = 'Ft';
      break;
    case NavigationEnum.COMMENTS:
      iconName = 'Co';
      break;
    default:
      iconName = 'In';
  }

  return <Text style={{color: color}}>{iconName}</Text>;
};