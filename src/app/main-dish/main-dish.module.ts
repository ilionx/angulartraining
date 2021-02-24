import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainDishComponent} from './main-dish.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {path: '**', component: MainDishComponent}
];

@NgModule({
  declarations: [MainDishComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MainDishModule {
}
