import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'opdracht1', loadChildren: () => import('./opdracht1/opdracht1.module').then(m => m.Opdracht1Module)},
  {path: '**', redirectTo: 'opdracht1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
