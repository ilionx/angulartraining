import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DishFormComponent} from './dish-form/dish-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DishFormComponent
  ],
  exports: [
    DishFormComponent
  ]
})
export class SharedModule {
}
