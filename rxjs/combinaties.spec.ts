import {Subject} from 'rxjs';
import {TransportationService} from './mocks/transportation-service';

describe('Onderwerp 4 - Combinaties van streams', () => {

  const transportationService = new TransportationService();
  const databaseRunning = new Subject<boolean>();
  const backendRunning = new Subject<boolean>();
  const frontendRunning = new Subject<boolean>();
  const completeApplicationRunning = new Subject();

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

    // We hebben drie observables databaseRunning, backendRunning en frontendRunning die de status van een applicatie monitoren.
    // We zijn geinteresseerd of de gehele applicatie (dus alle drie de onderdelen) draaien.
    // Zorg ervoor dat elke wijziging in één van de drie observables wordt opgevangen en de status van de gehele applicatie
    // wordt opgeslagen.
    // ...subscribe(value => completeApplicationRunning.next(value))

    // extra vraag: hoe kun je ervoor zorgen dat alleen een waarde ge-emit wordt als de nieuwe waarde verschilt van de vorige?

    // TEST:
    let valuesReceived = [];
    completeApplicationRunning.subscribe(value => valuesReceived = [...valuesReceived, value]);

    databaseRunning.next(true);
    backendRunning.next(true);
    frontendRunning.next(true);
    databaseRunning.next(false);
    backendRunning.next(false);
    databaseRunning.next(true);
    backendRunning.next(true);
    expect(valuesReceived).toEqual([true, false, false, false, true]);
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
