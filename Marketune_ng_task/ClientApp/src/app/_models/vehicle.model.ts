import { VehicleType } from '../_enums/vehicles-type.enum';
import { VehicleStatus } from '../_enums/vehicle-status.enum';

export interface vehicle {
  id: number;
  label: string;
  coords: {
    accuracy?: number;
    altitude?: number;
    altitudeAccuracy?: number;
    heading?: number;
    latitude?: number;
    longitude?: number;
    speed?: number;
    satalite?: number | 0;
  };
  address?: string;
  speedUnit: "KM/H" | "MPH";
  type: VehicleType;
  styleClasses?: string;
  status: VehicleStatus;
}
