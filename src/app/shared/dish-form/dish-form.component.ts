import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Dish} from '../model/dish';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss']
})
export class DishFormComponent implements OnDestroy {

  @Input() dishes;
  @Output() selectedDishChange = new EventEmitter<Dish>();

  dishControl = new FormControl();

  private destroy = new Subject<void>();

  constructor() {
    this.dishControl.valueChanges.pipe(
      takeUntil(this.destroy)
    ).subscribe(this.selectedDishChange);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
