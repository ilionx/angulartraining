import {ReplaySubject, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

describe('Onderwerp 2 - Subject', () => {

  it('Opdracht 1 - subject', () => {
    let evenNumbers = [];
    const numbersToCheck: Subject<number> = new Subject<number>();

    const even = numbersToCheck.pipe(
      filter(numberToCheck => numberToCheck % 2 === 0)
    );

    numbersToCheck.next(1);
    numbersToCheck.next(2);
    numbersToCheck.next(3);
    numbersToCheck.next(4);
    numbersToCheck.next(5);
    numbersToCheck.complete();

    even.subscribe(evenNumber => evenNumbers = [...evenNumbers, evenNumber]);

    // TEST: Waarom faalt deze test? Laat de test staan en zorg er voor dat de code een werkende test oplevert.
    expect(evenNumbers).toEqual([2, 4]);
  });

  it('Opdracht 2 - ReplaySubject', done => {

    const fibonacci: ReplaySubject<number> = new ReplaySubject<number>();

    [1, 1, 2, 3, 5, 8, 13, 21, 34].forEach(nextInRange => fibonacci.next(nextInRange));
    fibonacci.complete();

    const solution = fibonacci.asObservable();

    solution.subscribe(latestFibonacci => {
      // TEST: Waarom faalt deze test? Laat de test staan en zorg er voor dat de code een werkende test oplevert.
      // Tip: er zijn in ieder geval twee mogelijke oplossingen:
      //      https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject
      //      https://rxjs-dev.firebaseapp.com/api/operators/last
      expect(latestFibonacci).toBe(34);
      done();
    });
  });
});
