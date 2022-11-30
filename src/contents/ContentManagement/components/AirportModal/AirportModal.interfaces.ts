import { LocationWithoutTravels } from 'interfaces';

export interface IAirportModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  selectedAiport?: LocationWithoutTravels;
}
