import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Dish} from '../model/dish';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Observable<Dish[]> {
    // Onderstaande code bootst een HTML-call na. Deze code pas je verder niet aan.
    return of([
      {name: 'Broodje poep', price: 2.25, type: 'main'},
      {name: 'Broodje albatros', price: 2.75, type: 'main'},
      {name: 'Broodje aap', price: 3.25, type: 'main'},
      {name: 'Dronken garnaal', price: 1.75, type: 'main'},
      {name: 'Gebakken cavia', price: 4.25, type: 'main'},
      {name: 'Sticky toffee pudding', price: 5.50, type: 'dessert'},
      {name: 'Eton mess', price: 6.25, type: 'dessert'},
      {name: 'Tennistaart', price: 5.00, type: 'dessert'},
      {name: 'Vlaflip', price: 1.50, type: 'dessert'},
    ]).pipe(
      delay(800)
    ) as Observable<Dish[]>;
  }
}
