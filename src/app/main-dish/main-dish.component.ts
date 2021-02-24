import {Component, EventEmitter, Output} from '@angular/core';
import {DishService} from '../shared/service/dish.service';
import {Dish} from '../shared/model/dish';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-main-dish',
  templateUrl: './main-dish.component.html'
})
export class MainDishComponent {

  @Output() selectedDishChange = new EventEmitter<Dish>();

  dishes: Observable<Dish[]>;
  selectedMainDish: Dish;

  constructor(dishService: DishService) {
    this.dishes = dishService.getDishes().pipe(
      map(dishes => dishes.filter(dish => dish.type === 'main'))
    );
  }

  onSelectedDishChange(dish: Dish): void {
    this.selectedMainDish = dish;
    this.selectedDishChange.emit(dish);
  }
}
