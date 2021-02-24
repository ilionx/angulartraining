import {Injectable} from '@angular/core';
import {Dish} from '../model/dish';
import {Observable, ReplaySubject} from 'rxjs';
import {DishService} from './dish.service';

@Injectable({providedIn: 'root'})
export class CachedDishService {

  private cachedDishes = new ReplaySubject<Dish[]>(1);

  constructor(private dishService: DishService) {
  }

  getDishes(): Observable<Dish[]> {
    this.dishService.getDishes().subscribe(this.cachedDishes);
    return this.cachedDishes.asObservable();
  }

}
