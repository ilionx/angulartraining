import {Component} from '@angular/core';
import {Dish} from './shared/model/dish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  selectedMainDish: Dish;

  onSelectedDishChange(dish: Dish): void {
    this.selectedMainDish = dish;
  }
}
