import { IDestination } from './destinations.interfaces';

export type TravelPriceType =
  | {
      type: 'package';
      packagePrice: number;
    }
  | {
      type: 'day';
      pricePerDay: number;
    };

export type ITravel = {
  id: string;
  destination: IDestination;
  isPromotion?: boolean;
  imageSrc: string;
  packagePrice?: number;
  pricePerDay?: number;
} & TravelPriceType;

export const FakeTravels: ITravel[] = [
  {
    id: '1',
    destination: {
      country: 'Argentina',
      location: 'Buenos Aires',
    },
    isPromotion: true,
    type: 'package',
    packagePrice: 1000,
    imageSrc: 'https://via.placeholder.com/300x200',
  },
  {
    id: '2',
    destination: {
      country: 'Argentina',
      location: 'Buenos Aires',
    },
    type: 'package',
    packagePrice: 1000,
    imageSrc: 'https://via.placeholder.com/300x200',
  },
  {
    id: '3',
    destination: {
      country: 'Brazil',
      location: 'Três Lagoas - MS',
    },
    type: 'day',
    pricePerDay: 232,
    imageSrc: 'https://via.placeholder.com/300x200',
  },
  {
    id: '4',
    destination: {
      country: 'Brazil',
      location: 'Uma Lagoa - SP',
    },
    isPromotion: true,
    type: 'day',
    pricePerDay: 232,
    imageSrc: 'https://via.placeholder.com/300x200',
  },
];
