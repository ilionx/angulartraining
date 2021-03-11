import {Component, EventEmitter, forwardRef, Input, OnDestroy, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Dish} from '../model/dish';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DishFormComponent),
    multi: true
  }]
})
export class DishFormComponent implements OnDestroy, ControlValueAccessor {

  @Input() dishes;
  @Output() selectedDishChange = new EventEmitter<Dish>();

  dishControl = new FormControl();

  private destroy = new Subject<void>();
  private onChange: any;
  private onTouched: any;

  constructor() {
    this.dishControl.valueChanges.pipe(
      takeUntil(this.destroy)
    ).subscribe(value => this.onSelectedDishChange(value));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  writeValue(obj: any): void {
    this.dishControl.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onSelectedDishChange(value: any): void {
    this.selectedDishChange.emit(value);
    if (this.onChange && this.onTouched) {
      this.onChange(value);
      this.onTouched();
    }
  }
}
