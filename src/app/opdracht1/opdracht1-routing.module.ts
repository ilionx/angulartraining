import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecondScreenComponent} from './second-screen/second-screen.component';
import {FirstScreenComponent} from './first-screen/first-screen.component';
import {Opdracht1Component} from './opdracht1.component';

const routes: Routes = [
  {
    path: '', component: Opdracht1Component, children: [
      {path: 'second-screen', component: SecondScreenComponent},
      {path: '**', component: FirstScreenComponent, pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Opdracht1RoutingModule {
}
