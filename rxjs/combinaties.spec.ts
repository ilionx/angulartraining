import {forkJoin, Observable, ReplaySubject, Subject} from 'rxjs';
import {filter, pluck} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {HttpClientMock} from './mocks/http-mock';
import {TransportationService} from './mocks/transportation-service';

describe('Onderwerp 4 - Combinaties van streams', () => {

  const transportationService = new TransportationService();
  const formValueChange = new Subject<any>();
  const formValidityChange = new Subject<'valid' | 'invalid'>();
  const saveFormValue = new Subject();

  it('Opdracht 1 - forkJoin', done => {
    const departureTime = '08:55';

    // Combineer de eerstvolgende vertrekkende Trein, Bus en Metro. Gebruik hiervoor de "transportationService".
    const solution = null;

    // TEST:
    solution.subscribe(vervoersmethoden => {
      expect(vervoersmethoden).toEqual([
        {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '09:30', arrivalTime: '10:00'},
        {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '09:00', arrivalTime: '09:50'},
        {departureLocation: 'Amsterdam', arrivalLocation: 'Utrecht', departureTime: '09:10', arrivalTime: '09:45'}
      ]);
      done();
    });
  });

  it('Opdracht 2 - combineLatest', done => {

    // Zorg er voor dat elke valide form change wordt opgeslagen.
    // ...subscribe(value => saveFormValue.next(value))

    // TEST:
    let valuesReceived = [];
    saveFormValue.subscribe(value => valuesReceived = [...valuesReceived, value]);

    formValidityChange.next('valid');
    formValueChange.next(33);
    formValueChange.next(34);
    formValidityChange.next('invalid');
    formValueChange.next(35);
    formValidityChange.next('valid');
    formValueChange.next(36);

    expect(valuesReceived).toEqual([33, 34, 36]);
    done();
  });

  it('bonusopdracht en voorbeeld - forkJoin', () => {
    const departureTime = '08:55';
    let arrivalTime = null;

    // Zorg er voor dat de eerst mogelijke aankomsttijd wordt geselecteerd
    // Hint: forkJoin .... subscribe

    // TEST:
    expect(arrivalTime).toBe('09:45');
  });
});
