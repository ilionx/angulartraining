import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DessertComponent} from './dessert.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '**', component: DessertComponent}
];

@NgModule({
  declarations: [DessertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DessertModule {
}
