import {HttpResponse} from '@angular/common/http';
import {HttpClientMock} from './mocks/http-mock';

describe('Onderwerp 1 - Eenvoudige RxJS Operators', () => {

  const okResponse = {status: 200, body: 'the text in the body'} as HttpResponse<any>;
  const errorResponse = {status: 404} as HttpResponse<any>;

  let httpClientMock = new HttpClientMock();

  it('Opdracht 1 - map operator', (done) => {

    // We hebben een httpClientMock gemaakt met een methode observeResponse(). observeResponse() geeft een Observable terug, waar je
    // operators op kunt toepassen, net als op het echte resultaat uit een echte http client.
    // Pas er een de map-operator op toe, zodat je een Observable krijgt die alleen de body van het HttpResponse-object terugkrijgt.

    // ... Typ hier je code ...
    // hint: const solution = httpClientMock.observeResponse().pipe( ... );
    const solution = null;

    // Test:
    solution.subscribe(value => {
      expect(value).toBe('the text in the body');
      done();
    });
    httpClientMock.sendResponse(okResponse);
  });

  it('Opdracht 2 - pluck operator', (done) => {

    // Kun je met de pluck operator hetzelfde als je hierboven deed met de map operator?

    // ... Typ hier je code ...
    const solution = null;

    // Test:
    solution.subscribe(value => {
      expect(value).toBe('the text in the body');
      done();
    });
    httpClientMock.sendResponse(okResponse);
  });

  it('Opdracht 3 - tap operator', (done) => {

    // Met de tap-operator kun je side effects veroorzaken. De code binnen de tap-operator wordt wel uitgevoerd, maar verandert niets aan
    // de Observable zelf. Breid het voorgaande voorbeeld uit: gebruik de tap operator om iets in de console.log te zetten zodra je een
    // http-response binnenkrijgt. Combineer dat met de map-operator of pluck-operator die je in de vorige opdracht al hebt toegepast.

    // ... Typ hier je code ...
    const solution = null;

    // Test:
    expect(console.log).not.toHaveBeenCalled();
    solution.subscribe(() => {
      expect(console.log).toHaveBeenCalled();
      done();
    });
    httpClientMock.sendResponse(okResponse);
  });

  it('Opdracht 4 - filter operator', (done) => {

    // Hoe zorg je er - met behulp van de filter operator - voor dat alleen een http-response met status 200 terugkomt? En een
    // error response met status 404 dus niet?

    // ... Typ hier je code ...
    const solution = null;

    // Test
    solution.subscribe(
      // NB: subscribe krijgt drie argumenten. Het eerste is een callback voor een succesvolle emit. Dit zou niet aangeroepen moeten worden.
      () => fail('solution should not emit a value'),
      // De tweede is een callback voor een succesvolle complete. Die zou ook niet aangeroepen moeten worden.
      () => fail('solution should not emit an error'),
      // De derde is een callback voor wanneer de Observable in een foutsituatie eindigt. Als deze is aangeroepen slaagt de test.
      () => done());
    httpClientMock.sendResponse(errorResponse);
  });

  it('Opdracht 5 - een fout gooien', () => {

    // Het inslikken van fouten is misschien niet zo'n goed idee. Kun je ervoor zorgen dat een http status ongelijk aan 200 wordt
    // doorgegeven als een (throw) new Error(), maar van een bericht met een correcte http status de body wordt doorgegeven?

    // ... Typ hier je code ...
    const solution = null;

    // Test
    let result = null;
    let error = null;
    solution.subscribe(
      res => result = res,
      err => error = err
    );
    // We spelen hier een beetje vals en laten hier de http client twee keer een response terugsturen. Dat kan met een echte http request
    // natuurlijk niet, maar is wel handig om zowel een okResponse als een errorResponse in één keer te testen.
    httpClientMock.sendResponseWithoutCompleting(okResponse);
    expect(result).toEqual('the text in the body');
    expect(error).toBeFalsy();
    httpClientMock.sendResponseWithoutCompleting(errorResponse);
    expect(error).toBeTruthy();
    httpClientMock.complete();
  });

  it('Opdracht 6 - een fout afvangen (1)', () => {

    // Stel dat je naar een Observable luistert die een Error gooit. Er zijn twee manieren om die fout af te vangen. De eerste is via de
    // subscribe-methode. Pas deze methode toe om een console.error aan te roepen. Subscribe hieronder op de observeResponse() van de
    // httpClientMock.

    // ... Typ hier je code ...


    // Test
    httpClientMock.sendError(new Error('an error occurred'));
    expect(console.error).toHaveBeenCalled();
  });

  it('Opdracht 7 - een fout afvangen (2)', () => {

    // De tweede manier om fouten af te vangen, is door middel van de catchError operator. In onderstaande voorbeeld ga je de map-operator
    // toepassen, om de body van httpResponse terug te geven. Maar als er een fout optreedt, vang je de fout af, en geeft je in plaats
    // daarvan als body de tekst 'FOUT' terug. Gebruik daarvoor de throwError-operator, in combinatie met de of-operator. Je hoeft alleen
    // een Observable aan solution toe te kennen. Het subscriben doen wij weer.

    // ... Typ hier je code ...
    const solution = null;

    // Test
    let result = null;
    // Ook hier spelen we een beetje vals, door de mock van de http client twee keer een respons te laten terugsturen.
    solution.subscribe(res => result = res);
    httpClientMock.sendResponseWithoutCompleting(okResponse);
    expect(result).toBe('the text in the body');
    httpClientMock.sendError(new Error());
    expect(result).toBe('FOUT');
  });

  it('Opdracht 8 - extra opdracht, takeUntil', () => {

    // Met take(n) kun je ervoor zorgen dat een Observable na een bepaald aantal emissions vanzelf complete. Je hoeft dan niet meer te
    // unsubscriben. Er is ook een obs1.takeUntil(obs2) operator, die obs1 automatisch laat completen, zodra obs2 een waarde emit.
    // Schrijf een Angular-component die luistert naar een Observable die niet uit zichzelf complete (bijvoorbeeld een
    // formControl.valueChanges). Maak een Observable met de naam "destroy" die in de ngOnDestroy() een waarde emit. Zorg er met behulp
    // van takeUntil voor dat je automatisch stopt met luisteren naar formControl.valueChanges, zonder unsubscribe te gebruiken.

    // NB: deze opdracht maak je dus in een afzonderlijke component en niet binnen deze test zelf. Deze test hoef je niet te laten slagen.

  });

  beforeEach(() => {
    // Test setup (kun je negeren):
    httpClientMock = new HttpClientMock();
    jest.spyOn(global.console, 'log');
    jest.spyOn(global.console, 'error');
  });
});
