// ENUMS
import { NavigationEnum } from '../enums/navigation.enum';

// Interface
import { PlaceParams } from '../interfaces/placeParams.interface';

export type RootStackParams = {
    [NavigationEnum.PLACES]: undefined,
    [NavigationEnum.PLACE]: PlaceParams,
    [NavigationEnum.FAVORITES]: undefined,
    [NavigationEnum.RANKIN]: undefined,
    [NavigationEnum.PROFILE]: undefined,
};