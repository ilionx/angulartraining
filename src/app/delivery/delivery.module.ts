import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeliveryComponent} from './delivery.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '**', component: DeliveryComponent}
];

@NgModule({
  declarations: [DeliveryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DeliveryModule {
}
