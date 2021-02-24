import {Component} from '@angular/core';
import {Dish} from '../shared/model/dish';
import {Observable} from 'rxjs';
import {DishService} from '../shared/service/dish.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
})
export class DessertComponent {

  desserts: Observable<Dish[]>;
  selectedMainDish: Dish;
  selectedDessert: Dish;
  totalPrice: number;

  constructor(dishService: DishService) {
    this.desserts = dishService.getDishes().pipe(
      map(dishes => dishes.filter(dish => dish.type === 'dessert'))
    );
  }

  onSelectedDishChange(dish: Dish): void {
    this.selectedDessert = dish;
  }
}
