import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VehiclesService } from '../_services/vehicles.service';
import { vehicle } from '../_models/vehicle.model';
import { MatDialog } from '@angular/material';
import { EditVehicleDialogComponent } from '../vehicle/edit-vehicle-dialog/edit-vehicle-dialog.component';
import { VehicleType } from '../_enums/vehicles-type.enum';

@Component({
  selector: 'mtun-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  vehiclesList: vehicle[];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private vehiclesService: VehiclesService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.vehiclesService.getAllVehicle().subscribe((vehicles: vehicle[]) => {

      vehicles.forEach(vehicle => {
        vehicle.styleClasses += this.vehiclesService.getVehicleIcon(vehicle.type);
        vehicle.styleClasses += this.vehiclesService.getVehiclestatusColor(vehicle.status);
      });
      this.vehiclesList = vehicles
    })
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  setSelectedVehicle(vehicle: vehicle) {
    this.vehiclesService.changeSelectedVehicle(vehicle)
  }

  openEditIconDialog(vehicle) {
    console.log('openEditIconDialog');

    const dialogRef = this.dialog.open(EditVehicleDialogComponent, {
      width: '90vw',
      data: { vehicle: vehicle }
    });

    dialogRef.afterClosed().subscribe(result => {
      let selectedVehicle = this.vehiclesList.find(x => x.id === result.vehicle.id)
      selectedVehicle.type = result.selectedVehicleType;
      selectedVehicle.styleClasses = this.vehiclesService.getVehicleIcon(vehicle.type);
      selectedVehicle.styleClasses += this.vehiclesService.getVehiclestatusColor(vehicle.status);


    });
  }

  handleEditVehicle(vehicle) {
    console.log('Called handleEditVehicle => ', vehicle);
    /*
    *Call handleEditVehicle from vehicle service
    */
  }
  handleTrackVehicle(vehicle) {
    console.log('Called handleTrackVehicle => ', vehicle);
    /*
    *Call handleTrackVehicle from vehicle service
    */
  }
  handleEnableDisableVehicle(vehicle) {
    console.log('Called handleEnableDisableVehicle => ', vehicle);
    /*
    *Call handleEnableDisableVehicle from vehicle service
    */
  }
  handleShareVehicle(vehicle) {
    console.log('Called handleShareVehicle => ', vehicle);
    /*
    *Call handleShareVehicle from vehicle service
    */
  }
}
