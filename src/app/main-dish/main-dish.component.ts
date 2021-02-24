import {Component} from '@angular/core';
import {Dish} from '../shared/model/dish';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {WizardService} from '../shared/service/wizard.service';
import {CachedDishService} from '../shared/service/cached-dish.service';

@Component({
  selector: 'app-main-dish',
  templateUrl: './main-dish.component.html'
})
export class MainDishComponent {

  dishes: Observable<Dish[]>;
  selectedMainDish: Observable<Dish | undefined>;

  constructor(dishService: CachedDishService, private wizardService: WizardService) {
    this.dishes = dishService.getDishes().pipe(
      map(dishes => dishes.filter(dish => dish.type === 'main'))
    );
    this.selectedMainDish = this.wizardService.getMainDish();
  }

  onSelectedDishChange(dish: Dish): void {
    this.wizardService.setMainDish(dish);
  }
}
