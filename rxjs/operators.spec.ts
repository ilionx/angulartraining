import {HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs';

describe('RxJS Operators', () => {

  const httpResponse = new Subject<HttpResponse<any>>();
  const okResponse = {status: 200, body: 'the text in the body'} as HttpResponse<any>;
  const errorResponse = {status: 404} as HttpResponse<any>;

  it('map operator', (done) => {

    // httpResponse is een Observable die het gehele HttpResponse-object bevat.
    // Pas er een de map-operator op toe, zodat je een Observable krijgt die alleen de body van het HttpResponse-object terugkrijgt.

    // ... Typ hier je code ...
    const solution = null;

    // Test:
    solution.subscribe(value => {
      expect(value).toBe('the text in the body');
      done();
    });
    sendResponse(okResponse);
  });

  it('pluck operator', (done) => {

    // Kun je met de pluck operator hetzelfde als je hierboven deed met de map operator?

    // ... Typ hier je code ...
    const solution = null;

    // Test:
    solution.subscribe(value => {
      expect(value).toBe('the text in the body');
      done();
    });
    sendResponse(okResponse);
  });

  it('tap operator', (done) => {

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
    sendResponse(okResponse);
  });

  it('filter operator', (done) => {

    // Hoe zorg je er - met behulp van de filter operator - voor dat alleen een http-response met status 200 terugkomt? En een
    // error response met status 404 dus niet?

    // ... Typ hier je code ...
    const solution = null;

    // Test
    solution.subscribe(
      () => fail('solution should not emit a value'),
      () => fail('solution should not emit an error'),
      () => done());
    sendResponse(errorResponse);
  });

  it('een fout gooien', () => {

    // Het inslikken van fouten is misschien niet zo'n goed idee. Kun je ervoor zorgen dat een http status ongelijk aan 200 wordt
    // doorgegeven als een (throw) new Error(), maar van een bericht een correcte http status de body wordt doorgegeven?

    // ... Typ hier je code ...
    const solution = null;

    // Test
    let result = null;
    let error = null;
    solution.subscribe(
      res => result = res,
      err => error = err
    );
    httpResponse.next(okResponse);
    expect(result).toEqual('the text in the body');
    expect(error).toBeFalsy();
    httpResponse.next(errorResponse);
    expect(error).toBeTruthy();
    httpResponse.complete();
  });

  it('een fout afvangen (1)', () => {

    // Stel dat je naar een Observable luistert die een Error gooit. Er zijn twee manieren om die fout af te vangen. De eerste is via de
    // subscribe-methode. Pas deze methode toe om een console.error aan te roepen. Subscribe hieronder op de httpResponse.

    // ... Typ hier je code ...


    // Test
    httpResponse.error(new Error('an error occurred'));
    expect(console.error).toHaveBeenCalled();
    httpResponse.complete();
  });

  it('een fout afvangen (2)', () => {

    // De tweede manier om fouten af te vangen, is door middel van de catchError operator. In onderstaande voorbeeld ga je de map-operator
    // toepassen, om de body van httpResponse terug te geven. Maar als er een fout optreedt, vang je de fout af, en geeft je in plaats
    // daarvan als body de tekst 'FOUT' terug. Gebruik daarvoor de throwError-operator, in combinatie met de of-operator. Je hoeft alleen
    // een Observable aan solution toe te kennen. Het subscriben doen wij weer.

    // ... Typ hier je code ...
    const solution = null;

    // Test
    let result = null;
    solution.subscribe(res => result = res);
    httpResponse.next(okResponse);
    expect(result).toBe('the text in the body');
    httpResponse.error(new Error());
    expect(result).toBe('FOUT');
    httpResponse.complete();
  });

  beforeEach(() => {
    // Test setup (kun je negeren):
    jest.spyOn(global.console, 'log');
    jest.spyOn(global.console, 'error');
  });

  function sendResponse(response): void {
    httpResponse.next(response);
    httpResponse.complete();
  }
});
