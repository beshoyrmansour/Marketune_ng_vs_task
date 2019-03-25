import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsContainerComponent } from './maps-container/maps-container.component';

const routes: Routes = [
  { path: '', component: MapsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
