import {Observable, Subject} from 'rxjs';

describe('FlatMap', () => {

  const searchEvents = new Subject<string>();
  const refreshEvents = new Subject<void>();
  const searchRequestObservables: Subject<string>[] = [];
  const requests: string[] = [];
  let refreshCalls = 0;

  it('Opdracht 1 - mergeMap operator (1)', () => {

    // Stel je hebt een applicatie met een zoekveld. Iedere keer dat de gebruiker een nieuwe waarde in het zoekveld type, dan emit de
    // searchEvents-Observable de nieuwe zoekterm. Maak een Observable die bij iedere nieuwe zoekterm de functie 'searchRequest(zoekterm)'
    // aanroept. searchRequest(zoekterm) geeft op zijn beurt een Observable terug. Zorg ervoor dat de waarde van die tweede Observable
    // de uiteindelijke waarde is die jouw solution-Observable emit.

    // ... Typ hier je code ...
    // hint: const solution = searchEvents.pipe(...)
    const solution = null;

    // Test:
    let result = null;
    solution.subscribe(value => result = value);
    searchEvents.next('eerste');
    emitSearchRequest(0);
    expect(result).toBe('Resultaat voor eerste');
    searchEvents.next('tweede');
    emitSearchRequest(1);
    expect(result).toBe('Resultaat voor tweede');
  });

  it('Opdracht 2 - mergeMap operator (2)', () => {

    // De mergeMap-operator geeft zoekresultaten terug in de volgorde waarin ze toevallig binnenkomen. Http-verkeer is asynchroon. Als een
    // gebruiker twee zoekopdrachten kort na elkaar invoert, kan het dus gebeuren dat de zoekresultaten in omgekeerde volgorde binnenkomen.
    // Dat simuleren we in deze test. Zelfde opdracht als hiervoor, maar druk met behulp van de tap-operator de zoekresultaten af. Wat
    // zie je? Wat betekent dit voor de zoekresultaten die de gebruiker op het scherm ziet?

    // ... Typ hier je code ...
    const solution = null;

    // Test:
    let result = null;
    solution.subscribe(value => result = value);
    searchEvents.next('oudere zoekopdracht');
    searchEvents.next('nieuwere zoekopdracht');
    emitSearchRequest(1);
    emitSearchRequest(0);
    expect(result).toBe('Resultaat voor oudere zoekopdracht');
  });

  it('Opdracht 3 - switchMap operator', () => {

    // De switchMap-operator behoudt de volgorde van de zoekopdrachten. Zodra een nieuwe zoekopdracht wordt gedaan, wordt de oude meteen
    // geannuleerd, en wordt meteen "geswitcht" naar de nieuwe. Het resultaat van de oude zoekopdracht komt niet eens meer binnen. Probeer
    // hieronder de switchMap-operator. Bekijk door middel van een tap-operator en een console.log welke resultaten binnenkomen. Welke
    // operator heeft tot nu toe je voorkeur?

    // ... Typ hier je code ...
    const solution = null;

    // Test:
    let result = null;
    solution.subscribe(value => result = value);
    searchEvents.next('oudere zoekopdracht');
    searchEvents.next('nieuwere zoekopdracht');
    emitSearchRequest(1);
    emitSearchRequest(0);
    expect(result).toBe('Resultaat voor nieuwere zoekopdracht');
  });

  it('Opdracht 4 - exhaustMap operator', () => {

    // Stel dat we nu niet te maken hebben met een zoekveld, maar met een refresh-knop. Iedere keer dat de gebruiker op de refresh-knop
    // drukt, wordt de pagina ververst. Maar de gebruiker is erg ongeduldig, dus de gebruiker drukt al op refresh, terwijl het vorige
    // request nog niet binnen is. Wat kunnen we doen om zinloze http-calls te voorkomen, en geen nieuwe calls uit te voeren zolang de
    // lopende call nog niet binnen is? Daarmee negeren we dus refresh-indrukken van de gebruiker totdat we een eerste resultaat hebben.

    // Pas operators toe op de refreshEvents-operator om deze opdracht te maken. Geef het resultaat van de refresh()-methode
    // (een Observable) terug als waarde.

    // ... Typ hier je code ...
    // hint: solution = refreshEvents.pipe(...)
    const solution = null;

    // Test:
    let result = null;
    solution.subscribe(value => result = value);
    refreshEvents.next();
    refreshEvents.next();
    emitSearchRequest(0);
    expect(result).toBe('Resultaat voor refresh 1');
    expect(refreshCalls).toBe(1);
  });

  it('Opdracht 5 - extra opdracht', () => {

    // Als bij iedere toetsaanslag van de gebruiker een nieuwe zoekopdracht gedaan wordt, dan kost dat veel http-verkeer. Beter is het
    // om een seconde te wachten, totdat de gebruiker klaar is met typen. Zoek uit welke RxJS-operator je hiervoor kunt gebruiken, en
    // maak een invoerveld met zo'n vertraagde emit.

    // NB: deze opdracht maak je dus in een afzonderlijke component en niet binnen deze test zelf. Deze test hoef je niet te laten slagen.

  });

  function searchRequest(searchTerm: string): Observable<string> {
    console.log(`Versturen van request voor zoekterm ${searchTerm}`);
    requests.push(searchTerm);
    const subject = new Subject<string>();
    searchRequestObservables.push(subject);
    return subject;
  }

  function emitSearchRequest(index: number): void {
    const searchResult = requests[index];
    console.log(`Resultaat van ${searchResult} ontvangen`);
    searchRequestObservables[index].next(`Resultaat voor ${searchResult}`);
  }

  function refresh(): Observable<string> {
    refreshCalls++;
    return searchRequest(`refresh ${refreshCalls}`);
  }

});
