import {Component} from '@angular/core';
import {Dish} from '../shared/model/dish';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WizardService} from '../shared/service/wizard.service';
import {CachedDishService} from '../shared/service/cached-dish.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
})
export class DessertComponent {

  desserts: Observable<Dish[]>;
  selectedMainDish: Observable<Dish | undefined>;
  selectedDessert: Observable<Dish | undefined>;
  totalPrice: Observable<number>;

  constructor(dishService: CachedDishService, private wizardService: WizardService) {
    this.desserts = dishService.getDishes().pipe(
      map(dishes => dishes.filter(dish => dish.type === 'dessert'))
    );
    this.selectedMainDish = this.wizardService.getMainDish();
    this.selectedDessert = this.wizardService.getDessert();
    this.totalPrice = this.wizardService.getTotalPrice();
  }

  onSelectedDishChange(dish: Dish): void {
    this.wizardService.setDessert(dish);
  }
}
