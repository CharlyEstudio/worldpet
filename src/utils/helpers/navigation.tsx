import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// ENUMS
import { NavigationEnum } from "../enums/navigation.enum";
import { IconsEnum } from '../enums/icons.enum';

export const getIcon = (name: string, color: string, size: number = 20) => {
  let iconName: string;

  switch(name) {
    case NavigationEnum.NAVIGATION_PLACES:
      iconName = IconsEnum.NAVIGATION_PLACES;
      break;
    case NavigationEnum.NAVIGATION_FAVORITES:
      iconName = IconsEnum.NAVIGATION_FAVORITES;
      break;
    case NavigationEnum.NAVIGATION_RANKIN:
      iconName = IconsEnum.NAVIGATION_RANKIN;
      break;
    case NavigationEnum.PROFILE:
      iconName = IconsEnum.PROFILE;
      break;
    default:
      iconName = IconsEnum.NAVIGATION_PLACES;
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export const getIconTopTap = (name: string, color: string, size: number = 20) => {
  let iconName: string;

  switch(name) {
    case NavigationEnum.PLACE:
      iconName = IconsEnum.PLACE;
      break;
    case NavigationEnum.PICTURES:
      iconName = IconsEnum.PICTURES;
      break;
    case NavigationEnum.COMMENTS:
      iconName = IconsEnum.COMMENTS;
      break;
    default:
      iconName = IconsEnum.PLACE;
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export const getIconCustom = (icon: string, color: string, size: number = 20) => {
  return <Icon name={icon} size={size} color={color} />;
};