import { Location } from 'graphql/generated';

export type LocationWithoutTravels = Omit<Location, 'travels'>;
