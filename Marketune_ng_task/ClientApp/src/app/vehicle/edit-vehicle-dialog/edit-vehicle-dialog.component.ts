import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { vehicle } from 'src/app/_models/vehicle.model';
import { VehicleType } from 'src/app/_enums/vehicles-type.enum';
import { VehiclesService } from 'src/app/_services/vehicles.service';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'mtun-edit-vehicle-dialog',
  templateUrl: './edit-vehicle-dialog.component.html',
  styleUrls: ['./edit-vehicle-dialog.component.scss']
})
export class EditVehicleDialogComponent implements OnInit {
  // selectedVehicleType: VehicleType
  vehicleType: Array<string>
  constructor(
    public dialogRef: MatDialogRef<EditVehicleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : { selectedVehicleType: VehicleType, vehicle: vehicle },
    private vehiclesService: VehiclesService) { }
  // IconFormControl = new FormControl('')
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.vehicleType = new Array<string>()
    for (let vtype in VehicleType) {
      if (isNaN(Number(vtype))) {
        this.vehicleType.push(vtype)
      }

    }
  }

  getVehicleIcon(vtype: string) {
    return this.vehiclesService.getVehicleIcon(VehicleType[vtype])
  }

  // changeSelectedVehicleType() {
  //   this.data.selectedVehicleType = this.IconFormControl
  // }

}
