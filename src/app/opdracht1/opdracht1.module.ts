import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Opdracht1Component} from './opdracht1.component';
import {Opdracht1RoutingModule} from './opdracht1-routing.module';
import {FirstScreenComponent} from './first-screen/first-screen.component';
import {SecondScreenComponent} from './second-screen/second-screen.component';
import {HeaderBarComponent} from './header-bar/header-bar.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    Opdracht1Component,
    FirstScreenComponent,
    SecondScreenComponent,
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    Opdracht1RoutingModule,
    ReactiveFormsModule
  ]
})
export class Opdracht1Module {
}
