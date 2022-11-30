import { LocationWithoutTravels } from 'interfaces';

export interface ILocationCardProps {
  location: LocationWithoutTravels;
  onEdit: (location: LocationWithoutTravels) => void;
}
