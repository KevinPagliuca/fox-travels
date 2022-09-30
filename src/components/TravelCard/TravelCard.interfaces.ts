import { ITravel } from 'interfaces/travels.interfaces';

type OrientationType = 'landscape' | 'portrait';

export interface ITravelCardProps {
  item: ITravel;
  orientation?: OrientationType;
}

export type TravelCardOrientationAttributes = {
  orientation?: OrientationType;
};

export type TravelCardFooterAttributes = TravelCardOrientationAttributes & {
  isPromotion?: boolean;
};
