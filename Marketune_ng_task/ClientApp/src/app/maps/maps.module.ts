import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsContainerComponent } from './maps-container/maps-container.component';

import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [MapsContainerComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gmapsKey
    }),
    MatCardModule
  ]
})
export class MapsModule { }
