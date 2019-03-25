import { Injectable } from '@angular/core';
import { vehicle } from '../_models/vehicle.model';
import { of, Observable, Subject } from 'rxjs';
import { mockVehicles } from '../_mockData/vehicles';
import { VehicleType } from '../_enums/vehicles-type.enum';
import { VehicleStatus } from '../_enums/vehicle-status.enum';
// import 'rxjs/add/observable/of';
// import { observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  allVehicles: vehicle[] = mockVehicles;
  selectedVehicle: Subject<vehicle>
  constructor() {
    this.selectedVehicle = new Subject()
  }

  getAllVehicle(): Observable<Array<vehicle>> {
    /**
     * Handle http request to return array of vehicles
     * http.get('API_URL').pipe(map(vehicles)=>{
     *  handle the RAW data to be consumable by FE
     * })
     */
    return of(this.allVehicles);
  }

  getSelectedVehicle() {

  }

  getVehicleIcon(vehicleType: VehicleType) {
    switch (vehicleType) {
      case VehicleType.Hatchback:
        return " flaticon-car-of-hatchback-model "
      case VehicleType.Coupe:
        return " flaticon-coupe-car"
      case VehicleType.Sedan:
        return " flaticon-sedan-car-model "
      case VehicleType.Truck:
        return " flaticon-delivery-truck-front "
      case VehicleType.SUV:
        return " flaticon-car-suv "
      case VehicleType.Coupe:
        return " flaticon-cabrio-car "

      default:
        return " flaticon-car"
    }
  }

  getVehiclestatusColor(vehicleStatus: VehicleStatus) {
    switch (vehicleStatus) {
      case VehicleStatus.Running:
        return " text-Running "
      case VehicleStatus.idling:
        return " text-idlingr"
      case VehicleStatus.offline:
        return " text-offline "
      case VehicleStatus.Stopped:
        return " text-Stopped "
      case VehicleStatus.runningOverSpeed:
        return " text-runningOverSpeed "
      case VehicleStatus.runningOverStreetSpeed:
        return " text-runningOverStreetSpeed "

      default:
        return " flaticon-car"
    }
  }
  changeSelectedVehicle(vehicle: vehicle) {
    this.selectedVehicle.next(vehicle)
  }
}
