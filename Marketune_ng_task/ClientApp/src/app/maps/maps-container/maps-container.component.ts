import { Component, OnInit } from '@angular/core';
import { vehicle } from 'src/app/_models/vehicle.model';
import { VehiclesService } from 'src/app/_services/vehicles.service';
import { VehicleType } from 'src/app/_enums/vehicles-type.enum';
import { VehicleStatus } from 'src/app/_enums/vehicle-status.enum';

@Component({
  selector: 'mtun-maps-container',
  templateUrl: './maps-container.component.html',
  styleUrls: ['./maps-container.component.scss']
})
export class MapsContainerComponent implements OnInit {

  selectedVehicle: vehicle;
  vehiclesList: vehicle[]
  constructor(private vehiclesService: VehiclesService) { }
  ngOnInit(): void {
    this.selectedVehicle = {
      id: 0,
      label: ' ',
      coords: {
        accuracy: 0,
        altitude: 0,
        altitudeAccuracy: 0,
        heading: 0,
        latitude: 0,
        longitude: 0,
        speed: 0,
      },
      address: "",
      speedUnit: "KM/H",
      type: VehicleType.Convertible,
      status: VehicleStatus.offline
    }
    this.getUserLocation()
    this.vehiclesService.selectedVehicle.subscribe(vehicle => {
      this.selectedVehicle = vehicle;
    })

    this.vehiclesService.getAllVehicle().subscribe((vehicles) => {
      this.vehiclesList = vehicles
    })
  }
  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.selectedVehicle.coords.latitude = position.coords.latitude;
        this.selectedVehicle.coords.longitude = position.coords.longitude;
        this.selectedVehicle.coords.accuracy = position.coords.accuracy;
        this.selectedVehicle.coords.altitude = position.coords.altitude;
        this.selectedVehicle.coords.altitude = position.coords.altitude;
        this.selectedVehicle.coords.altitudeAccuracy = position.coords.altitudeAccuracy;
        this.selectedVehicle.coords.heading = position.coords.heading;
        this.selectedVehicle.coords.heading = position.coords.heading;
        this.selectedVehicle.coords.speed = position.coords.speed;
      })
    }
  }

}
