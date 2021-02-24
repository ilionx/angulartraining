import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'main', loadChildren: () => import('./main-dish/main-dish.module').then(m => m.MainDishModule)},
  {path: 'dessert', loadChildren: () => import('./dessert/dessert.module').then(m => m.DessertModule)},
  {path: '**', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
