import {Component, OnDestroy} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnDestroy {

  deliveryForm: FormGroup;

  private destroy = new Subject<void>();

  constructor(fb: FormBuilder) {
    this.deliveryForm = fb.group({
      name: ['', Validators.required],
      zipCode: ['', Validators.pattern('[0-9]{4} *[A-Z]{2}')],
      number: ''
    }, {
      validators: form => this.validateFormValue(form.value)
    });
    this.deliveryForm.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this.destroy)
    ).subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  validateFormValue(value: any): ValidationErrors | null {
    if (value.zipCode.substring(2, 4) !== '00' && value.number === '') {
      return {requiredForZipcode: true};
    } else {
      return null;
    }
  }

  get name(): AbstractControl {
    return this.deliveryForm.get('name');
  }

  get zipCode(): AbstractControl {
    return this.deliveryForm.get('zipCode');
  }

  get number(): AbstractControl {
    return this.deliveryForm.get('number');
  }

  onSubmit(): void {
    console.log(this.deliveryForm.value);
  }
}
