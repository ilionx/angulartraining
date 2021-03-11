import {Component, OnDestroy} from '@angular/core';
import {Dish} from '../shared/model/dish';
import {Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {WizardService} from '../shared/service/wizard.service';
import {CachedDishService} from '../shared/service/cached-dish.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-main-dish',
  templateUrl: './main-dish.component.html'
})
export class MainDishComponent implements OnDestroy {

  dishes: Observable<Dish[]>;
  selectedMainDish: Observable<Dish | undefined>;
  mainDishControl = new FormControl();

  private destroy = new Subject<void>();

  constructor(dishService: CachedDishService, private wizardService: WizardService) {
    this.dishes = dishService.getDishes().pipe(
      map(dishes => dishes.filter(dish => dish.type === 'main'))
    );
    this.mainDishControl.valueChanges.pipe(
      takeUntil(this.destroy)
    ).subscribe(dish => this.onSelectedDishChange(dish));
    this.selectedMainDish = this.wizardService.getMainDish();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  onSelectedDishChange(dish: Dish): void {
    this.wizardService.setMainDish(dish);
  }
}
