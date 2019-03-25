import { vehicle } from '../_models/vehicle.model';
import { VehicleType } from '../_enums/vehicles-type.enum';
import { VehicleStatus } from '../_enums/vehicle-status.enum';
export const mockVehicles: vehicle[] = [
    {
        id: 10,
        label: 'Vehicle #10',
        coords: {
            accuracy: 10,
            altitude: 10,
            altitudeAccuracy: 10,
            heading: 10,
            latitude: 50,
            longitude: 10,
            speed: 10,
        },
        address: "10",
        speedUnit: "KM/H",
        type: VehicleType.Coupe,
        status:VehicleStatus.Running
    },
    {
        id: 11,
        label: 'Vehicle #11',
        coords: {
            accuracy: 11,
            altitude: 11,
            altitudeAccuracy: 11,
            heading: 11,
            latitude: 11,
            longitude: 11,
            speed: 11,
        },
        address: "11",
        speedUnit: "KM/H",
        type: VehicleType.Truck,
        status:VehicleStatus.runningOverSpeed
    }
]