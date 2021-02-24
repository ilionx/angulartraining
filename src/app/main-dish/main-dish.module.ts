import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainDishComponent} from './main-dish.component';
import {DishFormComponent} from './dish-form/dish-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MainDishComponent, DishFormComponent],
  exports: [
    MainDishComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MainDishModule {
}
