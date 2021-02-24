import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Dish} from '../model/dish';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class WizardService {

  private mainDish = new BehaviorSubject<Dish | undefined>(undefined);
  private dessert = new BehaviorSubject<Dish | undefined>(undefined);

  getMainDish(): Observable<Dish | undefined> {
    return this.mainDish.asObservable();
  }

  getDessert(): Observable<Dish | undefined> {
    return this.dessert.asObservable();
  }

  setMainDish(dish: Dish): void {
    this.mainDish.next(dish);
  }

  setDessert(dish: Dish): void {
    this.dessert.next(dish);
  }

  getTotalPrice(): Observable<number> {
    return combineLatest([this.mainDish, this.dessert]).pipe(
      map(([mainDish, dessert]) =>
        (mainDish?.price || 0) + (dessert?.price || 0))
    );
  }

}
